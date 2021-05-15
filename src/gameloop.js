
// 遊戲資訊初始化
// import {init} from './init';
import {gameCanvas,ui_width,ui_heigth,gameBgCanvas,bg_width,bg_height} from './init'
// 背景初始化與更新
import {bgUpdate} from './background'
// 玩家
import {updatePlayer,MoveUp,MoveDown,PlayerJump} from './player'
// 障礙物繪製
import {drawObstacleToMap} from './obstacle/gameMaps';
// 遊戲分數紀錄 =>及時記分板方法
import {gameBoardLoop,gameTeach} from './gameBoard'

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



// // 在遊戲過程中，dom的監聽
// const TopBtn = document.querySelector("#topBtn")
// const BottomBtn = document.querySelector("#bottomBtn")
// const keepBtn = document.querySelector("#startLoop")
// TopBtn.addEventListener("click",()=>{
//     if(isLooping){
//         MoveUp()
//     }
// },false)
// BottomBtn.addEventListener("click",()=>{
//     if(isLooping){
//         MoveDown()
//     }
// },false)
// keepBtn.addEventListener('click',()=>{
    
//     startLoop()
// })