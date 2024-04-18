// import foo from "./foo.js";
// import { square, add } from "./mathlib.js";

// console.log(square (9))
// console.log(add(6,7))
// foo()



// Default Arguments
// function calculateTotal (subtotal, tax = 0.07, shipping = 10) {
//     return subtotal + shipping + (subtotal*tax)
// }

// const total = calculateTotal (100)
// console.log(total)



// Destructuring Object
// const person = {
//     first: 'Kevin',
//     last: 'Langley',
//     location: {
//         city: 'Beverly Hills',
//         state: 'Florida'
//     }
// };

// const {first, last, location: {city, state}} = person
// console.log (first)
// console.log (last)
// console.log (city)
// console.log (state)

// const {location} = person
// console.log(location)



// Spread Operator
// function doSomething (x,y,z) {
//     console.log(x,y,z)
// }
// let args = [0,1,2,4,5]
// doSomething.apply(null, args) 
// doSomething(...args) 
// doSomething(args) 

// let array1 = ['one', 'two', 'three']
// let array2 = ['four', 'five']

// array1.push(...array2)
// console.log(array1)

// array1.unshift(...array2)
// console.log(array1)


//Class
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
// }
  
// class Dog extends Animal {
//     constructor(name, breed) {
//       this.breed = breed;
//     }
//     speak() {
//       console.log(`${this.name} barks!`);
//     }
// }

//Study Case
// class student {
//     constructor (namaStudent) {
//         this.namaStudent = namaStudent
//     }
    
//     learn () {
//         console.log(`${this.namaStudent} belajar`);
//     }
// }

// class tutor {
//     constructor (namaTutor) {
//         this.namaTutor = namaTutor
//     }

//     teach () {
//         console.log(`${this.namaTutor} mengajar`);
//     }
// }


// class kelas {
//     constructor(namaKelas, tutor, student) {
//         this.namaKelas = namaKelas;
//         this.tutor = tutor;
//         this.student = student;
//     }
//     showClass () {
//         console.log (`Program ODP BNI Batch ${this.namaKelas}`)
//     }

//     addTutor () {

//     }
//     showAll() {
//         console.log(`Di kelas ${this.namaKelas} ada ${this.tutor.namaTutor} dan ${this.student.namaStudent}`);
//     }
// }


// const Student = new student (['Dimas', 'Yoga', 'Krisna', 'Zen'])
// const Student2 = new student ('Daffa', 'Fred')
// Student.learn()
// Student2.learn()
// const Tutor = new tutor ('Fajru')
// const Kelas = new kelas ('309', Tutor, Student)
// Kelas.showAll()

// Promise
// const postsPromise = fetch('https://pokeapi.co/api/v2/pokemon?limit=151%27')
// .then(response => response.json())
// .then (countpokemon => console.log(countpokemon.count))
// .then(allpokemon => console.log(allpokemon.results))

//postsPromise.then(data => console.log(data))

// const postsPromise = fetch ('https://jsonplaceholder.typicode.com/users')
// .then (response => response.json())
// .then (showAddress => console.log(showAddress.map (el => el.address.geo.lat)))
// .catch (err => console.error(err))

// const postsPromise = fetch ('https://pokeapi.co/api/v2/pokemon/ditto')
// .then (response => response.json())
// .then (pokemon => console.log(pokemon.map (el => el.name)))
// .catch (err => console.error(err))
