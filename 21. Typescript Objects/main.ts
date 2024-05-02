// Write a program that creates Objects containing these items.

// Data type of person object
interface person {
    age: number,
    name: string,
    nationality: string,
    student: boolean,
}
// person object
let person = {
    age: 22,
    name: 'Rafey',
    nationality: 'Pakistan',
    student: true
}
// print person
console.log(person);

interface car  {
    maker: string,
    color: string,
    automatic: boolean,

}
// Car object
let car = {
    maker: 'toyota',
    color: 'black',
    automatic: true
}
// Print Car
console.log(car);