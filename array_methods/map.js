//using map on an array and testing it

var test = require ('tape');
var numbers = [4,9,16,25,36] //array of numbers

var root= numbers.map(Math.sqrt) //creating a new array called root to house the results of performing the square root function on 'numbers'
console.log(root) //logging root onto the console
console.log(typeof root) //logging the type of the root array
console.log(typeof [2,3,4,5,6]) //logging the type of the array

// test('map test', function(t) {
//   t.plan(6)
//   t.equal(root.length,[2,3,4,5,6].length);
//   t.equal(root[0],[2,3,4,5,6][0])
//   t.equal(root[1],[2,3,4,5,6][1])
//   t.equal(root[2],[2,3,4,5,6][2])
//   t.equal(root[3],[2,3,4,5,6][3])
//   t.equal(root[4],[2,3,4,5,6][4])
//   t.end();
// })

test('deep equality test', function(t) {
  t.plan(1)
  t.deepEqual(root,[2,3,4,5,6]);
  t.end();
})
