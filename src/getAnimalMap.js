const data = require('../data/zoo_data');

const zooLocations = ['NE', 'NW', 'SE', 'SW'];
const { species } = data;

const getSpeciesLocation = () => {
  const speciesLocation = {};

  zooLocations.forEach((location) => {
    const specieFound = species.filter((specie) => specie.location.includes(location));
    speciesLocation[location] = specieFound.map((specie) => specie.name);
  });
  return speciesLocation;
};

const getNames = (specie, options) => {
  const names = specie.residents.map((resident) => resident.name);

  if (options.sex) {
    const filteredNames = names.filter((name) => {
      const resident = specie.residents.find((res) => res.name === name);
      return resident.sex === options.sex;
    });

    return options.sorted ? filteredNames.sort() : filteredNames;
  }

  return options.sorted ? names.sort() : names;
};

const getFilteredMap = (options) => {
  const sortedNames = {};

  zooLocations.forEach((location) => {
    const specieFound = species.filter((specie) => specie.location.includes(location));

    sortedNames[location] = [];

    for (const specie of specieFound) {
      const filteredData = getNames(specie, options);
      sortedNames[location].push({ [specie.name]: filteredData });
    }
  });

  return sortedNames;
};

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) return getSpeciesLocation();

  if (options.includeNames) {
    return getFilteredMap(options);
  }
};

module.exports = getAnimalMap;
