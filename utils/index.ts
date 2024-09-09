export const checkNumber = (s: string): boolean => {
  return !isNaN(parseFloat(s)) && isFinite(parseFloat(s));
};
