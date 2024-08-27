function e(r) {
  return Array.isArray(r) ? new Set(r).size === r.length : !0;
}
export {
  e as hasUnique
};
