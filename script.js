document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);



// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//search bar functions
let search = () => {
  let filter = document.getElementById('input').value.toUpperCase();
  let table = document.getElementById('books');

  let tr = table.getElementsByTagName('tr');
  console.log("searching.....");

  for (let i = 0; i < tr.length; i++) {
    
    let td = tr[i].getElementsByTagName('td')[0];

    if (td) {
      let textvalue = td.Content || td.innerHTML;

      if (textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        let clearbtn = document.querySelector('.clear');
  clearbtn.style.display = "flex";
      }
    }
  }
}
let clearbtn = document.querySelector('.clear');
clearbtn.addEventListener('click',() =>{
  console.log("abcd");
  let input = document.querySelector(".input");
  input.value = "";
  clearbtn.style.display = "none";
  let table = document.getElementById('books');
  let tr = table.getElementsByTagName('tr');
  tr.style.display = "table-row";


})