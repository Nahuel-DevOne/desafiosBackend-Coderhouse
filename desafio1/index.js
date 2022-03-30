/** Desafío 1 backend */
class User {
    constructor(name, lastName, books, pets) {
        this.name = name;
        this.lastName = lastName;
        this.books = [books];
        this.pets = pets;
    }
    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
    addPet(pet){
        return this.pets.push(pet);
    }
    countPets(){
        return this.pets.length;
    }
    addBook(book, bookWriter){
        return this.books.push({book: book, bookWriter: bookWriter});
    }
    getBookNames(){
        return this.books.map(book => book.book);
    }
}

const user1 = new User(
    'Nahuel',
    'Lopez',
    {book: 'Matemática ¿estás ahí?', bookWriter: 'Adrián Paenza'},
    ['Tilo']
);

/** mostrando los datos por consola del objeto user1 */
console.log(user1);
/** mostrando los datos de nombre completo */
console.log(user1.getFullName());
/** mostrando la cantidad de mascotas */
console.log(user1.countPets());
/** mostrando los nombres de los libros */
console.log(user1.getBookNames());
/** agregando una mascota */
user1.addPet('Micha');
/** agregando un libro con su respectivo autor */
user1.addBook('El tunel', 'Ernesto Sábato');
/** mostrando los datos por consola del objeto user1 con los datos agregados */
console.log(user1);
/** mostrando los datos de nombre completo*/
console.log(user1.getFullName());
/** mostrando la cantidad nueva de mascotas y de libros del user1 */
console.log(user1.countPets());
console.log(user1.getBookNames());
