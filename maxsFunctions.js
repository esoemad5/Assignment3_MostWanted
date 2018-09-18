function displayInTable(people){
	let output = "<tr><th>Select this person</th><th>ID</th><th>Name</th><th>Gender</th><th>Age</th><th>Height</th><th>Weight</th><th>eyeColor</th><th>Occupation</th><th>Parents</th><th>Current Spouse</th><th>Children</th></tr>";
	for(let i = 0; i < people.length; i++){
		output += "<tr><td>";
		output += people[i].firstName + " ";
		output += people[i].lastName;
		output += "</td>";
		output += "<td>";
		output += people[i].gender;
		output += "</td>";
		output += "<td>";
		output += people[i].age;
		output += "</td>";
		output += "<td>";
		output += people[i].height;
		output += "</td>";
		output += "<td>";
		output += people[i].weight;
		output += "</td>";
		output += "<td>";
		output += people[i].eyeColor;
		output += "</td>";
		output += "<td>";
		output += people[i].occupation;
		output += "</td></tr>";
	}

	return output;
}