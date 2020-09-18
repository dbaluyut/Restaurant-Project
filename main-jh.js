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

fetch("https://obscure-tundra-54269.herokuapp.com/casual-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    console.log(menu)
    console.log(menu.appetizers)
    console.log(menu.appetizers[0])
    console.log(menu.appetizers[0].name)
    // for (let i = 0; i < menu.length; i++) {}
    // console.log([i])
  })

const tabs = document.querySelector("#tabs")

tabs.addEventListener("click", function (e) {
  e.preventDefault
  const select = e.target.
})
