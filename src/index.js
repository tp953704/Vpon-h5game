// 倒出靜態資源檔
import './assets/scss/app.scss'


// 遊戲資訊初始化
import {init} from './init';
// 背景初始化
import {bgInit} from './background'
// 背景初始化與更新
import {bgUpdate} from './background'
import {gameLoop} from './gameloop'
import {createPlayer} from './player'

// 初始化
window.onload = () => {
 
    // 初始化並倒出 初始值
    const { gameDom,gameCanvas,ui_width,ui_heigth,gameBgDom,gameBgCanvas,bg_width,bg_height} = init(
        (gameDom,gameCanvas,ui_width,ui_heigth,gameBgDom,gameBgCanvas,bg_width,bg_height)=>{
            // 背景渲染
            bgInit(bg_width,bg_height,gameBgCanvas)
        }
    )
    
    // 創建玩家並取得更新方法
    let [updatePlayerFn,MoveUp,MoveDown] = createPlayer(gameCanvas,ui_width,ui_heigth)
    // 遊戲每一Frame更新一次畫面
    const [Looping,pause,startLoop] = gameLoop(
        (currentTimer)=>{
            // 背景渲染更新
            bgUpdate(bg_width,bg_height,gameBgCanvas,currentTimer)
            updatePlayerFn(currentTimer)
        }
    );
    
    // 循環觸發
    Looping()



    // dom的監聽
    const TopBtn = document.querySelector("#topBtn")
    const BottomBtn = document.querySelector("#bottomBtn")
    TopBtn.addEventListener("click",()=>{
        MoveUp()
    },false)
    BottomBtn.addEventListener("click",()=>{
        MoveDown()
    },false)
}


