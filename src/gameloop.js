
// 遊戲資訊初始化
// import {init} from './init';
import {gameCanvas,ui_width,ui_heigth,gameBgCanvas,bg_width,bg_height} from './init'
// 背景初始化與更新
import {bgUpdate} from './background'
// 玩家
import {updatePlayer,MoveDown,MoveUp} from './player'
// 障礙物繪製
import {drawObstacleToMap} from './obstacle/gameMaps';
// 遊戲分數紀錄 =>及時記分板方法
import {gameBoardLoop,gameTeach} from './gameBoard'
// DOM window相關工具
import {isMobileDevice} from './until'

//  遊戲時間軸
let currentTimer = 0; 

//是否暫停
let isLooping = true;

// 暫停幾秒
let pauseTimer = 0;


// 暫停時間
let pauseTimeFn = ()=>{}

// 無限迴圈
export function Looping(){
    // 是否全體元素正常運作
    if(isLooping){
        // 清空畫布
        gameCanvas.clearRect(0,0,ui_width,ui_heigth)
        // 遊戲進程加一
        currentTimer+=1;
        // 背景渲染更新
        bgUpdate(bg_width,bg_height,gameBgCanvas,currentTimer)
        
        // 更新玩家資訊
        updatePlayer(currentTimer)
        // 新圖畫在舊圖下
        gameCanvas.globalCompositeOperation = "destination-over"
          // 渲染 障礙物
        drawObstacleToMap(currentTimer)
        // 及時記分板渲染
        gameBoardLoop()
    }else{
        // 暫停秒數更新
        pauseTimer++;
        pauseTimeFn(pauseTimer)
    }
    // 新手教學
    if(currentTimer<150){
        gameTeach()
    }
    // 持續更新觸發
    requestAnimationFrame(Looping)
}
// 暫停遊戲，參數為 暫停時要做的事和暫停總時間
export function pause(pauseFn){
    isLooping = false;
    pauseTimeFn = pauseFn
}
// 繼續遊戲
export function startLoop(){
    // 暫停秒數初始化
    pauseTimer=0;
    pauseTimeFn=()=>{}
    isLooping = true
}

gameAction()

// 滑動監聽
function gameAction(){
    // 整個遊戲的DOM監聽
    const gameDom = document.querySelector(".js-game-touch")
    // 目前遊戲的width
    const width = document.documentElement.clientWidth;
    // 目前遊戲的height
    const height = document.documentElement.clientHeight;
    
    //如果是手機板 觸控紀錄 
    let touchStartX = 0;
    let touchStartY = 0;
    // 如果當前裝置是手機
    if(isMobileDevice()){
        // touchStart 手按下
        gameDom.addEventListener("touchstart",(e)=>{
            touchStartX = e.touches[0].clientX
            touchStartY = e.touches[0].clientY
        })
        // touchStart 手放開
        gameDom.addEventListener("touchend",(e)=>{
            // 放開的XY座標
            var moveEndX = e.changedTouches[0].clientX 
            var moveEndY = e.changedTouches[0].clientY
            // 放開的XY座標與按下的座標差
            var X = moveEndX - touchStartX
            var Y = moveEndY - touchStartY
            // 判斷玩家是向上還是向下值
            let testVal;
            // width 和 height的差距，如果寬度大 testVal 看的是Y座標
            if(width>=height){
                testVal = Y
            }else{
                testVal = X
            }
            if(testVal>0 && Math.abs(testVal)>10){
                MoveUp()
            }else if(Math.abs(testVal)>10){
                MoveDown()
            }
        })
    }else{
        document.onkeydown = function(e){
            console.log(e.whitch)
        }
    }
    
}


