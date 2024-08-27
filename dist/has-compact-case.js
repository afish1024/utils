function t(e) {
  return typeof e != "string" ? !1 : e.length === 0 ? !0 : /^\S+$/u.test(e);
}
export {
  t as hasCompactCase
};
