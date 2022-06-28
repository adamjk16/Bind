const Employee = require('./employee.js')

const employee = new Employee('John Wick', 'Dog Lover');

setTimeout(function() {
  employee.sayName.bind(employee);
}, 2000);

// 3. Call the `sayName()` instance method on the new `Employee` in a `setTimeout`
//    after 2 seconds. Question: What do you expect to be printed to the terminal
//    and why?
//    <details><summary>Answer: </summary>"undefined says hello" will be printed
//    to the terminal because the `sayName()` instance method on the new `Employee`
//    was invoked function-style by the `setTimeout` after 2 seconds.</details>
//    Solve the problem using `bind` to make sure that "John Wick says hello" will
//    be printed to the terminal after 2 seconds.

// 3. Call the `sayOccupation()` instance method on the new `Employee` in a
//    `setTimeout` after 3 seconds. Question: What do you expect to be printed to
//    the terminal and why?
//    <details><summary>Answer: </summary>"undefined is a undefined" will be printed
//    to the terminal because the `sayOccupation()` instance method on the new
//    `Employee` was invoked function-style by the `setTimeout` after 3
//    seconds.</details>
//    Solve the problem using `bind` to make sure that "John Wick is a Dog Lover"
//    will be printed to the terminal after 3 seconds.