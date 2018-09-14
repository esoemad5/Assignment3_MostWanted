/*
 * Will slowly move these functions into app.js so we all aren't working on the same file.
 */
 
 /*
  * x.map(function(el){}), x.filter(function(el){}), x.reduce(function(total, el){})
  * Perfom function on each element in the array.
  * .map returns an array of the return values after performing the function on each element in x (el).
  * the function in .filter must return true or false. .filter will return the array x, minus all the el's that the function returned false for. The array will be shorter, the false el's won't go to null/void/NaN/undefined/etc...
  * .reduce will return total after performing the function with each of it's elements as el.
  * NONE OF THESE FUNCTIONS CHANGE THE ORIGINAL Array
  * They only return a new array, or a single object in .reduce.
  * All these functions are kind of a fancy for loop.
  * Thus, a loop inside one of these array functions will likely result in them being O(n^2).
  */
 


/*
 * Returns an array of people objects that are the person's parents.
 * UNTESTED.
 */
function findParents(person, people){ // Return an array of people objects that are the person's parents.
	let output = people.filter(function(el){
		for(let i = 0; i < person.parents.length; i++){
			if(el.id == person.parents[i]{
				return true;
			}
		}
	});
}

/*
 * Takes an array of people. Returns a string of the peoples first and last names, seperated by a comma (and space).
 * UNTESTED.
 */
function convertArrayOfPeopleToListOfNames(listOfPeople){
	let extraComma = "";
	extraComma += listOfPeople.reduce(function(names, el){
		names += ", " + el.firstName + " " + el.lastName;		
	});
	let output = "";
	for(let i = 2; 2 < extraComma.length; i++){ // Remove the extra ", "
		output += extraComma[i];
	}
	return output;
}





















