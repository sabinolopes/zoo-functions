const data = require('../data/zoo_data');

const { species } = data;
let animalsQtd;

const getAnimal = (animal) =>
  species.find((specie) => specie.name === animal.species);

const getAnimalBySex = (animal) =>
  getAnimal(animal).residents.filter((aniSex) => aniSex.sex === animal.sex);

const countAnimals = (animal) => {
  if (typeof animal === 'object') {
    const animalFound = getAnimal(animal);
    animalsQtd = animalFound.residents.length;

    if (animal.sex) {
      const sexCount = getAnimalBySex(animal);
      animalsQtd = sexCount.length;
    }
  } else {
    animalsQtd = species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  return animalsQtd;
};

module.exports = countAnimals;
