/* In this exercice, we are importing the functions as one object and variables with alias.
The property salary is used as Employee.salary since it is inside of the object Employee
*/

import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee-object-variablesAlias';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + cadre());
  console.log('Tax: ' + tax());
  console.log('Benefits: ' + benefits());
  console.log('Bonus: ' + bonus());
  console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
}

getEmployeeInformation(35000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);