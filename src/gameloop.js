



// 遊戲會一直持續渲染
export function gameLoop(callbackFn){
    // 遊戲時間軸
    let currentTimer = 0; 

    //是否暫停
    let isLooping = true;

    // 無限迴圈
    function Looping(){
        if(isLooping){
            currentTimer+=1;
            // 回條函數 裡面有每frame要更新的東西
            callbackFn(currentTimer)
            // 持續更新觸發
            requestAnimationFrame(Looping)
        }
    }
    // 暫停遊戲
    function pause(){
        isLooping = false;
    }
    // 繼續遊戲
    function startLoop(){
        isLooping = true
    }
    return [Looping,pause,startLoop]
}