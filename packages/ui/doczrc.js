export default {
  typescript: true,
  codeSandbox: false,
  filterComponents: files =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
}
