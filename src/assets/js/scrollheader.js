var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerBar = document.querySelector('.c-header-bar');
var headerBarHeight = headerBar.offsetHeight;
var headerDiv = document.querySelector("header");
var headerHeight = headerDiv.offsetHeight+headerBarHeight;
var headerBottom = headerDiv.offsetTop + headerHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos && currentScrollPos > headerHeight ){
    headerDiv.style.transform = "translateY(-" + headerHeight + "px)";
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{  
    headerDiv.style.transform = "none";
  }

  prevScrollpos = currentScrollPos;
}