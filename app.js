const enviar = document.getElementById("send-item");
let ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    if (confirm("are you sure?")) {
      let li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
});
enviar.addEventListener("click", createItem);

function createItem(e) {
  e.preventDefault();

  let item = document.querySelector("#add-item").value;
  let li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(item));
  let boton = document.createElement("button");
  boton.className = "btn";

  li.appendChild(boton);

  ul.appendChild(li);
}
