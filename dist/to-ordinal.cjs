"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./to-number.cjs");function e(r=0){const t=n.toNumber(r);if(Number.isInteger(t)){if(String(t).endsWith("1")&&t!==11)return`${t}st`;if(String(t).endsWith("2")&&t!==12)return`${t}nd`;if(String(t).endsWith("3")&&t!==13)return`${t}rd`}return`${t}th`}exports.toOrdinal=e;
