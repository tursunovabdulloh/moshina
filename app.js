const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const speedInput = document.getElementById("speed");
const priceInput = document.getElementById("price");
const imgUrlInput = document.getElementById("imgUrl");
const colorInput = document.getElementById("color");
const submitButton = document.getElementById("submit");
const carlist = document.getElementById("carlist");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ism = nameInput.value;
  const tezlik = speedInput.value;
  const narx = priceInput.value;
  const imgurl = imgUrlInput.value;
  const rang = colorInput.value;

  const nameli = document.createElement("li");
  nameli.classList.add("ismform");
  nameli.textContent = `${ism}`;

  const speedli = document.createElement("li");
  speedli.classList.add("speedform");
  speedli.textContent = `Speed: ${tezlik}`;

  const priceli = document.createElement("li");
  priceli.classList.add("priceform");
  priceli.textContent = `Price: ${narx}`;

  const imgUrlli = document.createElement("img");
  imgUrlli.classList.add("imgform");
  imgUrlli.setAttribute("src", imgurl);
  imgUrlli.setAttribute("alt", ism);

  const colorli = document.createElement("div");
  colorli.classList.add("colorform");
  colorli.textContent = `Color: `;
  colorli.style.backgroundColor = rang;
  colorli.style.width = "100px";
  colorli.style.height = "20px";

  const kerak = document.createElement("div");
  kerak.classList.add("boreder");
  kerak.appendChild(nameli);
  kerak.appendChild(speedli);
  kerak.appendChild(priceli);
  kerak.appendChild(colorli);
  kerak.appendChild(imgUrlli);
  carlist.appendChild(kerak);

  nameInput.value = "";
  speedInput.value = "";
  priceInput.value = "";
  imgUrlInput.value =
    "https://img.razrisyika.ru/kart/57/1200/225582-bugatti-chiron-24.jpg";

  const list = document.createElement("div");
  list.classList.add("car");
  list.appendChild(imgUrlli);
  list.appendChild(nameli);
  list.appendChild(speedli);
  list.appendChild(priceli);
  list.appendChild(colorli);
  carlist.appendChild(list);

  nameInput.value = "";
  speedInput.value = "";
  priceInput.value = "";
  imgUrlInput.value =
    "https://img.razrisyika.ru/kart/57/1200/225582-bugatti-chiron-24.jpg";
});
