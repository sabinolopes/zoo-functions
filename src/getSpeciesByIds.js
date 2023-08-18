const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => {
  if (!ids) return [];

  const findSpecies = species.filter((specie) => ids.includes(specie.id));

  return findSpecies;
};

module.exports = getSpeciesByIds;
