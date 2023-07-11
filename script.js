document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);



function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  ${"#name"}.text('Name: ' + profile.getName())
  ${"#email"}.text('Email :  ' + profile.getEmail())
  ${"#image"}.attr('src', profile.getImageUrl())
}






let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", ()=> {
  let navbar = document.querySelector(".header-bottom")
  navbar.classList.toggle("active");
  let line1 = document.querySelector('.line1')
  line1.classList.toggle("active");
  let line2 = document.querySelector('.line2')
  line2.classList.toggle("active");
  let line3 = document.querySelector('.line3')
  line3.classList.toggle("active");

  let list = document.querySelector(".grades ul");
  list.classList.toggle("active");
  let listf = document.querySelector(".grades ul.active")  
   listf.style.opacity = "100%";
})

let mybutton = document.getElementById("myBtn");
window.onscroll =()=> {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  }
  else {
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
  let filter = document.getElementById('iinput').value.toUpperCase();
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
clearbtn.addEventListener('click', () => {
  console.log("abcd");
  let input = document.querySelector("#iinput");
  input.value = "";
  clearbtn.style.display = "none";
  search() = false;
})

let search1 = () => {
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
        let clearbtn = document.querySelector('.clear1');
        clearbtn.style.display = "flex";
      }
    }
  }
}


let clearbtn1 = document.querySelector('.clear1');
clearbtn1.addEventListener('click', () => {
  console.log("abcd");
  let input = document.querySelector("#input");
  input.value = "";
  clearbtn1.style.display = "none";
  search1() = false;
})
