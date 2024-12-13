const tin = new Object() 
const tinder={}

tinder.id = " 234abc"
tinder.name = " sss"

const regularuser = {
    email : "full name",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            lastname:" rawat"
        }
    }

}
// console.log( regularuser.fullname.userfullname.lastname)

const object1 = {1:"a" , 2:"b"}
const object2 = {3:"a" , 4:"b"}
const object4 = {5:"a" , 6:"b"}

// const object3 = {object1,object2}
// const object3 = Object.assign(object1,object2,object4)


const object3 = { ...object1, ...object2, ...object4} //sspradoprator
// console.log(object3)

const course = {
    coursename:"js hindi ",
    price : "999",
    coursetecher : "sahil"
}

// console.log( course.coursetecher)

const { coursetecher} = course  //objects destructing
const { coursetecher : techer} = course  //objects destructing

console.log(coursetecher)
console.log(techer)

