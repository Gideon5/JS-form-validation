//OBJECT LITERAL 
let car = {
    name: "Volvo",
    color: "Red",
    transmission: "Automatic",
    speed: "200km/h",
    class: "C",
    startCar: function () {console.log("Car started")},
    interior: ["C", "s", "gears", "seats", ["wims", "sprites"," anchors", "testing"]]
}

console.log(car.name)

//CLASS-OBJECT
//CONSTRUCTOR FUNCTION
class CarClassObject {
    constructor(n, c, t, s, cl, i) {
        this.name = n
        this.color = c
        this.transmission = t
        this.speed = s
        this.class = cl
        this.interior = i
    }
}

class Ship extends CarClassObject {
    constructor(n, c, t, s, cl, i, size)
   {
     super (n, c, t, s, cl, i)
     this.conductor = size

}}


car1 = new CarClassObject("Volvo", "Red", "Automatic", "200km/h", "C",["C", "s", "gears", "seats", ["wims", "sprites"," anchors", "testing"]])
ship = new Ship("Yatch", "Green", "Manual", "300km/j", "s CLASS", "Decorative", "400kmsqft")
console.log(car1.name)

console.log(ship.size)

//STATIC METHOD / FUNCTIONS

  //HIGH ORDER FUNCTIONS

  let shop = [
    {
      id: "SASDA",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-1.jpg",
    },
    {
      id: "SADASD",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
    {
      id: "DSDADASD3",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-3.jpg",
    },
    {
      id: "SDADS4",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-4.jpg",
    },
    {
      id: "5SDADSAD",
      name: "Mens Tie",
      price: 25,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-5.png",
    },
    {
      id: "6SDADSADASD",
      name: "Casual shoes",
      price: 200,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-6.png",
    },
    {
      id: "7SDADSADSA",
      name: "black suit",
      price: 450,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-7.png",
    },
    {
      id: "8SDADSD",
      name: "polo shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-8.png",
    },
    {
      id: "9SDADSAD",
      name: "denim shirt",
      price: 85,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-9.png",
    },
    {
      id: "10SDASDSAD",
      name: "denim pants",
      price: 120,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-10.png",
    },
    {
      id: "11DSADWQDAS",
      name: "basic cap",
      price: 35,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-11.png",
    },
    {
      id: "12DSADWQDSAD",
      name: "leather boots",
      price: 350,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-12.png",
    },
  ]
  
  const ages =  [33, 32, 34, 454, 565, 565 , 54, 34, 34 ,4, 43, 34 , 43 ]

//   for (let i =0; i < shop.length; i++) {
//     console.log(shop[i])
//   }


  //FOREACH
// shop.forEach(function (item) {
//     console.log(item.name)
// })

//filter
// let expensive = []

// for(let i = 0; i < shop.length; i++) {
//     if(shop[i].price > 100) {
//         expensive.push(shop[i].price)
//     }
// }



const expensive = ages.filter((x) => x > 100)


console.log(expensive)