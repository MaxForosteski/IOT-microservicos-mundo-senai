const express = require("express");
const { SerialPort } = require('serialport');

const axios = require("axios")
const arduino = new SerialPort({path:'COM3',baudRate: 9600});
const app = express();

let sendRequest = false;

async function sendRequestAsync(){
    const response = await axios.get("http://localhost:80/sendrequest");
    sendRequest = response.data.data;
    console.log(sendRequest);   
}

setInterval(()=>{
    sendRequestAsync();
    if(sendRequest){
        arduino.write('N');
        console.log('N');
    }else{
        arduino.write('Y');
        console.log('Y');
    }
},3500);

app.listen(3000, () => {
    console.log('listening on port 3000');
});



