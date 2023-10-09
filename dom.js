// Import https request method to db.json
import { putData, deleteData, putEdit, getSearch } from "./api.js";

let linesControlPanel = document.querySelector(".lines-td-control-panel");
// let modalControlPanel = document.querySelector(".modal-control-panel");
let modalAdd = document.querySelector(".modal-add-container");
let btnAddModal = document.querySelector(".btn-new");
let closeAdd = document.querySelector(".close-add");
let tBody = document.querySelector("tbody");
let formAdd = document.querySelector(".form-add");
let btnDark = document.querySelector(".btn-dark");
let btnLight = document.querySelector(".light-buttons");
let editModal = document.querySelector(".edit-modal");
let formEdit = document.querySelector(".form-edit");
let closeEdit = document.querySelector(".close-edit");
let search = document.querySelector(".search");
// Dark selectors
let body = document.querySelector("body");
let logo = document.querySelector(".nav p");
let ldBtns = document.querySelectorAll(".light-buttons button");
let ldBtnsText = document.querySelectorAll(".light-buttons button p");
let select = document.querySelectorAll(".wrapper-filter fieldset select");
let searchContainerDark = document.querySelector(".search-container-dark");
let searchInputDark = document.querySelector(".search-container-dark input");
let searchDark = document.querySelector(".search-dark");
let headerDark = document.querySelectorAll(".header-flex");
let tableHeaderDark = document.querySelector(".table-header");
let headerAddDark = document.querySelector(".header-add p");
let tableBody;
let textInfo;
let textEdit;
let textDelete;
// Dark Mode
btnDark.addEventListener("click", () => {
  body.style.backgroundColor = "#000";
  body.style.color = "#fff";
  logo.style.color = "#fff";
  ldBtns.forEach((e) => {
    e.style.borderStyle = "solid";
    e.style.borderColor = "#fff";
  });
  ldBtnsText.forEach((e) => (e.style.color = "#fff"));
  select.forEach((e) => {
    e.style.backgroundColor = "#000";
    e.style.color = "#fff";
    e.style.borderColor = "#fff";
  });
  searchDark.style.color = "#fff";
  searchContainerDark.style.borderColor = "#fff";
  searchInputDark.style.backgroundColor = "transparent";
  searchInputDark.style.color = "#fff";
  searchInputDark.classList.add("placeColor");
  headerDark.forEach((e) => {
    e.style.color = "#fff";
  });
  tableHeaderDark.style.backgroundColor = "transparent";
  tableHeaderDark.style.border = "1px solid #fff";
  btnAddModal.style.backgroundColor = "transparent";
  btnAddModal.style.border = "1px solid #fff";
  headerAddDark.style.color = "#000";
  closeAdd.style.color = "#000";
});

