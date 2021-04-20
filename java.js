// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.

function exponentials(x,y){

    if(!(isNaN(x)||isNaN(y))){
        for (i=0; i<y;i++){
            console.log(x,"^",i,"equals", x**(i+1))
        }
    }
    else{
        console.log("One or more Parameters are not numbers")
    }
}
exponentials(7,8)

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let fav_food 
function printFavoriteFruit(){
    fav_food = "Mango"
}
printFavoriteFruit()
console.log(fav_food)
// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(a,b){
    if(!(isNaN(a)||isNaN(b))){
        let result =  a**b
    }
    else{
        console.log("One or more Parameters are not numbers")
    }
}
console.log(result)

//it wont work because resault is not a global and is constraint to the if block in line 33.
//If you whant to acces it like that resault has to be declared as a var (global). But we would not whant that