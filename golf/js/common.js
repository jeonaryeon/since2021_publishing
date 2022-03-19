$(function(){
  // scroll시 객체 보이기 
  const saTriggerMargin = 300;
  const saElementList = document.querySelectorAll('.ready');

  const saFunc = function() {
    for (const element of saElementList) {
      if (!element.classList.contains('active')) { // 활성화되어 있지 않고 타겟의 위차값이 현재 위치값보다 작으면
        if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
          element.classList.add('active'); // 'active' class 추가
        }
      }
    }
  }

  window.addEventListener('load', saFunc);
  window.addEventListener('scroll', saFunc);
  window.on('resize', function() { // resize시 saFunc 다시 실행
    saFunc();
  });
}); 



