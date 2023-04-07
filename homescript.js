if (screen.width < 555) {
    // for <nav>
    // document.body.getElementsByClassName("navigation")[0].remove(); 
    document.body.getElementsByClassName("navigation")[0].firstElementChild.remove();
    document.body.getElementsByClassName("navigation")[0].firstElementChild.remove();
    document.body.getElementsByClassName("navigation")[0].style.position="unset";
  
  
    //for <main> <left>
    document.body.getElementsByClassName("left")[0].remove();
    //for<main> <right>
    document.body.getElementsByClassName("right")[0].style.width = "100vw";
  
    //for <footer>
    document.body.getElementsByClassName("side")[0].remove();
    document.body.getElementsByClassName("up")[0].style.display = "grid";
    // document.body.getElementsByClassName("up")[0].style.rowGap="0px";
    document.body.getElementsByClassName("web_info")[0].style.width = "100%";
    document.body.getElementsByClassName("policy")[0].style.width = "100%";
    document.body.getElementsByClassName("Help")[0].style.width = "100%";
  
  }
  else {
    document.body.children[1].remove();
    document.body.getElementsByClassName("categories_button")[0].remove();
  }
  