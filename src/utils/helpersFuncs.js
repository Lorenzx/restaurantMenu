export const randomNumber = () => {
  return "-" + Math.floor(Math.random() * (99999 + 1) + 1).toString(); //The maximum is inclusive and the minimum is inclusive
};
