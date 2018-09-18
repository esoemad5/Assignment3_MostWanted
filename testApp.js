/*
Build all of your functions for displaying and gathering information below (GUI).
*/

/* Bug List:
 * Joey and Elen are the same person. Makes searching by traits wonky.
 * Sometimes quitting in searchByTraits returns an error in the console (filteredPeople.length is undefined). Somehow the function searchByTraits keeps happening dispite hitting a return statement. Need to look at all the things that call searchByTraits.
 */

// app is the function called to start the entire application


let year = 2018;
let people = data;
addAge(people);
let currentArray = people;

function resetButton(){
	people = data;
	addAge(people);
	document.getElementById("tableData").innerHTML = "";
	currentArray = people;
	//document.getElementById("lookupArea").innerHTML = "";
	
	alert("Search terms reset.");
}

function searchButton(){
	let searchTerm = document.getElementById("searchBar").value;
	let radios = document.getElementsByName("searchCriteria");
	let searchCriteria
	for (let i = 0; i < radios.length; i++){
		if(radios[i].checked == true){
			searchCriteria = radios[i].value;
		}
	}
	let shortenedArray;
	switch(searchCriteria){
		case "id":
			shortenedArray = searchById(searchTerm, currentArray);
			break;
		case "firstName":
			shortenedArray = searchByFirstName(searchTerm, currentArray);
			break;
		case "lastName":
			shortenedArray = searchByLastName(searchTerm, currentArray);
			break;
		case "gender":
			shortenedArray = searchByGender(searchTerm, currentArray);
			break;
		case "age":
			shortenedArray = searchByAge(searchTerm, currentArray);
			break;
		case "height":
			shortenedArray = searchByHeight(searchTerm, currentArray);
			break;
		case "weight":
			shortenedArray = searchByWeight(searchTerm, currentArray);
			break;
		case "eyeColor":
			shortenedArray = searchByEyeColor(searchTerm, currentArray);
			break;
		case "occupation":
			shortenedArray = searchByOccupation(searchTerm, currentArray);
			break;
		default:
			console.log(searchCriteria);
			return;
			break;
	}
	if(shortenedArray.length == 0){ // If constraints are too heavy, or input is invalid, the search will not happen, and the array/table will remain the same.
		alert("Search returned 0 results.");
		return;
	}
	
	currentArray = shortenedArray;
	document.getElementById("tableData").innerHTML = displayInTable(currentArray, false);

	//console.log(searchTerm, searchCriteria);
}

/*
 * Main Menu stuff.
 * Need to show family, info, and descendants
 * Info is always shown, show a table of selection, parents, spouse and descendants (in that order). Extra table column naming their relationship. Put it first (after buttons).
 */
 function mainMenu(person){ // On click of a button next to a person in the table.
	let output = "";
	
	// make a new array for the table.
	person.relstionship = ""
	currentArray = [person];
	
	// add parents
	if(findParents(person, people) != null){
		findParents(person, people).map(function(el){
			el.relationship = "Parent";
			currentArray.push(el);
		});
	}

	
	// add spouse
	let spouse = findSpouse(person, people)
	if(spouse != null){
		spouse.relstionship = "Spouse";
		currentArray.push(spouse);
	}
	
	// add descendants
	// need to rewrite function to be recursive and look past 1 generation
	
	//make array into table (need to write new function since we have an extra column. Maybe put a boolean in displayInTable
	document.getElementById("tableData").innerHTML = displayInTable(currentArray, true);
 
	//document.getElementById("lookupArea").innerHTML = output;
	console.log(currentArray);
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
 
 
function addAge(people){
  for(i = 0; i < people.length; i++)
   {
      let dobArray = [];

      for(let j = 0; j < 4; j++)
      {
        dobArray[j] = people[i].dob[people[i].dob.length-1-j];
      }
      
    let dobString = dobArray.reverse();
    dobString = dobString.join("");
    let dobYear = Number(dobString);

    people[i].age = year - dobYear;
  }
}


// Search Functions. All return a new, shorter array.
// TODO: Add searchByFirstName and searchByLastName; make functions work with new way of input.

function searchById(input, array) {
	let newArray = array.filter(function(el){
		if(el.id == input){
			return true;
		}
	});
	return newArray;
}

function searchByFirstName(input, array) {
	let newArray = array.filter(function(el){
		if(el.firstName == input){
			return true;
		}
	});
	return newArray;
}

function searchByLastName(input, array) {
	let newArray = array.filter(function(el){
		if(el.lastName == input){
			return true;
		}
	});
	return newArray;
}

function searchByGender(input, array){
  let newArray = array.filter(function(el){
    if(el.gender == input) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByAge(input, array){
  let newArray = array.filter(function(el)
  {
    if(el.age == input) 
    {
      return true;
    }
  });
  return newArray;
}

function searchByHeight(input, array){
  let newArray = array.filter(function(el){
    if(el.height == input) 
    {
      return true;
    }
  });

  return newArray
}

function searchByWeight(input, array) {
	let newArray = array.filter(function(el){
		if(el.weight == input){
			return true;
		}
	});
	return newArray;
}

function searchByEyeColor(input, array){
  let newArray = array.filter(function(el)
  {
    if(el.eyeColor == input) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByOccupation(input, array){
	let newArray = array.filter(function(el)
	{
		if(el.occupation == input){
			return true;
		}
	});
	return newArray;
}




/* Code that my be needed later

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, callback){
  do{
    var response = prompt(question).trim();
  } while(!response || !callback(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}



*/