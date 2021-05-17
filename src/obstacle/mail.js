import {gameCanvas,ui_width,ui_heigth} from '../init'

import {pause,startLoop} from '../gameloop'
import {obstacleSpeed} from './gameMaps'
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


// 信件被碰到的特效  帶入碰到處的X座標,碰到處的Y座標
export function mailTouch(x,y){
    // 遊戲暫停
    pause((pauseTimer)=>{
        // 這次動畫的秒數
        const animateAllTime = 4
        // 這個動畫的數度
        const animateSpeed = 2
        // 這個動畫的Timer
        const animateTimer = Math.floor(pauseTimer*animateSpeed)
        // 動畫中心X座標
        let X=(ui_width/17)*x
        // 動畫中心Y座標 最低為mailCutHeight*y-70
        let Y=(mailCutHeight)*y+30
        // 半徑 10~15
        let r=10
        // 半徑外延伸，特效的長度
        let l=15+(Math.floor(animateTimer%50))
        // 畫n條線
        let nums = 8;
        // 每a度劃一條線 ，Math.PI*2是360度
        let angleUnit =Math.PI*2/nums
        // 繪製開始時初始化，不然有可能被緩存之前的數據
        gameCanvas.beginPath()
        // 動畫在最上面
        gameCanvas.globalCompositeOperation = "source-over"
        gameCanvas.strokeStyle="yellow"
        for(let i=0;i<nums;i++){
            // 這次要繪製的角度
            let currentAngle = angleUnit*i
            // 座標移動過去
            gameCanvas.moveTo(X+r*Math.sin(currentAngle),Y+r*Math.cos(currentAngle))
            // 從上一個座標開始繪製
            gameCanvas.lineTo(X+l*Math.sin(currentAngle),Y+l*Math.cos(currentAngle))
        }
        // 繪製線
        gameCanvas.stroke()
        // 時間到 所有動畫繼續
        if(pauseTimer>animateAllTime){
            startLoop()
        }
    })
}



// 繪製信件
export function drawMail(x,y,currentTimer){
    // 每個動作間格
    const unitVal = ui_width/33.3;
    // 信件上下移動單位
    const mailVerticalUnit = 470/5
    // 信件左右移動間格
    // const horizonPosUnit = ui_width/17;
    const horizonPosUnit = ui_width/17
    
    
    const mailActionIndex = (currentTimer)%15;
    
    if(mailImg.complete){
        // 遇到一個問題，原本是這樣
        // gameCanvas.drawImage(stoneImgElement,stonePosXUnit*x,stonePosYUnit*y,stoneWidth,stoneHeight)
        // 但是渲染出來的結果是背景一格一格走，所以 stonePosXUnit*x 改成 stonePosXUnit*(x-1)-stonePosXUnit*(a*obstacleSpeed)
         // 原本每30Frame才會換一次位置 ，改動每次慢慢換
        const changeEveryFrame = currentTimer%(1/obstacleSpeed)+1
        // y軸的誤差值
        const yErrorVal = 25
        gameCanvas.drawImage(mailImg,unitVal*mailActionIndex,0,mailCutWidth,mailCutHeight,horizonPosUnit*(x-changeEveryFrame/30),yErrorVal+mailVerticalUnit*y,mailWidth,mailHeight)
    }
}

