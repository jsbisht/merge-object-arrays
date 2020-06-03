function merge(...arrRefAndKeys) {
  const map = new Map();
  arrRefAndKeys.forEach(arrRefAndKey => {
    const [arr, key] = arrRefAndKey;
    arr.forEach(item => map.set(item[key], { ...map.get(item[key]), ...item }));
  });
  return Array.from(map.values());
}

module.exports = merge;
