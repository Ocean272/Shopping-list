// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input-field").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list-items").appendChild(li);
  }
  document.getElementById("input-field").value = "";
  
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
 
  var pendingNum = document.querySelector(".pending");
  let close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    pendingNum.textContent = close.length;
    close[i].onclick = function() {
    this.parentElement.remove();
    pendingNum.textContent = close.length;
    }
  }
  document.getElementById("clearAll").addEventListener("click", function(){
    document.querySelector("ul").innerHTML ="" ;
    pendingNum.textContent = close.length;
  })
}