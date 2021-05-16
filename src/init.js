
// 背景初始化
import {bgInit} from './background'

// 利用canvas ID 取得 DOM 和 cavans
function getCanvasAndContextById(id){
    const dom =document.querySelector('#'+ id);
    if(dom.getContext){
        const ctx = dom.getContext('2d');
        return[dom, ctx];
    }else{
        console.error("不支援canvas")
    }
}


// UICanvas // 遊戲的人物障礙物ˋ信封 畫布
const [gameDom,gameCanvas] = getCanvasAndContextById('game-ui')
// 背景Canvas // 遊戲背景 畫布
const [gameBgDom,gameBgCanvas] = getCanvasAndContextById('game-bg')
const ui_width = gameDom.width;
const ui_heigth = gameDom.height;

// 背景畫布寬度高度
const bg_width = gameBgDom.width;
const bg_height = gameBgDom.height;

// 遊戲初始化方法
export function gameInit(){
    // 背景渲染
    bgInit(bg_width,bg_height,gameBgCanvas)
}

// 遊戲的所有資訊
export {gameDom,gameCanvas,ui_width,ui_heigth,gameBgDom,gameBgCanvas,bg_width,bg_height}


