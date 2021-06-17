(function(){

  //要素の取得
  var elements = document.getElementsByClassName("drag-and-drop");

  //要素内のクリックされた位置を取得するグローバル（のような）変数
  var x;
  var y;

  //マウスが要素内で押されたとき、又はタッチされたとき発火
  for(var i = 0; i < elements.length; i++) {
      elements[i].addEventListener("mousedown", mdown, false);
      elements[i].addEventListener("touchstart", mdown, false);
  }

  //マウスが押された際の関数
  function mdown(e) {

      //クラス名に .drag を追加
      this.classList.add("drag");

      //タッチデイベントとマウスのイベントの差異を吸収
      if(e.type === "mousedown") {
          var event = e;
      } else {
          var event = e.changedTouches[0];
      }

      //要素内の相対座標を取得
      x = event.pageX - this.offsetLeft;
      y = event.pageY - this.offsetTop;

      //ムーブイベントにコールバック
      document.body.addEventListener("mousemove", mmove, false);
      document.body.addEventListener("touchmove", mmove, false);
  }

  //マウスカーソルが動いたときに発火
  function mmove(e) {
    isDrawing=false;

      //ドラッグしている要素を取得
      var drag = document.getElementsByClassName("drag")[0];

      //同様にマウスとタッチの差異を吸収
      if(e.type === "mousemove") {
          var event = e;
      } else {
          var event = e.changedTouches[0];
      }

      //フリックしたときに画面を動かさないようにデフォルト動作を抑制
      e.preventDefault();

      //マウスが動いた場所に要素を動かす
      drag.style.top = event.pageY - y + "px";
      drag.style.left = event.pageX - x + "px";

      //マウスボタンが離されたとき、またはカーソルが外れたとき発火
      drag.addEventListener("mouseup", mup, false);
      document.body.addEventListener("mouseleave", mup, false);
      drag.addEventListener("touchend", mup, false);
      document.body.addEventListener("touchleave", mup, false);

  }

  //マウスボタンが上がったら発火
  function mup(e) {
      var drag = document.getElementsByClassName("drag")[0];

      //ムーブベントハンドラの消去
      document.body.removeEventListener("mousemove", mmove, false);
      drag.removeEventListener("mouseup", mup, false);
      document.body.removeEventListener("touchmove", mmove, false);
      drag.removeEventListener("touchend", mup, false);

      //クラス名 .drag も消す
      drag.classList.remove("drag");
  }

})()



var colName=['black','blue','brown','green','lightblue','lime','orange','pink','purple','red','white','yellow','tan','coral','banana','rose','gray','maroon'];
var list=new Array(colName.length);
var listP=localStorage.getItem("joinParum");
if(listP===null){}else{
  var listPS=listP.split(",");
}
var dispNum=document.getElementById('numOfplayer');
// console.log(dispNum.innerHTML);
var num=0;
var numP=localStorage.getItem("joinNum");
for(let i=0;i<list.length;i++){
  $('.'+colName[i]).addClass('crewHide');
  list[i]=false;
  if(listP===null){}else{
    if(JSON.parse(listPS[i].toLowerCase())){
      list[i]=true;
      $('.'+colName[i]).removeClass('crewHide');
      $('.check'+colName[i]).attr('src', 'image/UI/checked.png');
    }
  }
  if(numP===null){}else{
    num=numP;
    dispNum.innerHTML="<span>参加者："+num+"人</span>";
  }
}
console.log(list);
console.log(listPS);



