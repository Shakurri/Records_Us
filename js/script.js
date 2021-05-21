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



var list=['black','blue','brown','green','lightblue','lome','orange','pink','pink','purple','red','white','yellow'];
for(let i=0;i<list.length;i++){
  list[i]=true;
}

$('.checkBlack').on('click',function(){
  if(list[0]){
    $('.checkBlack').attr('src', 'image/UI/checkNull.png');
    $('.black').addClass('crewHide');
  }else{
    $('.checkBlack').attr('src', 'image/UI/checked.png');
    $('.black').removeClass('crewHide');
  }
  list[0]=!list[0];
});
$('.checkBlue').on('click',function(){
  if(list[1]){
    $('.checkBlue').attr('src', 'image/UI/checkNull.png');
    $('.blue').addClass('crewHide');
  }else{
    $('.checkBlue').attr('src', 'image/UI/checked.png');
    $('.blue').removeClass('crewHide');
  }
  list[1]=!list[1];
});
$('.checkBrown').on('click',function(){
  if(list[2]){
    $('.checkBrown').attr('src', 'image/UI/checkNull.png');
    $('.brown').addClass('crewHide');
  }else{
    $('.checkBrown').attr('src', 'image/UI/checked.png');
    $('.brown').removeClass('crewHide');
  }
  list[2]=!list[2];
});
$('.checkGreen').on('click',function(){
  if(list[3]){
    $('.checkGreen').attr('src', 'image/UI/checkNull.png');
    $('.green').addClass('crewHide');
  }else{
    $('.checkGreen').attr('src', 'image/UI/checked.png');
    $('.green').removeClass('crewHide');
  }
  list[3]=!list[3];
});
$('.checkLightblue').on('click',function(){
  if(list[4]){
    $('.checkLightblue').attr('src', 'image/UI/checkNull.png');
    $('.lightblue').addClass('crewHide');
  }else{
    $('.checkLightblue').attr('src', 'image/UI/checked.png');
    $('.lightblue').removeClass('crewHide');
  }
  list[4]=!list[4];
});
$('.checkLime').on('click',function(){
  if(list[5]){
    $('.checkLime').attr('src', 'image/UI/checkNull.png');
    $('.lime').addClass('crewHide');
  }else{
    $('.checkLime').attr('src', 'image/UI/checked.png');
    $('.lime').removeClass('crewHide');
  }
  list[5]=!list[5];
});
$('.checkOrange').on('click',function(){
  if(list[6]){
    $('.checkOrange').attr('src', 'image/UI/checkNull.png');
    $('.orange').addClass('crewHide');
  }else{
    $('.checkOrange').attr('src', 'image/UI/checked.png');
    $('.orange').removeClass('crewHide');
  }
  list[6]=!list[6];
});
$('.checkPink').on('click',function(){
  if(list[7]){
    $('.checkPink').attr('src', 'image/UI/checkNull.png');
    $('.pink').addClass('crewHide');
  }else{
    $('.checkPink').attr('src', 'image/UI/checked.png');
    $('.pink').removeClass('crewHide');
  }
  list[7]=!list[7];
});
$('.checkPurple').on('click',function(){
  if(list[8]){
    $('.checkPurple').attr('src', 'image/UI/checkNull.png');
    $('.purple').addClass('crewHide');
  }else{
    $('.checkPurple').attr('src', 'image/UI/checked.png');
    $('.purple').removeClass('crewHide');
  }
  list[8]=!list[8];
});
$('.checkRed').on('click',function(){
  if(list[9]){
    $('.checkRed').attr('src', 'image/UI/checkNull.png');
    $('.red').addClass('crewHide');
  }else{
    $('.checkRed').attr('src', 'image/UI/checked.png');
    $('.red').removeClass('crewHide');
  }
  list[9]=!list[9];
});
$('.checkWhite').on('click',function(){
  if(list[10]){
    $('.checkWhite').attr('src', 'image/UI/checkNull.png');
    $('.white').addClass('crewHide');
  }else{
    $('.checkWhite').attr('src', 'image/UI/checked.png');
    $('.white').removeClass('crewHide');
  }
  list[10]=!list[10];
});
$('.checkYellow').on('click',function(){
  if(list[11]){
    $('.checkYellow').attr('src', 'image/UI/checkNull.png');
    $('.yellow').addClass('crewHide');
  }else{
    $('.checkYellow').attr('src', 'image/UI/checked.png');
    $('.yellow').removeClass('crewHide');
  }
  list[11]=!list[11];
});





var old_x = 0;
var old_y = 0;
var x;
var y;
var globalCompositeOperation  = 'source-over';
var selectColor = "#3f484e";
var selectSize = 5;
var selectEmoji = '';

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
  ctx[i].strokeStyle="#e01454";
}


window.onload = function() {
  for(var i=0;i<6;i++){
    canvas[i].width=window.innerWidth;
    canvas[i].height=window.innerHeight;
    canvas[i].addEventListener("touchstart", touchStart, false);
    canvas[i].addEventListener("touchmove", touchMove, false);
  }
}

function touchStart(e) {
    old_x = e.touches[0].pageX;
    old_y = e.touches[0].pageY;
}

function touchMove(e) {
    e.preventDefault();

    x = e.touches[0].pageX;
    y = e.touches[0].pageY;

    drawLine(old_x, old_y, x, y, nowCtx);
    old_x = x;
    old_y = y;
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
    selectColor="#72491";
    $('.col').removeClass('add_col_choice');

    if(!$(this).hasClass('add_col_choice')){
      $(this).addClass('add_col_choice');
    }
    $('.eraBut').removeClass('add_col_choice');
    globalCompositeOperation='source-over'; 
    selectSize=5;
  });
  $('.blackP').on('click',function () {
    selectColor="#3f484e";
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
    selectColor="#c5d5e1";
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

  $('.skeldChange').on('click',function(){
    $('.mapBox').attr('src', 'image/skeldMap.PNG');
  });
  $('.mirahqChange').on('click',function(){
    $('.mapBox').attr('src', 'image/mirahqMap.PNG');
  });
  $('.polusChange').on('click',function(){
    $('.mapBox').attr('src', 'image/polusMap.PNG');
  });
  $('.airshipChange').on('click',function(){
    $('.mapBox').attr('src', 'image/airshipMap.PNG');
  });





  $('.reloadBox').on('click',function () {
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

