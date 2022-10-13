var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

const inY = canvas.height/8
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const q = Math.floor(random(1,1.3))

const paleta1 = ["#009fe3","#82f4b1"]
const paleta2 = ["#009fe3","#3C3744"]
const paleta3 = ["#293F14","#FF99C8"]
const paleta4 = ["#7d1128","#e6007e"]
const paleta5 = ["#ad2898","#BADEFC"]
const paleta6 = ["#293F14","#FF785A"]
const paleta7 = ["#293F14","#FFED00"]
const paleta8 = ["#293F14","#3eff8b"]
const paleta9 = ["#242047","#07f49e"]
const paleta10 = ["#103783","#9bafd9"]
const paleta11 = ["#696eff","#f8acff"]
const paleta12 = ["#08415c","#cc2936"]
const paleta13 = ["#432371","#faae7b"]
const paleta14 = ["#2b2d42","#8d99ae"]
const paleta15 = ["#102542","#f87060"]
const paleta16 = ["#011627","#ff0022"]
const paleta17 = ["#201e1f","#ff4000"]
const paleta18 = ["#c33149","#a8c256"]
const paleta19 = ["#313715","#d16014"]
const paleta20 = ["#343e3d","#607466"]
const paleta21 = ["#283618","#606c38"]
const paleta22 = ["#161032","#faff81"]
const paleta23 = ["#003049","#52b788"]
const paleta24 = ["#2e294e","#f46036"]
const paleta25 = ["#4b4237","#d5a021"]

const paletas = [paleta1,paleta2,paleta3,paleta4,paleta5,paleta6,paleta7,paleta8,paleta9,paleta10,paleta11,paleta12,paleta13,paleta14,paleta15,paleta16,paleta17,paleta18,paleta19,paleta20,paleta21,paleta22,paleta23,paleta24,paleta25]
const paleta = randomFromList(paletas);
// const paleta = paleta5

function randomFromList(items){
    return items[Math.floor(Math.random()*items.length)];
    }

f = random(20,40)
g = random(20,40)
m = random(0.4,0.8)
n = random(0.4,0.8)
xs = random(100,900)
ys  = random(50,400)
tams = random(6,30)
t = random(0,310)
generate()
function generate(){
  const paleta = randomFromList(paletas);
def = Math.random() 

createBackground()
if (def<0.1){
  
  el = Math.random()
  if(el<0.6){
    createStarts()
  }else if(el<0.8){
    createStarts()
    createMoon()
  }else{
    createMoon()
  }
  createOverlay2(paleta[0], 0.6, 2, m, f);//gr

}else if(def<0.2){
  
  el = Math.random()
  if(el<0.6){
    createStarts()
  }else if(el<0.8){
    createStarts()
    createMoon()
  }else{
    createMoon()
  }
  createOverlay(paleta[0], 0.9, 3, n, g);//ch
}else if(def<0.3){
  
  el = Math.random()
  if(el<0.6){
    createStarts()
  }else if(el<0.8){
    createStarts()
    createMoon()
  }else{
    createMoon()
  }
  createOverlay3(paleta[0], 0.9, 3, n, g);//picuda
}else if(def<0.7){

  el = Math.random()
  if(el<0.6){
    createStarts()
  }else if(el<0.8){
    createStarts()
    createMoon()
  }else{
    createMoon()
  }
  createOverlay2(paleta[0], 0.6, 2, m, f);//gr
  createOverlay(paleta[0], 0.9, 3, n, g);//ch
}else{

  el = Math.random()
  if(el<0.6){
    createStarts()
  }else if(el<0.8){
    createStarts()
    createMoon()
  }else{
    createMoon()
  }
  createOverlay(paleta[0], 0.9, 3, n, g);//ch
  createOverlay3(paleta[0], 0.9, 3, n, g);//picuda
}


}




