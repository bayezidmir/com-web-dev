function secondLargest(arr) {
  let oldestEmployee = employeeIds[0];
  let secondOldestEmployee = employeeIds[0];

  for (const employeeId of employeeIds) {
    if (employeeId > oldestEmployee) {
      secondOldestEmployee = oldestEmployee;
      oldestEmployee = employeeId;
    } else if (employeeId > secondOldestEmployee) {
      secondOldestEmployee = employeeId;
    }
  }
  return `oldest employee id is ${oldestEmployee} and second oldest employee id is ${secondOldestEmployee}`;
}

const employeeIds = [853, 147, 650, 456, 850, 754, 956, 246, 852, 1023];
console.log(secondLargest(employeeIds));
