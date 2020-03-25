function $(selector){
    return document.querySelector(selector);
}

let errors = [];

count = 1;
var input = $('#userInput');
var button = $('#enter');
var ul = $('#tasklist');

button.addEventListener('click', enterBtnClicked);

function isValidLength(element){
    if(element.value.length > 0){
        return true
    }
    return false;
}
function deleteTask(){
    this.firstElementChild.classList = 'fa fa-check';
}
function enterBtnClicked(){
    if(!isValidLength(input)){
        errors.push('You cannot leave this field empty');
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></li>'
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(document.createTextNode(`${count}) ${input.value}`));
    li.appendChild(deleteButton);
    
    ul.appendChild(li);
    count += 1;
}

