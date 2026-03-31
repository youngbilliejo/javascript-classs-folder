// A. Console.log the content of the list items in seperate lines.
for (let i = 0; i<5;i++){
    console.log(document.getElementsByTagName('li')[i].innerText)
}
// B. Console.log the first word of the second paragraph.
const firstWord = document.getElementsByTagName('p')[1]?.innerText.split(' ')[0];

console.log(firstWord);
//  Exercise C.  Console.log the number of paragraphs on the website.
console.log(document.getElementsByTagName('p').length);