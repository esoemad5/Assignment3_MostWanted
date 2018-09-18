/*
Build all of your functions for displaying and gathering information below (GUI).
*/

/* Bug List:
 * Joey and Elen are the same person. Makes searching by traits wonky.
 * Sometimes quitting in searchByTraits returns an error in the console (filteredPeople.length is undefined). Somehow the function searchByTraits keeps happening dispite hitting a return statement. Need to look at all the things that call searchByTraits.
 */

// app is the function called to start the entire application


/*
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|USE TESTAPP.JS NOT THIS|
*/

let year = 2018;

function app(people){
	addAge(people);
	console.log("Started app");

	var searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
	switch(searchType){
		case 'yes':
		searchByName(people);
		break;
		case 'no':
		searchByTraits(people);
		break;
		default:
		alert("Wrong! Please try again, following the instructions dummy. :)");
		app(data); // restart app
		break;
	}
	console.log("finished app");
}

// Made this recursive to force searching by multiple critera until one person is found.
function searchByTraits(people) {
	console.log("Started searchByTraits");
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
		case "quit":
			alert("Thank you for using Most Wanted. Exiting now.");
			return;
			break;
		default:
			alert("You entered an invalid search type! Please try again.");
			searchByTraits(people);
			break;
	}  	
	
	if(filteredPeople.length == 1){
		mainMenu(filteredPeople[0], people);
	}
	if(filteredPeople.length == 0){
		alert("Found 0 people. Restarting search.");
		searchByTraits(people);
	}
	else{
		let message = "Found ";
		message += filteredPeople.length;
		message += " people. Please add another search criteria.";
		
		document.getElementById("tableData").innerHTML = displayInTable(filteredPeople); 
		alert(message);
		searchByTraits(filteredPeople); // We loose the original array when this is called.
	}
	console.log("finished searchByTraits");
}

function searchByWeight(people) {
	let userInputWeight = prompt("How much does the person weigh?");

	let newArray = people.filter(function(el){
    if(el.weight == userInputWeight) 
    {
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

function searchByAge(people)
{
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

// Menu function to call once you find who you are looking for
function mainMenu(person, people){
	console.log("started main menu");

	/* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

	if(!person){
		alert("Could not find that individual.");
		return app(data); // restart
	}


	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	let message = "";
	
	switch(displayOption){
		case "info":
// DONE!
			alert(person.firstName + person.lastName + "'s info: Gender: " + person.gender + ". Date of birth: " + person.dob + ". Height: " + person.height + " inches. Weight: " + person.weight + " Eye Color: " + person.eyeColor + ". Occupation: " + person.occupation + ".");
			break;
		case "family":
// TODO: get person's family
			/*
			parents, currentSpouse, children
			*/
			console.log(person.parents.length);
			if(person.parents.length > 0){
				let personsParents = findParents(person, data); // Is an array of people.
				//message += someWayToConvertAllThatToAMessageThatIllWriteLater();
			}
			else{
				message += (person.firstName + " " + person.lastName + " has no parents (like batman). ");
			}
			if(person.currentSpouse != null){
				message += person.firstName + " " + person.lastName + "'s current spouse: ";
				// get spouse
			}
			else{
				message += person.firstName + " " + person.lastName + " has no spouse. They will likely die alone. ";
			}
			break;
		case "descendants":
// TODO: get person's descendants
			/*
			only have info on people's parents, have to be creative.
			*/
			findChildren(person, data);
			break;
		case "restart":
			app(data); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(person, people); // ask again
	}
	console.log(message);
	alert(message);
	
	mainMenu(person, people);
	console.log("finished main menu");
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


function searchByName(people){
	var firstName = promptFor("What is the person's first name?", chars);
	var lastName = promptFor("What is the person's last name?", chars);
	let message = "No one found in the database with the name: " + firstName + "  " + lastName + ".";
	let newArray = people.filter(function(el){
		if(el.firstName === firstName && el.lastName === lastName){
			return true;
		}
		});
	if(newArray.length != 1){
		alert(message);
	}
	else{
		mainMenu(newArray[0], data);
	}
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