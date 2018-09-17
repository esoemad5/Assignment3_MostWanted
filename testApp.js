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
			shortenedArray = serachById(searchTerm, currentArray);
		case "firstName":
			shortenedArray = serachByFirstName(searchTerm, currentArray);
		case "lastName":
			shortenedArray = serachByLastName(searchTerm, currentArray);
		case "gender":
			shortenedArray = serachByGender(searchTerm, currentArray);
		case "age":
			shortenedArray = serachByAge(searchTerm, currentArray);
		case "height":
			shortenedArray = serachByHeight(searchTerm, currentArray);
		case "weight":
			shortenedArray = serachByWeight(searchTerm, currentArray);
		case "eyeColor":
			shortenedArray = serachByEyeColor(searchTerm, currentArray);
		case "occupation":
			shortenedArray = serachByOccupation(searchTerm, currentArray);
		default:
			console.log("A radio button was left unchecked.");
			return;
			break;
	}
	if(shortenedArray.length == 0){
		alert("Search returned 0 results.");
		return;
	}
	
	currentArray = shortenedArray;
	//have array, make it into the table
	//console.log(searchTerm, searchCriteria);
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


function searchByWeight(input, array) {
	let newArray = array.filter(function(el){
		if(el.weight == input){
			return true;
		}
	});
	return newArray;
}

function searchByHeight(people){
  let userInputHeight = prompt("How tall is the person in inches?");

  let newArray = people.filter(function(el){
    if(el.height == userInputHeight) 
    {
      return true;
    }
  });

  return newArray
}

function searchByGender(people){
  let userInputGender = prompt("What is the persons gender?");

  let newArray = people.filter(function(el){
    if(el.gender == userInputGender) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByEyeColor(people){
  let userInputEyeColor = prompt("What color are their eyes?");

  let newArray = people.filter(function(el)
  {
    if(el.eyeColor == userInputEyeColor) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByAge(people){
  let userInputAge = prompt("How old is the person?");

  let newArray = people.filter(function(el)
  {
    if(el.age == userInputAge) 
    {
      return true;
    }
  });
  return newArray;
}

function searchByOccupation(people){
	let userInputOccupation = prompt("What is the person's occupation?");
	let newArray = people.filter(function(el)
	{
		if(el.occupation == userInputOccupation){
			return true;
		}
	});
	return newArray;
}