const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployeeById = (obj) => {
  if (!obj) return undefined;
  return employees.find((employee) => employee.id.includes(obj.id));
};

const getEmployeeByName = (obj) => {
  if (!obj) return undefined;
  return employees.find(
    (employee) =>
      employee.firstName.includes(obj.name) || employee.lastName.includes(obj.name),
  );
};

const getSpeciesLocation = (speciesIds) => {
  const locations = [];

  speciesIds.forEach((specieId) => {
    const specieFound = species.find((specie) => specie.id === specieId);
    if (specieFound) {
      locations.push(specieFound.location);
    }
  });

  return locations;
};

const getSpeciesName = (speciesIds) => {
  const names = [];

  speciesIds.forEach((speciesId) => {
    const specieFound = species.find((specie) => specie.id === speciesId);
    if (specieFound) {
      names.push(specieFound.name);
    }
  });

  return names;
};

const getEmployeesInfos = (employee) => {
  const employeeInfos = {
    id: '',
    fullName: '',
    species: '',
    locations: '',
  };

  employeeInfos.id = employee.id;
  employeeInfos.fullName = `${employee.firstName} ${employee.lastName}`;
  employeeInfos.species = getSpeciesName(employee.responsibleFor);
  employeeInfos.locations = getSpeciesLocation(employee.responsibleFor);

  return employeeInfos;
};

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return employees.map((employee) => getEmployeesInfos(employee));
  }

  const employeeByid = getEmployeeById(obj);
  const employeeByName = getEmployeeByName(obj);

  if (employeeByName) {
    return getEmployeesInfos(employeeByName);
  }
  if (employeeByid) {
    return getEmployeesInfos(employeeByid);
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
