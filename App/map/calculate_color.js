const Cal = temp => {
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
    '#990000',
  ]; //red
  temp = parseInt(temp, 10);
  if (temp >= 40) {
    return colorList[15];
  } else if (temp <= -8) {
    return colorList[0];
  } else {
    return colorList[Math.floor(temp / 3)];
  }
};

export default Cal;
