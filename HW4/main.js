const lasttodo = document.getElementById("newtodo");
const inputtodo = document.getElementById("inputtodo");
const addBtn = document.getElementById('btn');
const counttodo = document.getElementById('todocount');
const complete = document.getElementById('complete');
const allcheck = document.getElementById('allcheck');
let select = document.getElementById('select_order');

let todocount = 0;
let completecount = 0;
counttodo.textContent = "남은 할 일 : " + todocount;
complete.textContent = "완료한 일 : " + completecount;
function createtodo() {

  const newdiv = document.createElement('div');

    const newinput = document.createElement('input');
    newinput.setAttribute("type","checkbox");
    newinput.className = "checked";
    newinput.addEventListener('change', checkbox);

    const newspan = document.createElement('span');
    newspan.textContent = inputtodo.value;
    inputtodo.value ="";
    newspan.addEventListener('dblclick', modifytodo);

    const newbutton = document.createElement('button');
    newbutton.id = "delete";
    newbutton.textContent = "delete";
    newbutton.addEventListener('click', deletetodo);
    
    newdiv.appendChild(newinput);
    newdiv.appendChild(newspan);
    newdiv.appendChild(newbutton);

    lasttodo.appendChild(newdiv);
    todocount++;
    counttodo.textContent = "남은 할 일 : " + todocount;
}

const checkbox = (event) => {
    const checked = event.target;
    if(checked.checked) {
      checked.nextElementSibling.style.textDecorationLine = "line-through";
      completecount++;
      complete.textContent = "완료한 일 : " + completecount;
    } else {
        checked.nextElementSibling.style.textDecorationLine ="none";
        completecount--;
        complete.textContent = "완료한 일 : " + completecount;
    }
  }

const allcheckbox = (event) => {
  const todoItem = event.target.parentNode;
  const checkboxes = todoItem.querySelectorAll('#newtodo input[type="checkbox"');

  checkboxes.forEach(element => {
    if (!element.checked) {
      element.checked = true;
      element.dispatchEvent(new Event('change'));
      
    } else {
      element.checked = false;
      element.dispatchEvent(new Event('change'));
    }
  });
  
}

const deletetodo = (event) => {
  const todoItem = event.target.parentNode;
  const checkboxed = todoItem.querySelector('input[type="checkbox"]');

  event.target.parentNode.remove();
  todocount--;
  counttodo.textContent = "남은 할 일 : " + todocount;


  if(checkboxed.checked) {
    completecount--;
    complete.textContent = "완료한 일 : " + completecount;
  }
  
}

const selecttodo = (event) => {
  const linetodo = document.querySelectorAll('#newtodo div');
  linetodo.forEach(element => {
    const check = element.querySelector('input[type="checkbox"]');
    switch(event.target.selectedIndex) {
      case 0:
        element.style.display = "";
        break;
      case 1:
        if(!check.checked) {
          element.style.display = "";
        } else {
          element.style.display = "none";
        }
        break;
      case 2:
        if(check.checked) {
          element.style.display = "";
        } else {
          element.style.display = "none";
        }
    }
  })
}

const modifytodo = (event) => {
  event.target.style.display = "none";
  const input = document.createElement('input');
  input.type = "text";
  input.value = event.target.textContent;
  input.className = "editTodo";

  event.target.parentNode.insertBefore(input, event.target);

  input.focus();
  input.select();

  input.addEventListener('blur', exitMode);
  
  function exitMode() {
    event.target.textContent = input.value;
    event.target.style.display = '';
    input.remove();
  }
  input.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
      exitMode(event);
    }
  })
  
};


addBtn.addEventListener('click', createtodo);
allcheck.addEventListener('click', allcheckbox);
select.addEventListener('change', selecttodo);





  