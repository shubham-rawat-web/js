const marvel_heros= ["thor","ironman","spiderman"]
const dc_heros = [ "superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros [3][2])

// const allhero = marvel_heros.concat(dc_heros)
// console.log(allhero)

const all_new_hero = [ ...marvel_heros, ...dc_heros]  // = spradopratior

// console.log(all_new_hero)

const another_array = [ 1,2,3, [4,5,6,],7,[6,7,[4,5]]]

const real_another = another_array.flat(Infinity);
// console.log(real_another)

let a =459;
let b = 457;
let c = 675;


console.log( Array.isArray("shubham"))
console.log( Array.from("shubham"))
console.log( Array.from({name: "shubham"})) //interesting
console.log(Array.of( a,b,c))