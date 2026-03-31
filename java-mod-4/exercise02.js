// console.log the second and the fourth list item 
// inside the second section only.

// A. You;re allowed to use the class .js second-section
const selectedListItemsA = document.querySelectorAll(
'.js-item-list > li:nth-child(2n)')
    '.js-second-section > .js-item-list > li:nth-child(2n)'
;
for (let item of selectedListItemsA) {
    console.log(item.innerText);
}
// or you can call the same thing by doing this..
//[...document.querySelectorAll('.js-item-list > li:nth-child(2n)')]
//.map(item => item.innerText)
//.join('/n');  // 9:45 in video lesson 6
// B. You are not allowed to use the class .js-second-section,
// but you are allowed to use the class .js-second-section-title

//undoable from the way the german guy laid it out.
const selectedListItemsB = document.querySelectorAll(
    '.js-second-section-title ~ .js-item-list > li:nth-child(2n)'
);
for (let item of selectedListItemsB) {
    console.log(item.innerText);
}