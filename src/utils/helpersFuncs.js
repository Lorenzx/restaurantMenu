export const randomNumber = () => {
  return "-" + Math.floor(Math.random() * (99999 + 1) + 1).toString();
};
