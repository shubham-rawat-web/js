const score = 400
console.log(  parseInt(score))
console.log(typeof(score))

console.log(score.toString().length);
console.log( score.toFixed(1))

const othernumber = 23.445
console.log(othernumber.toPrecision())


// math

 console.log(Math)
 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.4));
 console.log(Math.floor(4.8));
 console.log(Math.min(4,7,9,10));
 console.log(Math.max(3,6,9,8))

 console.log( Math.random());
 console.log( Math.random()*10000)
 console.log((Math.random()*10000)+1 )

 const min = 10;
 const max = 20;
 console.log(Math.floor(Math.random()* (max-min+1))+min)
 