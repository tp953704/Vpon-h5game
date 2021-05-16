// 玩家
import {MoveDown,MoveUp} from './player'

// 判斷是否行動裝置
export function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod','macos', 'BlackBerry', 'Windows Phone']
    let isMobile = mobileDevice.some(e => navigator.userAgent.match(e))
    // // 新iPad的平台为 MacIntel，其他方法測步道
    return isMobile || navigator.platform.match('MacIntel')
}

// 滑動監聽
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
