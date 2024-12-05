let ice_cream_json = {
    1: { 'img': '01.png', 'name': 'Zolotoy', 'price': 10000 },
    2: { 'img': '02.png', 'name': 'Zefir', 'price': 10000 },
    3: { 'img': '03.png', 'name': 'Plombir', 'price': 12000 },
    4: { 'img': '04.png', 'name': 'Choco Bar', 'price': 15000 },
    5: { 'img': '05.png', 'name': 'Vanilla Dream', 'price': 11000 },
    6: { 'img': '06.png', 'name': 'Strawberry Bliss', 'price': 13000 },
    7: { 'img': '07.png', 'name': 'Mango Delight', 'price': 14000 },
    8: { 'img': '08.png', 'name': 'Berry Mix', 'price': 12500 },
    9: { 'img': '09.png', 'name': 'Choco Mint', 'price': 13500 },
    10: { 'img': '10.png', 'name': 'Cookie Crunch', 'price': 15000 },
    11: { 'img': '11.png', 'name': 'Caramel Swirl', 'price': 14500 },
    12: { 'img': '12.png', 'name': 'Pistachio', 'price': 16000 },
    13: { 'img': '13.png', 'name': 'Coffee Cream', 'price': 15500 },
    14: { 'img': '14.png', 'name': 'Banana Split', 'price': 14000 },
    15: { 'img': '15.png', 'name': 'Nutty Delight', 'price': 17000 },
    16: { 'img': '16.png', 'name': 'Lemon Chill', 'price': 12500 },
    17: { 'img': '17.png', 'name': 'Peach Perfect', 'price': 13000 },
    18: { 'img': '18.png', 'name': 'Tropical Fusion', 'price': 13500 },
    19: { 'img': '19.png', 'name': 'Berry Sorbet', 'price': 14500 },
    20: { 'img': '20.png', 'name': 'Choco Lava', 'price': 15000 },
    21: { 'img': '20.png', 'name': 'Choco Sorbet', 'price': 85000 }
};

let product = document.querySelector('.product')

for(let i = 1; i<=20; i++){
    let div = document.createElement('div')
    div.classList.add('product-item')
    div.innerHTML = `
            <img src="../media/ice-cream/${ice_cream_json[i]['img']}" class="product-img">
            <div class="product-data">
                <p class="product-name">name: ${ice_cream_json[i]['name']}</p>
                <p class="product-price">price: ${ice_cream_json[i]['price']}</p>
                <div class="product-control">
                    <button class="minus">-</button>
                    <input type="text" class="count" value="0">
                    <button class="plus">+</button>
                </div>
            </div>
    `
    product.appendChild(div)
}

