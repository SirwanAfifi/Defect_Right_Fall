var btns = document.getElementsByClassName('get-info');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseover', showDetails, false);
    btns[i].addEventListener('mouseout', hiddenDetails, false);
    btns[i].nextElementSibling.addEventListener('mouseover', showParagraph, false);
    btns[i].nextElementSibling.addEventListener('mouseout', hideParagraph, false);
}

function showDetails() {
    this.nextElementSibling.style.display = "inline-block";
}


function hiddenDetails() {
    this.nextElementSibling.style.display = "none";
}

function showParagraph () {
    this.style.display = "inline-block";
}

function hideParagraph () {
    this.style.display = "none";
}
