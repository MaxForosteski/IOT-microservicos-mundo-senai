int evt_Valvula = 12;
int btn_Valvula = 10;
char carac;
bool estado = false;

void setup() {
  pinMode(evt_Valvula,OUTPUT);
  pinMode(btn_Valvula,INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  carac = Serial.read();
  if(carac == 'Y'){
    digitalWrite(evt_Valvula,HIGH);
    delay(1500);
  }else if(carac == 'N'){
    digitalWrite(evt_Valvula,LOW);
    delay(1500);
  }
  
  if(digitalRead(btn_Valvula) == LOW){ 
    estado = !estado;
    delay(1500);
    digitalWrite(evt_Valvula,estado);
    }
}