$('.checkDBlack').on('click',function(){
  if(list[0]){
    num--;
    $('.checkblack').attr('src', 'image/UI/checkNull.png');
    $('.black').addClass('crewHide');
  }else{
    num++;
    $('.checkblack').attr('src', 'image/UI/checked.png');
    $('.black').removeClass('crewHide');
  }
  list[0]=!list[0];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDBlue').on('click',function(){
  if(list[1]){
    num--;
    $('.checkblue').attr('src', 'image/UI/checkNull.png');
    $('.blue').addClass('crewHide');
  }else{
    num++;
    $('.checkblue').attr('src', 'image/UI/checked.png');
    $('.blue').removeClass('crewHide');
  }
  list[1]=!list[1];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDBrown').on('click',function(){
  if(list[2]){
    num--;
    $('.checkbrown').attr('src', 'image/UI/checkNull.png');
    $('.brown').addClass('crewHide');
  }else{
    num++;
    $('.checkbrown').attr('src', 'image/UI/checked.png');
    $('.brown').removeClass('crewHide');
  }
  list[2]=!list[2];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDGreen').on('click',function(){
  if(list[3]){
    num--;
    $('.checkgreen').attr('src', 'image/UI/checkNull.png');
    $('.green').addClass('crewHide');
  }else{
    num++;
    $('.checkgreen').attr('src', 'image/UI/checked.png');
    $('.green').removeClass('crewHide');
  }
  list[3]=!list[3];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDLightblue').on('click',function(){
  if(list[4]){
    num--;
    $('.checklightblue').attr('src', 'image/UI/checkNull.png');
    $('.lightblue').addClass('crewHide');
  }else{
    num++;
    $('.checklightblue').attr('src', 'image/UI/checked.png');
    $('.lightblue').removeClass('crewHide');
  }
  list[4]=!list[4];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDLime').on('click',function(){
  if(list[5]){
    num--;
    $('.checklime').attr('src', 'image/UI/checkNull.png');
    $('.lime').addClass('crewHide');
  }else{
    num++;
    $('.checklime').attr('src', 'image/UI/checked.png');
    $('.lime').removeClass('crewHide');
  }
  list[5]=!list[5];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDOrange').on('click',function(){
  if(list[6]){
    num--;
    $('.checkorange').attr('src', 'image/UI/checkNull.png');
    $('.orange').addClass('crewHide');
  }else{
    num++;
    $('.checkorange').attr('src', 'image/UI/checked.png');
    $('.orange').removeClass('crewHide');
  }
  list[6]=!list[6];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDPink').on('click',function(){
  if(list[7]){
    num--;
    $('.checkpink').attr('src', 'image/UI/checkNull.png');
    $('.pink').addClass('crewHide');
  }else{
    num++;
    $('.checkpink').attr('src', 'image/UI/checked.png');
    $('.pink').removeClass('crewHide');
  }
  list[7]=!list[7];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDPurple').on('click',function(){
  if(list[8]){
    num--;
    $('.checkpurple').attr('src', 'image/UI/checkNull.png');
    $('.purple').addClass('crewHide');
  }else{
    num++;
    $('.checkpurple').attr('src', 'image/UI/checked.png');
    $('.purple').removeClass('crewHide');
  }
  list[8]=!list[8];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDRed').on('click',function(){
  if(list[9]){
    num--;
    $('.checkred').attr('src', 'image/UI/checkNull.png');
    $('.red').addClass('crewHide');
  }else{
    num++;
    $('.checkred').attr('src', 'image/UI/checked.png');
    $('.red').removeClass('crewHide');
  }
  list[9]=!list[9];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDWhite').on('click',function(){
  if(list[10]){
    num--;
    $('.checkwhite').attr('src', 'image/UI/checkNull.png');
    $('.white').addClass('crewHide');
  }else{
    num++;
    $('.checkwhite').attr('src', 'image/UI/checked.png');
    $('.white').removeClass('crewHide');
  }
  list[10]=!list[10];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDYellow').on('click',function(){
  if(list[11]){
    num--;
    $('.checkyellow').attr('src', 'image/UI/checkNull.png');
    $('.yellow').addClass('crewHide');
  }else{
    num++;
    $('.checkyellow').attr('src', 'image/UI/checked.png');
    $('.yellow').removeClass('crewHide');
  }
  list[11]=!list[11];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDTan').on('click',function(){
  if(list[12]){
    num--;
    $('.checktan').attr('src', 'image/UI/checkNull.png');
    $('.tan').addClass('crewHide');
  }else{
    num++;
    $('.checktan').attr('src', 'image/UI/checked.png');
    $('.tan').removeClass('crewHide');
  }
  list[12]=!list[12];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDCoral').on('click',function(){
  if(list[13]){
    num--;
    $('.checkcoral').attr('src', 'image/UI/checkNull.png');
    $('.coral').addClass('crewHide');
  }else{
    num++;
    $('.checkcoral').attr('src', 'image/UI/checked.png');
    $('.coral').removeClass('crewHide');
  }
  list[13]=!list[13];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDBanana').on('click',function(){
  if(list[14]){
    num--;
    $('.checkbanana').attr('src', 'image/UI/checkNull.png');
    $('.banana').addClass('crewHide');
  }else{
    num++;
    $('.checkbanana').attr('src', 'image/UI/checked.png');
    $('.banana').removeClass('crewHide');
  }
  list[14]=!list[14];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDRose').on('click',function(){
  if(list[15]){
    num--;
    $('.checkrose').attr('src', 'image/UI/checkNull.png');
    $('.rose').addClass('crewHide');
  }else{
    num++;
    $('.checkrose').attr('src', 'image/UI/checked.png');
    $('.rose').removeClass('crewHide');
  }
  list[15]=!list[15];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDGray').on('click',function(){
  if(list[16]){
    num--;
    $('.checkgray').attr('src', 'image/UI/checkNull.png');
    $('.gray').addClass('crewHide');
  }else{
    num++;
    $('.checkgray').attr('src', 'image/UI/checked.png');
    $('.gray').removeClass('crewHide');
  }
  list[16]=!list[16];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});
