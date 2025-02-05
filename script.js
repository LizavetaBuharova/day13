//Формат JSON
let user = {
  firstName: "Harry",
  surName: "Potter",
  location: {
    counry: "UK",
    city: "London",
    address: {
      street: "Tisova",
      house: 4,
    },
  },
};

let userJSON = JSON.stringify(user);
console.log(userJSON);

let userAgain = JSON.parse(userJSON);
console.log(userAgain);

//Массивы и методы массивов

let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

let numbersArr = [1, 5, 9, 6, 7, 29];

let numbersArrSquare = numbersArr.map((el) => el ** 2);
console.log(numbersArrSquare);

let numbersFilter = numbersArr.filter((el) => el % 2 === 0);
console.log(numbersFilter);

//Деструктуризация и деструктурирующее присваивание

let person = {
  name: "Ron",
  age: 11,
};

let { name, age } = person;
console.log(name, age);

let fruit = ["яблоко", "банан", "груша"];
let [first, second] = fruit;
console.log(first, second);

let { address = "London", school = "hogvards" } = person;
console.log(address);
