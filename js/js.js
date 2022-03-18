/* JSOM menu */
let dish = [{
    name: "Gullash",
    image: "gullashtrans.png",
    price: 120
  },
  {
    name: "Veganske suppe",
    image: "suptrans.png",
    price: 50
  },
  {
    name: "Croissant",
    image: "crotrans.png",
    price: 15
  }
]

let dish2 = [{
    name: "Bibimbab",
    image: "bibimtrans.png",
    price: 150
  },
  {
    name: "Creme brulee",
    image: "cbtrans.png",
    price: 30
  }
]

let dish3 = [{
    name: "Kyllingesticks",
    image: "kylltrans.png",
    price: 80
  },
  {
    name: "Æblekage",
    image: "kagetrans.png",
    price: 35
  }
]


let amount = 0
sum.innerHTML = amount

/* display the menu */
for (let i = 0; i < dish.length; i++) {

  theMenu.innerHTML += `
    <div class="aDish">
      <h3>  ${dish[i].name} </h3>
      <img src="images/${dish[i].image}" alt="${dish[i].name}">
      <div class="buy">
      <p> Price: ${dish[i].price} kr. </p>
      <button onclick="anOrder(
        '${dish[i].name}',
        '${dish[i].price}'
        )">🛒</button>
        </div>
    </div>

  `
}

for (let i = 0; i < dish2.length; i++) {

  theMenu2.innerHTML += `
    <div class="aDish2">
      <h3>  ${dish2[i].name} </h3>
      <img src="images/${dish2[i].image}" alt="${dish2[i].name}">
      <div class="buy">
      <p> Price: ${dish2[i].price} kr. </p>
      <button onclick="anOrder(
        '${dish[i].name}',
        '${dish[i].price}'
        )">🛒</button>
        </div>
    </div>

  `
}

for (let i = 0; i < dish3.length; i++) {

  theMenu3.innerHTML += `
    <div class="aDish3">
      <h3>  ${dish3[i].name} </h3>
      <img src="images/${dish3[i].image}" alt="${dish3[i].name}">
      <div class="buy">
      <p> Price: ${dish3[i].price} kr. </p>
      <button onclick="anOrder(
        '${dish[i].name}',
        '${dish[i].price}'
        )">🛒</button>
        </div>
    </div>

  `
}


// add order til orderlist
function anOrder(order, price, i) {
  // create list
  ordersList.innerHTML += '<li class="orderItem">' + order +
    ' price: ' + price + ' kr.' +
    ' <button class="buy-button" onclick="this.parentNode.remove();amount-=' + parseInt(price) + ';sum.innerHTML=amount">X</button> </li>'
  // update amount
  amount += parseInt(price) // string to number
  sum.innerHTML = amount + ' kr.';
  sum.innerHTML += `
    <form action="tak.html">
    <button class="buy-button"> Køb </button>
    </form>
  `

  // sessionStorage - save data in the session
  sessionStorage.setItem("yourOrders", orders.innerHTML)
  console.log(sessionStorage.getItem("yourOrders"))
}

// save orders session
