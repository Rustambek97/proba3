let basket = document.querySelector('.display');
let basket_json = [
    {
        'img': 'ice-cream/01.png',
        'name': 'Zolotoy',
        'price': 15000,
        'count': 5,
        'total price': 75000
    },
    {
        'img': 'chocolate/04.png',
        'name': 'Kit Kat',
        'price': 12000,
        'count': 3,
        'total price': 36000
    },
    {
        'img': 'drink/03.png',
        'name': 'coca-cola',
        'price': 14000,
        'count': 3,
        'total price': 42000
    },
    {
        'img': 'chocolate/13.png',
        'name': 'Alpen Gold',
        'price': 13000,
        'count': 4,
        'total price': 52000
    },
];

for (let i = 0; i < basket_json.length; i++) {
    let div = document.createElement("li");
    div.classList.add("display-list");
    div.innerHTML = `
        <ul>
            <img src="../media/${basket_json[i]['img']}" alt="">
            <li class="display-list-name">name: ${basket_json[i]['name']}</li>
            <li class="display-list-price">price: ${basket_json[i]['price']}</li>
            <li class="display-list-count">count: ${basket_json[i]['count']}</li>
            <li class="display-list-total">total price: ${basket_json[i]['total price']}</li>
            <div class="buttons">
                <button class="minus-button">-</button>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        </ul>`;
    basket.appendChild(div);
}
let minus=document.querySelectorAll('.minus-button')
minus.forEach((n,index)=>{
    n.onclick=()=>{
        let item=basket_json[index]
        if (item['count'] > 0) {
            item['count'] -= 1;
            item['total price'] -= item['price'];
            let count_list=document.querySelectorAll('.display-list-count')
            count_list[index].textContent = `count: ${item['count']}`;
            let total_price=document.querySelectorAll('.display-list-total')
            total_price[index].textContent = `total price: ${item['total price']}`;
        }
        if(item['count']==0){
            list[index].style.display='none'
        }
    }
})

let list=document.querySelectorAll('.display-list')
let remove=document.querySelectorAll('.delete')
remove.forEach((n,index)=>{
    n.onclick=()=>{
        list[index].style.display='none'
    }
})