/* Bug List:
 */

let year = 2018;
let people = data;
addAge(people);
let currentArray = people;

function resetButton(){
	people = data;
	addAge(people);
	document.getElementById("tableData").innerHTML = "";
	currentArray = people;
	
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
}

/*
 * Main Menu stuff.
 * Need to show family, info, and descendants
 * Info is always shown, show a table of selection, parents, spouse and descendants (in that order). Extra table column naming their relationship. Put it first (after buttons).
 */
 function mainMenu(person){ // On click of a 'Select this person' button.
	let output = "";
	
	// make a new array for the table.
	person.relationship = "Self"
	currentArray = [person];
	
	// add parents
	if(findParents(person, people) != null){
		findParents(person, people).map(function(el){
			el.relationship = "Parent";
			currentArray.push(el);
		});
	}

	
	// add spouse
	//let spouse = findSpouse(person, people)
	if(findSpouse(person, people) != null){
		findSpouse(person, people).map(function(el){
			el.relationship = "Spouse";
			currentArray.push(el);
		});
	}
	
	// add descendants
	let descendants = findDescendants(person, people);
	if( descendants != null){
		currentArray = currentArray.concat(descendants);
	}
	//make array into table.
	document.getElementById("tableData").innerHTML = displayInTable(currentArray, true);
}

function displayInTable(peopleArray, showRelationshipToElement0){ // Returns the html script to show search results.
	let output = ""
	if(showRelationshipToElement0){
		output += "<tr><th>Select this person</th><th>Relationship to Selection</th><th>Name</th><th>Gender</th><th>Age</th><th>Height</th><th>Weight</th><th>Eye Color</th><th>Occupation</th></tr>";

	}
	else{ 	
		output += "<tr><th>Select this person</th><th>Name</th><th>Gender</th><th>Age</th><th>Height</th><th>Weight</th><th>Eye Color</th><th>Occupation</th></tr>";
	}
	for(let i = 0; i < peopleArray.length; i++){
		output += '<tr><td><button onClick="mainMenu(currentArray['+i+'])" class="btn btn-outline-success">Select this person</button> &nbsp </td><td>'; // There is a possible issue with this line if the rest of the code is modified. Check here if there is an issue with the people butttons.
		if(showRelationshipToElement0){ output += peopleArray[i].relationship; output += "</td><td>" }
		output += peopleArray[i].firstName + " ";
		output += peopleArray[i].lastName;
		output += "</td>";
		output += "<td>";
		output += peopleArray[i].gender;
		output += "</td>";
		output += "<td>";
		output += peopleArray[i].age;
		output += "</td>";
		output += "<td>";
		output += peopleArray[i].height;
		output += "</td>";
		output += "<td>";
		output += peopleArray[i].weight;
		output += "</td>";
		output += "<td>";
		output += peopleArray[i].eyeColor;
		output += "</td>";
		output += "<td>";
		output += peopleArray[i].occupation;
		output += "</td></tr>";
	}

	return output;
}

 /*
  * Returns a people array of the person's spouse(s). Changed output from an object to an array because of a bug. Turns out, I was just spelling a variable wrong. On the bright side, it can handle pollygamy.
  */
function findSpouse(person, people){
	if(person.currentSpouse == null){
		return null;
	}
	for(let i = 0; i < people.length; i++){
		if(person.currentSpouse == people[i].id){
			let output = []
			output.push(people[i]);
			return output;
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
 * Returns an array of all children, grand-children, great-grandchildren, and so on.
 * Each iteration returns an array of the person's children concatenated to the end of whatever array was passed to it.
 */
function findDescendants(person, people, output = [], grand = 0){ 
	let generation = [];
	people.map(function(el){ // Find all children in this generation.
		for(let i = 0; i < el.parents.length; i++){
			if(person.id == el.parents[i]){
				if(grand == 0){ el.relationship = "Child"; }
				else if(grand == 1){ el.relationship = "Grandchild"; }
				else{
					let rel = "Great-";
					for(let k = 2; k < grand; k++){
						rel += "great-";
					}					
					rel += "Grandchild"
				}
				
				generation.push(el);
			}
		}
	});
	
	if (generation.length == 0){ // Terminating condition.
		return output;
	}
	
	output = output.concat(generation);
	grand++;
	
	for(let j = 0; j < generation.length; j++){ // Find this generation's children.
		output = findDescendants(generation[j], people, output, grand);
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
		if(el.firstName.toLowerCase() == input.toLowerCase()){
			return true;
		}
	});
	return newArray;
}

function searchByLastName(input, array) {
	let newArray = array.filter(function(el){
		if(el.lastName.toLowerCase() == input.toLowerCase()){
			return true;
		}
	});
	return newArray;
}

function searchByGender(input, array){
  let newArray = array.filter(function(el){
    if(el.gender.toLowerCase() == input.toLowerCase()) 
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
    if(el.eyeColor.toLowerCase() == input.toLowerCase()) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByOccupation(input, array){
	let newArray = array.filter(function(el)
	{
		if(el.occupation.toLowerCase() == input.toLowerCase()){
			return true;
		}
	});
	return newArray;
}
