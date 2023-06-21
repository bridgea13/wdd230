// const myButton = document.querySelector('#myButton');
// const myList = document.querySelector('#myList');
// const favchap = document.querySelector('#favchap');

// const addChapterButton = document.querySelector('#addChapterButton');

// addChapterButton.addEventListener('click', function() {

//   console.log("Add Chapter button clicked!");
// });

// const deleteButton = document.querySelector('#deleteButton');

// deleteButton.forEach(button => {
//     button.addEventListener('click', function() {
//         const listItem = button.parentNode;
//         listItem.remove();
//     });

// });

const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });