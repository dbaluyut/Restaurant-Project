// API order
// {apps: [
//    item {
//        name: etc.
//        desc: yes,no
//        extra: {
//          spicy
//            }
//      }
//    ]}
// {entrees: [
//    item {
//        name: etc.
//        desc: yes,no
//        extra: {
//          spicy
//            }
//      }
//    ]}
// {desserts: [
//    item {
//        name: etc.
//        desc: yes,no
//        extra: {
//          spicy
//            }
//      }
//    ]}

//......................................................
//.MMMMM...MMMMM..EEEEEEEEEEE.NNNN....NNN..UUUU...UUUU..
//.MMMMM...MMMMM..EEEEEEEEEEE.NNNNN...NNN..UUUU...UUUU..
//.MMMMMM..MMMMM..EEEEEEEEEEE.NNNNN...NNN..UUUU...UUUU..
//.MMMMMM.MMMMMM..EEEE........NNNNNN..NNN..UUUU...UUUU..
//.MMMMMM.MMMMMM..EEEEEEEEEE..NNNNNNN.NNN..UUUU...UUUU..
//.MMMMMM.MMMMMM..EEEEEEEEEE..NNNNNNN.NNN..UUUU...UUUU..
//.MMMMMM.MMMMMM..EEEEEEEEEE..NNN.NNNNNNN..UUUU...UUUU..
//.MMMMMMMMMMMMM..EEEEEEEEEE..NNN.NNNNNNN..UUUU...UUUU..
//.MMM.MMMMMMMMM..EEEE........NNN..NNNNNN..UUUU...UUUU..
//.MMM.MMMMM.MMM..EEEE........NNN..NNNNNN..UUUU...UUUU..
//.MMM.MMMMM.MMM..EEEEEEEEEEE.NNN...NNNNN..UUUUUUUUUUU..
//.MMM.MMMMM.MMM..EEEEEEEEEEE.NNN...NNNNN...UUUUUUUUU...
//.MMM.MMMMM.MMM..EEEEEEEEEEE.NNN....NNNN....UUUUUUU....
//......................................................
//......................................................

const appetizers = document.querySelector("#apps")
const entrees = document.querySelector("#entrees")
const desserts = document.querySelector("#desserts")

fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    return menu.appetizers
  })
  .then((item) => {
    appFunct = () => {
      console.log(item)
      // console.log(item.name)
      // for (let x of item) {
      //   // console.log(x)
      //   console.log(item[x])
      //   console.log(item[x].name)
      //   return `<h3>${item[x].name}</h3>`
      // }
      return item
        .map((x) => {
          console.log(x)
          console.log(x.name)
          console.log(x.price)
          return `<div class="itemLine">
          <h3 class="itemName">${x.name}</h3>
          <div class="vertBreak"></div>
          <h5>${x.price}</h5>
          </div>
          <div class="descLine">
          <span>${x.description}</span>
          <div class="foodInfo"></div>
          </div>`
        })
        .join("")
    .then((menu) => {
      return menu.entrees
    })
    .then((item) => {
      entreeFunct
    })
      //for the food info, should I use an if statement?
      // or like filter it orrrr what my guy?

      // console.log(item)
      // console.log(item.name)
      // for (let x in item) {
      //   console.log(item)
      //   // console.log(menu.[x])
      //   // console.log(menu.[x].name)
      //   // return `<div class="itemLine">
      //   // <h3>${item[x].name}</h3>
      //   // </div>`
      // }
      // for (let i = 0; i < menu.appetizers.length; i++) {}
      //   console.log(menu.appetizers[i])
      //   console.log(menu.appetizers[i].name)
      // return `<div class="itemLine">
      // <h3>${menu.appetizers[i].name}</h3>
      // </div>`
      // console.log(menu)
      // console.log(menu.appetizers)
    }
    // console.log(menu.appetizers[0].name)
    // for (let i = 0; i < menu.appetizers.length; i++) {}
    // console.log([i])
    appetizers.innerHTML = appFunct()
  })

// const tabs = document.querySelector("#tabs")

// tabs.addEventListener("click", function (e) {
//   e.preventDefault
// const select = e.target.
// })
