//API FOR TODAY'S SPECIAL

//FETCH FOR TODAY'S SPECIAL
fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    return menu.entrees
  })
  .then((entrees) => {
    let date = new Date()
    let currentDay = date.getDay()

    //SPECIALS

    let entree0 = `${entrees[0].name}........................................................${entrees[0].price}<p id="special-description">${entrees[0].description}</p>`

    let entree1 = `${entrees[1].name}...................................................................${entrees[1].price}<p id="special-description">${entrees[1].description}</p>`

    let entree2 = `${entrees[2].name}...............................................${entrees[2].price}<p id="special-description">${entrees[2].description}</p>`

    let entree3 = `${entrees[3].name}............................................${entrees[3].price}<p id="special-description">${entrees[3].description}</p>`

    //CODE BELOW CHECKS DAY AND REPLACES CONTENT

    if (currentDay === 1)
      return (document.getElementById("special-name").innerHTML = entree0)

    //TUESDAY SPECIAL
    if (currentDay === 2)
      return (document.getElementById("special-name").innerHTML = entree1)

    //WED SPECIAL
    if (currentDay === 3)
      return (document.getElementById("special-name").innerHTML = entree2)

    //THUR SPECIAL
    if (currentDay === 4)
      return (document.getElementById("special-name").innerHTML = entree3)

    //FRI SPECIAL
    if (currentDay === 5)
      return (document.getElementById("special-name").innerHTML = entree0)

    //SAT SPECIAL
    if (currentDay === 6)
      return (document.getElementById("special-name").innerHTML = entree1)

    //SUN SPECIAL
    if (currentDay === 0)
      return (document.getElementById("special-name").innerHTML = entree2)
  })

//INTERVAL TO CHANGE VALUE OF INDEX FOR ENTREE
//DID NOT USE FUNCTION BELOW
function timer(x) {
  setInterval(function () {
    console.log(x)
    if (x === 4) {
      x = 0
    }
    x = x + 1
  }, 1000 * 60 * 60 * 24)
}

//TAB TOGGLE
//STATES

function test1() {
  document.getElementById("tab1").style.display = "contents"
  document.getElementById("tab2").style.display = "none"
  document.getElementById("tab3").style.display = "none"
  console.log("x")
  document.getElementById("main").style.borderRadius = "0 10rem"
}

let menuView = function () {
  document.getElementById("tab1").style.display = "none"
  document.getElementById("tab2").style.display = "flex"
  document.getElementById("tab3").style.display = "none"
  document.getElementById("main").style.borderRadius = "0 10rem 0 6rem"
}

let rezView = function () {
  document.getElementById("tab1").style.display = "none"
  document.getElementById("tab2").style.display = "none"
  document.getElementById("tab3").style.display = "flex"
  document.getElementById("main").style.borderRadius = "0 10rem"
}

//MENU FETCH
fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    return menu.appetizers
  })
  .then((appetizers) => {
    arr = appetizers
      .map(
        (x) =>
          `<div class="item">
    <div>
      <h4>${x.name}</h4>
      
    </div>
    <h5 class="price">$${x.price}</h5>
  </div>`
      )
      .join("")
    return (document.getElementById("testapp").innerHTML = arr)
    // console.log(appetizers)
  })

fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    return menu.entrees
  })
  .then((entrees) => {
    arr = entrees
      .map(
        (x) =>
          `<div class="item">
    <div>
      <h4>${x.name}</h4>
      
    </div>
    <h5 class="price">$${x.price}</h5>
  </div>`
      )
      .join("")
    return (document.getElementById("entree-items").innerHTML = arr)
    // console.log(entrees)
  })

fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    return menu.desserts
  })
  .then((desserts) => {
    arr = desserts
      .map(
        (x) =>
          `<div class="item">
    <div>
      <h4>${x.name}</h4>
      
    </div>
    <h5 class="price">$${x.price}</h5>
  </div>`
      )
      .join("")
    return (document.getElementById("dessert-items").innerHTML = arr)
    // console.log(dessert)
  })
