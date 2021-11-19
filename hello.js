class MyFile {
	constructor() {
		console.log('works')
	}
	
	create() {
		console.log('file created');
	}
}

const file = new MyFile(); // some urnelated changed in another file
file.create();
