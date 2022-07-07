/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
let dropCaller = document.getElementById('dropCaller');
let dropDown = document.getElementById('dropDown');
let dropDown2 = document.getElementById('dropDown2');
let dropCheck = false;
dropCaller.addEventListener('click', function() {
  if (!dropCheck) {
    dropDown.style.display = 'block';
    dropCheck = true;
  }else {
    dropDown.style.display = 'none';
    dropCheck = false;
  }
});

//Try to move to a link location when clicking the following containers
let cont1 = document.querySelector('#imgCont');
let cont2 = document.querySelector('#imgCont1');
let cont3 = document.querySelector('#imgCont2');
let cont4 = document.querySelector('#imgCont3');

//Defining the links
cont1.addEventListener('click',()=>{
  window.location = "test.html"
});

cont2.addEventListener('click',()=>{
  window.location = "test.html"
});

cont3.addEventListener('click',()=>{
  window.location = "test.html"
});

cont4.addEventListener('click',()=>{
  window.location = "test.html"
});

//Closing the side dropdown
let closeButton = document.querySelector('#closeBtn');
closeButton.addEventListener('click', ()=>{
  dropDown.style.display = 'none';
  dropDown2.style.display = 'none';
});

//script for the mobile menu display
let openButton = document.querySelector('#sideBarButton');
let openButton2 = document.querySelector('.container');

openButton2,openButton.addEventListener('click', ()=>{
  dropDown2.style.right = '0';
  dropDown2.style.transition = '1s';
});

let closeButton2 = document.querySelector('#closeBtn2');
closeButton2.addEventListener('click', ()=>{
  dropDown2.style.right = '-100%';
  dropDown2.style.transition = '1s';
});
//script for the mobile menu display ends here

//script for FAQ expansion
function toggleElement(id)
{
    if(document.getElementById(id).style.display == 'none')
    {
        document.getElementById(id).style.display = 'block';
    }
    else
    {
        document.getElementById(id).style.display = 'none';
    }
}
//mobile menu icon
function myFunction(x) {
  x.classList.toggle("change");
}