function addItem(){
    let code=document.getElementById("code").value;
    let name=document.getElementById("name").value;
    let price=document.getElementById("price").value;
    let discount=document.getElementById("discount").value;

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "code": code,
  "name": name,
  "price": price,
  "discount": discount
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/item/add-item", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  
}


let btnLoad=document.getElementById("load-item");
btnLoad.addEventListener("click",()=>{
  fetch("http://localhost:8080/item/get-all")
  .then(res=>res.json())
  .then(element=>{
    loadItem(element);
  })


});


function loadItem(element){
  let itemTable=document.getElementById("item-table");

  let tableBody=`  <tr>
                     <th>Code</th>
                     <th>Name</th>
                     <th>Price</th>
                  </tr>`;

    
      element.forEach(element => { tableBody+=`<tr>
                                                <td>${element.code}</td>
                                                <td>${element.name}</td>
                                                <td>${element.price}</td>
                                              </tr>`
        
      });
    
     itemTable.innerHTML=tableBody;
}