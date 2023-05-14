let open = false;
function smoothTransition(){
    const container = document.querySelector('.expansion-container');
    const text = document.querySelector(".expanding-text");
    const mainPage = document.querySelector(".page-intro");
    const button = document.querySelector(".expanding-button");
    if(open == false){
        container.style.display = "block";
        text.style.display = "block";
        mainPage.style.height = "500px";
        button.style.background = "antiquewhite";
        open = true;
    }
    else{
        container.style.display = "none";
        text.style.display = "none";
        mainPage.style.height = "400px";
        button.style.background = "cornsilk";
        open = false;
    }
}

function checkReload(){
    
    if(document.cookie.indexOf('mycookie')==-1) {
        // The cookie doesn't exist. Create it now
        document.cookie = 'mycookie=1';
    }
    else{
        console.log('this works');
        return;
    }
}