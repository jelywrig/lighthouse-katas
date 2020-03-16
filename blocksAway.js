const blocksAway = function(directions) {
  let prevDirection = '';
  let currPosition = [0,0];

  if(directions[0] === 'left') {
    currPosition[1] += directions [1];
    prevDirection = 'north';
  } else if (directions [0] === 'right') {
    currPosition[0] += directions [1];
    prevDirection = 'east';
  }

  for (let i = 2; i < directions.length ; i += 2) {
    let currDirection = directions[i];
    let steps = directions [i + 1];
    if(currDirection === 'right') {
      if(prevDirection === 'north') {
        prevDirection = 'east';
        currPosition[0] += steps;
      } else if (prevDirection === 'east'){
        prevDirection = 'south';
        currPosition[1] -= steps;
      } else if (prevDirection === 'south') {
        prevDirection = 'west';
        currPosition[0] -= steps;
      } else if (prevDirection === 'west') {
        prevDirection = 'north';
        currPosition[1] += steps;
      }
    } else if (currDirection === 'left') {
      if(prevDirection === 'north') {
        prevDirection = 'west';
        currPosition[0] -= steps;
      } else if (prevDirection === 'east') {
        prevDirection = 'north';
        currPosition[1] += steps;
      } else if (prevDirection === 'south') {
        prevDirection = 'east';
        currPosition[0] += steps;
      } else if (prevDirection === 'west') {
        prevDirection = 'south';
        currPosition[1] -= steps;
      }
    }
  }

  return {'east': currPosition[0], 'north': currPosition[1]};

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


