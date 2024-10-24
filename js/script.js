// validasi nama / user pada index
let user = prompt("Ketik Nama Anda");
document.getElementById("user").innerHTML = user;

// validasi pesan 
function validateForm() {
const name = document.forms["message-form"]["nama-lengkap"].value;
const date = document.forms["message-form"]["tanggal-lahir"].value;
const gender = document.forms["message-form"]["gender"].value;
const message = document.forms["message-form"]["pesan"].value;

if ((name == "", date == "", gender == "", message == "")) {
    alert("Form Tidak Boleh Kosong");
    return false;
}

setsenderUI(name, date, gender, message);
return false;
}

function setsenderUI(name, date, gender, message) {
document.getElementById("hasil-nama-lengkap").innerHTML = name;
document.getElementById("hasil-tanggal-lahir").innerHTML = date;
document.getElementById("hasil-gender").innerHTML = gender;
document.getElementById("hasil-pesan").innerHTML = message;
}

// Banner Slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs((slideIndex += n));
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("banner");
if (n > x.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = x.length;
}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
x[slideIndex - 1].style.display = "block";
  // Interval
setInterval(() => {
    plusDivs(1);
}, 7000);
}


// deklarasikan variabel mybutton yang berisikan id myBtn (mengambil button)
let mybutton = document.getElementById("myBtn");


// jadi ketika user scroll ke bawah sejauh 20px dari dokumen ter atas , maka tombol akan muncul
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
    top: 0,
      behavior: "smooth" // Tambahkan opsi ini untuk efek smooth
    });
}