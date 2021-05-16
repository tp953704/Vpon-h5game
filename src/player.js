// 初始值
import {gameCanvas,ui_width,ui_heigth} from './init'
// 遊戲循環
import {pause,startLoop} from './gameloop'
// 取得障礙物渲染狀態
import {getObstacleStatus} from './obstacle/gameMaps'
// 信件特效
import {mailTouch} from './obstacle/mail'

// 遊戲分數
import {playerDieAdd,playerMailAdd} from './gameBoard'

// 玩家的素材路徑
const PlayerImgUrl = require("./assets/images/player.png")

// 人物圖片的寬度
const playerWidth = ui_width/10;
// 人物的高度
const playerHeight = ui_heigth*2.5

// 垂直移動單位
const verticalUnit = ui_heigth*-0.06
// 目前的垂直移動量 範圍 0~5 初始為2
let currentVertical = 2;
// 水平位置(固定)
const initPosX = 3;
const UnitWidth = ui_width/17;
const horizonPos = UnitWidth*initPosX;

// 圖片素材總共有17個動作，每次只顯示一個
const playerPerWidth = UnitWidth  
// 每個動作間格
const unitVal = ui_width/17.39;

// 初始化圖片載入
const PlayerImgElement = new Image(600);
PlayerImgElement.src=PlayerImgUrl
// 圖片要成功讀取後才能渲染
PlayerImgElement.decode()
.then(() => {
    // gameCanvas.drawImage(PlayerImgElement,0,verticalUnit*currentVertical,playerPerWidth,ui_heigth,0,0,playerWidth,playerHeight)
})


// 檢查是否有撞到東西或超出邊界
function checkMove(){
    // 垂直大小限制
    let maxVal = 5
    let minVal = 0
    if(currentVertical>maxVal){
        currentVertical = maxVal
    }else if(currentVertical<minVal){
        currentVertical = minVal
    }

    collapse(1)
    collapse(2)
}

// 玩家在X座標比目前位置多poxPlus 撞到東西的事件
function collapse(posXPlus){
    let [firstIndex,lastIndex,obstacleArray] = getObstacleStatus()
    // 最後一列
    const LastCollapseIndex = obstacleArray.length-1;
    // 碰撞列的Index
    const collapseIndex = firstIndex+initPosX+posXPlus
    // 如果不是NaN
    if(collapseIndex === collapseIndex && collapseIndex<=LastCollapseIndex){
        const collapseType = obstacleArray[collapseIndex][currentVertical]
       
        if(collapseType>1){
            // 播放玩家撞到動畫
            pause(PlayerJump)
            // 玩家死亡紀錄
            playerDieAdd()
        }
         // 撞到信件遊戲暫停一下，信件消失
        if(collapseType===1){
            // email碰到動畫
            mailTouch(initPosX+posXPlus,currentVertical)
            // 玩家取得信件增加
            playerMailAdd()
            // 背景消失
            obstacleArray[collapseIndex][currentVertical] = 0
        }
    }
}
// 在((posX,posY))座標是否撞到
function isCollapse(posX,posY){
    let [firstIndex,lastIndex,obstacleArray] = getObstacleStatus()
     // 碰撞列的Index
     const collapseIndex = firstIndex+posX
    //  如果之後都沒障礙物 則不會撞到東西
     if(collapseIndex>=obstacleArray.length){
         return true;
     }
    //  大於1 代表不是信件
    return obstacleArray[collapseIndex]&&obstacleArray[collapseIndex][posY]<=1
}

// 初始化後回傳之後更新的方式
export function updatePlayer(currentTimer){
    checkMove()
    // 當前動作剪裁
    // 動作部會超過17個(0~16)，跑步動作是第9個動作到17個動作(8~16)
    const currentActionIndex = 8+Math.floor(currentTimer/3)%9
    const cutActionVal = unitVal*currentActionIndex

    // // 圖片有成功讀取，才理他
    if(PlayerImgElement.complete){
        // 清除畫布
        // gameCanvas.clearRect(horizonPos,verticalUnit*currentVertical,playerWidth,playerHeight)
        // 重新繪製
        // gameCanvas.drawImage(PlayerImgElement,cutActionVal,verticalUnit*currentVertical,playerPerWidth,ui_heigth,horizonPos,0,playerWidth,playerHeight)
        gameCanvas.drawImage(PlayerImgElement,cutActionVal,0,playerPerWidth,ui_heigth,horizonPos,(ui_heigth/6-10)*currentVertical,playerWidth,playerHeight)
    }
}
// 向上移動
export function MoveUp(){
    // 如果移動完是障礙物 不給他移動
    if(isCollapse(initPosX+1,currentVertical-1)&&isCollapse(initPosX,currentVertical-1)){
        currentVertical -= 1
    }
}
// 向下移動
export function MoveDown(){
    // 如果移動完是障礙物 不給他移動
    if(isCollapse(initPosX+1,currentVertical+1)&&isCollapse(initPosX,currentVertical+1)){
       
        currentVertical += 1
    }
    
}


// 開場時和撞到時，馬的前腳會跳起來
export function PlayerJump(Timer){
     // 動作部會超過17個(0~16)，馬的前腳會跳起來動作是第1個動作到8個動作(0~7)
    const currentActionIndex = Math.floor(Timer/3)%8
    const cutActionVal = unitVal*currentActionIndex
    
    // 目前的透明度
    const howTransparent = Math.floor(Timer/3)%10+1;
    const Alpha = 1/howTransparent
    // // 圖片有成功讀取，才理他
    if(PlayerImgElement.complete){
        // 清除畫布
        gameCanvas.clearRect(horizonPos,(ui_heigth/6-10)*currentVertical,playerWidth,ui_heigth/4.4)
        gameCanvas.globalAlpha = Alpha;
        // 重新繪製
        gameCanvas.drawImage(PlayerImgElement,cutActionVal,0,playerPerWidth,ui_heigth,horizonPos,(ui_heigth/6-10)*currentVertical,playerWidth,playerHeight)
    }
    // 最多跑多久
    let maxTimer = 30
    if(Timer>maxTimer){
        gameCanvas.globalAlpha = 1;
        currentVertical = safePosY()
        startLoop()
    }
}



// 當前列哪裡是安全的
function safePosY(){
    let [firstIndex,lastIndex,obstacleArray] = getObstacleStatus()
    // 碰撞列的Index
    const collapseIndex = firstIndex+initPosX+1
    const collapseIndex2 = firstIndex+initPosX+2

    // 未來會遇到的兩列
    const futureCol = obstacleArray[collapseIndex]
    const futureCol2 = obstacleArray[collapseIndex2]
    // 玩家撞完頭後可以去的地方
    let resultCol = -1;
    for(let i=futureCol.length-1;i>=0;i--){
        // 判斷後面兩列的每一行是否是障礙物
        const futureType = futureCol[i]
        const futureType2 = futureCol2[i]
        // 後面兩格如果都不是障礙物 存起來
        if(futureType<=1 && futureType2<=1){
            resultCol = i;
        }
    }
    // 沒有答案 的狀況
    if(resultCol === -1){
        return futureCol.findIndex((e)=>{e<=1})
    }
    return resultCol
}