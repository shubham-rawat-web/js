//object literals

const mysym = Symbol("key1")

const jsuser = {
    name : "shubham rawat",
    "full name" :" shubham rawat",
   [mysym]:"mykey1",
    age :18,
    location :"jaipur",
    email : "rawatsubham@gmail.com"


}
jsuser.email="shubham@gmail.com"
// Object.freeze(jsuser)

console.log( jsuser.email),
console.log( jsuser["email"])
console.log(jsuser[mysym])

jsuser.greeting = function(){
    console.log("hello js user")
}
console.log(jsuser.greeting())

