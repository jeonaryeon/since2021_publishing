$(function(){
  // 페이지 navigation 스크립트
  var $indicator=$('#navigation a');
  var portIdx=0;
  var nowIdx=0;
  var arrTopVal=[];

  $('article').each(function(idx){
    arrTopVal[idx]=$(this).offset().top;
  });

  function moveFn(topVal){
    $('html,body').animate({
      scrollTop:topVal
    });
  }

  $indicator.on('click',function(event){
    event.preventDefault();
    nowIdx=$indicator.index(this);
    moveFn(arrTopVal[nowIdx]);
  });
  
  $(window).on('scroll',function(){
    var scrollTop=$(this).scrollTop() + 200;

    for(var i=0; i<5; i++){
      if(scrollTop>=arrTopVal[i]){
        $indicator.eq(i).addClass('current').parent().siblings().children().removeClass('current');
      }
    }
  }); // end of 페이지 navigation 스크립트

  // award 슬라이드
  var n=0;
  var liW=$('#main_award .text li').width();
  var liNum=$('#main_award .text li').length;
  var slideUl=$('#main_award .text ul');
  $('#main_award .text').width(liW);
  $('#main_award .text ul').width(liW*liNum);
  $('.award_btn .left').on('click',function(){
    $(slideUl).find('li').eq(liNum-1).prependTo($(slideUl));
    $(slideUl).css('left',-liW);
    $(slideUl).stop().animate({left:0},600);
  });
  
  $('.award_btn .right').on('click',function(){
    $(slideUl).stop().animate({left:-liW},600,function(){
      $(slideUl).find('li').eq(0).appendTo($(slideUl));
      $(slideUl).css('left','0px');
    });
  }); // end of award 슬라이드
    
    
  // scroll시 객체 보이기 
  $window = $(window);
 
  // 다음 섹션이 브라우저 하단으로부터 200px 만큼 보여질때
  var delayPosition = 200,
      // 현재 브라우저의 높이값
      windowheight; 

  // 브라우저의 크기가 변하면 대상 엘리먼트의 위치값을 다시 할당
  $window.on('resize', function() {
    insertTargetPosition();
  });

  // 스크롤이 이동할때
  $window.on('scroll', function() {
    // 현재의 위치 = 스크롤이 이동한 값 + 윈도우 높이 - 처음에 선언한 지연 위치값(200);
    var position = $window.scrollTop() + windowheight - delayPosition;

    // 아직 활성화되지 않은 타겟 엘리먼트를 순회하여
    $('.ready').each(function() {
      // 활성화되어 있지 않고 타겟의 위차값이 현재 위치값보다 작으면
      if(!$(this).hasClass('active') && $(this).data('offsetTop') < position) {
        // 활성화
        $(this).addClass('active');
        // 활성화 된 엘리먼트는 이후 타겟에서 제외
        $(this).removeClass('ready');
      }
    });
  });

  function insertTargetPosition() {
    windowheight = $window.height(); // 브라우저의 높이값 할당
    $('.target-section').each(function() { // 모든 대상 엘리먼트에
      $(this).data('offsetTop', ($(this).offset().top)); // 각자의 위치 값을 할당
    });
  }

  function init() {
    // 최초 진입시 각 섹션의 위치값을 할당
    // 컨텐츠 중에 이미지 파일이 있거나 비동기로 가져오는 값이 있다면, 대상 요소들이 모두 불러진 후에
    // 각 섹션의 위치값을 다시 할당해 줘어야 합니다.
    insertTargetPosition();
  }
  init();
}); 



