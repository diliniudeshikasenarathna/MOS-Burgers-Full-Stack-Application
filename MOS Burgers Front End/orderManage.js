

function loadFood(value){

    fetch(`http://localhost:8080/item/search-by-category/${value}`)
    .then(res=>res.json())
    .then(elements=>{
        loadCards(elements);
    });
}


function loadCards(elements) {
    let box = document.getElementById("food-box").querySelector(".row"); 
    box.innerHTML = ""; 

    elements.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("col"); 

        card.innerHTML = `
            <div class="card h-100">
                <img src="${element.image || 'default.jpg'}" class="card-img-top" alt="${element.name}">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">Price: ${element.price}LKR</p>
                    <a href="#" class="btn btn-danger" onclick="addToCart('${element.name}','${element.price}','${element.discount}')"  >Add to Cart</a>

                </div>
            </div>
        `;

        box.appendChild(card);
    });
}

let cart = [];

function addToCart(name, price, discount) {
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        let item = { name, price, discount, quantity: 1 };
        cart.push(item);
    }

    console.log("Cart:", cart);
    updateCartUI();
}

function updateCartUI() {
    let cartList = document.getElementById("cart-list");
    let totalAmount = 0;
    cartList.innerHTML = ""; 

    cart.forEach(item => {
        let discountedPrice = item.price - (item.price * item.discount / 100);
        let itemTotal = discountedPrice * item.quantity;
        totalAmount += itemTotal;

        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${item.name} - ${discountedPrice.toFixed(2)} LKR x ${item.quantity} = ${itemTotal.toFixed(2)} LKR`;
        cartList.appendChild(li);
    });

    let totalDisplay = document.getElementById("total-price");
    totalDisplay.textContent = `Total: ${totalAmount.toFixed(2)} LKR`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let totalAmount = 0;
    cart.forEach(item => {
        let discountedPrice = item.price - (item.price * item.discount / 100);
        totalAmount += discountedPrice * item.quantity;
    });

    let customerPhoneNo = prompt("Enter your phone number:");

    if (!customerPhoneNo) {
        alert("Please provide all details to place an order.");
        return;
    }

    let order = {
        customerPhoneNo: customerPhoneNo ,
        items: cart,
        total: totalAmount
    };

   
    
    addOrder(order);
}
function addOrder(order) {
    fetch("http://localhost:8080/order/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            itemList: order.items.map(item => item.name),
            total: order.total,
            customerPhoneNo: order.customerPhoneNo
        })
    })
    .then(response => response.text())
    .then(result => {
        console.log("Server Response:", result);
        alert(`Order placed successfully!\nTotal Amount: ${order.total.toFixed(2)} LKR`);
        cart = [];
        updateCartUI();
    })
    .catch(error => console.error("Error sending order:", error));

    console.log("Order Placed:", order);
}






