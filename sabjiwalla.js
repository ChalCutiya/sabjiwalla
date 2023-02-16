
function slide1() {
    document.getElementById("img").src = "./static/first.jpg";
}
function slide2() {
    document.getElementById("img").src = "./static/second.jpg";
}
function slide3() {
    document.getElementById("img").src = "./static/third.jpg";
}
setInterval(slide1, 2000);
setInterval(slide2, 4000);
setInterval(slide3, 6000); 
console.log("it is connected");