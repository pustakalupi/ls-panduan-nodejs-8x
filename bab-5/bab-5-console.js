// Menampilkan "hello world" ke stdout
console.log('hello world');

// Menampilkan "hello world" ke stdout
console.log('hello %s', 'world');

// Menampilkan "[Error: Error, kurang banyak]" ke stderr
console.error(new Error('Error, kurang banyak'));

// Menampilkan "Go Lusfikar Sheba! Go!" ke stderr
const name = 'Lusfikar Sheba';
console.warn(`Go ${name}! Go!`);