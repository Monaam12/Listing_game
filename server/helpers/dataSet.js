const { filter, isEmpty, orderBy } = require("lodash");
const data = require("../data/games.json");

const paginate = (array, page, size) => {
  return {
    data: array.slice((page - 1) * size, size),
    page,
    size,
  };
};

function dataSet(genre, platform, order) {
  return orderBy(
    filter(data, (x) => {
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
    }),
    [order],
    ["desc"]
  );
}

module.exports = {
  dataSet,
  paginate,
};
