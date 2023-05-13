let open = false;
function smoothTransition(){
    const container = document.querySelector('.expansion-container');
    const text = document.querySelector(".expanding-text");
    const mainPage = document.querySelector(".page-intro");
    if(open == false){
        container.style.display = "block";
        text.style.display = "block";
        mainPage.style.height = "500px";
        open = true;
    }
    else{
        container.style.display = "none";
        text.style.display = "none";
        mainPage.style.height = "400px";
        open = false;
    }
}