fetch("menu.json")
    .then(response => response.json())
    .then(dishMenu => loadDishes(dishMenu));

function loadDishes(dishMenu) {
    // Variables for the cards:
    let imgDishes = [];
    let txtDishes = [];
    let descDishes = []; // New variable for descriptions
    for (let i = 1; i <= 9; i++) {
        imgDishes.push(document.getElementById(`imgDish${i}`));
        txtDishes.push(document.getElementById(`txtDish${i}`));
        descDishes.push(document.getElementById(`descDish${i}`)); // New line

        // Toggle buttons logic:
        let toggleButton = document.getElementById(`toggleCardButton${i}`);
        let card = document.getElementById(`card${i}`);
        let collapsableCard = new bootstrap.Collapse(card, { toggle: false });
        toggleButton.addEventListener('click', function () {
            collapsableCard.toggle();
        });
    }

    for (let i = 0; i < dishMenu.dishes.length; i++) {
        let dishName = dishMenu.dishes[i].dishName;
        let dishPrice = dishMenu.dishes[i].dishPrice;
        let dishDescription = dishMenu.dishes[i].description; // New line
        let url = dishMenu.dishes[i].url;
        
        let imgDish = document.createElement("div");
        imgDish.innerHTML = `<img src=${url} class="card-img-top" alt="${dishName}"></img>`;
        
        let txtDish = document.createElement("p");
        txtDish.innerHTML = `<p class="card-text"> <strong>${dishName}</strong>, $${dishPrice}</p>`;
        
        let descDish = document.createElement("p"); // New section
        descDish.innerHTML = `<p class="card-description">${dishDescription}</p>`; // New section

        switch (dishName) {
            case "Chicken Caesar Salad":
                imgDishes[0].appendChild(imgDish);
                txtDishes[0].appendChild(txtDish);
                break;
            case "Vegetable Stir Fry":
                imgDishes[1].appendChild(imgDish);
                txtDishes[1].appendChild(txtDish);
                break;
            case "Spaghetti Carbonara":
                imgDishes[2].appendChild(imgDish);
                txtDishes[2].appendChild(txtDish);
                break;
            case "Grilled Salmon":
                imgDishes[3].appendChild(imgDish);
                txtDishes[3].appendChild(txtDish);
                break;
            case "Beef Steak":
                imgDishes[4].appendChild(imgDish);
                txtDishes[4].appendChild(txtDish);
                break;
            case "Veggie Burger":
                imgDishes[5].appendChild(imgDish);
                txtDishes[5].appendChild(txtDish);
                break;
            case "Shrimp Tacos":
                imgDishes[6].appendChild(imgDish);
                txtDishes[6].appendChild(txtDish);
                break;
            case "Lamb Chops with Mint Sauce":
                imgDishes[7].appendChild(imgDish);
                txtDishes[7].appendChild(txtDish);
                break;
            case "Eggplant Parmesan":
                imgDishes[8].appendChild(imgDish);
                txtDishes[8].appendChild(txtDish);
                break;
        }

        // switch (dishName) {
        //     case "Chicken Caesar Salad":
        //         imgDishes[0].appendChild(imgDish);
        //         txtDishes[0].appendChild(txtDish);
        //         descDishes[0].appendChild(descDish);
        //         break;
        //     case "Vegetable Stir Fry":
        //         imgDishes[1].appendChild(imgDish);
        //         txtDishes[1].appendChild(txtDish);
        //         descDishes[1].appendChild(descDish);
        //         break;
        //     case "Spaghetti Carbonara":
        //         imgDishes[2].appendChild(imgDish);
        //         txtDishes[2].appendChild(txtDish);
        //         descDishes[2].appendChild(descDish);
        //         break;
        //     case "Grilled Salmon":
        //         imgDishes[3].appendChild(imgDish);
        //         txtDishes[3].appendChild(txtDish);
        //         descDishes[3].appendChild(descDish);
        //         break;
        //     case "Beef Steak":
        //         imgDishes[4].appendChild(imgDish);
        //         txtDishes[4].appendChild(txtDish);
        //         descDishes[4].appendChild(descDish);
        //         break;
        //     case "Veggie Burger":
        //         imgDishes[5].appendChild(imgDish);
        //         txtDishes[5].appendChild(txtDish);
        //         descDishes[5].appendChild(descDish);
        //         break;
        //     case "Shrimp Tacos":
        //         imgDishes[6].appendChild(imgDish);
        //         txtDishes[6].appendChild(txtDish);
        //         descDishes[6].appendChild(descDish);
        //         break;
        //     case "Lamb Chops with Mint Sauce":
        //         imgDishes[7].appendChild(imgDish);
        //         txtDishes[7].appendChild(txtDish);
        //         descDishes[7].appendChild(descDish);
        //         break;
        //     case "Eggplant Parmesan":
        //         imgDishes[8].appendChild(imgDish);
        //         txtDishes[8].appendChild(txtDish);
        //         descDishes[8].appendChild(descDish);
        //         break;
        // }
        
    } // end of for
} // end of function
