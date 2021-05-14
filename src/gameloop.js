
// 遊戲資訊初始化
// import {init} from './init';
import {gameCanvas,ui_width,ui_heigth,gameBgCanvas,bg_width,bg_height} from './init'
// 背景初始化與更新
import {bgUpdate} from './background'
import {updatePlayer} from './player'

import {drawObstacleToMap,obstacleSpeed} from './obstacle/gameMaps';

//  遊戲時間軸
let currentTimer = 0; 

//是否暫停
let isLooping = true;

// 無限迴圈
export function Looping(){
    if(isLooping){
        // 遊戲進程加一
        currentTimer+=2;
        // 清空畫布
        gameCanvas.clearRect(0,0,ui_width,ui_heigth)
        // 背景渲染更新
        bgUpdate(bg_width,bg_height,gameBgCanvas,currentTimer)
      
        // 更新玩家資訊
        updatePlayer(currentTimer)
          // 渲染 障礙物
        // 希望障礙物慢10倍
        drawObstacleToMap(Math.floor(currentTimer*obstacleSpeed))
    }
    // 持續更新觸發
    // requestAnimationFrame(Looping)
}
// 暫停遊戲
export function pause(){
    isLooping = false;
}
// 繼續遊戲
export function startLoop(){
    isLooping = true
}