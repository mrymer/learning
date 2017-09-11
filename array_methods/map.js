//using map on an array and testing it

var test = require ('tape');
var numbers = [4,9,16,25,36] //array of numbers

var root= numbers.map(Math.sqrt) //creating a new array called root to house the results of performing the square root function on 'numbers'
console.log(root) //logging root onto the console


test('map test', function(t) {
  t.equal(root,[2,3,4,5,6]);
  t.end();
})
