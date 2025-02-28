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
                    <p class="card-text">Price: ${element.price} LKR</p>
                    <a href="#" class="btn btn-danger">Add to Cart</a>
                </div>
            </div>
        `;

        box.appendChild(card);
    });
}

