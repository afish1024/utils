import { toNumber as r } from "./to-number.js";
function s(n = 0) {
  const t = r(n);
  if (Number.isInteger(t)) {
    if (String(t).endsWith("1") && t !== 11)
      return `${t}st`;
    if (String(t).endsWith("2") && t !== 12)
      return `${t}nd`;
    if (String(t).endsWith("3") && t !== 13)
      return `${t}rd`;
  }
  return `${t}th`;
}
export {
  s as toOrdinal
};
