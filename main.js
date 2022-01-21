let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Red Printed T-Shirt by PUMA',
        tag: 'redtshirt',
        price: 50,
        inCart: 0
    },
    {
        name: 'Men Colourblocked Chunky Sneakers',
        tag: 'colourblockedsneakers',
        price: 90,
        inCart: 0
    },
    {
        name: 'Men Grey Melange & Black Checked Joggers',
        tag: 'checkedjoggers',
        price: 100,
        inCart: 0
    },
    {
        name: 'Navy Blue & White Printed T-shirt',
        tag: 'navybluetshirt',
        price: 150,
        inCart: 0
    },
    {
        name: "Women's Nike Jordan Air Mae",
        tag: 'AirMae',
        price: 138.97,
        inCart: 0
    },
    {
        name: 'Men Black LIGA Baselayer T-shirt',
        tag: 'BaselayerT-shirt',
        price: 70,
        inCart: 0
    },
    {
        name: 'Reebok-pack-of-assorted-socks',
        tag: 'ReebokSocks',
        price: 105,
        inCart: 0
    },
    {
        name: 'Minimalist Chronograph Black Stainless Steel Watch',
        tag: 'ChronographBlackWatch',
        price: 169,
        inCart: 0
    },
    {
        name: 'Gen 6 Smartwatch Green Camo Grosgrain',
        tag: 'Gen6Smartwatch',
        price: 229,
        inCart: 0
    },
    {
        name: 'Men Black & Red Outdoor Shoes',
        tag: 'colourblockedsneakers',
        price: 99,
        inCart: 0
    },
    {
        name: "Men's Nike Air Zoom SuperRep 2",
        tag: 'AirZoom',
        price: 120,
        inCart: 0
    },
    {
        name: 'HRX by Hrithik Roshan-Women-Track-Pants',
        tag: 'HRX-Women-Track-Pants',
        price: 80,
        inCart: 0
    },
    {
        name: 'HRX by Hrithik Roshan-Women-Black-Running-Shoes',
        tag: 'HRX-Women-Black-Running-Shoes',
        price: 30,
        inCart: 0
    },
    {
        name: 'Men Black & Red Colourblocked Polo T-Shirt',
        tag: 'ColourblockedPolo-T-Shirt',
        price: 190,
        inCart: 0
    },
    {
        name: 'Men Quarter length Pack of 3 Socks',
        tag: 'HRXSocks',
        price: 86,
        inCart: 0
    },
    {
        name: 'Men Grey Woven Track Pants',
        tag: 'NikeTracks',
        price: 120,
        inCart: 0
    },
    {
        name: 'boAT Black Smart Watch',
        tag: 'boATWatch',
        price: 201,
        inCart: 0
    },
    {
        name: 'Black Multi Function Analogue and Digital Watch',
        tag: 'roadsterWatch',
        price: 269,
        inCart: 0
    },
    {
        name: "Air Force 1 '07 sneakers",
        tag: 'NikeAirForce',
        price: 176,
        inCart: 0
    },
    {
        name: 'Logo-patch lace-up sneakers',
        tag: 'D&GSneakers',
        price: 908,
        inCart: 0
    },
    {
        name: 'Suunto Series 7 Black Lime',
        tag: 'SuuntoSeries7',
        price: 559,
        inCart: 0
    },
    {
        name: 'Men Black Running Track Pants',
        tag: 'HRXTrackPants',
        price: 90,
        inCart: 0
    },
    {
        name: 'Domyos by Decathlon Women Black Medium Support Padded Sports Bra',
        tag: 'sportsbra',
        price: 140.40,
        inCart: 0
    },
    {
        name: 'Adults Multicoloured Pack of 3 Solid Above Ankle Socks',
        tag: 'PumaSocks',
        price: 95.98,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContext = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                // rest operator from Javascript
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;

        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify
        (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem("totalCost");

    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

// function to check if ther's something in my local storage

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");

    console.log(cartItems);
    if(cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=  `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}.00</div>
            <div class="quantity">
                <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
                &${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTile">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost}.00
                </h4>
        `;
    }
}

onLoadCartNumbers();