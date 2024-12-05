let chocolate_json = {
    1: { 'img': '01.png', 'name': 'Milk Chocolate', 'price': 12000 },
    2: { 'img': '02.png', 'name': 'Dark Chocolate', 'price': 14000 },
    3: { 'img': '03.png', 'name': 'White Chocolate', 'price': 13000 },
    4: { 'img': '04.png', 'name': 'Hazelnut Chocolate', 'price': 15000 },
    5: { 'img': '05.png', 'name': 'Caramel Chocolate', 'price': 14500 },
    6: { 'img': '06.png', 'name': 'Mint Chocolate', 'price': 13500 },
    7: { 'img': '07.png', 'name': 'Orange Chocolate', 'price': 12500 },
    8: { 'img': '08.png', 'name': 'Strawberry Chocolate', 'price': 14000 },
    9: { 'img': '09.png', 'name': 'Coffee Chocolate', 'price': 15000 },
    10: { 'img': '10.png', 'name': 'Coconut Chocolate', 'price': 14500 },
    11: { 'img': '11.png', 'name': 'Peanut Butter Chocolate', 'price': 16000 },
    12: { 'img': '12.png', 'name': 'Almond Chocolate', 'price': 15500 },
    13: { 'img': '13.png', 'name': 'Raspberry Chocolate', 'price': 15000 },
    14: { 'img': '14.png', 'name': 'Blueberry Chocolate', 'price': 14500 },
    15: { 'img': '15.png', 'name': 'Matcha Chocolate', 'price': 17000 },
    16: { 'img': '16.png', 'name': 'Cinnamon Chocolate', 'price': 14000 },
    17: { 'img': '17.png', 'name': 'Chili Chocolate', 'price': 13500 },
    18: { 'img': '18.png', 'name': 'Salted Caramel Chocolate', 'price': 15500 },
    19: { 'img': '19.png', 'name': 'Honeycomb Chocolate', 'price': 14500 },
    20: { 'img': '20.png', 'name': 'Truffle Chocolate', 'price': 15000 },
    21: { 'img': '21.png', 'name': 'Nougat Chocolate', 'price': 16000 },
    22: { 'img': '22.png', 'name': 'Marzipan Chocolate', 'price': 15500 },
    23: { 'img': '23.png', 'name': 'Black Forest Chocolate', 'price': 16500 },
    24: { 'img': '24.png', 'name': 'Rocky Road Chocolate', 'price': 17000 }
};


let product = document.querySelector('.product')

for(let i = 1; i<=20; i++){
    let div = document.createElement('div')
    div.classList.add('product-item')
    div.innerHTML = `
            <img src="../media/chocolate/${chocolate_json[i]['img']}" class="product-img">
            <div class="product-data">
                <p class="product-name">name: ${chocolate_json[i]['name']}</p>
                <p class="product-price">price: ${chocolate_json[i]['price']}</p>
                <div class="product-control">
                    <button class="minus">-</button>
                    <input type="text" class="count" value="0">
                    <button class="plus">+</button>
                </div>
            </div>
    `
    product.appendChild(div)
}