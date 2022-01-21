const cities = [
  'miami',
  'barcelona',
  'madrid',
  'amsterdam',
  'berlin',
  'sao paulo',
  'lisbon',
  'mexico city',
  'paris',
];

const capitalCities = cities.map((city) => {
  if (city.includes(' ')) {
    const words = city.split(' ');
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
  } else {
    return city[0].toUpperCase() + city.slice(1);
  }
});

console.log(capitalCities);
