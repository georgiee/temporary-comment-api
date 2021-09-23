class MyFile {
	constructor() {
		console.log('works')
	}
	
	create() {
		console.log('file created');
	}

	delete() {
		console.log('file deleted')
	}
}

const file = new MyFile();
file.create();
file.delete()
