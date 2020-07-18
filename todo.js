const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDOs';


let toDos =[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // strings into numbers
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //objects into strings
}

function paintToDo(text){
    const li = document.createElement("li"); //const li can be potato or sth else
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "✖";    //✅✖

    const newId = toDos.length + 1;
    //length means the number of elements of that array
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); //delBtn in li
    li.appendChild(span); //span in li
    li.id= newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,

        id: newId 
    };
    toDos.push(toDoObj); //put toDoObj in that array
    saveToDos(); //after! push!
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();