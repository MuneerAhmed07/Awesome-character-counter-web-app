let myText = document.getElementById('my-text');
let copyText = document.getElementById('btn');

// For Counting Character
myText.addEventListener('input', () => {
    let count = (myText.value).length;
    document.getElementById("count-result").textContent = `${count}`;
});

// For copying Text

copyText.addEventListener('click', () => {
    myText.select(); //select the textfield
    navigator.clipboard.writeText(myText.value); // copy the text inside the text field

    // Alert the copied text
    alert(`Copied the text: ${myText.value}`);
});