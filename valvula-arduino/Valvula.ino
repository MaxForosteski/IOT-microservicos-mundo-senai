int evt_Valvula = 12;
int btn_Valvula = 10;
bool estado = false;

void setup() {
  pinMode(evt_Valvula,OUTPUT);
   pinMode(btn_Valvula,INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available() > 0){ 

    if(Serial.read() == 'Y'){
      digitalWrite(evt_Valvula,HIGH);
    }else{
      digitalWrite(evt_Valvula,LOW);
    }
    
  }
  if(digitalRead(btn_Valvula) == LOW){ 
      estado = !estado;
      delay(1500);
      digitalWrite(evt_Valvula,estado);
    }
}