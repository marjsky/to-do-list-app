function newItem() {

    //1 Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = $('button').append(document.createTextNode(inputValue));
    li.append(text);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        let list = $('#list');
        list.append(li);
    }

    //2 Crossing out an item from the list of items:

    //3.1 adding the delete button "x":

    //3.2 adding CLASS DELETE (DISPLAY: NONE) from the css:

    //4 reording the items:
}