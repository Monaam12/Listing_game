const { filter, isEmpty } = require("lodash");
const data = require("../data/games.json");

function dataSet(genre, platform) {
  return filter(data, (x) => {
    let condition1 = true;
    let condition2 = true;
    if (!isEmpty(genre)) {
      condition1 = x.genre.toLowerCase().match(genre.toLocaleLowerCase());
    }
    if (!isEmpty(platform)) {
      condition2 = x.platforms.some((y) =>
        y.toLowerCase().match(platform.toLocaleLowerCase())
      );
    }
    return condition1 && condition2;
  });
}

module.exports = dataSet;
