// 倒出靜態資源檔
import './assets/scss/app.scss'

// 遊戲資訊初始化
import {gameInit} from './init'
import {Looping,startLoop} from './gameloop'


// 初始化
window.onload = () => {
    // 遊戲初始化
    gameInit()
    // 循環觸發
    Looping()

    
}


