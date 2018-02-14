/* In this exercice, we have an object Employee that has some function properties, such as Employee.getCadre and Employee.calculateTax.
At the beggining of the file, the object Employee is imported.
*/

import Employee from './employee-object';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + Employee.getCadre());
  console.log('Tax: ' + Employee.calculateTax());
  console.log('Benefits: ' + Employee.getBenefits());
  console.log('Bonus: ' + Employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(35000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);