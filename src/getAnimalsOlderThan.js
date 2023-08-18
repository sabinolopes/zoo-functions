const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const findSpecie = species.find((specie) => specie.name.includes(animal));

  if (!findSpecie) return false;

  return findSpecie.residents.every((resident) => resident.age >= age);
};

module.exports = getAnimalsOlderThan;
