// 遊戲資訊初始化
import {gameCanvas,ui_width,ui_heigth} from '../init'

const treeImgUrl = require("../assets/images/tree.png")

const treeImgElement = new Image(600);
treeImgElement.src=treeImgUrl
// 圖片要成功讀取後才能渲染
treeImgElement.decode()
.then(() => {
    // gameCanvas.drawImage(treeImgElement,ui_width/17*4,ui_heigth/6*4-25,ui_width/18,ui_heigth/4)
}).catch((err)=>{
    console.log(err)
})

export function drawTree(x,y,currentTimer){
    // 樹的寬
    const treeWidth = ui_width/17;
    // 樹的高
    const treeHeight = ui_heigth/4;

    // 圖片X軸間隔
    // 圖片Y軸間隔
    const treePosXUnit = ui_width/17;  
    const treePosYUnit = ui_heigth/6-5;
    if(treeImgElement.complete){
        // 遇到一個問題，原本是這樣
        // gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
        // 但是渲染出來的結果是背景一格一格走，所以 stonePosXUnit*x 改成 stonePosXUnit*(x-1)-stonePosXUnit*(a*obstacleSpeed)
         // 原本每30Frame才會換一次位置 ，改動每次慢慢換
        const changeEveryFrame = currentTimer%30+1
        gameCanvas.drawImage(treeImgElement,treePosXUnit*(x-changeEveryFrame/30),treePosYUnit*y,treeWidth,treeHeight)
    }
}