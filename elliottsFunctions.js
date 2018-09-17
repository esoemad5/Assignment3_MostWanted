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
 * Returns an array of people objects that are the person's parents. Returns null if no parents.
 */
function findParents(person, people){
	if(person.parents.length == 0){
		return null;
	}
	let output = people.filter(function(el){
		for(let i = 0; i < person.parents.length; i++){
			if(el.id == person.parents[i]){
				return true;
			}
		}
	});
	return output;
}


/*
 * Returns an arry of the persons children. Returns null if no children.
 */
function findChildren(person, people){
	let output = people.filter(function(el){
		for(let i = 0; i < el.parents.length; i++){
			if(person.id == el.parents[i]){
				return true;
			}
		}
	});
	if (output.length == 0){
		return null;
	}
	return output;
}


/*
 * Return a people object that is the person's currentSpouse. Returns null if the person is single.
 */
function findSpouse(person, people){
	if(person.currentSpouse == null){
		return null;
	}
	for(let i = 0; i < people.length; i++){
		if(person.currentSpouse == people[i].id){
			return people[i];
		}
	}
}

/*
 * Takes an array of people. Returns a string of the peoples first and last names, seperated by a comma (and space).
 * Doesnt work
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



function searchByOccupation(people){
	let userInputOccupation = prompt("What is the person's occupation?");
	let newArray = poeple.filter(function(el)
	{
		if(el.age == userInputAge){
			return true;
		}
	});
}

















