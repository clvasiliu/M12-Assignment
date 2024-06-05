// STEP 1
// class Cat {
//     constructor(species, name) {
//         this.species = species;
//         this.name = name;
//     }
// }

// const Dog = class {
//     constructor(species, name) {
//         this.species = species;
//         this.name = name;
//     }
// }

// STEP 2
// class Cat {
//     constructor(species, name) {
//         this.species = species;
//         this.name = name;
//     }
// }

// const Dog = class {
//     constructor(species, name) {
//         this.species = species;
//         this.name = name;
//     }
// }
// const cat = new Cat("Siamese", "Doggo");
// const dog = new Dog("Husky", "Catto");
// console.log(`The cats name is ${cat.name} and they are the ${cat.species} breed.`);
// console.log(`The dogs name is ${dog.name} and they are the ${dog.species} breed.`);

// STEP 3
// class Animal {
//     constructor() {

//     }
//     createAnimal() {
//         console.log("The Animal has been created");
//     }
// }

// const animal = new Animal();
// animal.createAnimal();

// STEP 4
// class Animal {
//     constructor(animal) {
//         this.animal = animal;
//     }
//     createAnimal() {
//         console.log(this.animal);
//     }
// }
// const animal = new Animal("Dog");
// animal.createAnimal();

// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const animal = new Animal("Dog", "Husky", "Gray", "2ft", "3ft")

// STEP 6
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// }
// const animal = new Animal("Dog", "Husky", "Gray", "2ft", "3ft")
// for (trait in animal) {
//     console.log(`${trait}: ${animal[trait]}`);
// }

// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
//     speak() {
//         if (this.type === "dog") {
//             return `The ${this.color} dog is barking!`;
//         } else if (this.type === "cat") {
//             return `The ${this.color} cat is meowing!`;
//         }
//     }
// }
// const dog = new Animal("dog", "Husky", "Gray", "2ft", "3ft");
// const cat = new Animal("cat", "Siamese", "Gray", "1ft", "2ft");
// console.log(dog.speak());
// console.log(cat.speak());

// STEP 8
// class Animal {
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;
//     constructor(type, breed, color, height, length) {
//         this.#type = type;
//         this.#breed = breed;
//         this.#color = color;
//         this.#height = height;
//         this.#length = length;
//     }
//     #checkType() {
//         if (this.#type === "dog") {
//             return "dog";
//         } else {
//             return "cat";
//         }
//     }
//     speak() {
//         return `The ${this.#checkType()} has made a noise!`;
//     }
// }
// const dog = new Animal("dog", "Husky", "Gray", "2ft", "3ft");
// const cat = new Animal("cat", "Siamese", "Gray", "1ft", "2ft");
// console.log(dog.speak());
// console.log(cat.speak());

// STEP 9
// String.prototype.findWords = function (word) {
//     return this.match(/word/gim).length;
// }
// window.alert("This is a test of the findWords function. This test should return the number of the word 'is' found in this paragraph.".findWords("is"));