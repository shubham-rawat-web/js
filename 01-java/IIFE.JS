//Immeditately invoked function expressions (iife)
(function hii () {
    console.log('db ')
}) ();

( () => { 
    console.log("hii")
} )();

((NAME) => {
    console.log(`hi my name is ${NAME}`)
}) ('shubham')