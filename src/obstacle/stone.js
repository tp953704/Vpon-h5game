// 遊戲資訊初始化
import {gameCanvas,ui_width,ui_heigth} from '../init'

const stoneImgUrl = require("../assets/images/stone.png")

const stoneImgElement = new Image(600);
stoneImgElement.src=stoneImgUrl
// 圖片要成功讀取後才能渲染
stoneImgElement.decode()
.then(() => {
    gameCanvas.drawImage(stoneImgElement,ui_width/17*4,ui_heigth/6*4-25,ui_width/18,ui_heigth/4)
}).catch((err)=>{
    console.log(err)
})

export function drawStone(x,y){
    // 樹的寬
    const stoneWidth = ui_width/17;
    // 樹的高
    const stoneHeight = ui_heigth/4;

    // 圖片X軸間隔
    // 圖片Y軸間隔
    const stonePosXUnit = ui_width/17;  
    const stonePosYUnit = ui_heigth/6-5;
    if(stoneImgElement.complete){
        gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
        
    }
}