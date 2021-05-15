// 倒出靜態資源檔
import './assets/scss/app.scss'

// 遊戲資訊初始化
import {gameInit} from './init'
import {Looping} from './gameloop'
import {isMobileDevice,rotateInPhone} from './until'
// 初始化
window.onload = () => {
    // 先判斷當前裝置
    if(isMobileDevice()){
        rotateInPhone()
    }
    // 遊戲開始的按鈕
    const startBtnDom = document.querySelector("#startGameBtn")
    // 遊戲開始前的封面
    const beforeContainerDom = document.querySelector(".js-beforeGame")
    startBtnDom.addEventListener("click",()=>{
        beforeContainerDom.classList.add("transition-none")
        StartToPlayGame()
    },false)

}

function StartToPlayGame(){
    // 遊戲初始化
    gameInit()
    // 循環觸發
    Looping()
}




