//document.body.children[1].children[0].href = 'https://google.com';

//let anchorElement = document.getElementById('external-link');
//anchorElement.href = 'https://google.com';

//anchorElement = document.querySelector('p a');
//anchorElement.href = 'https://academind.com';


//Add an element
// 1.create new Element

let newAnchorElement = document.createElement('a'); // Not visible, created only in the memory.
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

// 2.Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');


// 3. Insert the new element into the parent element content.

firstParagraph.append(newAnchorElement);