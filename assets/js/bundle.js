!function(){"use strict";var e=window.pageYOffset,o=document.querySelector(".c-header-bar").offsetHeight,t=document.querySelector("header"),n=t.offsetHeight+o;t.offsetTop,window.onscroll=function(){var o=window.pageYOffset;t.style.transform=e<=o&&o>n?"translateY(-"+n+"px)":"none",e=o},console.log("%cHELLO, WORLD!!!","color: green")}();
