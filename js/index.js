function readmore1() {
    let callone = document.getElementById('one');
    if (callone.innerHTML === "+"){
        callone.innerHTML ="-";
    }
    else callone.innerHTML = "+";
    document.querySelector('.textone').classList.toggle('active');
}
function readmore2() {
    let calltwo = document.getElementById('two');
    if (calltwo.innerHTML === "+"){
        calltwo.innerHTML ="-";
    }
    else calltwo.innerHTML = "+";
    document.querySelector('.texttwo').classList.toggle('active');
}
function readmore3() {
    let callthree = document.getElementById('three');
    if (callthree.innerHTML === "+"){
        callthree.innerHTML ="-";
    }
    else callthree.innerHTML = "+";
    document.querySelector('.textthree').classList.toggle('active');
}
function readmore4() {
    let callfour = document.getElementById('four');
    if (callfour.innerHTML === "+"){
        callfour.innerHTML ="-";
    }
    else callfour.innerHTML = "+";
    document.querySelector('.textfour').classList.toggle('active');
}
function readmore5() {
    let callfour = document.getElementById('five');
    if (callfour.innerHTML === "+"){
        callfour.innerHTML ="-";
    }
    else callfour.innerHTML = "+";
    document.querySelector('.textfive').classList.toggle('active');
}
function morephilosofy() {
    document.querySelector('.morebtn2').classList.toggle('none');
    document.querySelector('.philosophy2').classList.toggle('active');
    document.querySelector('.mission').classList.toggle('active'); 

}
function navopen(){
    document.querySelector('.nav').classList.toggle('active');
}
function backcall(){
    document.querySelector('.full_popup_backcall').classList.toggle('active');
    document.querySelector('.popup_backcall').classList.toggle('active');
}
function scrollToElement(id) {
    var element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
function vacancy(){
    document.querySelector('.full_popup_vacancy').classList.toggle('active');
    document.querySelector('.popup_vacancy').classList.toggle('active');
}