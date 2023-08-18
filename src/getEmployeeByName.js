const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  const findEmployee = employees.find((employee) => {
    const employeeNames = [employee.firstName, employee.lastName];
    return employeeNames.includes(employeeName);
  });

  return findEmployee;
};

module.exports = getEmployeeByName;
