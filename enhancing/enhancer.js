module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if(item.durability === 100){
    return {...item}
  }else{
    item.durability = 100
      return {...item}
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}
