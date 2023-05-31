// დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

const getCurrencySymbolFromCode = (currency) => {
  //   switch (currency) {
  //     case "USD":
  //       return "$";
  //     case "EUR":
  //       return "€";
  //     case "GEL":
  //       return "ლ";
  //     default:
  //       return " IM SORRY DUDE";
  //   }
  if (currency === "USD") {
    return "$";
  } else if (currency === "EUR") {
    return "€";
  } else if (currency === "GEL") {
    return "ლ";
  } else {
    return " IM SORRY DUDE";
  }
};

const gel = getCurrencySymbolFromCode("GEL");
const usd = getCurrencySymbolFromCode("USD");
const eur = getCurrencySymbolFromCode("EUR");
const gbp = getCurrencySymbolFromCode("GBP");

// დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

const getProfit = (buyPrice, sellPrice, month) => {
  const profit = sellPrice - buyPrice; // სხვაობა
  const profitPercentage = (profit / buyPrice) * 100; // სხვაობა გავყავი გასაყიდ ფასსზე და გავმრავლე 100 ზე
  const profitFixed = profitPercentage.toFixed(2); //დავმარგვალეტ წერტილის მარკვენა მხარეს 1 რიცხვამდე
  const addPercentageSign = `${profitFixed}%`; // დავამატეთ სიმბოლო %
  return { addPercentageSign, profit, month };
};
getProfit(50.4, 350);

const may = getProfit(50.4, 350, "May");
const june = getProfit(50.5, 300, "june");
const july = getProfit(50.6, 250, "july");
const august = getProfit(50.7, 200, "august");

console.log(may, june);

// დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const filterNumber  = function (number) {
//     return number % 2 === 0;
//   }

// const filterNumbers = numbers.filter((number) => filterNumber(number));
let filterNumbersArrow = numbers.filter((item) => item % 2 === 0);
const filterNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

const persons = [
  {
    name: "giorgi",
    age: 20,
  },
  {
    name: "ana",
    age: 25,
  },
  {
    name: "elene",
    age: 30,
  },
];

const findPerson = (persons, age, name) => {
  const findPersonByAge = persons.find(
    (person) => person.age === age && person.name === name
  );
  if (findPersonByAge) {
    return findPersonByAge;
  } else {
    return "person not found";
  }
};

const ana = findPerson(persons, 25, "ana");
console.log(ana);
