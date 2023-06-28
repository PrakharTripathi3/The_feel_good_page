// FUNCTION SECTION 1  >>> TO UNDERSTAND
const right=document.getElementById("rightside");
const anotherLeft = document.getElementById("leftside2");

const handleOnMove = e =>{
const r = e.clientX / window.innerWidth * 100;
const q = (window.innerWidth - e.clientX) / window.innerWidth * 100;
right.style.width=`${r}%`;
anotherLeft.style.width = `${q}%`;

};

document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);


// FUNCTION SECTION 2

function barclickfunction(){
document.getElementById("desktop").style.display="block";
document.getElementById("barclose").style.display="none";
document.getElementById("closing").style.display="block";
}

function closeclickfunction(){

document.getElementById("desktop").style.display="none";
document.getElementById("closing").style.display="none";
document.getElementById("barclose").style.display="block";

} 


// FUNCTION SECTION 3  >>> TO UNDERSTAND addEventlistener

window.addEventListener('resize', function() {
var screenWidth = window.innerWidth;
var desktopHeader = document.getElementById("desktop");

if (screenWidth > 600) {
  desktopHeader.style.display = 'block';
} else {
  desktopHeader.style.display = 'none';
}
});
