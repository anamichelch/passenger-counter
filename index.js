let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
  // Change this to use the plus equal technique you've learned
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countText = count + " - ";

  saveEl.innerText += countText;
  count = 0;
  countEl.innerText = count;
}
