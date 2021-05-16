// 判斷是否行動裝置
export function isMobileDevice() {
    const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod','macos', 'BlackBerry', 'Windows Phone']
    
    
    let isMobile = mobileDevice.some(e => navigator.userAgent.match(e))
   
                        // // 新iPad的平台为 MacIntel，其他方法測步道
    return isMobile || navigator.platform.match('MacIntel')
}

// 通過判斷旋轉角度來判斷是否豎屏或橫屏
export function rotateInPhone(){
    const width = document.body.clientWidth
    const height = document.body.clientHeight
    
    
    const contentDOM = document.querySelector('.game-wrapper');
    fixWindow(width,height,contentDOM)
    
    //根據手機旋轉判斷
    const evt = "onorientationchange" in window ? "orientationchange" : "resize"; //旋轉事件
    window.addEventListener(evt, function () { //事件監聽
        
        let screen_width = width; //屏幕寬度
        if (window.orientation === 90 || window.orientation === -90) { //旋轉到 90 或 -90 度
            console.log(1,2)
            screen_width = height; //橫坪
            contentDOM.style.width = (height) + 'px';
            contentDOM.style.height = height/2 + 'px';
            contentDOM.style.top = (width-height/2)/2+'px';
            contentDOM.style.left = '0px';
            contentDOM.style.transform = 'none'; //不旋轉；
        }else{ 
            //旋轉到180或0度，即橫屏到豎屏           
            fixWindow(width,height,contentDOM)
        }
        
    }, false);
}
// 重修高與寬
function fixWindow(width,height,dom){
    let screen_width = width; //屏幕寬度
    
    if (width < height && width*2>height) {
        screen_width = height; //如果是豎屏，靈感的寬度就等於屏高
        dom.style.width = height + 'px';
        dom.style.height = height/2 + 'px';
        dom.style.top = (height) / 4 + 'px';
        dom.style.left = 0 - (height - width) / 2 + 'px';
        dom.style.transform = 'rotate(90deg)';
    
    }else if(width < height && width*2 < height){
        screen_width = height; //如果是豎屏，靈感的寬度就等於屏高
        dom.style.width = 2*width + 'px';
        dom.style.height = width + 'px';
        dom.style.top = (height - width) / 2 + 'px';
        dom.style.left = 0 - (width) / 2 + 'px';
        dom.style.transform = 'rotate(90deg)';
    
    }else{
        if(width>992){
            dom.style.top = (height-992/2) / 2 + 'px';
        }else{
            dom.style.top = (height - width/2) / 2 + 'px';
        }
    }
}