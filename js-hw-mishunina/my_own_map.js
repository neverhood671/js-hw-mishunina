// To complete this task we should create our own JS map method.
// First simple variant:

var myMapFunc = function map(arr, callback){
	var newArr = [];
	arr.forEach(elem => {
		newArr.push(callback(elem));
	});
	
	return newArr;
}

// Let's test it!

var arr = [1,2,3];
var modifier = function(x){
	return x * 10;
};

var res1 = myMapFunc(arr, modifier);
console.log(`The result is ${res1}`);

// The output in the console:
//
// 		The result is 10,20,30
//
// Fine, it's working! Next, we will try to make our map method similar to the real map method in JavaScript.
// To allow using our map is a method of all Array instances we rewrite default map with our own map. 

Array.prototype.map = function(callback){
	var newArr = [];
	this.forEach(elem => {
		newArr.push(callback(elem));
	});
	console.log('My own map worked!')
	return newArr;
}

// Let's test it!

var res2 = arr.map(modifier);
console.log(`The result is ${res2}`);

// In our console, we see the output:
// 		My own map worked!
// 		The result is 10,20,30
// Which is means that 1) we successfully rewrite the default map method; 2)the result of our map working is right!
// Good, but the default JS map method's docs say that there are three arguments in the callback function: currentValue, index, array.
// So, if we want to make our map indistinguishable with default map we should rewrite it again.

Array.prototype.map = function(callback){
	var newArr = [];
	this.forEach((elem, index, arr) => {
		newArr.push(callback(elem, index, arr));
	});
	console.log('My new own map worked!')
	return newArr;
}

// To test it and show that it's working now we should use another callback function

var anotherModifier = function(elem, index, arr){
	return `${elem} is on the ${index} place in ${arr}`;
}

// Now we ready for the test!
 
var res3 = arr.map(modifier);
console.log(`The result is ${res3}`);

// The result in console is 
// [ '1 is on the 0 place in 1,2,3',
//   '2 is on the 1 place in 1,2,3',
//   '3 is on the 2 place in 1,2,3' ]
// Cool, I think the task is completed! 

