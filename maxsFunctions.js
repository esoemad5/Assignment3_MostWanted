function displayInTable(people){
	let output = "";
	for(let i = 0; i < people.length; i++){
		output += "<tr><td>";
		output += people[i].firstName + " ";
		output += people[i].lastName;
		output += "</td>";
		output += "<tr><td>";
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