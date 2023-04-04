function initializeEyeTracking() {
    var balls = document.getElementsByClassName("ball");
    var pupils = document.getElementsByClassName("pupil");
    document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";
  
      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  
        pupils[i].style.left = x;
        pupils[i].style.top = y;
        pupils[i].style.transform = "translate(-" + x + ",-" + y + ")";
      }
    };
  }
  
  window.addEventListener('DOMContentLoaded', initializeEyeTracking);