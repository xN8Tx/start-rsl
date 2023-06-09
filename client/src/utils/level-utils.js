const levelMap = {
  1: 0,
  2: 200,
  3: 400,
  4: 600,
  5: 800,
  6: 1000,
  7: 1200,
  8: 1400,
  9: 1600,
  10: 1800,
};

const levelInfo = (xp) => {
  let level;

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(levelMap)) {
    if (xp >= 1800) {
      level = 10;
    } else if (xp < value) {
      level = key;
    }
  }

  const nextLevel = levelMap[String(Number(level) + 1)];
  const progress = level === 10 ? 100 : Math.floor(((xp - levelMap[level]) * 100) / (nextLevel - levelMap[level]));

  return { level, progress };
};

export { levelInfo };
