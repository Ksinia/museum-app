var paintings = document.querySelectorAll('img.artObject');

document.addEventListener("mouseover", onMouseOver); // event is passed automatically, bacause it is a handler added in EventListener
// paintings.forEach(painting => (painting.addEventListener("mouseover", onMouseOver))); // this syntax for adding eventListener to each element of paintings
function onMouseOver(event) {
    if (Array.from(paintings).includes(event.target)) {
        paintings.forEach(function (element) {
            if (element != event.target) {
                element.classList.add('shadow');
            }
            else { element.classList.remove('shadow') }
        })
    }
    else {
        paintings.forEach(function (element) {
            element.classList.remove('shadow');
        })
    }
}



