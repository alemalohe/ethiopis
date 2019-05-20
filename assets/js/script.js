/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




var fileid = document.querySelector('#file');//gets file input by id file
var label = document.querySelector('#alem');//gets label for file input by id alem


//an onchange fucntion that changes files value to selected value by an onchange event 
fileid.onchange = function(){
  label.innerHTML= fileid.value;
  if(fileid.value.length > 29){
    label.style.cssText="font-weight: 500; font-size: 11px; overflow: hidden;";
  }

  if(fileid.value.length < 29){
    label.style.cssText="font-weight: 500; font-size: 13px; overflow: hidden;";
  }
}














//add module controller

var modalitself = document.querySelector('.main-mod');
var closemodal = document.querySelector('.header-x');
var addstuff = document.querySelector('#add');
var everythingelse = document.querySelector('.disaper')


function myclosefunction() {
  modalitself.hidden=true;
}

closemodal.addEventListener("click", myclosefunction);


addstuff.onclick = function(){
  modalitself.hidden = false;
}


//small modal controller
var modalitselfmin = document.querySelector('#adder');
var closemodalmin = document.querySelector('.header-x-min');
var addstuffmin = document.querySelector('#add-min');

function myclosefunctionmin() {
  modalitselfmin.hidden=true;
}

closemodalmin.addEventListener("click", myclosefunctionmin);


addstuffmin.onclick = function(){
  modalitselfmin.hidden = false;
}



//smaller nav controller
var smallnavmod = document.querySelector('.main-mod-min');
var togbtn = document.querySelector('.tog-btn');
var smallnav = document.querySelector('.sidenav-min');


function showmodalmin(){
  smallnavmod.hidden=false;
  smallnav.style.cssText=";";
}


togbtn.addEventListener('click', showmodalmin)


function closeNav(){
  smallnavmod.hidden=true;
}