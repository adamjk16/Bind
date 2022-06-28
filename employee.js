class Employee {
  constructor(name, occupation) {
    name = this.name;
    occupation = this.occupation;
  }

  sayName() {
    console.log(`Employee's name like so: ${this.name} says hello`);
  }

  sayOccupation() {
    console.log( `Employee's name and occupation like so: ${this.name} is a ${this.occupation}`);
  }
}

module.exports = Employee;
