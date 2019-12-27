//нажмите на кнопку, чтобы игра началась
document.addEventListener('keydown', function(asd) {
  if (event.code==='KeyB'){startgame();}});
//начало игры
function startgame(){
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
//загрузка всех элементов
var car = new Image();
var bg = new Image();
var bcar = new Image();
var bcarq = new Image();
var bcarw = new Image();
var bcare = new Image();
var time = 0;
car.src = "image/car.png";
bg.src = "image/fon1.png";
bcar.src = "image/bcar.png";
bcarq.src = "image/bcar4.png";
bcarw.src = "image/bcar2.png";
bcare.src = "image/bcar3.png";

//управление машинкой
document.addEventListener('keydown', function (event) {
  if (event.code==='KeyA') {xPos-=80;}});
document.addEventListener('keydown', function (event) {
  if (event.code==='KeyD') {xPos+=80;}});
document.addEventListener('keydown', function (event) {
  if (event.code==='KeyW') {yPos-=80;}});
document.addEventListener('keydown', function (event) {
  if (event.code==='KeyS') {yPos+=80;}});
var pipe = [];
var xPos = 711;
var yPos = 600;
var time1=0;
pipe[0] = {
  x : 0,
  y : 0
};
//рандом координат
function rand(min,max){
  return Math.random() + max + min ;
}
//рисовка всех объектов
function draw(){
ctx.drawImage(bg,0,0);

  for(var i = 0; i < pipe.length; i++) {
    //рандомrandное появление вражеских машин
    var u=pipe[i].x+rand(0,bcar.height);
    var o=pipe[i].x+rand(bcar.height+1,bcar.height*2);
    var p=pipe[i].x+rand(bcar.height*2+1,bcar.height*3);
    var m=pipe[i].x+rand(500,bcar.height-bcar.width);
  ctx.drawImage(bcar,u,pipe[i].y);
 ctx.drawImage(bcarq,o,pipe[i].y);
  ctx.drawImage(bcarw,p,pipe[i].y);
  ctx.drawImage(bcare,m,pipe[i].y);
  pipe[i].y+=4;
if (pipe[i].y%800==0)
pipe.push({
  x:Math.floor(Math.random()*bcarq.width)-bcar.height,
  y:0-bcar.height
});
 //конец игры, если машинка ударяется об припятсвие
 if ((xPos<=0 || xPos+car.width>=cvs.width || yPos<=0 || yPos+car.height>=cvs.height)
 ||(xPos-car.width<=u)&&(xPos+car.width>=u)&&(yPos-bcar.height<=pipe[i].y)&&(yPos+bcar.height>=pipe[i].y)
 ||(xPos-car.width<=o)&&(xPos+car.width>=o)&&(yPos-bcar.height<=pipe[i].y)&&(yPos+bcar.height>=pipe[i].y)
 ||(xPos-car.width<=p)&&(xPos+car.width>=p)&&(yPos-bcar.height<=pipe[i].y)&&(yPos+bcar.height>=pipe[i].y)
  ||(xPos-car.width<=m)&&(xPos+car.width>=m)&&(yPos-bcar.height<=pipe[i].y)&&(yPos+bcar.height>=pipe[i].y))
 {location.reload();}}
 ctx.drawImage(car,xPos,yPos);
 ctx.font = "72px Verdana";
  time1 = time1+Math.floor((time+=1.7)/100*100)/100;
 ctx.fillText("Время выживания: "+Math.floor((time+=1.7)/100*100)/100,0,1000);
  requestAnimationFrame(draw);
}

bcar.onload = draw;}
