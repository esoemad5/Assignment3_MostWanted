/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application

let year = 2018;

function app(people){
	var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
	switch(searchType){
		case 'yes':
		searchByName(people);
		break;
		case 'no':
		searchByTraits(people);
		break;
		default:
		alert("Wrong! Please try again, following the instructions dummy. :)");
		app(people); // restart app
		break;
	}
}

// Made this recursive to force searching by multiple critera until one person is found.
function searchByTraits(people) {
	let userSearchChoice = prompt("What would you like to search by? 'height', 'weight', 'eye color', 'gender', 'age', 'occupation'.");
	let filteredPeople;

	switch(userSearchChoice) {
		case "height":
		  filteredPeople = searchByHeight(people);
		  break;
		case "weight":
		  filteredPeople = searchByWeight(people);
		  break;
		// so on and so forth
		case "eye color":
			filteredPeople = searchByEyeColor(people);
			break;
		case "gender":
			filteredPeople = searchByGender(people);
			break;
		case "age":
			filteredPeople = searchByAge(people);
			break;
		case "occupation":
			filteredPeople = searchByOccupation(people);
			break;
		default:
			alert("You entered an invalid search type! Please try again.");
			searchByTraits(people);
			break;
	}  	
	
	if(filteredPeople.length == 1){
		mainMenu(people, filteredPeople[0]);
	}
	else{
		let message = "Found ";
		message += filteredPeople.length;
		message += " people. Please add another search criteria.";
		alert(message);
		searchByTraits(filteredPeople);
	}
}

function searchByWeight(people) {
	let userInputWeight = prompt("How much does the person weigh?");

	let newArray = people.filter(function(el){
    if(el.weight == userInputWeight) 
    {
      return true;
    }
    // return true if el.weight matches userInputHeight
    else if(el.height == userInputWeight) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByHeight(people){
  let userInputHeight = prompt("How much does the person weigh?");

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

  let newArray = people.filter(function(el){
    if(el.eyeColor == userInputEyeColor) 
    {
      return true;
    }
  });

  return newArray;
}

function searchByAge(people){
  let userInputAge = prompt("How old is the person?");

  let newArray = people.filter(function(el){

    }
    if(el.dob == ) 
    {
      return true;
    }
  });

  return newArray;
}

function addAge(people){
  let dobArray = [];

  for(i = -4, i < -1, i++){
      let j = 0;
      dobArray[j] = el.dob[i]
      j++;
    }
  let dobString = dobArray.join("");
  let dobYear = number(dobString);

  let age = year - dobYear;
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

	/* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

	if(!person){
		alert("Could not find that individual.");
		return app(people); // restart
	}

	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			// TODO: get person's info
			break;
		case "family":
			// TODO: get person's family
			break;
		case "descendants":
			// TODO: get person's descendants
			break;
		case "restart":
			app(people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(person, people); // ask again
	}
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  let newArray = people.filter(function(el){
    if(el.firstName === firstName && el.lastName === lastName){
      return true;
    }
  });
  return newArray;
}

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

//test comment
