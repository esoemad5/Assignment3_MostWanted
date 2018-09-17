/*
 * Will slowly move these functions into app.js so we all aren't working on the same file.
 */
 
 /*
  * x.map(function(el){}), x.filter(function(el){}), x.reduce(function(total, el){})
  * Perfom function on each element (el) in the array.
  * .map returns an array of the return values after performing the function on each element in x (el).
  * the function in .filter must return true or false. .filter will return the array x, minus all the el's that the function returned false for. The array will be shorter, the false el's won't go to null/void/NaN/undefined/etc...
  * .reduce will return total after performing the function with each of it's elements as el.
  * NONE OF THESE FUNCTIONS CHANGE THE ORIGINAL Array
  * They only return a new array, or a single object in .reduce.
  * All these functions are kind of a fancy for loop.
  * Thus, a loop inside one of these array functions will likely result in them being O(n^2).
  */
 
function test(){
	let a = 10;
	console.log(data[a]);
	let b = findParents(data[a], data);
	let c = convertArrayOfPeopleToListOfNames(b);
	console.log(c);
}















/*
 * Takes an array of people. Returns a string of the peoples first and last names, seperated by a comma (and space).
 * Doesnt work
 * Probably dont need this function
 */
function convertArrayOfPeopleToListOfNames(listOfPeople){
	let extraComma = "";
	console.log(listOfPeople);
	extraComma += listOfPeople.reduce(function(names, el){
		console.log(el.firstName, el.lastName);
		names += ", " + el.firstName + " " + el.lastName;		
	});
	console.log(extraComma);
	let output = "";
	for(let i = 2; i < extraComma.length; i++){ // Remove the extra ", "
		output += extraComma[i];
	}
	return output;
}
















