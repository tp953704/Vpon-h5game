const PlayerImgUrl = require("./assets/images/player.png")

function initPlayer(canvas,ui_width,ui_heigth){
    // 人物圖片的寬度
    const playerWidth = ui_width/10;
    // 人物的高度
    const playerHeight = ui_heigth*2.5

    // 垂直移動單位
    const verticalUnit = ui_heigth*-0.06
    // 目前的垂直移動量 範圍 0~5 初始為2
    let currentVertical = 2;
    // 水平位置(固定)
    const horizonPos = ui_width/5;

    // 圖片素材總共有17個動作，每次只顯示一個
    const playerPerWidth = ui_width/17    
    const BgGroundImg = new Image(600);
    BgGroundImg.src=PlayerImgUrl
    // 圖片要成功讀取後才能渲染
    BgGroundImg.decode()
    .then(() => {
        canvas.drawImage(BgGroundImg,0,verticalUnit*currentVertical,playerPerWidth,ui_heigth,horizonPos,0,playerWidth,playerHeight)
    })
    // 初始化後回傳之後更新的方式
    function updatePlayer(actionIndex){
        // 每個動作間格
        const unitVal = ui_width/17.37;
        // 當前動作剪裁
        // 動作部會超過17個
        const currentActionIndex = actionIndex%17
        const cutActionVal = unitVal*currentActionIndex

        // // 圖片有成功讀取，才理他
        if(BgGroundImg.complete){
            // 清除畫布
            canvas.clearRect(horizonPos,verticalUnit*currentVertical,playerWidth,playerHeight)
            // 重新繪製
            canvas.drawImage(BgGroundImg,cutActionVal,verticalUnit*currentVertical,playerPerWidth,ui_heigth,horizonPos,0,playerWidth,playerHeight)
           
        }
    }
    // 向上移動
    function MoveUp(){
        currentVertical -= 1
        checkMove()
    }
    // 向下移動
    function MoveDown(){
        currentVertical += 1
        checkMove()
    }
    // 檢查是否有撞到東西或超出邊界
    function checkMove(){
        // 垂直大小限制
        let maxVal = 5
        let minVal = 0
       if(currentVertical>maxVal){
            currentVertical = maxVal
       }else if(currentVertical<minVal){
            currentVertical = minVal
       }
    }


    return [updatePlayer,MoveUp,MoveDown]
}

export function createPlayer(canvas,ui_width,ui_heigth){
    // 初始化並取的玩家更新方法
    const [updatePlayer,MoveUp,MoveDown] = initPlayer(canvas,ui_width,ui_heigth)

    return [updatePlayer,MoveUp,MoveDown]
}