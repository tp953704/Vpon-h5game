// 地圖 寬17個玩家的寬(0~16)  高6條小路(0~5)
// 玩家的位置

// 信箱繪製方法
import {drawMail} from './mail'
import {drawTree} from './tree'
import {drawStone} from './stone'

// 障礙物數度慢十倍
export const obstacleSpeed = 1/30
//障礙物Array 
// 1是mail
const obstacleArray = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,3,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,3,0,0,0],
    [0,3,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,3],
    [0,0,2,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,2,0,0],
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,2,1,0],
    [0,0,1,0,1,0],
    [0,3,1,0,1,0],
    [0,0,1,0,1,0], 
    [3,0,0,2,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [3,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,2,0,3],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [3,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [3,0,0,2,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,2,0,3],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [3,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [3,0,0,2,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,2,1,0,1,0],
    [0,0,1,0,1,0],  
    [3,2,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,3,1,0],  
    [3,0,0,0,0,0],
    [0,2,1,2,0,0],
    [0,3,1,2,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,2,1,0],  
    [0,0,2,0,0,0],
    [0,0,1,0,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],  
    [0,0,0,0,0,0],
    [0,0,1,2,0,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,0,1,0],
    [0,0,1,2,1,0],     
]

// 目前障礙物的初始列
let firstIndex;
// 障礙物的最後列
let lastIndex;


// 障礙物繪製
export function drawObstacleToMap(currentTimer){
    // obstacleArray的大小
    let obstacleLength = obstacleArray.length
    // 如果跑完了 不用渲染
    if(currentTimer>obstacleLength){
        return ;
    }
    // obstacleArray在地圖的第一列
    firstIndex = currentTimer
    // 地圖最後一列
    lastIndex = (currentTimer+17>obstacleLength)?obstacleLength:currentTimer+17

    for(let i=firstIndex; i<lastIndex; i++){
        // 每一列的障礙物
        const perObstacleArray = obstacleArray[i]
        perObstacleArray.forEach((type,index)=>{
            // type === 是信封 type === 2是樹 type === 3是石頭
            if(type===1){
                drawMail(i-firstIndex,index,currentTimer)
            }else if(type===2){
                drawTree(i-firstIndex,index,currentTimer)
            }else if(type===3){
                drawStone(i-firstIndex,index)
            }
        })
    }
}

// 取得障礙物渲染狀態
export function getObstacleStatus(){
    return [firstIndex,lastIndex,obstacleArray]
}

