function addCustomer(){

let name=document.getElementById("name").value;
let contactNo=document.getElementById("contactNo").value;
let preferences=document.getElementById("preferences").value;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": name,
  "contactNo": contactNo,
  "preferences": preferences
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/customer/add-customer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

}

let btnCustomer=document.getElementById("load-customer");
btnCustomer. addEventListener("click",( )=>{
  fetch("http://localhost:8080/customer/get-all")
  .then(res=>res.json())
  .then(element=>{
    loadCustomerTable(element);
  });
});

function loadCustomerTable(element){

let customerTable=document.getElementById("customer-table");
let tableBody=`
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact No</th>
        <th>Loyalty Points</th>
        <th>Preferences</th>
        
    </tr>`;


element.forEach(element => {
  tableBody+=`<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.contactNo}</td>
        <td>${element.loyaltyPoints}</td>
        <td>${element.preferences}</td>
        
    </tr>`
});
customerTable.innerHTML=tableBody;

}





