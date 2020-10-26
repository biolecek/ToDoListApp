// Download elements

const form = document.querySelector('.form');
const taskInput = document.querySelector('#task-input');
const taskBtn = document.querySelector('.submit');
const collection = document.querySelector('.collection');
const tasksRemove = document.querySelector('.remove');


// Event listener for submit
loadEventListneres();

function loadEventListneres(){
    form.addEventListener('submit', addTask);
    tasksRemove.addEventListener('click', removeAll);


};

function addTask (e) {

    // Check if type something
    if(taskInput.value === ""){
        alert('Type something')
    }else{

    // Get taskValue
    const newTask = taskInput.value;

    //create li element
    const li = document.createElement('li');
    li.className = 'single-task';
    li.innerHTML = newTask;
    
    // add link to li
    const link = document.createElement('a');
    link.innerHTML = '<a class ="fas fa-trash-alt"></a>';
    li.appendChild(link);

    // Append li to collection
    collection.appendChild(li);

    // remove single-task
    link.addEventListener('click', function (e) {


        li.remove();
        e.preventDefault();
    });
    
    // Clear taskInput
    taskInput.value = '';
    e.preventDefault();
}
}

function removeAll(e){

    collection.innerHTML = '';
    e.preventDefault();
}

function deleteTask(){

}