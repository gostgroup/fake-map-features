var faker = require('faker');

module.exports = function () {
  var data = { features: [] };

  for (var i = 0; i < 1000; i++) {
    data.features.push({
      type: 'Feature',
      id: i,
      geometry: {
        type: 'Point',
        coordinates: [
          parseFloat(faker.address.longitude()),
          parseFloat(faker.address.latitude())
        ]
      },
      properties: {
        id: i,
        userName: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        email: faker.internet.email(),
        country: faker.address.country(),
        city: faker.address.city(),
        color: faker.internet.color()
      }
    })
  }

  return data;
}
