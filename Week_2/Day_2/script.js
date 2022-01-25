//Get element by id
let branchDiv = document.getElementById('branch');
console.log('the branch div:', branchDiv);

branchDiv.innerHTML = 'This is a branch';

branchDiv.style.border = '3px solid black';
branchDiv.style.backgroundColor = 'yellow';

let changeColor = (element) => {
  if (element.style.backgroundColor === 'yellow') {
    element.style.backgroundColor = 'blue';
  } else {
    element.style.backgroundColor = 'yellow';
  }
};

//setInterval(changeColor, 1500, branchDiv);

//get elements by class name
let leaves = document.getElementsByClassName('leaf');

//console.log(leaves);

const randomNumbers = () => {
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].innerHTML = Math.floor(Math.random() * 10).toString();
  }
};

//setInterval(randomNumbers, 1000);

//get elements by tag name

let divs = document.getElementsByTagName('div');
//console.log(divs);

//querySelector

let firstLeaf = document.querySelector('.leaf');
//console.log(firstLeaf);

//querySelectorAll

let allDivs = document.querySelectorAll('#branch, .leaf');
//console.log(allDivs);

//className
let twigDiv = document.querySelector('.twig');
console.log(twigDiv);

/* twigDiv.className = 'leaf';
console.log(twigDiv); */

//classList

//add
twigDiv.classList.add('fruit');
console.log(twigDiv);

//toggle (adds if not there, removes if it already exists)
twigDiv.classList.toggle('twig');
twigDiv.classList.toggle('tree');

//console.log(twigDiv);

twigDiv.classList.remove('tree');
//console.log(twigDiv);

//access id
branchDiv.id = 'tree';
console.log(branchDiv.id);
