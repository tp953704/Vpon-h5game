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

export function drawTree(x,y){
    // 樹的寬
    const treeWidth = ui_width/17;
    // 樹的高
    const treeHeight = ui_heigth/4;

    // 圖片X軸間隔
    // 圖片Y軸間隔
    const treePosXUnit = ui_width/17;  
    const treePosYUnit = ui_heigth/6-5;
    if(treeImgElement.complete){
        gameCanvas.drawImage(treeImgElement,treePosXUnit*x,treePosYUnit*y,treeWidth,treeHeight)
    }
}