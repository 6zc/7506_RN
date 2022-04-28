function Cal(temp){
  const colorList = [
    '#0000FF',
    '#0033FF',
    '#0066FF',
    '#0099FF',
    '#00CCFF', //blue
    '#00FFCC',
    '#00FF66',
    '#00FF00',
    '#CCFF00', //green
    '#FFFF00',
    '#FFCC00',
    '#FF9900',
    '#FF6600', //yellow
    '#FF3300',
    '#FF0000',
    '#990000',//red
  ]; 
  temp = parseInt(temp, 10);
  if (temp >= 40) {
    return colorList[15];
  } else if (temp <= -8) {
    return colorList[0];
  } else {
    return colorList[Math.floor(temp / 3)];
  }
};

function getCord(name){
  const cordList = {
    "Kai Tak Runway Park":{latitude:22.30430, longitude:114.21556},
    "King's Park":{latitude:22.31271,longitude:114.17386},
    "Hong Kong Observatory":{latitude:22.30230,longitude:114.17431},
    "Wong Chuk Hang":{latitude:22.24552,longitude:114.16698},
    "Ta Kwu Ling":{latitude:22.54208,longitude:114.16358},
    "Lau Fau Shan":{latitude:22.46750,longitude:113.98419},
    "Tai Po":{latitude:22.44250,longitude:114.16531},
    "Sha Tin":{latitude:22.37278,longitude:114.19717},
    "Tuen Mun":{latitude:22.40080,longitude:113.94308},
    "Tseung Kwan O":{latitude:22.30719,longitude:114.26060},
    "Sai Kung":{latitude:22.41940,longitude:114.33264},
    "Chek Lap Kok":{latitude:22.30541,longitude:113.91899},
    "Tsing Yi":{latitude:22.34626,longitude:114.10219},
    "Shek Kong":{latitude:22.43245,longitude:114.08722},
    "Tsuen Wan Ho Koon":{latitude:22.38350,longitude:114.10809},
    "Tsuen Wan Shing Mun Valley":{latitude:22.37449,longitude:114.12505},
    "Hong Kong Park":{latitude:22.27722,longitude:114.16035},
    "Shau Kei Wan":{latitude:22.27769,longitude:114.22729},
    "Kowloon City":{latitude:22.32853,longitude:114.18941},
    "Happy Valley":{latitude:22.26877,longitude:114.18505},
    "Wong Tai Sin":{latitude:22.34095,longitude:114.19383},
    "Stanley":{latitude:22.21965,longitude:114.21367},
    "Kwun Tong":{latitude:22.31168,longitude:114.22357},
    "Sham Shui Po":{latitude:22.32954,longitude:114.15844},
    "Yuen Long Park":{latitude:22.44215,longitude:114.01889},
    "Tai Mei Tuk":{latitude:22.47496,longitude:114.23462},
  }
  return cordList[name]
}

export{Cal, getCord}

// export default Cal;
