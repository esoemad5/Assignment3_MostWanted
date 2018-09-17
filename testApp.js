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
	if(shortenedArray.length == 0){
		alert("Search returned 0 results.");
		return;
	}
	
	currentArray = shortenedArray;
	console.log(currentArray);
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