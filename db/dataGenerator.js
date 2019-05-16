const faker = require('faker');
const { imageUrls, restaurantNames } = require('./data.js');

const generateNums = (n) => {
  const numbers = [];
  for (let i = 0; i < n; i += 1) {
    numbers.push(i);
  }
  return numbers;
};

const generate100Records = () => {
  const records = [];
  for (let i = 0; i < 100; i += 1) {
    const n = faker.random.number({ min: 10, max: 15 });
    let arr = generateNums(30);
    faker.helpers.shuffle(arr);
    arr = arr.slice(0, n).map(num => imageUrls[num]);

    records.push({
      restaurantId: i,
      name: faker.random.arrayElement(restaurantNames),
      photos: arr,
    });
  }

  return records;
};

module.exports.generate100Records = generate100Records;
