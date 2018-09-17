function displayInTable(person){
	document.getElementById("displayTablePersonName").innerHTML = person.firstName + person.lastName;

	document.getElementById("displayGender").innerHTML = person.gender;

	document.getElementById("displayAge").innerHTML = person.age;

	document.getElementById("displayHeight").innerHTML = person.height;

	document.getElementById("displayWeight").innerHTML = person.weight;

	document.getElementById("displayEyeColor").innerHTML = person.eyeColor;

	document.getElementById("displayOccupation").innerHTML = person.occupation;

	document.getElementById("displayParents").innerHTML = person.parents;

	document.getElementById("displayCurrentSpouse").innerHTML = person.currentSpouse;

	document.getElementById("displayChildren").innerHTML = person.children;
}