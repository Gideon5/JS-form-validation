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

console.log(car)

//CLASS-OBJECT

function carClassObject(n, c, t, s, c, i) {
    this.name = n
    this.color = c
    this.transmission = t
    this.speed = s
    this.class = c
    this.interior = i
}


car1 = new carClassObject("Volvo", "Red", "Automatic", "200km/h", "C",["C", "s", "gears", "seats", ["wims", "sprites"," anchors", "testing"]])

console.log(car1)