function e() {
  return typeof window == "object" && typeof document == "object";
}
export {
  e as hasRunningInBrowser
};
