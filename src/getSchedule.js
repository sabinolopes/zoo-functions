const data = require('../data/zoo_data');

const { species, hours } = data;
const animals = species.map((specie) => specie.name);
const daysOfWeek = Object.keys(hours);
const monday = {
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const checkAnimalTarget = (scheduleTarget) => {
  const findAnimal = species.find((specie) => specie.name === scheduleTarget);

  return findAnimal.availability;
};

const getAnimalsFromDay = (scheduleTarget) => species
  .filter((specie) => specie.availability.includes(scheduleTarget))
  .map((specie) => specie.name);

const checkDayTarget = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') return monday;

  const { open } = hours[scheduleTarget];
  const { close } = hours[scheduleTarget];

  return {
    [scheduleTarget]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: getAnimalsFromDay(scheduleTarget),
    },
  };
};

const checkNoTarget = () => {
  const schedule = {};

  daysOfWeek.forEach((day) => {
    if (day === 'Monday') {
      schedule[day] = monday.Monday;
    } else {
      const { open } = hours[day];
      const { close } = hours[day];

      schedule[day] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimalsFromDay(day),
      };
    }
  });
  return schedule;
};

const getSchedule = (scheduleTarget) => {
  if (daysOfWeek.includes(scheduleTarget)) return checkDayTarget(scheduleTarget);

  if (animals.includes(scheduleTarget)) return checkAnimalTarget(scheduleTarget);

  if (!scheduleTarget) return checkNoTarget();

  return checkNoTarget();
};

module.exports = getSchedule;
