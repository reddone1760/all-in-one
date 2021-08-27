// @param hundret === value of 100%
// @param val === value wich % you want
// @param max === value of the max output, default is 100 -> means output is between 0 and 100
const prozent = (hundret, val, max = 100) => {
  return (100 / hundret) * val * (max / 100);
};

export default prozent;
