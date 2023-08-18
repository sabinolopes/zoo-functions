const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const entrantsByAge = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) entrantsByAge.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) entrantsByAge.adult += 1;
    if (entrant.age >= 50) entrantsByAge.senior += 1;
  });

  return entrantsByAge;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) return 0;

  const { child: childTotal, adult: adultTotal, senior: seniorTotal } = countEntrants(entrants);
  const { child: childPrice, adult: adultPrice, senior: seniorPrice } = prices;

  const childTotalPrice = childTotal * childPrice;
  const adultTotalPrice = adultTotal * adultPrice;
  const seniorTotalPrice = seniorTotal * seniorPrice;

  return childTotalPrice + adultTotalPrice + seniorTotalPrice;
};

module.exports = { calculateEntry, countEntrants };
