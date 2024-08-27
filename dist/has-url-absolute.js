const e = (t) => typeof t != "string" ? !1 : /^(?:[+a-z]+:)?\/\//iu.test(t);
export {
  e as hasUrlAbsolute
};
