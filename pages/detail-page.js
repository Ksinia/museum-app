// add event handler
function submitComment() {
    // gather data
    const inputFieldName = document.getElementById('name');
    const name = inputFieldName.value;
    const inputFieldMsg = document.getElementById('msg');
    const msg = inputFieldMsg.value;
    //create elements of the page
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    //assigning gathered info to elements
    h3.innerHTML = `${name} said:`; // important to use this kind of quotes
    p.innerHTML = msg;
    //add class for proper display of comment
    comment.classList.add('comment');
    // add elements to comment
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);
    //finding the section for comments and put comment there
    const commentSection = document.getElementById("comments");
    commentSection.appendChild(comment);
    // clear inout fields
    inputFieldMsg.value = null;
    inputFieldName.value = null;
}