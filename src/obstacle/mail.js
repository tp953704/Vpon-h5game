import {gameCanvas,ui_width,ui_heigth} from '../init'
// 信封的素材路徑
const mailImgUrl = require('../assets/images/mail.png')

// 圖片高寬度
let mailWidth;
let mailHeight;
// 圖片剪裁高寬
let mailCutWidth;
let mailCutHeight

// 每次移動的間閣單位

// 背景圖片容器生成
const mailImg = new Image(500);
// 把圖片裝進容器
mailImg.src = mailImgUrl 

// 圖片要成功讀取後才能渲染
mailImg.decode()
.then(() => {
    mailWidth = ui_width/20;
    mailHeight = ui_heigth/2;
    mailCutWidth = ui_width/34;
    mailCutHeight = ui_heigth/6;
    
    // gameCanvas.drawImage(mailImg,0,0,mailCutWidth,mailCutHeight,ui_width/17*3,0,mailWidth,mailHeight)
})

export function drawMail(x,y,currentTimer){
    // 每個動作間格
    const unitVal = ui_width/33.3;
    // 信件上下移動單位
    const mailVerticalUnit = 470/5
    // 信件左右移動間格
    // const horizonPosUnit = ui_width/17;
    const horizonPosUnit = ui_width/17
    
    
    const mailActionIndex = (currentTimer*3)%15;
    
    if(mailImg.complete){
        gameCanvas.drawImage(mailImg,unitVal*mailActionIndex,0,mailCutWidth,mailCutHeight,horizonPosUnit*x,10+mailVerticalUnit*y,mailWidth,mailHeight)
    }
}

