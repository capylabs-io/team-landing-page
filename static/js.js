// animation
const tranactionItems = document.getElementsByClassName("display-transation");
const triggerBottom = (window.innerHeight / 14) * 13;

window.onload = (event) => {
    callDisplayTransaction(tranactionItems);
  }
  
  window.addEventListener("scroll", function (event) {
    callDisplayTransaction(tranactionItems);
  });
  
  function callDisplayTransaction(tranactionItems) {
    Array.from(tranactionItems).forEach((item) => {
      let itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  }