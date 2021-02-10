//script.js

// 그룹(블록) 설정(함수)하고 사용하는 방법
// ++ : 1씩 증가 연산자 /+=1 : 1씩 증가 / +=2 : 2씩 증가 ...
// -- : 1씩 감소 연산자  /-=1 : 1씩 증가 / -=2 : 2씩 증가 ...
var cnt1 = 14;
var cnt2 = 14;
var cnt3 = 14;
var cnt4 = 14;
var cnt  = 0;

var  $mainBtn1 = document.querySelector('.main-btn1'); //버튼의 클래스를 변수 지정
var  $mainBtn2 = document.querySelector('.main-btn2'); //버튼의 클래스를 변수 지정
var  $mainBtn3 = document.querySelector('.main-btn3'); //버튼의 클래스를 변수 지정
var  $mainBtn4 = document.querySelector('.main-btn4'); //버튼의 클래스를 변수 지정

var $main = document.querySelector('#main');


//로고 클릭 이벤트
function mainFn(){
    cnt++;
    $main.style = 'left:'+ (-1000*cnt) +'px';
}
// cnt+=300;
    //  $main.style = 'margin-top:'+ cnt +'px';
// }


//메인 버튼 클릭 이벤트
function init1Fn(){
    cnt1++;//변수 cnt1 = 14 + 1 버튼 누를 때 마다 1씩 증가
            // cnt1+=3; 는 3씩 증가
     // DOM       
     $mainBtn1.style = 'font-size:' + cnt1 + 'px';
}
function init2Fn(){
    cnt2++;
    $mainBtn2.style = 'font-size:' + cnt2 + 'px';
}
function init3Fn(){
    cnt3++;
    $mainBtn3.style = 'font-size:' + cnt3 + 'px';
}
function init4Fn(){
    cnt4++;
    $mainBtn4.style = 'font-size:' + cnt4 + 'px';
}