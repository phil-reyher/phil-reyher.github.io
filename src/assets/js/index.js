console.log("%cHELLO, WORLD!!!", "color: green");


let headerHeight;

window.onload = function() {
    // Get the header element
    const header = document.querySelector(".c-header");

    // Get the height of the header
    const headerHeight = header.offsetHeight;

    // Set the scroll padding top on the body element
    document.documentElement.style.scrollPaddingTop = headerHeight + 16 +"px";
    console.log(headerHeight);
  }
