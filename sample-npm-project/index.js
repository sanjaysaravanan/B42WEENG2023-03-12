import isEqual from 'lodash/isEqual.js';
import Chart from 'chart.js/auto'
// var isEqual = require('lodash/isEqual');

var obj1 = {
  name: 'SAM',
  age: '24',
  bio: {
    height: '188',
    weight: '90',
    skills: ['PYTHON', 'JAVA']
  },
  hobbies: [
    { name: 'HOCKEY', level: 'STATE' },
    { name: 'CRICKET', level: 'STATE' }
  ],
};
var obj2 = {
  hobbies: [
    { name: 'HOCKEY', level: 'STATE' },
    { name: 'CRICKET', level: 'STATE' }
  ],
  age: '24',
  name: 'SAM',
  bio: {
    height: '188',
    weight: '90',
    skills: ['PYTHON', 'JAVA']
  }
};


// var flag = true;
// // compare both the objects, find the equality
// for (const key in obj1) {
//   if (obj1[key] !== obj2[key]) {
//     flag = false;
//   }
// }

console.log('Equality', isEqual(obj1, obj2));


(async function () {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('chart'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

