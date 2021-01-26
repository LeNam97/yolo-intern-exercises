
function reverse(obj) {
  let temp = "";
  temp = obj.a;
  obj.a = obj.b;
  obj.b = obj.c;
  obj.c = temp;
  return obj;
}

module.exports = {
  reverse
}