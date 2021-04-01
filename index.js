                                                                                                                                // Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const cityer = document.getElementById('city');

var mine =[
  {
    "building": "Hawaiian Bamboo Apartments",
    "Block": "Central City",
    "week": 1,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/18.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w1.png.png"
  },
  {
    "building": "One Flame Hotel",
    "Block": "Central City",
    "week": 2,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/24.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w2.png.png"
  },
  {
    "building": "Mayor's House North",
    "Block": "Central City",
    "week": 3,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/22.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w3.png.png"
  },
  {
    "building": "Event Center",
    "Block": "Central City",
    "week": 4,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/19.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w4.png.png"
  },
  {
    "building": "City Hall",
    "Block": "Central City",
    "week": 5,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/28.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w5.png.png"
  },
  {
    "building": "Maitland House",
    "Block": "80's Block",
    "week": 6,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/3.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w6.png.png"
  },
  {
    "building": "Hill Valley Clock Tower North",
    "Block": "80's Block",
    "week": 7,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/7.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w7.png.png"
  },
  {
    "building": "555 CPW",
    "Block": "80's Block",
    "week": 8,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/13.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w8.png.png"
  },
  {
    "building": "Temple of Doom",
    "Block": "80's Block",
    "week": 9,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/2.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w9.png.png"
  },
  {
    "building": "Castle of Lions",
    "Block": "80's Block",
    "week": 10,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/8.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w10.png.png"
  },
  {
    "building": "Eames House",
    "Block": "Amazing Homes",
    "week": 11,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/4.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w11.png.png"
  },
  {
    "building": "Villa Savoye",
    "Block": "Amazing Homes",
    "week": 11,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/14.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w11.png.png"
  },
  {
    "building": "Villa Ronconci",
    "Block": "Amazing Homes",
    "week": 12,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/10.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w12.png.png"
  },
  {
    "building": "Falling Water",
    "Block": "Amazing Homes",
    "week": 13,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/9.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w9.png.png"
  },
  {
    "building": "Casa Barragan",
    "Block": "Amazing Homes",
    "week": 14,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/5.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w14.png.png"
  },
  {
    "building": "Death Star",
    "Block": "80's Block",
    "week": 14,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/17.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w80.png.png"
  },
  {
    "building": "Oudhof",
    "Block": "Amazing Homes",
    "week": 15,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/1.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w15.png.png"
  },
  {
    "building": "Heydar Aliyev Center",
    "Block": "Future of Architecture",
    "week": 16,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/26.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w16.png.png"
  },
  {
    "building": "Skypad Apartments",
    "Block": "Future of Architecture",
    "week": 17,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/21.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w17.png.png"
  },
  {
    "building": "Mars-ONE Habitat Module",
    "Block": "Future of Architecture",
    "week": 18,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/25.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w18.png.png"
  },
  {
    "building": "Form & Nature",
    "Block": "Future of Architecture",
    "week": 19,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/20.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w19.png.png"
  },
  {
    "building": "Natural History Museum North",
    "Block": "Future of Architecture",
    "week": 20,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/29.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w20.png.png"
  },
  {
    "building": "Library Tower, Los Angeles",
    "Block": "City Skylines",
    "week": 21,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/30.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w21.png.png"
  },
  {
    "building": "Wilshire Grand Hotel, Los Angeles",
    "Block": "City Skylines",
    "week": 21,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/34.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w21.png.png"
  },
  {
    "building": "Columbia Business Center, Seattle",
    "Block": "",
    "week": 22,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/31.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w22.png.png"
  },
  {
    "building": "Space Needle, Seattle",
    "Block": "City Skylines",
    "week": 22,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/35.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w22.png.png"
  },
  {
    "building": "Namsan Tower, Seoul",
    "Block": "City Skylines",
    "week": 23,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/37.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w23.png.png"
  },
  {
    "building": "Lotte World Building, Seoul",
    "Block": "City Skylines",
    "week": 23,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/38.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w23.png.png"
  },
  {
    "building": "Ping An Financial Building",
    "Block": "City Skylines",
    "week": 24,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/39.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w24.png.png"
  },
  {
    "building": "K100 Building",
    "Block": "City Skylines",
    "week": 24,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/40.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w24.png.png"
  },
  {
    "building": "Panorama Tower",
    "Block": "City Skylines",
    "week": 25,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/41.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w25.png.png"
  },
  {
    "building": "Four Seasons Miami",
    "Block": "City Skylines",
    "week": 25,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/42.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w25.png.png"
  },
  {
    "building": "Liam Tower",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/43.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26a.png.png"
  },
  {
    "building": "Jailhouse Sam",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/44.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26b.png.png"
  },
  {
    "building": "Appartamento di Miekele",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/45.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26c.png.png"
  },
  {
    "building": "Luka Wizards Co.",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/48.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26d.png.png"
  },
  {
    "building": "Luke's Cathedral",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/49.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26e.png.png"
  },
  {
    "building": "Lee Business Center",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/51.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26f.png.png"
  },
  {
    "building": "Seuessenstraus Boingenhoppeturm",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/52.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26g.png.png"
  },
  {
    "building": "Pagadoa Matthew",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/53.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26h.png.png"
  },
  {
    "building": "Benjamin Tower",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/54.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26i.png.png"
  },
  {
    "building": "Seaside Dominick",
    "Block": "City Skylines",
    "week": 26,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/55.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26j.png.png"
  },
  {
    "building": "Haunted Mansion",
    "Block": "Magic Kingdom",
    "week": 27,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/46.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w27.png.png"
  },
  {
    "building": "Temple of the Forbidden Eye",
    "Block": "Magic Kingdom",
    "week": 28,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/47.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w28.png.png"
  },
  {
    "building": "Space Mountain",
    "Block": "Magic Kingdom",
    "week": 29,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/50.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w29.png.png"
  },
  {
    "building": "Toontown Town Hall",
    "Block": "Magic Kingdom",
    "week": 30,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/57.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w30.png.png"
  },
  {
    "building": "Millenium Falcon",
    "Block": "Magic Kingdom",
    "week": 31,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/56.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w31.png.png"
  },
  {
    "building": "Grass Block",
    "Block": "Minecraft",
    "week": 32,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/16.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w32a.png.png"
  },
  {
    "building": "Obsidian Block",
    "Block": "Minecraft",
    "week": 32,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/32.png",
    "Image": ""
  },
  {
    "building": "Sleeping Beauty's Castle",
    "Block": "Magic Kingdom",
    "week": 32,
    "Top": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/58.png",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w32.png.png"
 }
]
function city() {
  var count = Object.keys(mine).length;
  console.log(count);
  for (var i in mine) {
    var container = document.createElement('div');
    var imgs = document.createElement('img');
    var srcs = document.createAttribute('src');
    var idez = document.createAttribute('id');
    var classer  = document.createAttribute('class');
    var brak = document.createElement('br');
    container.setAttributeNode(idez);
    imgs.setAttributeNode(classer);
    srcs.value = mine[i].Top;
    idez.value = "top"+i;
    classer.value = "top";
    imgs.setAttributeNode(srcs);
    container.appendChild(imgs);
    cityer.appendChild(container);
    container.appendChild(brak);
    console.log(mine[i].Week);
    }
}

function update() {
  var count = Object.keys(mine).length;
  console.log(count);
  for (var i in mine) {
    var container = document.createElement('div');
    var names = document.createElement('h1');
    var weeks = document.createElement('h2');
    
    var idez = document.createAttribute('id');
    var classer  = document.createAttribute('class');
    var sty = document.createAttribute('style');
    container.setAttributeNode(sty)
    container.setAttributeNode(idez);
    container.setAttributeNode(classer);
    names.textContent = mine[i].Building;
    weeks.textContent = "Week: "+mine[i].week;
    idez.value = "week"+i;
    container.appendChild(names);
    container.appendChild(weeks);
    appDiv.appendChild(container);
    console.log(mine[i].Week);
    }
}
city();
update();