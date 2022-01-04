

const people = [
	{name:'Gregg', cool: true, country:'United States'},
	{name:'Megan', cool: true, country: 'Ireland'},
	{name:'Yoshi', cool: false, country:'Dog Country'}
];

people.forEach((person, index) => {
	console.group(`${person.name}`);
	console.log(person.country);
	console.log(person.cool);
	console.log('DONE!')
	console.groupEnd(`${person.name}`);
})


//Console Methods 


// Callstack 


// Grabbing Elements 


// Break Points 


// Scope 

// Network Requests 

// Break on Attribute 

// Some Setup Code 


function doALotOfStuff() {
	console.group('Doing Some Stuff');
	console.log('Hey whats Up');
	console.warn('watch Out');
	console.error('NO!!!');
	console.groupEnd('Doing Some Stuff');
}

function doctorize(name) {
	//console.count('running Doctorized');
	return `Dr. ${name}`;
}