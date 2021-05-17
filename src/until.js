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

// 移動裝置按鈕DOM
const topButtonDom = document.querySelector(".js-moveTopBtn")
const bottomButtonDom = document.querySelector(".js-moveBottomBtn")

// 整個遊戲背景
const gameDom = document.querySelector(".js-game-touch")
// 玩家移動監聽
export function gameAction(){
    // 如果當前裝置是手機
    if(isMobileDevice()){
        // 向上移動Btn監聽
        topButtonDom.addEventListener("click",()=>{
            MoveUp()
        },false)
        // 向下移動Btn監聽
        bottomButtonDom.addEventListener("click",()=>{
            MoveDown()
        },false)
    }else{
        // 電腦端 滑鼠移過去變手指
        gameDom.setAttribute("style", "cursor:pointer;");
        // 電腦端 不需要AB按鈕
        topButtonDom.remove();
        bottomButtonDom.remove();
        // 監聽鍵盤
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