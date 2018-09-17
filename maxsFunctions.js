function displayInTable(people){
	let output = "";
	for(let i = 0; i < people.length; i++){
		output += "<tr><td>";
		output += people[i].id;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].firstName;
		output += people[i].lastName;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].gender;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].age;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].height;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].weight;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].eyeColor;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].occupation;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].parents;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].currentSpouse;
		output += "</tr></td>";
		output += "<tr><td>";
		output += people[i].children;
		output += "</tr></td>";
	}

	return output;
}