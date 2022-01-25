let paragraph = document.getElementById('paragraph');
console.log(paragraph);

//getAttribute
let paragraphId = paragraph.getAttribute('id');
console.log(paragraphId);

//setAttribute

paragraph.setAttribute('id', 'info-paragraph');
console.log(paragraph);

let aTag = document.getElementById('google-link');
aTag.setAttribute('href', 'https://google.com');
aTag.setAttribute('target', '_blank');

//removeAttribute

paragraph.removeAttribute('id');
paragraph.setAttribute('class', 'paragraph');

//create elements

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'Elephant';
console.log(h2Tag);

//appendChild

let parent = document.getElementsByTagName('body')[0];
console.log(parent);

//let myArray = [...parent];
//console.log(myArray);
parent.appendChild(h2Tag);

//createTextNode
let text = document.createTextNode('This text is created dynamically');
parent.appendChild(text);

//insertBefore

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Heading 1 comes first';
parent.insertBefore(h1Tag, h2Tag);

//removeChild

parent.removeChild(paragraph);

//clear an element

let infoDiv = document.getElementById('info');
//infoDiv.innerHTML = '';

let secondDiv = document.getElementById('second');
secondDiv.innerHTML = `<h1>This was added trough javascript</h1>`;

//Events

let button = document.getElementById('add-item');

/* button.onclick = function () {
  console.log('Button was clicked');
}; */
h1Tag.onclick = function () {
  console.log('H1 was clicked');
};

// When the button is clicked:
//Create an li inside of the list. The li should have inside:
// Item Number (number)

let input = document.getElementsByTagName('input')[0];
console.log('input value:', input.value);

let sendBtn = document.getElementById('send-btn');

sendBtn.onclick = function () {
  console.log(input.value);
  input.value = '';
};

let list = document.getElementById('item-list');

const liTags = document.getElementsByTagName('li');
console.log(liTags);
button.onclick = function () {
  let item = document.createElement('li');
  list.appendChild(item);
  item.innerHTML = input.value;
  item.onclick = function (event) {
    console.log(event.currentTarget.innerHTML);
    event.currentTarget.style.textDecoration = 'line-through';
  };
  input.value = '';
};

/* for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = function (event) {
    console.log(event.currentTarget.innerHTML);
  };
}
 */
