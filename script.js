var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

DocumentFragment.querySelectorAll;

function inputLength() {
  return input.value.length;
}

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", liClick);
}

function liClick() {
  this.classList.toggle("done");
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  var btn = document.createElement("button");
  btn.style.margin = "4px";
  btn.appendChild(document.createTextNode("delete"));
  li.appendChild(btn);
  li.addEventListener("click", function () {
    var finished = this.classList.toggle("done");
  });
  ul.appendChild(li);
  input.value = "";
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
