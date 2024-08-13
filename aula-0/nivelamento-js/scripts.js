// 1 - var, let, const

var x = 10
var y = 15

if (y > 10){
    var x = 5
    console.log("var: valor de 'x' dentro do if: " + x)
}

console.log("var: valor de 'x' fora do if: " + x)

let a = 10
let b = 15

if (b > 10){
    let a = 5
    console.log("let: valor de 'a' dentro do if: " + a)
}

console.log("let: valor de 'a' fora do if: " + a)

// 2 - arrow functions

const sum = function sum(a,b){
    return a + b
}

const arrowSum = (a,b) => a + b

console.log(sum(10, 5))
console.log(arrowSum(10, 5))

const user = {
    name: 'legates',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self.name)
        }, 1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}

// 3 - filter
const arr = [1,2,3,4,5]

const evenNumbers = arr.filter((item) => {
    if (item % 2 == 0) {
        return item
    }
})

console.log("evenNumbers: " + evenNumbers)

const users = [
    {name: 'legates', age: 25},
    {name: 'joao', age: 15},
    {name: 'maria', age: 30}
]

const usersWithMoreThan18Years = users.filter((user) => user.age > 18 ? user.age : null)

console.log("usersWithMoreThan18Years: " + JSON.stringify(usersWithMoreThan18Years))

// 4 - map
const products = [
    {name: 'notebook', price: 2500, category: 'eletronics'},
    {name: 'smartphone', price: 1500, category: 'eletronics'},
    {name: 't-shirt', price: 50, category: 'clothes'}
]

products.map((product) => { product.category === 'eletronics' ? product.salePrice = product.price * 0.9 : null })

console.log("products: " + JSON.stringify(products))

// 5 - template literals
const name = 'legates'
const age = 31

console.log(`name: ${name} and age: ${age}`)

// 6 - destructuring
const colors = ['red', 'green', 'blue']

const [c1,c2,c3] = colors

const dog = {
    name: 'dog',
    weight: 3,
    color: 'black'
}

const {name: dogName, weight, color} = dog

console.log(`${dogName} has ${weight}kg and is ${color}`)

// 7 - spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2]

const a4 = [0, ...a1, ...a2, 7]

// 8 - classes

class Animal {
    constructor(name){
        this.name = name
    }

    sayName(){
        console.log(this.name)
    }
}

class Cat extends Animal {
    constructor(name, colors){
        super(name)
        this.colors = colors
    }

    getColors(){
        this.colors.forEach((color) => console.log(color))
    }
}

const cat = new Cat('cat', ['black', 'white'])
console.log(cat.getColors())