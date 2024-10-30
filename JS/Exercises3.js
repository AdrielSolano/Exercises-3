//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assing value to it and use the typeof operator to check different data types
let firstName = "Adriel"
let lastName = "Solano"
let country = "Mexico"
let city = "CDMX"
let age = 19
let isMarried = false
let year = 2005

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2.Check if typeof '10' is equal to 10
typeof '10' === 10 //False
console.log(typeof '10' === 10)

//3.Check if parseInt('9.8') is equal to 10
parseInt ('9.8') === 10 //false
console.log(parseInt ('9.8') === 10)

//4.Boolean value is either true or false.

//1.- Write three JavaScript statement which provide truthy value.
console.log(3 > 2)
const check = 4 > 3 || 10 > 5 //true
console.log(!!1)

//2.- Write three JavaScript statement which provide falsy value.
console.log(undefined === false)
console.log(2 < 1)
console.log(false)

//5.Figure out result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//i.
4 > 3 //true
//ii.
4 >= 3 //true
//iii.
4 < 3 //false
//iv.
4 <= 3 //false
//v.
4 == 4 //true
//vi.
4 === 4 //true
//vii.
4 != 4 //false
//viii.
4 !== 4 //false
//ix.
4 != '4'//false
//x.
4 == '4' //true
//xi.
4 === '4'//false

//i.
console.log(4>3)
//ii.
console.log(4>=3)
//iii.
console.log(4<3)
//iv.
console.log(4<=3)
//v.
console.log(4==4)
//vi.
console.log(4===4)
//vii.
console.log(4!=4)
//viii.
console.log(4!==4)
//ix.
console.log(4!='4')
//x.
console.log(4=='4')
//xi.
console.log(4==='4')

//6.Use the Data object to do the following activities

//i. What is the year today?
const now1 = new Date()
console.log(now1.getFullYear())
//ii. What is the month today as a number?
const now2 = new Date()
console.log(now2.getMonth())
//iii. What is the date today?
const now3 = new Date()
console.log(now3.getDate())
//iv. What is the day today as a number?
const now4 = new Date()
console.log(now4.getDay())
//v. What is the hours now?
const now5 = new Date()
console.log(now5.getHours())
//vi. What is the minutes now?
const now6 = new Date()
console.log(now6.getMinutes())
//vii. Find out the numbers of seconds elapsed from january 1, 1979 to now.
let secondsElapsed = Math.floor(Date.now() / 1000)
console.log(secondsElapsed)



//7.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = parseFloat(prompt('Ingrese la base del triangulo:'))
let altura = parseFloat(prompt('Ingrese la altura del triangulo:'))
let area = 0.5 * base * altura
console.log('El área del rectangulo es: ' + area)

//8.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let ladoA = parseFloat(prompt('Ingrese el lado A del triangulo:'))
let ladoB = parseFloat(prompt('Ingrese el lado B del triangulo:'))
let ladoC = parseFloat(prompt('Ingrese el lado C del triangulo:'))

let perimetro = ladoA + ladoB + ladoC
console.log('El perimetro del triangulo es: ' + perimetro)