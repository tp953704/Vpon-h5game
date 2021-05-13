// 每個靜態資源編譯後路徑
const skyImgUrl = require('./assets/images/sky.jpg')
const mountainImgUrl = require('./assets/images/mountain.png')
const groundImgUrl = require('./assets/images/ground.jpg')



// 背景元素 包含 背景地板 背景山 背景天空
class BackgroundElement{
    constructor(imgUrl,initX,initY, width, height,canvas,mul=1){
        this.image = ""
        this.imgUrl = imgUrl
        this.initX = initX;
        this.initY = initY;
        this.width =width;
        this.height = height;
        this.canvas = canvas
        this.mul=mul
    }
    init(){
        // 下面有特別需求，要避免this跑掉
        const self = this;
        // 背景路徑
        const ImgUrl = self.imgUrl
       
        // 背景圖片容器生成
        const BgGroundImg = new Image(this.width);
        // 圖片載入後才能成功繪製
        BgGroundImg.onload = function(){
            self.image = BgGroundImg
            // 初次載入直接渲染
            self.render(0)
        }
        // 把圖片裝進容器
        BgGroundImg.src = ImgUrl 
        self.image = BgGroundImg
    }
    // 繪製背景 => 帶入當前遊戲時間軸
    render(currentTimer){
        // 如果 圖片成功載入 繪製成canvas
        if(this.image.complete){
            // 三個背景連接 動起來不會斷
            if(this.mul >1){
                // 為了讓ground背景完整呈現，不被裁切
                // 因為一次只顯示一半清楚的背景 所以狀比較多背景元素
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer+this.width/2,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer+this.width,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*1.35,this.initX-currentTimer+this.width*3/2,this.initY,this.width,this.height)
                // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer,this.initY,this.width,this.height)
                // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+this.width,this.initY,this.width,this.height)
                // this.canvas.drawImage(this.image,this.initX,0,this.width,this.height*this.mul,this.initX-currentTimer+2*this.width,this.initY,this.width,this.height)
            }else{
                this.canvas.drawImage(this.image,this.initX-currentTimer,this.initY,this.width,this.height)
                this.canvas.drawImage(this.image,this.initX-currentTimer+this.width,this.initY,this.width, this.height)
                this.canvas.drawImage(this.image,this.initX-currentTimer+2*this.width,this.initY,this.width, this.height)
            }
        }
    }
}



// 天空的背景
let skyBg;
// 山的背景
let mountainBg;
// 地板的背景
let groundBg;

// 參數 畫布高寬與 canvas上下文
export function bgInit(cvs_width,cvs_height,gameBgCanvas){

    // 定義背景元素
    skyBg = new BackgroundElement(skyImgUrl,0,0,cvs_width, cvs_height*2/10,gameBgCanvas)
    mountainBg = new BackgroundElement(mountainImgUrl,0,cvs_height*1/20,cvs_width, cvs_height*2/10,gameBgCanvas)
    groundBg = new BackgroundElement(groundImgUrl,0,cvs_height*5/20,cvs_width, cvs_height,gameBgCanvas,2.7)
    // 初次繪製 
    skyBg.init()
    mountainBg.init()
    groundBg.init()
}

// 參數 畫布高寬與 canvas上下文
export function bgUpdate(cvs_width,cvs_height,gameBgCanvas,currentTimer){
    // 每個背景元素的速度 備註：天空跑超慢  山有點慢  地板元素稍微快一點
    const skySpeed = currentTimer/3;
    const mountainSpeed = currentTimer*2/3;
    const groundSpeed = currentTimer;
    // 清除背景畫布
    gameBgCanvas.clearRect(0,0,cvs_width, cvs_height)
    
    
    // 重新渲染 帶入的數字不能超過背景寬度 所以用餘數
    skyBg.render(skySpeed%cvs_width)
    mountainBg.render(mountainSpeed%cvs_width)
    groundBg.render(groundSpeed%cvs_width)
}