import get from "./dom.js";

// [
//     {
//      "image": "https://i.ibb.co/BrDWQsG/Jacob-Jones.png",
//      "name": "Jacob Jones",
//      "email": "jackson.graham@example.com",
//      "city": "Dushanbe",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "1"
//     },
//     {
//      "image": "https://i.ibb.co/pxy5T89/Jenny-Wilson.png",
//      "name": "Jenny Wilson",
//      "email": "jessica.hanson@example.com",
//      "city": "Kulob",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "2"
//     },
//     {
//      "image": "https://i.ibb.co/hcH8vRP/Guy-Hawkins.png",
//      "name": "Guy Hawkins",
//      "email": "bill.sanders@example.com",
//      "city": "Dushanbe",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "3"
//     },
//     {
//      "image": "https://i.ibb.co/2cHndLm/Cody-Fisher.png",
//      "name": "Cody Fisher",
//      "email": "michael.mitc@example.com",
//      "city": "Bokhtar",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "4"
//     },
//     {
//      "image": "https://i.ibb.co/SyCPfZJ/Esther-Howard.png",
//      "name": "Esther Howard",
//      "email": "felicia.reid@example.com",
//      "city": "Dushanbe",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "5"
//     },
//     {
//      "image": "https://i.ibb.co/XyYwgwr/Kristin-Watson.png",
//      "name": "Kristin Watson",
//      "email": "kenzi.lawson@example.com",
//      "city": "Khujand",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "6"
//     },
//     {
//      "image": "https://i.ibb.co/Qj9NYqD/Dianne-Russell.png",
//      "name": "Dianne Russell",
//      "email": "deanna.curtis@example.com",
//      "city": "Dushanbe",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "7"
//     },
//     {
//      "image": "https://i.ibb.co/DzCCJsV/Ronald-Richards.png",
//      "name": "Ronald Richards",
//      "email": "tim.jennings@example.com",
//      "city": "Hisor",
//      "complete": false,
//      "phone": "8888 0090",
//      "id": "8"
//     }
//    ]

const API = "http://localhost:3000/data";

// Метод GET
async function getData() {
  try {
    let response = await fetch(API);
    let data = await response.json();
    get(data);
  } catch (error) {
    console.error(error);
  }
}

// Метод POST
async function putData(newData) {
  try {
    let response = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    getData();
  } catch (error) {
    console.error(error);
  }
}

// Метод DELETE
async function deleteData(id) {
  try {
    let response = await fetch(API + "/" + id, {
      method: "DELETE",
    });
    getData();
  } catch (error) {
    console.error(error);
  }
}

// Метод PUT Edit
async function putEdit(mainData, newData) {
  try {
    let response = await fetch(API + "/" + mainData, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
    getData();
  } catch (error) {
    console.error(error);
  }
}

// Метод GET Search
async function getSearch(search) {
  try {
    let response = await fetch(API + "?q=" + search.value);
    let data = await response.json();
    get(data);
  } catch (error) {
    console.error(error);
  }
}

export default getData;
export { putData, deleteData, putEdit, getSearch };
