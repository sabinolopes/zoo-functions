const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployeesByIds = (id) => employees.find((employee) => id.includes(employee.id));

const getResidentsById = (id) => species.find((specie) => id.includes(specie.id)).residents;

const getOldestFromFirstSpecies = (id) => {
  const { responsibleFor } = getEmployeesByIds(id);
  const specieId = responsibleFor[0];
  const residents = getResidentsById(specieId);
  let oldestAnimal = residents[0];

  residents.forEach((resident) => {
    if (resident.age > oldestAnimal.age) oldestAnimal = resident;
  });

  const { name, sex, age } = oldestAnimal;

  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
