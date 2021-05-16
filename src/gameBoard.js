// 初始值
import {gameCanvas,ui_width,ui_heigth} from './init'
// 信件繪製方法
import {drawMail} from './obstacle/mail'
// 判斷是否行動裝置
import {isMobileDevice} from './until'

// 玩家
import {updatePlayer} from './player'
// 信件數
let mailNums = 0;

// 死亡數
let dieNums = 0;

// 玩家死亡
export function playerDieAdd(){
    dieNums+=1;
}

// 玩家吃到信
export function playerMailAdd(){
    mailNums +=1;
}

// 取得目前分數狀態
export function gameStatus(){
    return [mailNums,dieNums]
}

// 繪製及時記分板
export function gameBoardLoop(){
    // 以下設定會蓋過新圖
    gameCanvas.globalCompositeOperation = "source-over"
    // 字形 字大小
    gameCanvas.font = "bold 80px Arial"
    // 字對齊底部
    gameCanvas.textBaseline = "bottom"
    // 字顏色黑黑的
    gameCanvas.fillStyle="black"
    // 將Email的圖放到需要的地方
    drawMail(13,5.3,1)
    // 字的內容，與位置
    gameCanvas.fillText(`x ${mailNums}`,ui_width*5/6,ui_heigth)
    
}

// 繪製教學
export function gameTeach(){
    // 以下設定會蓋過新圖
    gameCanvas.globalCompositeOperation = "source-over"
    // 字形 字大小
    gameCanvas.font = "bold 30px Arial"
    gameCanvas.textBaseline = "bottom"
    // gameCanvas.textAlign = "left"
    // 背景顏色粉粉的
    gameCanvas.fillStyle="#f3b8c8"
    gameCanvas.fillRect(ui_width*4/6,0,ui_width/5,ui_heigth/7)
     // 字顏色黑黑的
    gameCanvas.fillStyle="black"
    gameCanvas.fillText('操空方式為',ui_width*4/6,ui_heigth/14)
    if(isMobileDevice()){
        gameCanvas.fillText('手勢"上滑與下滑"',ui_width*4/6,ui_heigth/7)
    }else{
        gameCanvas.fillText('鍵盤的"上下左右"',ui_width*4/6,ui_heigth/7)
    }
   
}

export function finallyDraw(){
     // 以下設定會蓋過新圖
     gameCanvas.globalCompositeOperation = "source-over"
     // 字形 字大小
     gameCanvas.font = "bold 60px Arial"
     gameCanvas.textBaseline = "bottom"
     // gameCanvas.textAlign = "left"
      // 字顏色黑黑的
    gameCanvas.fillStyle="black"
     
     gameCanvas.clearRect(0,0,ui_width,ui_heigth)
     gameCanvas.fillText(`拿到信件 x${mailNums}`,ui_width*2/6,ui_heigth*3/10)
     gameCanvas.fillText(`復活次數 x${dieNums}`,ui_width*2/6,ui_heigth*5/10)
    // 繪製玩家
    updatePlayer(99)
}