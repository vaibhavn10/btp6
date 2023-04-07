if (screen.width < 555) {
    //for <header icons>
    document.body.getElementsByClassName("logo")[0].firstElementChild.firstElementChild.style.blockSize = "50%";
    document.body.getElementsByClassName("dropdown")[0].firstElementChild.style.display = "block";
    document.body.getElementsByClassName("dropdown")[0].firstElementChild.style.marginTop = "10px";
    document.body.getElementsByClassName("dropdown")[0].firstElementChild.style.fontSize = "smaller";
  
    //for <card names/book names>
    const l = document.body.getElementsByClassName("card-body").length;
    for (let i = 0; i < l; i++) {
      document.body.getElementsByClassName("card-body")[i].style.fontSize = "60%";
      document.body.getElementsByClassName("card-body")[i].style.padding = "10px";
    }
  
  }