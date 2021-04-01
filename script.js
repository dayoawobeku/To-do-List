var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");
var li = document.createElement("li");

function inputLength() {
  return input.value.length;
}

// for (var i = 0; i < list.length; i++) {
//   list[i].addEventListener("click", liClick);
// }

function liClick() {
  this.classList.toggle("done");
}

function createListElement() {
  li.appendChild(document.createTextNode(input.value));
  // var btn = document.createElement("button");
  // // btn.style.margin = "4px";
  // btn.appendChild(document.createTextNode("delete"));
  // btn = `${btn} + ${li.appendChild(btn)}`;
  // li.addEventListener("click", function () {
  //   var finished = this.classList.toggle("done");
  // });
  ul.appendChild(li);
  input.value = "";
}

function attachDelBtn() {
  const el = Array.from(ul.children);
  console.log(el);
  const html = el
    .map((data) => {
      return data.localName;
    })
    .join("");
  console.log(html);
  // console.log(typeof html);
  // li.innerHTML = html;
}

attachDelBtn();

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

const image = document.querySelector(".image");
image.addEventListener("click", (e) => {
  console.log("I was clicked");
});
