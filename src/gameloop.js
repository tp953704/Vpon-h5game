
// 遊戲資訊初始化
import {gameCanvas,ui_width,ui_heigth,gameBgCanvas,bg_width,bg_height} from './init'
// 背景初始化與更新
import {bgUpdate} from './background'
// 玩家
import {updatePlayer,PlayerFinal} from './player'
// 障礙物繪製、障礙物地圖 、障礙物速度
import {drawObstacleToMap,obstacleArray,obstacleSpeed} from './obstacle/gameMaps';
// 遊戲分數紀錄 =>及時記分板方法
import {gameBoardLoop,gameTeach} from './gameBoard'
// DOM window相關工具
import {gameAction} from './until'

//  遊戲時間軸
let currentTimer = 0; 

//是否暫停
let isLooping = true;

// 暫停幾秒
let pauseTimer = 0;


// 暫停時間
let pauseTimeFn = ()=>{}

// 障礙物地圖總長
let obstacleLength = obstacleArray.length
// 無限迴圈
export function Looping(){
    // 是否全體元素正常運作
    if(isLooping){
        // 清空畫布
        gameCanvas.clearRect(0,0,ui_width,ui_heigth)
        // 遊戲進程加一
        currentTimer+=2;
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
    // 新手教學，在 150Frame前
    if(currentTimer<150){
        gameTeach()
    }

    // 當currentTimer > obstacleLength/obstacleSpeed 代表 地圖跑完了
    if(currentTimer>obstacleLength/obstacleSpeed){
        // 玩家最後動作
        pause(PlayerFinal)
        // restart()
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
// 遊戲重新開始
export function restart(){
    currentTimer = 0;
    startLoop()
}

export function isGameLoop(){
    return isLooping;
}


// 玩家遊戲中移動事件監聽綁定
gameAction()


