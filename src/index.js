// 倒出靜態資源檔
import './assets/scss/app.scss'

// 遊戲資訊初始化
import {gameInit} from './init'
import {Looping,startLoop} from './gameloop'
import {MoveUp,MoveDown} from './player'

// 初始化
window.onload = () => {
    // 遊戲初始化
    gameInit()
    // 循環觸發
    Looping()

    // dom的監聽
    const TopBtn = document.querySelector("#topBtn")
    const BottomBtn = document.querySelector("#bottomBtn")
    const keepBtn = document.querySelector("#startLoop")
    TopBtn.addEventListener("click",()=>{
        MoveUp()
    },false)
    BottomBtn.addEventListener("click",()=>{
        MoveDown()
    },false)
    keepBtn.addEventListener('click',()=>{
        console.log("繼續")
        startLoop()
    })
}


