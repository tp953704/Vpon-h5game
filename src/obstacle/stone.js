// 遊戲資訊初始化
import {gameCanvas,ui_width,ui_heigth} from '../init'
import {obstacleSpeed} from './gameMaps'
const stoneImgUrl = require("../assets/images/stone.png")

const stoneImgElement = new Image(600);
stoneImgElement.src=stoneImgUrl
// 圖片要成功讀取後才能渲染
stoneImgElement.decode().then(()=>{
    
})


export function drawStone(x,y,currentTimer){
    // 樹的寬
    const stoneWidth = ui_width/17;
    // 樹的高
    const stoneHeight = ui_heigth/4;

    // 圖片X軸間隔
    // 圖片Y軸間隔
    const stonePosXUnit = ui_width/17;  
    const stonePosYUnit = ui_heigth/6-5;
    if(stoneImgElement.complete){
        // 遇到一個問題，原本是這樣
        // gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
        // 但是渲染出來的結果是背景一格一格走，所以 stonePosXUnit*x 改成 stonePosXUnit*(x-1)-stonePosXUnit*(a*obstacleSpeed)
         // 原本每30Frame才會換一次位置 ，改動每次慢慢換
        const changeEveryFrame = currentTimer%(1/obstacleSpeed)+1
        gameCanvas.drawImage(stoneImgElement,(stonePosXUnit)*(x-changeEveryFrame/30),stonePosYUnit*y,stoneWidth,stoneHeight)
        
    }
}