const randomInteger = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

export { randomInteger, randomItem };
