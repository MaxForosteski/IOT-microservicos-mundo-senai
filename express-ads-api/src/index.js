const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

const res_Ligar = [
    {title:"Ativando Valvula"}
];

const res_Desligar = [
    {title:"Desativando Valvula"}
];

var StatusValvula = true;

const res_StatusValvula = (StatusValvula) => {
    return {data:StatusValvula}
}

app.get('/desligarvalvula', (req,res) =>{
    StatusValvula = false;
    res.send(res_Desligar);
});

app.get('/ligarvalvula', (req,res) =>{
    StatusValvula = true;
    res.send(res_Ligar);
});

app.get('/sendrequest', (req,res) =>{
    res.json(res_StatusValvula(StatusValvula));
});

app.listen(80, () => {
    console.log('listening on port 80');
})



