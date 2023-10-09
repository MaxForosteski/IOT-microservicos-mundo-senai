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

const teste = [
    {title:"Hello world"}
];
const res_Ligar = [
    {title:"Ativando Valvula"}
];

const res_Desligar = [
    {title:"Desativando Valvula"}
];

const sendString = (string) => {
    return{
        data:string
    }
}

var StatusValvula = true;

const res_StatusValvula = (StatusValvula) => {
    return {data:StatusValvula}
}

app.get('/send-string',(req, res) => {

    const string = req.body.string;

    res.json(sendString(string));
});

app.get('/teste', (req,res)=> {
    res.send(teste);
});

app.get('/desligarvalvula', (req,res) =>{
    StatusValvula = false;
});

app.get('/ligarvalvula', (req,res) =>{
    StatusValvula = true;
});

app.get('/sendrequest', (req,res) =>{
    res.json(res_StatusValvula(StatusValvula));
});

app.listen(80, () => {
    console.log('listening on port 3000');
})



