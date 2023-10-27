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

//let cool = '1' == 1
//console.log(cool)

//This is falso because triple equal sign 
//checks to see if both the value and data type are the same 
// in this situation '1' (which is the same value 1, but has a different data type, string) is not the same as 1 (which has the same value 1, but not the same data type, number)
//let bool = '1' === 1
//console.log(bool)


//this will come back false because the exclamation mark with the equal sign references the double equal
//the sign between the ones is saying both values are not equal to each other, but thats false because both values are equal
//let boolean = '1' != 1
//console.log(boolean)



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
     