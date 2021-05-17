// 遊戲循環控制
import {restart} from './gameloop'
// 玩家
import {MoveDown,MoveUp} from './player'
// 遊戲分數相關初始化
import {gameStatusInit} from './gameBoard'

// 判斷是否行動裝置
export function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod','macos', 'BlackBerry', 'Windows Phone']
    let isMobile = mobileDevice.some(e => navigator.userAgent.match(e))
    // // 新iPad的平台为 MacIntel，其他方法測步道
    return isMobile || navigator.platform.match('MacIntel')
}

// 玩家移動監聽
export function gameAction(){
    // 整個遊戲的DOM監聽
    const gameDom = document.querySelector(".js-game-touch")
    // 目前遊戲的width
    const width = document.documentElement.clientWidth;
    // 目前遊戲的height
    const height = document.documentElement.clientHeight;
    
    //如果是手機板 觸控紀錄 
    let touchStartX = 0;
    let touchStartY = 0;
    // 如果當前裝置是手機
    if(isMobileDevice()){
        // touchStart 手按下
        gameDom.addEventListener("touchstart",(e)=>{
            // 記錄手一開始的地方
            touchStartX = e.touches[0].clientX
            touchStartY = e.touches[0].clientY
        })
        // touchStart 手放開
        gameDom.addEventListener("touchend",(e)=>{
            // 放開的XY座標
            var moveEndX = e.changedTouches[0].clientX 
            var moveEndY = e.changedTouches[0].clientY
            // 放開的XY座標與按下的座標差
            var X = moveEndX - touchStartX
            var Y = moveEndY - touchStartY
            // 判斷玩家是向上還是向下值
            let testVal;
            // width 和 height的差距，如果寬度大 testVal 看的是Y座標
            if(width>=height){
                testVal = Y
            }else{
                testVal = X
            }
            // 手勢往上 並且手指移動距離大於10
            if(testVal>0 && Math.abs(testVal)>10){
                MoveDown()
            }else if(Math.abs(testVal)>10){
                MoveUp()
            }
        })
    }else{
        document.onkeyup = function(e){
            // 上
            if(e.keyCode === 38){
                MoveUp()
            }
            // 下
            if(e.keyCode === 40){
                MoveDown()
            }
        }
    }
    
}

// 結尾時，點擊遊戲可以重玩
// 觸發重新開始的DOM監聽
export function restartDomAction(){
    // 整個遊戲的DOM監聽
    const gameDom = document.querySelector(".js-game-touch")
    const gamereStartFn = ()=>{
        // 遊戲分數相關初始化
        gameStatusInit()
        // 遊戲時間軸初始化
        restart()
        gameDom.removeEventListener("click",gamereStartFn,false)
    }
    // 點擊遊戲可以重玩
    gameDom.addEventListener("click",gamereStartFn,false)
}

const audioDieDom = document.querySelector("#dieMedia")
audioDieDom.pause()
// 撞到石頭或樹時會有音效   
export function dieMediaPlay(){
    audioDieDom.currentTime = 0
    audioDieDom.play()
}

const audioMailDom = document.querySelector("#mailMedia")
// 碰到MAIL到時會有音效   
export function mailMediaPlay(){
    audioMailDom.currentTime = 0
    audioMailDom.play()
}