$('.checkDMaroon').on('click',function(){
  if(list[17]){
    num--;
    $('.checkmaroon').attr('src', 'image/UI/checkNull.png');
    $('.maroon').addClass('crewHide');
  }else{
    num++;
    $('.checkmaroon').attr('src', 'image/UI/checked.png');
    $('.maroon').removeClass('crewHide');
  }
  list[17]=!list[17];
  // console.log(num);
  dispNum.innerHTML="<span>参加者："+num+"人</span>";
});





var old_x = 0;
var old_y = 0;
var x;
var y;
var globalCompositeOperation  = 'source-over';
var selectColor = "#0b141a";
var selectSize = 5;
var selectEmoji = '';

var isDrawing = false;

var nowCtx;


var canvas=new Array(6);
canvas[0]=document.getElementById("can1");
canvas[1]=document.getElementById("can2");
canvas[2]=document.getElementById("can3");
canvas[3]=document.getElementById("can4");
canvas[4]=document.getElementById("can5");
canvas[5]=document.getElementById("can6");
var ctx=new Array(6);
for(var i=0;i<6;i++){
  ctx[i]=canvas[i].getContext('2d');
  ctx[i].lineWidth=4;
  ctx[i].strokeStyle="#0b141a";
}


window.onload = function() {
  for(var i=0;i<6;i++){
    canvas[i].width=window.innerWidth;
    canvas[i].height=window.innerHeight;
    canvas[i].addEventListener("touchstart", touchStart, false);
    canvas[i].addEventListener("touchmove", touchMove, false);
    canvas[i].addEventListener("mousedown", mouseStart, false);
    canvas[i].addEventListener("mousemove", mouseMove, false);
    canvas[i].addEventListener("mouseup", mouseUp, false);

  }
  noScroll();
}

window.addEventListener("resize", function(event) {
  for(var i=0;i<6;i++){
    canvas[i].width=window.innerWidth;
    canvas[i].height=window.innerHeight;
  }
});


function touchStart(e) {
    old_x = e.touches[0].pageX;
    old_y = e.touches[0].pageY;
}
function mouseStart(e) {
  old_x = e.pageX;
  old_y = e.pageY;
  isDrawing=true;
}
function touchMove(e) {
    e.preventDefault();

    x = e.touches[0].pageX;
    y = e.touches[0].pageY;
    drawLine(old_x, old_y, x, y, nowCtx);
    old_x = x;
    old_y = y;
}
function mouseMove(e) {
  e.preventDefault();

  x = e.pageX;
  y = e.pageY;
  if(isDrawing){
    drawLine(old_x, old_y, x, y, nowCtx);
    old_x = x;
    old_y = y;
  }
}
function mouseUp(e) {
  isDrawing=false;
}

function drawLine(x1, y1, x2, y2, ctx) {
    ctx.globalCompositeOperation = globalCompositeOperation;
    ctx.strokeStyle = selectColor;
    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = selectSize;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.fillStyle = selectColor;
    ctx.font = "20px sans";
    ctx.fillText(selectEmoji, x2-30, y2);
    ctx.closePath();
    ctx.stroke();
}



