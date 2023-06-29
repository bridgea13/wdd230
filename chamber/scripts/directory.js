const button_grid = document.querySelector("#grid");
const button_list = document.querySelector("#list");
const show_me = document.querySelector("#changer");
fetch;

button_grid.addEventListener("click", showGrid);
button_list.addEventListener("click", showList);

function showList() {
  show_me.classList.add("directory-list");
  show_me.classList.remove("directory-grid");
}

function showGrid() {
  show_me.classList.add("directory-grid");
  show_me.classList.remove("directory-list");
}

fetch("json/data.json")
  .then((response) => response.json())
  .then((data) => {
    for(let i = 0; i< data.length; i++){
    const biz_name = document.createElement("h3");
    const biz_site = document.createElement("a");
    const biz_image = document.createElement("img");
    const biz_address = document.createElement("p");
    const biz_phone = document.createElement("p");

    const biz = document.createElement("section");

    biz.appendChild(biz_name);
    biz.appendChild(biz_image);
    biz.appendChild(biz_address);
    biz.appendChild(biz_phone);
    biz.appendChild(biz_site);
    document.getElementById("changer").appendChild(biz);

    biz_image.src = data[i].imageURL;
    biz_name.textContent = data[i].name;
    biz_phone.textContent = data[i].phone;
    biz_address.textContent = data[i].address;
    biz_site.textContent = data[i].urlTex;
    biz_site.href = data[i].url;
    }
  })
  .catch((error) => {
    console.log("Error:", error);
  });
  
