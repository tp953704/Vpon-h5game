
// 背景初始化與更新
import {bgUpdate} from './background'


// 遊戲會一直持續渲染
export function gameLoop(bg_width,bg_height,gameBgCanvas){
    // 遊戲時間軸
    let currentTimer = 0;
    //紀錄上一次繪製的時間
    let lastTime = Date.now(); 
    //requestAnimationFrame 執行完成的時間 = 當前時間 - 上一次繪製的世界
    let deltaTime = 0;  
    return function Looping(){
        const now = Date.now()
        // 時間紀錄
        deltaTime = now - lastTime;
        lastTime = now;
        currentTimer+=1;

        // 背景渲染更新
        bgUpdate(bg_width,bg_height,gameBgCanvas,currentTimer)
        // 持續更新觸發
        requestAnimationFrame(Looping)
    }
    
}