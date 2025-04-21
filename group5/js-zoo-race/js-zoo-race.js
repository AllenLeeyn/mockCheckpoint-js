export function animal(
    name,
    maxSpeed,
    maxSpeedRange,
    midSpeed,
    midSpeedRange,
    speed,
    distance,
  ) {
    return new Promise((res) => {
        let time = 0;
        if (distance <= maxSpeedRange) {
            time = distance/ maxSpeed;
        } else if (distance <= maxSpeedRange + midSpeedRange) {
            time = (maxSpeedRange/ maxSpeed) + ((distance -maxSpeedRange)/ midSpeed);
        } else {
            time = (maxSpeedRange / maxSpeed) + (midSpeedRange / midSpeed) + 
            ((distance - maxSpeedRange - midSpeedRange) / speed)
        }
        return setTimeout(() => res(name), time);
    });
}
  
export async function zooRace(animals) {
    return await Promise.race(animals);
}
