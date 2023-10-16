/*
fetch("data.json")
    .then(response => response.json())
    .then(featuredItems => loadItems(featuredItems));

let itemName;
let itemPrice;
let itemDesc;
let itemImage;

let items = document.getElementsById("featured-card")[0];
let names = document.getElementsByClassName("card-header");
let descriptions = document.getElementsByClassName("card-text");

function loadItems(featuredItems){
    for (let i = 0; i < featuredItems.featuredItems.length; i++) {
        itemName = featuredItems.featuredItems[i].name;
        itemPrice = featuredItems.featuredItems[i].price;
        itemDesc = featuredItems.featuredItems[i].description;
        itemImage = featuredItems.featuredItems[i].image;

        let img = document.createElement("div");
        img.innerHTML = `<img src=${itemImage} class="card-img-top" alt="${itemName}></img>`;

        let header = document.createElement("p");
        header.innerHTML = `<p class="card-text"> <strong>${itemName}</strong>, ${itemPrice}</p>`;

        let desc = document.createElement("p");
        desc.innerHTML = `<p class="card-description>${itemDesc}</p>`;

        items.appendChild(img);
        names.appendChild(header);
        descriptions.appendChild(desc);
    }
}*/

fetch("data.json")
    .then(response => response.json())
    .then(featuredItems => loadItems(featuredItems.featuredItems));

function loadItems(featuredItems) {
    let itemsContainer = document.getElementById("featured-card");

    featuredItems.forEach(item => {
        let itemName = item.name;
        let itemPrice = item.price;
        let itemDesc = item.description;
        let itemImage = item.image;

        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = itemImage;
        img.className = "featured-images";
        img.alt = itemName;

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let header = document.createElement("h5");
        header.className = "card-title";
        header.innerHTML = `<strong>${itemName}</strong>`;

        let price = document.createElement("p");
        price.className = "card-text";
        price.textContent = itemPrice;

        let desc = document.createElement("p");
        desc.className = "card-text";
        desc.textContent = itemDesc;

        cardBody.appendChild(header);
        cardBody.appendChild(price);
        cardBody.appendChild(desc);

        card.appendChild(img);
        card.appendChild(cardBody);

        itemsContainer.appendChild(card);
    });
}

