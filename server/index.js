
const os = require('os');
const path = require('path')
const fs = require('fs')
const express = require("express")
const app = express();
// const 當前網路街口
const netWork = os.networkInterfaces()

app.use(express.static(path.join(__dirname,"../")))
app.get('/',(req,res)=>{
    const data = fs.readFileSync(path.join(__dirname,"../index.html"), 'utf8')

    res.sendFile(data)
})

app.listen(3000, () => {
    // WIFI街口
    const wifiArray = netWork['Wi-Fi']
    wifiArray.forEach((wifiObj)=>{
        if(wifiObj['family'] === "IPv4"){
            console.log(`http://${wifiObj['address']}:3000`)
        }
    })
    console.log("http://localhost:3000/");
});