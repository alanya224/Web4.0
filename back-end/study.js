console.log("Hello");

// variable
var t1 = true;
var t2 = 10;
var t3 = 'hello';
var t4 = null;
var t5 = undefined;
var t6 = NaN;
var t7 = {
  name: 'toan',
  age: 21,
  show: function() {
    console.log('I am Toan')
  }
};
var t8 = function(message) {
  console.log(message);
}
var t9 = [1, 2, 3, 4, 5];
var t10 = t9.filter(function(element){
  return element % 2 == 0;
});
console.log(t10);
//splice and slice
//t9.splice(1,3,8,2);
t10 = t9.slice(1,3);
console.log(t10);





function callfunc(func, message) {
  func(message);
}
callfunc(t8,'hello');

//Operator

// == vs ===
console.log(false == '0');  // == so sánh giá trị
console.log(1 === '1');     // === so sánh kiểu và giá trị

console.log(null == undefined);  // true
console.log(null === undefined); // false
