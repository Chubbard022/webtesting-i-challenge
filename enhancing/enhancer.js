module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === 20){
    return {...item}
  }else{
    item.enhancement += 1
    return {...item}
  }
}

function fail(item) {

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
