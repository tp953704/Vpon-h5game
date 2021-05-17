## Vpon-h5小馬快遞員

成品網址：https://tp953704.github.io/Vpon-h5game/

</br>


### Source code安裝說明


1. 使用git將專案載下來

```
  git clone https://github.com/tp953704/Vpon-h5game.git
```

2. 到專案的根目錄 將專案依賴套件載入

```
  npm ci
```

3. 開專案的方式有兩種
   - 直接打開 根目錄的 index.html，並使用 npm run dev 監聽 ./src 檔案下文件有無修改

   - 在本地端電腦起一個Server， 終端機會給一個URL，藉由這個URL其他跟本地端電腦 使用同網路的裝置都可以使用這個URL來測試
     ```
        npm run server
     ```

</br>



### 目錄架構

```
    -dist                  //最終打包檔

    -doc                   //需求測試相關文件

    -media                 //音效檔案，暫時放這裡

    -server                //簡易的server 方便開發中進行瀏覽器測試

    -src                   //所有開發與業務邏輯
        - assets           //靜態文檔 (包刮 image & scss)

        - obstacle         //障礙物相關開發
            - gameMaps.js  //整體障礙物地圖 、 整體障礙物繪製 、障礙物移動速度 、障礙物狀態
            - mail.js      //郵件繪製 、 郵件被碰到的特效
            - stone.js     //石頭的繪製
            - tree.js      //樹的繪製 

        - background.js    //底部 背景(天空、山、地板)繪製 

        - gameBoard.js     //遊戲狀態管理 (拿到信件、復活數)

        - player.js        //玩家狀態管理與繪製

        - gameloop.js      //遊戲生命週期之一 ，遊戲持續循環、時間軸管理相關方法

        - init.js          //遊戲生命週期之一 ，遊戲持續初始化相關方法

        - index.js         //入口文件
        
        - until.js         //工具庫，裡面多為與DOM和BOM相關方法


    -index.html            //html檔案，從這裡開專案

    -webpack.config.js     //開發環境配置
```

</br>

<a href="https://github.com/tp953704/Vpon-h5game/blob/main/doc/%E9%9C%80%E6%B1%82%E8%88%87%E5%8A%9F%E8%83%BD%E7%9B%A4%E9%BB%9E.md">需求與功能</a>

</br>

### 測試與ISSUE

<a href="https://github.com/tp953704/Vpon-h5game/blob/main/doc/%E6%B8%AC%E8%A9%A6%E8%88%87issue.md">測試連結與ISSUE</a>
