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
//var gap = 140;
//var xPos2 = 600;
//var yPos2 = 240;
//var grav = 2;
var xPos = 711;
var yPos = 600;
var k;
//while(mn)
//var start = false;
pipe[0] = {
  x : 0,
  y : 0
};
//рандом координат
function rand(min,max){
  return Math.random()+max+ min ;
}
//рисовка всех объектов
function draw(){
ctx.drawImage(bg,0,0);

  for(var i = 0; i < pipe.length; i++) {
    //рандомное появление вражеских машин
  ctx.drawImage(bcar,pipe[i].x+Math.random()+rand(0,100),pipe[i].y);
  ctx.drawImage(bcarq,pipe[i].x+rand(0,cvs.width-1300),pipe[i].y);
  ctx.drawImage(bcarw,pipe[i].x+rand(0,cvs.width-500),pipe[i].y);
  ctx.drawImage(bcare,pipe[i].x+rand(0,cvs.width-770),pipe[i].y);
  pipe[i].y+=3;
if (pipe[i].y == 600)
{pipe.push({
  x:0,
  y:0
});}
 //конец игры, если машинка ударяется об припятсвие
 if((xPos<=0 || xPos+car.width>=cvs.width || yPos<=0 || yPos+car.height>=cvs.height) ||(xPos<=pipe[i].x-bcarq.width && yPos>=pipe[i].y-bcarq.height)) {
  location.reload();}}
 ctx.drawImage(car,xPos,yPos);
 ctx.font = "80px Verdana";
 ctx.fillText("Время выживания: "+(Math.floor((time+=1.7)/100*100)/100),0,1000);
  requestAnimationFrame(draw);
}
bcar.onload = draw;}
