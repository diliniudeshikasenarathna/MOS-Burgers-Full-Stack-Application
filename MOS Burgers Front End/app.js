
function addItem() {
  let code = document.getElementById("code").value;
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;
  let discount = document.getElementById("discount").value;
  let qty = document.getElementById("qty").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "code": code,
    "name": name,
    "price": price,
    "discount": discount,
    "category": category,
    "qty": qty
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:8080/item/add-item", requestOptions)
    .then((response) => {
      if (response.ok) {
        alert("Item added successfully ");
        clearAddItemFields();
        loadAllItems(); 
      } else {
        alert("Failed to add item ");
      }
      return response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => {
      console.error('Error:', error);
      alert("Error adding item ");
    });
}

function clearAddItemFields() {
  document.getElementById("code").value = "";
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
  document.getElementById("discount").value = "";
  document.getElementById("qty").value = "";
}


function searchItem() {
  let code = document.getElementById("searchCode").value;

  fetch(`http://localhost:8080/item/search-by-code/${code}`)
    .then(res => res.json())
    .then(element => {
      document.getElementById("updateName").value = element.name;
      document.getElementById("updateCategory").value = element.category;
      document.getElementById("updatePrice").value = element.price;
      document.getElementById("updateDiscount").value = element.discount;
      document.getElementById("updateQTY").value = element.qty;
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Item not found ");
    });
}

function updateItem() {
  let code = document.getElementById("searchCode").value;
  let name = document.getElementById("updateName").value;
  let category = document.getElementById("updateCategory").value;
  let price = document.getElementById("updatePrice").value;
  let discount = document.getElementById("updateDiscount").value;
  let qty = document.getElementById("updateQTY").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "code": code,
    "name": name,
    "price": price,
    "discount": discount,
    "category": category,
    "qty": qty
  });

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("http://localhost:8080/item/update-item", requestOptions)
    .then((response) => {
      if (response.ok) {
        alert("Item updated successfully ");
        loadAllItems(); 
        clearUpdateItemFields();
      } else {
        alert("Failed to update item ");
      }
      return response.text();
    })
    .then((result) => console.log(result))
    .catch((error) => {
      console.error('Error:', error);
      alert("Error updating item ");
    });
}

function clearUpdateItemFields() {
  document.getElementById("searchCode").value = "";
  document.getElementById("updateName").value = "";
  document.getElementById("updateCategory").value = "";
  document.getElementById("updatePrice").value = "";
  document.getElementById("updateDiscount").value = "";
  document.getElementById("updateQTY").value = "";
}



function deleteItem() {
  let code = document.getElementById("searchCode").value;

  fetch(`http://localhost:8080/item/delete-by-code/${code}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        alert("Item deleted successfully ");
        clearUpdateItemFields();
        loadAllItems(); 
      } else {
        alert("Failed to delete item ");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error deleting item ");
    });
}

function clearUpdateItemFields() {
  document.getElementById("searchCode").value = "";
  document.getElementById("updateName").value = "";
  document.getElementById("updateCategory").value = "";
  document.getElementById("updatePrice").value = "";
  document.getElementById("updateDiscount").value = "";
  document.getElementById("updateQTY").value = "";
}


function loadAllItems() {
  fetch("http://localhost:8080/item/get-all")
    .then(res => res.json())
    .then(elements => {
      loadItem(elements);
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error loading items ");
    });
}

function loadItem(elements) {
  let itemTable = document.getElementById("item-table");

  let tableBody = `<tr>
                     <th>Code</th>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Discount</th>
                     <th>Category</th>
                     <th>Quantity</th>
                  </tr>`;

  elements.forEach(element => {
    tableBody += `<tr>
                    <td>${element.code}</td>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td>${element.discount}</td>
                    <td>${element.category}</td>
                    <td>${element.qty}</td>
                  </tr>`;
  });

  itemTable.innerHTML = tableBody;
}


let btnLoad = document.getElementById("load-item");
btnLoad.addEventListener("click", loadAllItems);
