function myFunction() {
    document.getElementById("test").innerHTML = "what da dog doin";
    document.getElementById("roach").style.display = "block";
}

function getDeviceType(){
    const userAgent = navigator.userAgent;
    const width = window.innerWidth;
    if (/Mobi|Android/i.test(userAgent) || width <= 768){
        return "Mobile";
    } else if ( /Tablet|iPad/i.test(userAgent) || (width > 768 && width <= 1024)){
        return "Tablet";
    } else {
       return "Desktop";
    }
}

window.onload = function start(){
    const deviceType = getDeviceType();
    document.getElementById("deviceType").innerHTML = deviceType;
    if (deviceType === "Mobile"){
        document.querySelector(".summary").style.maxWidth = "100vw";
        document.querySelector(".work").style.width = "85vw";
        document.querySelectorAll(".project a").forEach(link => {
            link.style.height = "33vh";
            link.style.minWidth = "85vw";
            link.style.marginLeft = "5px";
            link.style.paddingRight = "5px";
        });
    }
};
