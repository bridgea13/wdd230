const myButton = document.querySelector('#myButton');
const myList = document.querySelector('#myList');
const favchap = document.querySelector('#favchap');

const addChapterButton = document.querySelector('#addChapterButton');

addChapterButton.addEventListener('click', function() {

  console.log("Add Chapter button clicked!");
});

const deleteButton = document.querySelector('#deleteButton');

deleteButton.forEach(button => {
    button.addEventListener('click', function() {
        const listItem = button.parentNode;
        listItem.remove();
    });

});