const inputBox = document.querySelector("#input-field");
const addBtn = document.querySelector(".container button");
const listItem = document.querySelector("#list-items");
const deleteAllBtn = document.querySelector(".footer button")

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() !=0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
   
}

showTasks();

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("#list-items");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("#list-items", JSON.stringify(listArr));
    showTasks();
}


function showTasks() {
    
    let getLocalStorage = localStorage.getItem("#list-items");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector(".pending");
    pendingNum.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllBtn.classList.add("active");
    } else {
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = ' ';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span onclick="deleteTask(${index})";><i class="fa-solid fa-trash-can"></i></span></li>`;
    })
    listItem.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("#list-items");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("#list-items", JSON.stringify(listArr));
    showTasks ()
}

deleteAllBtn.onclick = () => {
    listArr = [ ];
    localStorage.setItem("#list-items", JSON.stringify(listArr));
    showTasks ()
}

