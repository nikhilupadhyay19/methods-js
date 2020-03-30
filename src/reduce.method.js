// Reduce Methods
// Module Pattern - Factory Function, Object Freeze
const func_factory = () => {
  const getTotal = (accumulator, elem, index, arr) => {
    return (accumulator += elem);
  };
  const getTotalBy = (objArray, property) => {
    return objArray.reduce((accumulator, elem, index, arr) => {
      return accumulator + elem[property];
    }, 0);
  };
  const services = Object.freeze({
    getTotal,
    getTotalBy
  });
  return services;
};
const _factory = func_factory();

// 1.Sum all the values of an array
const total = [0, 1, 2, 3].reduce(_factory.getTotal);
console.log(total);

// 2.Sum of values in an object array

const totalBy = _factory.getTotalBy([{ x: 11 }, { x: 2 }, { x: 3 }], "x");
console.log(totalBy);

// 3.Flatten an array of arrays
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, elem, index, arr) => {
    return accumulator.concat(elem);
  },
  []
);
console.log(flattened);
