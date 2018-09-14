/*
 * Will slowly move these functions into app.js so we all aren't working on the same file.
 */
 
 				
message += person.firstName + " " + person.lastName + "'s parents: ";
for(let i = 0; i < person.parents.length; i++){
	// TODO: Search data.js for  people by id.
	// filter out all non-parents, get an array
	personsParents = person.parents.filter(function(el){
		for(let j = 0; j < people.length; j++){
			if(people[j].id == el){// If the person in data.js has an id that is an id in the found person's parents array.
				return true;
			}
		}
	});
}
				
// different approach
personsParents = people.filter(function(el){
	for(let i = 0; i < person.parents.length; i++){	
		
	}
});
