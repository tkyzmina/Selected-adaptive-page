'use strict';
let servers = [{
  "name": "G1",
  "disk": {
    "type": "SSD",
    "value": 480,
    "count": 4
  },
  "cpu": {
    "name": "Intel Xeon E5-2630 2.2ГГц",
    "cores": 4,
    "count": 2
  },
  "ram": "64 ГБ RAM",
  "price": 5200000,
  "gpu": "4 × GTX 1080"
}, {
  "name": "D4",
  "disk": {
    "type": "HDD",
    "value": 500,
    "count": 1
  },
  "cpu": {
    "name": "Intel Core i3 2120 3.3ГГц",
    "cores": 2,
    "count": 1
  },
  "ram": "8 ГБ RAM",
  "price": 370000
}, {
  "name": "D8",
  "disk": {
    "type": "SSD",
    "value": 460,
    "count": 1
  },
  "cpu": {
    "name": "Intel Xeon E-2236 3.4ГГц",
    "cores": 3,
    "count": 2
  },
  "ram": "32 ГБ RAM",
  "price": 1600000
}, {
  "name": "С11",
  "disk": {
    "type": "HDD",
    "value": 500,
    "count": 4
  },
  "cpu": {
    "name": "Xeon E5-1650 3.6ГГц",
    "cores": 4,
    "count": 2
  },
  "ram": "32 ГБ RAM",
  "price": 3200000
}, {
  "name": "P9",
  "disk": {
    "type": "SSD",
    "value": 480,
    "count": 2
  },
  "cpu": {
    "name": "Intel Xeon E3-1230 3.4ГГц",
    "cores": 4,
    "count": 1
  },
  "ram": "16 ГБ RAM",
  "price": 1600000
}, {
  "name": "T800",
  "disk": {
    "type": "SSD",
    "value": 960,
    "count": 4
  },
  "cpu": {
    "name": "Skynet T8-4200 4.8ГГц",
    "cores": 3,
    "count": 4
  },
  "ram": "256 ГБ RAM",
  "price": 9999900,
  "gpu": "8 × Skynet Video 800"
}, {
  "name": "G7",
  "disk": {
    "type": "SSD",
    "value": 960,
    "count": 2
  },
  "cpu": {
    "name": "Intel Xeon E5-2660 2.7ГГц",
    "cores": 6,
    "count": 2
  },
  "ram": "128 ГБ RAM",
  "price": 8900000,
  "gpu": "2 × Tesla T4"
}, {
  "name": "D3",
  "disk": {
    "type": "SSD",
    "value": 240,
    "count": 1
  },
  "cpu": {
    "name": "Intel Xeon E3-3420 2.5ГГц",
    "cores": 3,
    "count": 2
  },
  "ram": "32 ГБ RAM",
  "price": 3950000
}, {
  "name": "P9",
  "disk": {
    "type": "SSD",
    "value": 480,
    "count": 2
  },
  "cpu": {
    "name": "Intel Xeon E3-1230 3.4ГГц",
    "cores": 2,
    "count": 2
  },
  "ram": "32 ГБ RAM",
  "price": 720000
}, {
  "name": "C8",
  "disk": {
    "type": "HDD",
    "value": 960,
    "count": 8
  },
  "cpu": {
    "name": "Intel Xeon E2-5500 4.4ГГц",
    "cores": 4,
    "count": 2
  },
  "ram": "64 ГБ RAM",
  "price": 2700000
}, {
  "name": "T9",
  "disk": {
    "type": "SSD",
    "value": 960,
    "count": 1
  },
  "cpu": {
    "name": "Intel Xeon E4-5200 3.4ГГц",
    "cores": 5,
    "count": 2
  },
  "ram": "64 ГБ RAM",
  "price": 4800000
}, {
  "name": "B182",
  "disk": {
    "type": "HDD",
    "value": 240,
    "count": 4
  },
  "cpu": {
    "name": "Intel Xeon E4-5200 3.ГГц",
    "cores": 2,
    "count": 2
  },
  "ram": "128 ГБ RAM",
  "price": 1200000
}];


let card = document.querySelector('.products__item');
let list = document.querySelector('.products__list');
let setCard = document.querySelectorAll('.products__item');
let checkboxes = document.querySelector('.form__type');

for (let item of setCard) {
  item.remove()
}

let renderCard = function (server) {
  let newCard = card.cloneNode(true);
  newCard.querySelector('.item__header').textContent = server.name;
  newCard.querySelector('.cpu').textContent = server.cpu.count + ' x ' + server.cpu.name + ', ' + server.cpu.count * server.cpu.cores + ' ядер';

  let diskText = '';
  if (server.disk.count >= 2) {
    diskText += server.disk.count + ' x ' + server.disk.value + ' ГБ ' + server.disk.type;
  } else {
    diskText += server.disk.value + ' ГБ ' + server.disk.type;
  }
  newCard.querySelector('.ssd').textContent = diskText;
  newCard.querySelector('.ram').textContent = server.ram;
  newCard.querySelector('.gpu').textContent = server.gpu;
  newCard.querySelector('.item__price').textContent = server.price / 100 + ' ₽/месяц';

  return newCard;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < servers.length; i++) {
  fragment.appendChild(renderCard(servers[i]));
}
list.appendChild(fragment);
// __________сортировка
let checkboxValue = '';
let sortedArray = [];

checkboxes.addEventListener('change', function (evt) {
  sortedArray.length = 0;
  checkboxValue = evt.target.value;

  if (checkboxValue == 'SSD') {
    servers.filter(function (elem) {
      for (let key in elem) {
        for (let type in elem[key]) {
          if (elem[key][type] == checkboxValue) {
            sortedArray.push(elem);
          }
        }
      }
    });
  } else if (checkboxValue == 'GPU') {
    servers.filter(function (elem) {
      for (let key in elem) {
        if (key == 'gpu') {
          sortedArray.push(elem);
        }
      }
    });
  } else if (checkboxValue == 'RAID') {
    servers.filter(function (elem) {
      for (let key in elem) {
        if (key == 'disk') {
          for (let count in elem[key]) {
            if (count == 'count' && elem[key][count] >= 2) {
              sortedArray.push(elem);
            }
          }
        }
      }
    });
  }

  console.log(sortedArray);
});
