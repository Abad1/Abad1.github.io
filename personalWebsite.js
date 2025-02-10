function myFunction() {
    document.getElementById("test").innerHTML = "what da dog doin";
    document.getElementById("roach").style.display = "block";
}

const projects = document.getElementById("projects");

function scrollLeft(){
    projects.scrollBy({
        left: -distance,
        behavior: 'smooth'
    });
}

function scrollRight(){
    projects.scrollBy({
        left: -distance,
        behavior: 'smooth'
    });
}