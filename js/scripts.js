var btns = document.getElementsByClassName('get-info');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseover', showDetails, false);
    btns[i].addEventListener('mouseout', hiddenDisplay, false);
}

function showDetails() {
    this.nextElementSibling.style.display = "inline-block";
}

function hiddenDisplay() {
    this.nextElementSibling.style.display = "none";
}