function createBackground() {
  var lg = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  lg.addColorStop(0, paleta[0]);
  lg.addColorStop(0.6, paleta[1]);
  lg.addColorStop(0.6, paleta[1]);
  lg.addColorStop(1, paleta[0]);
  ctx.fillStyle = lg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function createMoon() {
  ctx.fillStyle = paleta[1];
  ctx.beginPath();
  ctx.arc(xs,ys,tams,0,Math.PI *2 )
  ctx.fill(); 

}

function createStarts(){

  for (i = 0; i < 900 ; i++){
    ctx.fillStyle = paleta[1]
    ctx.beginPath();
    p = random(0.3,1.3)
    ctx.arc(Math.random()*i*200,Math.random()*i*20, p, 0, 2 * Math.PI, true);
    ctx.fill()
    ctx.strokeStyle = paleta[1];
    ctx.stroke();
    

  }
}
  function createOverlay(color, filling, saw, hard,alto) {
    hard = hard || 0.5;
    var	maxHeight = 1000; //el inicio
  
    var x,
      height = 0.7 * maxHeight, // define el alto
      slope = (Math.random() * saw) * 2 - saw;
  
    for (x = 0; x < canvas.width; x++) {
    
      height += slope * 0.25;
      // height += slope * 0.5;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
  
      if (slope < -saw) {
        slope = -saw * 0.3;
      }
  
      ctx.beginPath();
     
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      
  

    }
  }


  function createOverlay2(color, filling, saw, hard,alto) {
    hard = hard || 0.5;
    var	maxHeight =1000; //el inicio
  
    var x,
      height = 0.5 * maxHeight, // define el alto
      slope = (Math.random() * saw) * 2 - saw;
  
    for (x = 0; x < canvas.width; x++) {
    
      height += slope * 0.25;
      // height += slope * 0.5;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
  
      if (slope < -saw) {
        slope = -saw * 0.3;
      }
  
      ctx.beginPath();
     
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      
  

    }
  }

  function createOverlay3(color, filling, saw, hard,alto) {
    hard = hard || 0.5;
    var	maxHeight =1000; //el inicio
  
    var x,
      height = 0.5 * maxHeight, // define el alto
      slope = (Math.random() * saw) * 2 - saw;
  
    for (x = 0; x < canvas.width; x++) {
    
      height += slope * 0.65;
      // height += slope * 0.5;
      slope += (Math.random() * hard) * 2 - hard;
  
      if (slope > saw) {
        slope = saw;
      }
  
      if (slope < -saw) {
        slope = -saw * 0.3;
      }
  
      ctx.beginPath();
      
      ctx.moveTo(x * 2, maxHeight );
      ctx.lineTo(x, height);
  
      ctx.globalAlpha = filling;
      ctx.strokeStyle = color;
      ctx.stroke();
  
    
      
  

    }
  }




  function mountains(value) {
    if (value < 0.1) return "Plateau"
    if (value < 0.2) return "Kuppe"
    if (value < 0.3) return "Fold"
    if (value < 0.7) return "Upwarped"
    else return "Stratovolcano"
  }
  function sky(value){
    if (value < 0.6) return "The starts"
    if (value < 0.8) return "Moon and Starts"
    else return "The moon"
  }
  
  function atmosphere(value){
    if (value == paleta1) return "82f4b1"
    if (value == paleta2) return "3C3744"
    if (value == paleta3) return "Ff99c8"
    if (value == paleta4) return "E6007e"
    if (value == paleta5) return "Badefc"
    if (value == paleta6) return "Ff785a"
    if (value == paleta7) return "Ffed00"
    if (value == paleta8) return "3eff8b"
    if (value == paleta9) return "07f49e"
    if (value == paleta10) return "9bafd9"
    if (value == paleta11) return "F8acff"
    if (value == paleta12) return "Cc2936"
    if (value == paleta13) return "Faae7b"
    if (value == paleta14) return "8d99ae"
    if (value == paleta15) return "f87060"
    if (value == paleta16) return "Ff0022"
    if (value == paleta17) return "Ff4000"
    if (value == paleta18) return "A8c256"
    if (value == paleta19) return "D16014"
    if (value == paleta20) return "607466"
    if (value == paleta21) return "606c38"
    if (value == paleta22) return "Faff81"
    if (value == paleta23) return "52b788"
    if (value == paleta24) return "F46036"
    if (value == paleta25) return  "D5a021"
  }
  
  window.$fxhashFeatures = {
    "Mountain type": mountains(def),
    "Sky":sky(el),
    "Atmosphere":atmosphere(paleta)
  }













