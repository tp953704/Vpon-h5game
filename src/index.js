// 倒出靜態資源檔
import './assets/scss/app.scss'

// 遊戲資訊初始化
import {init} from './init';
import {gameLoop} from './gameloop'


// 初始化
window.onload = () => {
    // 初始化並倒出 初始值
    const { gameBgCanvas,bg_width,bg_height} = init()
    // 遊戲每一Frame更新一次畫面
    const Looping = gameLoop(bg_width,bg_height,gameBgCanvas);

    Looping()
}


