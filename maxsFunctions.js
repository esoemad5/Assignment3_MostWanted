function displayInTable(peopleArray, showRelationshipToElement0){
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