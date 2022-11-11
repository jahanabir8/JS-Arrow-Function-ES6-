// arrow function js

// lets seee a function on ES-5
var FunctionES5 = function(){
    console.log('A demo ES5 Function Expression');
}
FunctionES5()


// now lets see a Arrow Function on ES-6
var FunctionES6 = () => console.log('A Demo Function ES6 Arrow Function')
FunctionES6()



// we should know what is map. lets see
// here is a example using for loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)

var anotherArr = []
for(var i=0; i<arr.length; i++){
    anotherArr.push(arr[i] * arr[i])
}
console.log(anotherArr)


// another example using map
// doing that same this using ES-6 function
var dobs = [1993, 1987, 2001, 1997]
var getAge = function(years){
    return 2022-years
}
dobs.map(getAge)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)

var getSquare = function(items){
    return items * items
}
arr.map(getSquare)
// আপনি map() কোনো অ্যারেতে কল করলে সেটা সেই অ্যারের প্রত্যেকটা আইটেমের উপর
// আপনারই দেওয়া একটা ফাংশন অ্যাপ্লাই করবে, এবং সবশেষে সবগুলো আবার আরেকটা
// অ্যারে হিসেবে রিটার্ন করবে।

var newArr = arr.map(getSquare)
console.log(newArr)


// example of map function 
var dob = [1988, 1986, 1997, 2001]

var newAge = function(items){
    return 2022 - items
}

dob.map(newAge)
var nowAge = dob.map(newAge)
console.log(nowAge)

// now use this function in a ARROW FUNCTION
var dob = [1988, 1986, 1997, 2001]
var newAge = dob.map(items => 2022-items)
console.log(newAge)
// use this on your Chrome CONSOLE


var dob = [1988, 1986, 1997, 2001]
var newAge = dob.map((items, index) => `${index}: ${2018 - items}`);
newAge
