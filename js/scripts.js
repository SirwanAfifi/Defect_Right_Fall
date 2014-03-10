var btns = document.getElementsByClassName('get-info');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseover', function (e) {
        //console.log(this.innerText);
        //console.log(e.target.nextSibling.nextSibling);
        e.target.nextSibling.nextSibling.style.display = "inline";
    }, false);
    btns[i].addEventListener('mouseout', function (e) {
        //console.log(this.innerText);
        //console.log(e.target.nextSibling.nextSibling);
        e.target.nextSibling.nextSibling.style.display = "none";
    }, false);
}