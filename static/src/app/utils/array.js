export const repeat = (val, n) => {
  if(typeof val === 'function') return (new Array(n)).fill(val).map(f => f());
  return (new Array(n)).fill(val);
};

import shuffle from 'lodash.shuffle';
export { shuffle };

export const flatten = (xs) => {
  if(xs.length === 0) return [];

  if(Array.isArray(xs[0])) return [...flatten(xs[0]), ...flatten(xs.slice(1))];
  else return [xs[0], ...flatten(xs.slice(1))];
};

export const pickRandom = (xs) => xs[Math.floor(Math.random() * xs.length)];

export const range = (start, end) => (new Array(end - start + 1)).fill(0).map((_, i) => i + start);
