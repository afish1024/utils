function e(t) {
  try {
    const r = Number(t);
    return Number.isNaN(r) ? 0 : r;
  } catch {
    return 0;
  }
}
export {
  e as toNumber
};
