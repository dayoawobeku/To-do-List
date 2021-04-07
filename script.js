var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function liClick() {
  this.classList.toggle("done");
}

function createListElement() {
  var li = document.createElement("li");
  ul.appendChild(li);
  var text = document.createElement("span");
  text.appendChild(document.createTextNode(input.value));
  text.classList.add("strike");
  input.value = "";
  li.appendChild(text);
  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("Delete"));
  ul.appendChild(li).appendChild(delBtn);
  delBtn.classList.add("delete");
  ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      console.log(e.target.parentNode);
      e.target.parentNode.remove();
    }
  });
  li.addEventListener("click", liClick);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