function get(data) {
  tBody.innerHTML = "";
  data.forEach((e) => {
    tableBody = document.createElement("tr");
    tableBody.classList.add("table-body");
    let tablePerson = document.createElement("td");
    let bodyFlex = document.createElement("div");
    bodyFlex.classList.add("body-flex");
    let wrapperImg = document.createElement("div");
    wrapperImg.classList.add("wrapper-img");
    let imageData = document.createElement("img");
    imageData.src = e.image;
    let wrapperText = document.createElement("div");
    wrapperText.classList.add("wrapper-text");
    let nameData = document.createElement("p");
    nameData.innerHTML = e.name;
    let emailData = document.createElement("p");
    emailData.innerHTML = e.email;
    wrapperText.append(nameData, emailData);
    let tableCity = document.createElement("td");
    tableCity.classList.add("td-city");
    let cityData = document.createElement("p");
    cityData.innerHTML = e.city;
    let tableStatus = document.createElement("td");
    tableStatus.classList.add("td-status");
    let inActive = document.createElement("div");
    inActive.innerHTML = e.complete;
    let tablePhone = document.createElement("td");
    tablePhone.classList.add("td-phone");
    let phoneData = document.createElement("p");
    phoneData.innerHTML = e.phone;
    tablePhone.appendChild(phoneData);
    let tableControlPanel = document.createElement("td");
    tableControlPanel.classList.add("table-control-panel");
    linesControlPanel = document.createElement("div");
    linesControlPanel.classList.add("lines-td-control-panel");
    let lineOne = document.createElement("div");
    let lineTwo = document.createElement("div");
    let lineThree = document.createElement("div");
    linesControlPanel.append(lineOne, lineTwo, lineThree);
    tableControlPanel.append(linesControlPanel);
    tableStatus.appendChild(inActive);
    tableCity.appendChild(cityData);
    wrapperImg.appendChild(imageData);
    bodyFlex.append(wrapperImg, wrapperText);
    tablePerson.append(bodyFlex);
    let modalControlPanel = document.createElement("div");
    modalControlPanel.classList.add("modal-control-panel");
    // Info
    let controlInfo = document.createElement("div");
    controlInfo.classList.add("control-info");
    let imgInfo = document.createElement("img");
    imgInfo.src = "img/InfoFilled.svg";
    textInfo = document.createElement("p");
    textInfo.innerHTML = "View profile";
    // Edit
    let controlEdit = document.createElement("div");
    controlEdit.classList.add("control-edit");
    let imgEdit = document.createElement("img");
    imgEdit.src = "img/EditFilled.svg";
    textEdit = document.createElement("p");
    textEdit.innerHTML = "Edit";

    //Delete
    let controlDelete = document.createElement("div");
    controlDelete.classList.add("control-delete");
    let imgDelete = document.createElement("img");
    imgDelete.src = "img/DeleteFilled.svg";
    textDelete = document.createElement("p");
    textDelete.innerHTML = "Delete";
    controlDelete.append(imgDelete, textDelete);
    controlEdit.append(imgEdit, textEdit);
    controlInfo.append(imgInfo, textInfo);
    modalControlPanel.append(controlInfo, controlEdit, controlDelete);

    tableBody.append(
      tablePerson,
      tableCity,
      tableStatus,
      tablePhone,
      tableControlPanel,
      modalControlPanel
    );
    tBody.append(tableBody);
    // Complete Effects
    if (e.complete === false) {
      inActive.innerHTML = "INACTIVE";
    } else {
      inActive.innerHTML = "ACTIVE";
      inActive.classList.add("active");
    }
    // Открыть панель управления
    linesControlPanel.addEventListener("click", () => {
      if (modalControlPanel.style.display !== "block") {
        modalControlPanel.style.display = "block";
      } else {
        modalControlPanel.style.display = "none";
      }
    });
    // Кнопка Delete
    controlDelete.addEventListener("click", () => {
      deleteData(e.id);
    });
    // Кнопка Изменить Edit Modal
    controlEdit.addEventListener("click", () => {
      editPost(e);
    });
  });
}

// Кнопка Добавить Add Modal
btnAddModal.addEventListener("click", () => (modalAdd.style.display = "block"));
// Кнопка Закрыть Add Modal
closeAdd.addEventListener("click", () => (modalAdd.style.display = "none"));
// Добавить новые данные POST
formAdd.addEventListener("submit", (event) => {
  event.preventDefault();
  let newData = {
    image: event.target["image"].value,
    name: event.target["name"].value,
    email: event.target["email"].value,
    complete: event.target["status"].value,
    city: event.target["city"].value,
    phone: event.target["phone"].value,
  };
  putData(newData);
});

// Создаём новый объект и переносим данные в поля
function editPost(mainData) {
  editModal.style.display = "block";
  let newData = {
    image: mainData.image,
    name: mainData.name,
    email: mainData.email,
    complete: mainData.complete,
    city: mainData.city,
    phone: mainData.phone,
  };
  console.log(newData);
  formEdit["image"].value = newData.image;
  formEdit["name"].value = newData.name;
  formEdit["email"].value = newData.email;
  formEdit["status"].value = newData.complete ? "true" : "false";
  formEdit["city"].value = newData.city;
  formEdit["phone"].value = newData.phone;
  formEdit.addEventListener("submit", (event) => {
    event.preventDefault();
    newData.image = event.target["image"].value;
    newData.name = event.target["name"].value;
    newData.email = event.target["email"].value;
    newData.complete = event.target["status"].value;
    newData.city = event.target["city"].value;
    newData.phone = event.target["phone"].value;
    putEdit(mainData.id, newData);
  });
}

search.addEventListener("input", () => {
  getSearch(search);
});

// Export get from db.json to api.js
export default get;
