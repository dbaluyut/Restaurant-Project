//API FOR TODAY'S SPECIAL
let date = new Date()
let currentDay = date.getDay()
fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    return menu.entrees
  })
  .then((entrees) => {
    // timer(i)
    //MONDAY SPECIAL
    if (currentDay == "1")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[0].name}..................${entrees[0].price}`)

    //TUESDAY SPECIAL
    if (currentDay == "2")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[1].name}..................${entrees[1].price}`)

    //WED SPECIAL
    if (currentDay == "3")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[2].name}..................${entrees[2].price}`)

    //THUR SPECIAL
    if (currentDay == "4")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[3].name}..................${entrees[3].price}`)

    //FRI SPECIAL
    if (currentDay == "5")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[0].name}..................${entrees[0].price}`)

    //SAT SPECIAL
    if (currentDay == "6")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[1].name}..................${entrees[1].price}`)

    //SUN SPECIAL
    if (currentDay == "5")
      return (document.getElementById(
        "special-name"
      ).innerHTML = `${entrees[2].name}..................${entrees[2].price}`)
  })

//INTERVAL TO CHANGE VALUE OF INDEX FOR ENTREE
function timer(x) {
  setInterval(function () {
    console.log(x)
    if (x === 4) {
      x = 0
    }
    x = x + 1
  }, 1000 * 60 * 60 * 24)
}
