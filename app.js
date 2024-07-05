//VARIABLES SECTION

//let name = 'Brooklynn'
//You can also store a full name
//let fullName = 'Brooklynn Stevenson'
//the string value can be a number, a boolean, null, or any other data type
//Examples
//let isRaining = true
//let temperature = 20
//let planet = 'Earth'

//make temperature 22 
//on the right side we use variables 
//temperature = temperature + 2 
//console.log(temperature)

//you can use const instead of let but if you use const then you can't resigna variable like temperature = temperature + 2 because temperature value can't change in const it has to remain 20
//once you asign a const variable you cannot change it

/**
 * Converting Temperatures Exercise
 * 
 * Celsius-to-Fahrenheit formula:
 * 
 *    F = C x 1.8 + 32
 */
//let celsius = 10;
//let fahrenheit = celsius * 1.8 + 32;
//console.log(fahrenheit); 

//Equality
// "==" and "==="
// == double equal checks the values on the left and right hand side and if both values match it returns true otherwise it will return false
// === triple equals checks the values and the types
// = one equal can resign a value and that's not what we want 
//Example: let firstName = 'David'
//             firstName = 'Bragg'

//You almost never want to use a double equals ==.
//You almost always want to use === because it adds a bit more type safety into your code

//let cool = '1' == 1
//console.log(cool)
//this will return true because it's same value but different data type

//This would be falso if we used a triple equal sign because its the same value but not the same type 
//checks to see if both the value and data type are the same 
// in this situation '1' (which is the same value 1, but has a different data type, string) is not the same as 1 (which has the same value 1, but not the same data type, number)
//let bool = '1' === 1
//console.log(bool)

// this is going to check if the type and value are equal to one another !== This is called NOT EQUAL TO

//this will come back false because the exclamation mark with the equal sign references the double equal
//the sign between the ones is saying both values are not equal to each other, but thats false because both values are equal
//let boolean = '1' != 1
//console.log(boolean)

// These ! are just asking if == or === is true? Example != is just stating the values are not equal to one another. If the values are actually equal then this will console false. If the values aren't equal to one another it will console true.
//Example '1' != 1 this will console false because the values ARE EQUAL to one another

// Example with !==
// '1' !== 1 this will console true because the values are equal but the types are not so this is actually true that they ARE NOT EQUAL.

// opposite of false will give you true = !false . These are saying the same thing !false is just a shorter way to write that sentence.
// opposite of true will give you false = !true 



//let coolean = '1' !== 1
//console.log(coolean)


//CONDITIONALS

//let subscribed = true

//because subscribed above is equal to true then console.log will show "show the video"
//if (subscribed ===true) {
    //console.log('show the video')
//}

    // let subscrided = false

//but in the if statement we write subscrided as true, when let subrided = false
//then the if statement for console.log won't show.

//else statement only runs if "if statement" doesn't run.

    // let subscribed = false 
    // let loggedIn = true


//only one of these statements can run at a time.
//the order of statements is VERY IMPORTANT. 
    // if ( subscribed === true) {
    //  console.log('show the video')
    // }

    //else if (loggedIn === true) {
    //  console.log('tell the user to upgrade their subscription')
    // }
    //else {
    //  console.log('tell user to log into account')
    // }

//You can have an if statement without an else statement, but you can't have a else statement without an if statement.


//Exercise

    // let cash = 45
    // let price = 40
    // let difference = cash - price
//now just write difference where you've put cash - price and price - cash

    // if (cash > price) {
    //  console.log(`you paid extra - here's ${difference} dollars change`)
    // }

    // else if (cash === price) {
    //  console.log("you paid the exact amount, have a nice day!")
    // }

    // else {
    //  console.log(`not enough money - you still owe ${difference * -1} dollars`)
    // }

//you can have the system calculate the total thats due by subtracting the two variable from one another
//or you can create a variable called difference where you subtract the cash from the price like this:
// let difference = cash - price 

//or you can do it ${cash - price} in the cash > price section and do {price - cash} in the else section.


//LOGICAL OPERATORS

//&& Checks if the left and right side of the comparison is true
//   true && true -> true
//   true && false -> false
//   false && true -> false
//   false && false -> false

    // let cash = 50
    // let price = 40
    //let isStoreOpen = false

//THIS CONSOLE WILL PRINT OUT AND WORK

    // if (cash >= price && isStoreOpen === true) {
        // console.log(`Print the receipt`)
    // }


//this will show false so it won't show because isStoreOpen(false) is not equal to true
    // if (cash >= price && isStoreOpen === true) {
        //console.log(`Print the receipt`)
    // }

//this statement will show because with || symbol you only need one true for the statement to run
//in this case cash >= price is true, but isStorageOpen === true is false; however it will still run because we have at least one true in the || logical operator.
    // if (cash >= price || isStoreOpen === true) {
        // cosnole.log(`print the receipt`)
    // } 

//when doing || operation you don't need === true because isstorageOpen will be false regardless. so you can right the statement like this instead which will be the same as the statement right above just less code:
    // if (cash >= price || isStoreOpen) {
        // cosnole.log(`print the receipt`)
    // }  

// isStorageOpen === false is the samething as !isStoreOpen which both means the store is closed.

      // if (cash >= price || !isStoreOpen) {
        // cosnole.log(`print the receipt`)
    // }  


//TERNARY OPERATIONS

//Exercise 1
    // let hot = true
    // hot ? console.log('weather is hot outside') : console.log('weather is cold')

//Exercise 2
    /**let subscribed = true
     * let loggedIn = true
     * 
     * let str = subscribed && loggedIn ? 'show video' : 'hide video'
     * console.log(str)
     */

