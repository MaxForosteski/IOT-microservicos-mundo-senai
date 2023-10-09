const express = require("express");
const { SerialPort } = require('serialport');

const axios = require("axios")
const arduino = new SerialPort({path:'COM3',baudRate: 9600});
const app = express();

function sendRequest(){

    axios.get("https://arduinoapi-48444.web.app/sendrequest")
        .then((res)=>{
            console.log(res.data.data);
            if(res.data.data){
                arduino.write('N');
            }else{
                arduino.write('Y');
            }
        })
        .catch((err)=>{
            console.log(err);
        });
    
    
    
}

setTimeout(sendRequest, 1000)

app.listen(3000, () => {
    console.log('listening on port 3000');
});



