const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const speedInput = document.getElementById("speed");
const priceInput = document.getElementById("price");
const imgUrlInput = document.getElementById("imgUrl");
const colorInput = document.getElementById("color");
const submitButton = document.getElementById("submit");
const carlist = document.getElementById("carlist");

let formArr = JSON.parse(localStorage.getItem("arr"))
  ? JSON.parse(localStorage.getItem("arr"))
  : [];
creatForm();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let hisob = {
    id: Math.floor(Math.random() * 100000),
    imgUrl: imgUrlInput.value,
    name: nameInput.value,
    speed: speedInput.value,
    price: priceInput.value,
    color: colorInput.value,
  };
  formArr.push(hisob);
  localStorage.setItem("arr", JSON.stringify(formArr));
  creatForm();
});

function creatForm(data = formArr) {
  carlist.innerHTML = "";
  data.forEach(({ name, speed, price, imgUrl, color, id }) => {
    const li = document.createElement("li");
    li.classList.add("card");
    carlist.innerHTML += `
    <div class="li1_div">
    <img class="moshina_rasm" src="${imgUrl}" alt=""/>
    <div class="li2_div">
    <h2 class="ism">${name}</h2>
    <p class="speed">speed: ${speed}</p>
    <p class="price">price: ${price}</p>
    <p class="color">color: ${color} </p>
    <i class="fa-solid fa-trash-can trash-png" style="color: #3b9feb" onclick="delateForm(${id})"></i>
    </div>  
    </div>
    `;
    carlist.appendChild(li);
  });
}

function delateForm(itemId) {
  formArr = formArr.filter(({ id }) => id !== itemId);
  localStorage.setItem("arr", JSON.stringify(formArr));
  creatForm(formArr);
}
