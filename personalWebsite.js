function myFunction() {
    document.getElementById("test").innerHTML = "what da dog doin";
    document.getElementById("roach").style.display = "block";
}

function isMobile() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const isMobileAgent = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    return isTouch || isSmallScreen || isMobileAgent;
  }

function getDeviceType(){
    if (isMobile()){
        return "Mobile";
    }
    return "Desktop";
}

window.onload = function start(){

};
