// add event handler
function submitComment() {
    // gather data
    const inputFieldName = document.getElementById('name');
    const name = inputFieldName.value;
    const inputFieldMsg = document.getElementById('msg');
    const msg = inputFieldMsg.value;
    //validation
    if (doesNotPassAllValidations(name, msg)) {
        return null
    }
    //change first letter of the name to upper case
    const newName = name[0].toUpperCase() + name.slice(1);
    //create elements of the page
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    //assigning gathered info to elements
    h3.innerHTML = `${newName} said:`; // important to use this kind of quotes
    p.innerHTML = msg;
    //add class for proper display of comment
    comment.classList.add('comment');
    // add elements to comment
    comment.appendChild(h3);
    comment.appendChild(p);
    //finding the section for comments and put comment there
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
    // clear inout fields
    inputFieldMsg.value = null;
    inputFieldName.value = null;
}

function doesNotPassAllValidations(name, msg) {
    if (!name) {
        alert('You forgot to fill in your name!');
        return true;
    }
    if (!msg) {
        alert('You forgot to fill in your message!');
        return true;
    }
    if (msg.length > 280) {
        alert(`Your message must not exceed 280 symbols. Now it is ${msg.length} symbols`);
        return true;
    }
    return false;
}

//replace the picture and title with the correct ones
console.log(document.getElementById('painting'))
document.getElementById('painting').src = sessionStorage.getItem("imageURL");
document.getElementById('painting').alt = sessionStorage.getItem("imageName");
document.getElementById('painting-title').innerHTML = sessionStorage.getItem("imageName")

console.log(sessionStorage.getItem("imageURL"));

