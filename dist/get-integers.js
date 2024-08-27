function a(e, r) {
  if (typeof e != "number" || typeof r != "number")
    return [];
  const n = Math.trunc(e), c = Math.trunc(r), u = n < c ? 1 : -1, o = Math.abs(c - n) + 1, s = new Array(o);
  for (let t = 0; t < o; t = t + 1)
    s[t] = n + t * u;
  return s;
}
export {
  a as getIntegers
};
