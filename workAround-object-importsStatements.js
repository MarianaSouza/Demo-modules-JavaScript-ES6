/* In this exercice, we are importing the functions as one object and variables with their real names.
The property salary is used as Employee.salary since it is inside of the object Employee */

import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee';

import Employee from './employee-object-exportsStatements';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(35000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