$('.Ptab').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page0').removeClass('pageHide');
  if(!$('.Mtab1').hasClass('tabHide')){
    $('.Mtab1').addClass('tabHide');
    $('.page1').addClass('pageHide');
  }
  if(!$('.Mtab2').hasClass('tabHide')){
    $('.Mtab2').addClass('tabHide');
    $('.page2').addClass('pageHide');
  }
  if(!$('.Mtab3').hasClass('tabHide')){
    $('.Mtab3').addClass('tabHide');
    $('.page3').addClass('pageHide');
  }
  if(!$('.Mtab4').hasClass('tabHide')){
    $('.Mtab4').addClass('tabHide');
    $('.page4').addClass('pageHide');
  }
  if(!$('.Mtab5').hasClass('tabHide')){
    $('.Mtab5').addClass('tabHide');
    $('.page5').addClass('pageHide');
  }
  if(!$('.Mtab6').hasClass('tabHide')){
    $('.Mtab6').addClass('tabHide');
    $('.page6').addClass('pageHide');
  }
});
$('.Mtab1').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page1').removeClass('pageHide');
  nowCtx=ctx[0];

  if(!$('.Ptab').hasClass('tabHide')){
    $('.Ptab').addClass('tabHide');
    $('.page0').addClass('pageHide');
  }
  if(!$('.Mtab2').hasClass('tabHide')){
    $('.Mtab2').addClass('tabHide');
    $('.page2').addClass('pageHide');
  }
  if(!$('.Mtab3').hasClass('tabHide')){
    $('.Mtab3').addClass('tabHide');
    $('.page3').addClass('pageHide');
  }
  if(!$('.Mtab4').hasClass('tabHide')){
    $('.Mtab4').addClass('tabHide');
    $('.page4').addClass('pageHide');
  }
  if(!$('.Mtab5').hasClass('tabHide')){
    $('.Mtab5').addClass('tabHide');
    $('.page5').addClass('pageHide');
  }
  if(!$('.Mtab6').hasClass('tabHide')){
    $('.Mtab6').addClass('tabHide');
    $('.page6').addClass('pageHide');
  }
});
$('.Mtab2').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page2').removeClass('pageHide');
  nowCtx=ctx[1];

  if(!$('.Ptab').hasClass('tabHide')){
    $('.Ptab').addClass('tabHide');
    $('.page0').addClass('pageHide');
  }
  if(!$('.Mtab1').hasClass('tabHide')){
    $('.Mtab1').addClass('tabHide');
    $('.page1').addClass('pageHide');
  }
  if(!$('.Mtab3').hasClass('tabHide')){
    $('.Mtab3').addClass('tabHide');
    $('.page3').addClass('pageHide');
  }
  if(!$('.Mtab4').hasClass('tabHide')){
    $('.Mtab4').addClass('tabHide');
    $('.page4').addClass('pageHide');
  }
  if(!$('.Mtab5').hasClass('tabHide')){
    $('.Mtab5').addClass('tabHide');
    $('.page5').addClass('pageHide');
  }
  if(!$('.Mtab6').hasClass('tabHide')){
    $('.Mtab6').addClass('tabHide');
    $('.page6').addClass('pageHide');
  }
});
$('.Mtab3').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page3').removeClass('pageHide');
  nowCtx=ctx[2];

  if(!$('.Ptab').hasClass('tabHide')){
    $('.Ptab').addClass('tabHide');
    $('.page0').addClass('pageHide');
  }
  if(!$('.Mtab2').hasClass('tabHide')){
    $('.Mtab2').addClass('tabHide');
    $('.page2').addClass('pageHide');
  }
  if(!$('.Mtab1').hasClass('tabHide')){
    $('.Mtab1').addClass('tabHide');
    $('.page1').addClass('pageHide');
  }
  if(!$('.Mtab4').hasClass('tabHide')){
    $('.Mtab4').addClass('tabHide');
    $('.page4').addClass('pageHide');
  }
  if(!$('.Mtab5').hasClass('tabHide')){
    $('.Mtab5').addClass('tabHide');
    $('.page5').addClass('pageHide');
  }
  if(!$('.Mtab6').hasClass('tabHide')){
    $('.Mtab6').addClass('tabHide');
    $('.page6').addClass('pageHide');
  }
});
$('.Mtab4').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page4').removeClass('pageHide');
  nowCtx=ctx[3];

  if(!$('.Ptab').hasClass('tabHide')){
    $('.Ptab').addClass('tabHide');
    $('.page0').addClass('pageHide');
  }
  if(!$('.Mtab2').hasClass('tabHide')){
    $('.Mtab2').addClass('tabHide');
    $('.page2').addClass('pageHide');
  }
  if(!$('.Mtab3').hasClass('tabHide')){
    $('.Mtab3').addClass('tabHide');
    $('.page3').addClass('pageHide');
  }
  if(!$('.Mtab1').hasClass('tabHide')){
    $('.Mtab1').addClass('tabHide');
    $('.page1').addClass('pageHide');
  }
  if(!$('.Mtab5').hasClass('tabHide')){
    $('.Mtab5').addClass('tabHide');
    $('.page5').addClass('pageHide');
  }
  if(!$('.Mtab6').hasClass('tabHide')){
    $('.Mtab6').addClass('tabHide');
    $('.page6').addClass('pageHide');
  }
});
$('.Mtab5').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page5').removeClass('pageHide');
  nowCtx=ctx[4];

  if(!$('.Ptab').hasClass('tabHide')){
    $('.Ptab').addClass('tabHide');
    $('.page0').addClass('pageHide');
  }
  if(!$('.Mtab2').hasClass('tabHide')){
    $('.Mtab2').addClass('tabHide');
    $('.page2').addClass('pageHide');
  }
  if(!$('.Mtab3').hasClass('tabHide')){
    $('.Mtab3').addClass('tabHide');
    $('.page3').addClass('pageHide');
  }
  if(!$('.Mtab4').hasClass('tabHide')){
    $('.Mtab4').addClass('tabHide');
    $('.page4').addClass('pageHide');
  }
  if(!$('.Mtab1').hasClass('tabHide')){
    $('.Mtab1').addClass('tabHide');
    $('.page1').addClass('pageHide');
  }
  if(!$('.Mtab6').hasClass('tabHide')){
    $('.Mtab6').addClass('tabHide');
    $('.page6').addClass('pageHide');
  }
});
$('.Mtab6').on('click',function () {
  $(this).removeClass('tabHide');
  $('.page6').removeClass('pageHide');
  nowCtx=ctx[5];

  if(!$('.Ptab').hasClass('tabHide')){
    $('.Ptab').addClass('tabHide');
    $('.page0').addClass('pageHide');
  }
  if(!$('.Mtab2').hasClass('tabHide')){
    $('.Mtab2').addClass('tabHide');
    $('.page2').addClass('pageHide');
  }
  if(!$('.Mtab3').hasClass('tabHide')){
    $('.Mtab3').addClass('tabHide');
    $('.page3').addClass('pageHide');
  }
  if(!$('.Mtab4').hasClass('tabHide')){
    $('.Mtab4').addClass('tabHide');
    $('.page4').addClass('pageHide');
  }
  if(!$('.Mtab5').hasClass('tabHide')){
    $('.Mtab5').addClass('tabHide');
    $('.page5').addClass('pageHide');
  }
  if(!$('.Mtab1').hasClass('tabHide')){
    $('.Mtab1').addClass('tabHide');
    $('.page1').addClass('pageHide');
  }
});

  // $('.checkBut').on('click',function () {
  //     $('#can').addClass('add_can_hide');
  //     if(!$(this).hasClass('add_but_choice')){
  //       $(this).addClass('add_but_choice');
  //     }
  //     $('.penBut').removeClass('add_but_choice');
  //     $('.eraBut').removeClass('add_but_choice');
    
  // });
  // $('.penBut').on('click',function () {
  //     $('#can').removeClass('add_can_hide');
  //     if(!$(this).hasClass('add_but_choice')){
  //       $(this).addClass('add_but_choice');
  //     }
  //     $('.checkBut').removeClass('add_but_choice');
  //     $('.eraBut').removeClass('add_but_choice'); 

  //     globalCompositeOperation='source-over'; 
  //     selectSize=3;
  // });
  $('.eraBut').on('click',function () {
      globalCompositeOperation='destination-out';
      selectSize=30;
      $('.col').removeClass('add_col_choice');
      if(!$(this).hasClass('add_col_choice')){
        $(this).addClass('add_col_choice');
      }
  });

  $('.brownP').on('click',function () {
    selectColor="#72491e";
    $('.col').removeClass('add_col_choice');

    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.blackP').on('click',function () {
    selectColor="#25272a";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.blueP').on('click',function () {
    selectColor="#132fd2";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.greenP').on('click',function () {
    selectColor="#127f2d";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.lightblueP').on('click',function () {
    selectColor="#39fedb";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.limeP').on('click',function () {
    selectColor="#50ef3a";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.orangeP').on('click',function () {
    selectColor="#ef7d0e";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.pinkP').on('click',function () {
    selectColor="#ed53b9";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.purpleP').on('click',function () {
    selectColor="#6b30bc";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.redP').on('click',function () {
    selectColor="#c51111";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.whiteP').on('click',function () {
    selectColor="#dfeffb";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.yellowP').on('click',function () {
    selectColor="#f5f558";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.tanP').on('click',function () {
    selectColor="#969682";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.coralP').on('click',function () {
    selectColor="#d28278";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.bananaP').on('click',function () {
    selectColor="#f0e6b4";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.roseP').on('click',function () {
    selectColor="#e6d2dc";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.grayP').on('click',function () {
    selectColor="#828ca0";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.maroonP').on('click',function () {
    selectColor="#82001e";
    $('.col').removeClass('add_col_choice');
    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });

  $('.skeldChange').on('click',function(){
    $('.mapBox').attr('src', 'image/skeldMap.png');
  });
  $('.mirahqChange').on('click',function(){
    $('.mapBox').attr('src', 'image/mirahqMap.png');
  });
  $('.polusChange').on('click',function(){
    $('.mapBox').attr('src', 'image/polusMap.png');
  });
  $('.airshipChange').on('click',function(){
    $('.mapBox').attr('src', 'image/airshipMap.png');
  });


  var isDead=new Array(18);
  for(var i=0;i<18;i++){
    isDead[i]=false;
  }


  $('.uMates1').on('click',function(){
    if(isDead[0]){
      $('.black').attr('src', 'image/crewIcon/black.png');
      isDead[0]=false;
    }else{
      $('.black').attr('src', 'image/deadIcon/blackD.PNG');
      isDead[0]=true;
    }
  });
  $('.uMates2').on('click',function(){
    if(isDead[1]){
      $('.blue').attr('src', 'image/crewIcon/blue.png');
      isDead[1]=false;
    }else{
      $('.blue').attr('src', 'image/deadIcon/blueD.PNG');
      isDead[1]=true;
    }
  });
  $('.uMates3').on('click',function(){
    if(isDead[2]){
      $('.brown').attr('src', 'image/crewIcon/brown.png');
      isDead[2]=false;
    }else{
      $('.brown').attr('src', 'image/deadIcon/brownD.PNG');
      isDead[2]=true;
    }
  });
  $('.uMates4').on('click',function(){
    if(isDead[3]){
      $('.green').attr('src', 'image/crewIcon/green.png');
      isDead[3]=false;
    }else{
      $('.green').attr('src', 'image/deadIcon/greenD.PNG');
      isDead[3]=true;
    }
  });
  $('.uMates5').on('click',function(){
    if(isDead[4]){
      $('.lightblue').attr('src', 'image/crewIcon/lightblue.png');
      isDead[4]=false;
    }else{
      $('.lightblue').attr('src', 'image/deadIcon/lightblueD.PNG');
      isDead[4]=true;
    }
  });
  $('.uMates6').on('click',function(){
    if(isDead[5]){
      $('.lime').attr('src', 'image/crewIcon/lime.png');
      isDead[5]=false;
    }else{
      $('.lime').attr('src', 'image/deadIcon/limeD.PNG');
      isDead[5]=true;
    }
  });
  $('.uMates7').on('click',function(){
    if(isDead[6]){
      $('.orange').attr('src', 'image/crewIcon/orange.png');
      isDead[6]=false;
    }else{
      $('.orange').attr('src', 'image/deadIcon/orangeD.PNG');
      isDead[6]=true;
    }
  });
  $('.uMates8').on('click',function(){
    if(isDead[7]){
      $('.pink').attr('src', 'image/crewIcon/pink.png');
      isDead[7]=false;
    }else{
      $('.pink').attr('src', 'image/deadIcon/pinkD.PNG');
      isDead[7]=true;
    }
  });
  $('.uMates9').on('click',function(){
    if(isDead[8]){
      $('.purple').attr('src', 'image/crewIcon/purple.png');
      isDead[8]=false;
    }else{
      $('.purple').attr('src', 'image/deadIcon/purpleD.PNG');
      isDead[8]=true;
    }
  });
  $('.uMates10').on('click',function(){
    if(isDead[9]){
      $('.red').attr('src', 'image/crewIcon/red.png');
      isDead[9]=false;
    }else{
      $('.red').attr('src', 'image/deadIcon/redD.PNG');
      isDead[9]=true;
    }
  });
  $('.uMates11').on('click',function(){
    if(isDead[10]){
      $('.white').attr('src', 'image/crewIcon/white.png');
      isDead[10]=false;
    }else{
      $('.white').attr('src', 'image/deadIcon/whiteD.PNG');
      isDead[10]=true;
    }
  });
  $('.uMates12').on('click',function(){
    if(isDead[11]){
      $('.yellow').attr('src', 'image/crewIcon/yellow.png');
      isDead[11]=false;
    }else{
      $('.yellow').attr('src', 'image/deadIcon/yellowD.PNG');
      isDead[11]=true;
    }
  });
  $('.uMates13').on('click',function(){
    if(isDead[12]){
      $('.tan').attr('src', 'image/crewIcon/tan.png');
      isDead[12]=false;
    }else{
      $('.tan').attr('src', 'image/deadIcon/tanD.PNG');
      isDead[12]=true;
    }
  });
  $('.uMates14').on('click',function(){
    if(isDead[13]){
      $('.coral').attr('src', 'image/crewIcon/coral.png');
      isDead[13]=false;
    }else{
      $('.coral').attr('src', 'image/deadIcon/coralD.PNG');
      isDead[13]=true;
    }
  });
  $('.uMates15').on('click',function(){
    if(isDead[14]){
      $('.banana').attr('src', 'image/crewIcon/banana.png');
      isDead[14]=false;
    }else{
      $('.banana').attr('src', 'image/deadIcon/bananaD.PNG');
      isDead[14]=true;
    }
  });
  $('.uMates16').on('click',function(){
    if(isDead[15]){
      $('.rose').attr('src', 'image/crewIcon/rose.png');
      isDead[15]=false;
    }else{
      $('.rose').attr('src', 'image/deadIcon/roseD.PNG');
      isDead[15]=true;
    }
  });
  $('.uMates17').on('click',function(){
    if(isDead[16]){
      $('.gray').attr('src', 'image/crewIcon/gray.png');
      isDead[16]=false;
    }else{
      $('.gray').attr('src', 'image/deadIcon/grayD.PNG');
      isDead[16]=true;
    }
  });
  $('.uMates18').on('click',function(){
    if(isDead[17]){
      $('.maroon').attr('src', 'image/crewIcon/maroon.png');
      isDead[17]=false;
    }else{
      $('.maroon').attr('src', 'image/deadIcon/maroonD.PNG');
      isDead[17]=true;
    }
  });





  $('.reloadBox').on('click',function () {
    localStorage.setItem('joinParum',list);
    localStorage.setItem('joinNum',num);
    location.reload();
  });

// prevent pulldown reload
var $target = $(window);
var windowScrollTop;
var prevY = -1;
var direction = 0; // 0:neutral, -1:gotoTop, 1:gotoBottom
$target.on('touchstart', function(e){
    windowScrollTop = $target.scrollTop();
    prevY = e.originalEvent.changedTouches[0].pageY;
    direction = 0;
});
$target.on('touchmove', function(e){
    var currentY = e.originalEvent.changedTouches[0].pageY;
    if (direction == 0 && prevY != -1) {
        if (currentY > prevY) { direction = -1; }
        if (currentY < prevY) { direction =  1; }
    }
    if (windowScrollTop <= 0 && direction == -1) {
        e.preventDefault();
        return false;
    }
    prevY = currentY;
});

function disableScroll(event) {
  event.preventDefault();
}

// スクロール禁止
function noScroll() {
  // イベントと関数を紐付け
  document.addEventListener('touchmove', disableScroll, { passive: false });
  document.addEventListener('mousewheel', disableScroll, { passive: false });
}

function returnScroll() {    
  // イベントと関数を紐付け  
  document.removeEventListener('touchmove', disableScroll, { passive: false });
  document.removeEventListener('mousewheel', disableScroll, { passive: false });
}
