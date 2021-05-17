## Vpon-h5小馬快遞員

成品網址：https://tp953704.github.io/Vpon-h5game/


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
   - 直接打開 根目錄的 index.html，並使用 npm run dev 監聽 JS 有無修改

   - 在本地端電腦起一個Server， 終端機會給一個URL，藉由這個URL其他跟本地端電腦 使用同網路的裝置都可以使用這個URL來測試
     ```
        npm run server
     ```