// animation
const tranactionItems = document.getElementsByClassName("display-transation");
const triggerBottom = (window.innerHeight / 14) * 13;
const triggerTop = (window.innerHeight / 14) * 13;

window.onload = (event) => {
    callDisplayTransaction(tranactionItems);
  }
  
  window.addEventListener("scroll", function (event) {
    trigerTop = window.pageYOffset || document.documentElement.scrollTop;
    callDisplayTransaction(tranactionItems);
  });
  
  window.addEventListener("resize", function (event) {
    trigerTop = window.pageYOffset || document.documentElement.scrollTop;
    callDisplayTransaction(tranactionItems);
  });

  function callDisplayTransaction(tranactionItems) {
    Array.from(tranactionItems).forEach((item) => {
      let itemTop = item.getBoundingClientRect().top;
      let itemBottom = item.getBoundingClientRect().bottom;
      if (itemTop <= triggerBottom && itemBottom > 0) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  }