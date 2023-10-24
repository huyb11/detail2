// Lấy modal
var modal = document.getElementsByClassName("canvas-customer-login")[0];

var modalMenu = document.getElementsByClassName("header-canvas-menu")[0];

// Lấy button mở modal
var btn = document.getElementsByClassName("header-account")[0];

var btnMenu = document.getElementsByClassName("action-menu-responsive")[0];


var overLay = document.getElementsByClassName("header-overlay")[0];


// Lay btn close modal

var btnClose = document.getElementsByClassName("close")[0];
var btnClose2 = document.getElementsByClassName("header-overlay")[0];

var btnCloseMenu = document.getElementsByClassName("close-menu")[0];



// Khi người dùng nhấp vào nút, mở modal
btn.onclick = function () {
  modal.style.right = "0";
  overLay.style.display = "block";
};

btnMenu.onclick = function () {
  modalMenu.style.left = "0";
  overLay.style.display = "block";
};


// Khi người dùng nhấp vào nút, mở modal
btnClose.onclick = function () {
  modal.style.right = "-500px";
  overLay.style.display = "none";

};

btnClose2.onclick = function () {
  modal.style.right = "-500px";
  overLay.style.display = "none";

};

btnCloseMenu.onclick = function () {
  modalMenu.style.left = "-450px";
  overLay.style.display = "none";

};

btnClose2.onclick = function () {
  modal.style.right = "-500px";
  modalMenu.style.left = "-450px";
  overLay.style.display = "none";
};

//Even scroll 

const detail = document.getElementById("detail")
const header = document.getElementsByClassName("middle-content")[0]
document.onscroll = function(e) {
  console.log(window.pageYOffset)
  if(window.pageYOffset > 100) {
    header.style.padding = "20px 40px";
    header.style.boxShadow = " 0 5px 15px 0 rgba(0,0,0,.1)";
  } else {
    header.style.padding = "45px 40px";
    header.style.boxShadow = "none";

  }
}






