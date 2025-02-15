export function getInfoByIndex (info, index) {
  const oneInfo = Object.fromEntries(Object.entries(info).map(([key, value]) => [key, value[index]]))
  return oneInfo
}