//Exercise 3 
    //let cash = 50 
    //let price = 40
    //let isStoreOpen = true 

    //let str = cash >= price && isStoreOpen === true ? 'give receipt' : 'do not give receipt'
    //console.log(str)

//LOOPS

//let count = 1;

//while (count <= 100) {
    //console.log(count)
    //count = count + 1;
//}

//for (let i = 1; i <= 20; i++) {
  //  console.log(i);
//}


//FIZZ BUZZ QUESTION
/** Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by either 3 or 5, print the number
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplfied"
 * ...
 * 20 -> "Simplified"
 */

//ANSWER
//for (let i = 1; i <= 20; i++) {
    //if (i % 3 === 0 && i % 5 === 0) {
        //console.log(`${i} -> Frontend Simplified`); }
        //else if (i % 3 === 0) {
            //console.log(`${i} -> Frontend`)
        //}
        //else if ( i % 5 === 0) {
            //console.log(`${i} -> Simplified`)
        //}
        //else {
            //console.log(`${i} -> ${i}`)
       // }
    //}

    //const str = "Frontend Simplified"

    //for (let i = 0; i < str.length; i++) {
      //  console.log(str[i])
    //}


//PRACTICE FOR FUNCTIONS
//PRACTICE QUESTION
//CREATE A FUNCTION THAT CONVERTS CELSIUS TO FAHRENHEIT
//CELSIUS TO FAHRENHEIT FORMULA:
// F = C * 1.8 +32

//@EXAMPLE
//convertCelsiusToFahrenheit(0) -> 32
//convertCelsiusToFahrenheit(10) -> 50
//convertCelsiusToFahrenheit(30) -> 86
 

    //function convertCelsiusToFahrenheit(F, C) {
    //return F = C * 1.8 + 32
//}

   // console.log(convertCelsiusToFahrenheit(0, 0));

    //function convertCeldiusToFahrenheit(F, C) {
        //return F = C * 1.8 + 32
    //}

   // console.log(convertCelsiusToFahrenheit(0, 10));

//function convertCelsiusToFahrenheit (F, C) {
//return F = C * 1.8 + 32
//}

//console.log(convertCelsiusToFahrenheit(0, 30))

//OR you can write it this way

//function convertCelsiusToFahrenheit(celsius) {
//let fahrenheit = celsius * 1.8 + 32
//return fahrenheit
//}

//console.log(convertCelsiusToFahrenheit(0)) // you can just plug 0, 10, or 30 in the place where did is to answer every question
//console.log(convertCelsiusToFahrenheit(10))
//console.log(convertCelsiusToFahrenheit(30))


//ARROW FUNCTION (MORE ELITE WAY TO WRITE FUNCTIONS)
//use const with arrow functions not "function" because "function" won't work
//with arrow functions. You can use "let", but "const" is best practices.

//const convertCelsiusToFahrenheit = (celsius) => {
 //   return fahrenheit = celsius * 1.8 + 32 //you don't really need to put fahrenheit if you don't want to
//}

//console.log(convertCelsiusToFahrenheit(0))
//console.log(convertCelsiusToFahrenheit(10))
//console.log(convertCelsiusToFahrenheit(30))

//let arr = [20, 30, 40, 50, 100]
// console.log(arr[0])
// console.log(arr[arr.length -1]);

// arr.push(200)
// console.log(arr);

// console.log(arr[arr.length - 1])

//ARRAY FILTER METHOD QUESTIONS
//FILTER OUT ALL THE FAIL ELEMENTS 

//QUESTION 1 - FILTER OUT FAIL
// let grades = ['A+', 'A', 'FAIL']

// let newArr = grades.filter(element => element < 'FAIL')
// console.log(newArr)

//QUESTION 2 - FILTER OUT FAIL
// let grades = ['FAIL', 'FAIL', 'B']

// let newArr = grades.filter (element => element <= 'B')
// console.log(newArr)


// let grades = ['FAIL']

// let newArr = grades.filter(element => element < 'FAIL')
// console.log(newArr)

//Remove Fail w/o doing the filter method
// let goodGrades = ['A+', 'A', 'FAIL']

// for (let i = 0; i < goodGrades.length; i++) {
//     if (i < goodGrades.length - 1)
//     console.log(goodGrades[i])
// }



/**
 * Filter out all the 'FAIL'n elements in an array
 * without using the Array.filter method
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'FAIL']

// //Create a new empty array called 'goodGrades'
// let goodGrades = []
// for (let i = 0; i < grades.length; ++i) {
//     //add the current element onto 'goodGrades' only if
//     if (grades[i] !== 'FAIL') {
//     //the current element is not equal to 'FAIL'
//         goodGrades.push(grades[i]);
//     }
// }
// //console.log 'goodGrades'
// console.log(goodGrades)



// let dollars = [1, 5, 10, 3];
// let newArray = dollars.map((element) => {
//     console.log(element)
//     return element * 100
// })

// console.log(newArray)

// let dollars = [1, 5, 10, 3];
// let newArray = dollars.map(element =>  element * 100)

// console.log(newArray)


//Do the loop method instead of the map method

// let dollars = [1, 5, 10, 3];
// let cents = []

// for (let i = 0; i < dollars.length; ++i) {
//         cents.push(dollars[i] * 100)
//     }
//     console.log(cents);

// let users = [
//     {
//         username: "Brooklynn",
//         email: "brooklynn@frontendsimplified.com",
//         password: "test123",
//         subscriptionStatus: "VIP",
//         discordId: "Brook#0001",
//         lessonsCompleted: "[0,1]"
//     }
// ];

// function register(username, email) {
//    for (let i = 0; i < users.length; ++i) {
//         if (users[i] === birthdate) {
//             users.push(users[i])
//         }
//    }
//    console.log(users)
// }


