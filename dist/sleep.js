import { toNumber as n } from "./to-number.js";
function m(t) {
  const e = n(t);
  return new Promise((o) => {
    setTimeout(o, e);
  });
}
export {
  m as sleep
};
