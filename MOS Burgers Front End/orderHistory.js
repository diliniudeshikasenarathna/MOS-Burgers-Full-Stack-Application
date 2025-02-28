
    let btnOrder=document.getElementById("load-order");
    btnOrder. addEventListener("click",( )=>{
      fetch("http://localhost:8080/order/get-all")
      .then(res=>res.json())
      .then(element=>{
        loadOrderTable(element);
      });
    });
    
    function loadOrderTable(element) {
        let orderTable = document.getElementById("order-table");
        
        if (!orderTable) {
            console.error("Table with ID 'order-table' not found.");
            return;
        }
    
        let tableBody = `
            <tr>
                <th>Id</th>
                <th>Items</th>
                <th>Price</th>
                <th>Customer Phone No</th>
            </tr>`;
    
        element.forEach(order => {
            tableBody += `<tr>
                <td>${order.id}</td>
                <td>${order.itemList.join(", ")}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>${order.customerPhoneNo}</td>
            </tr>`;
        });
    
        orderTable.innerHTML = tableBody;
    }
    