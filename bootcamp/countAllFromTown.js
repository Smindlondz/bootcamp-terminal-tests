
export default function countAllFromTown(string, regI) {
  let counter = 0;
  const regNumbersForAll = string.split(',');
  for (let i = 0; i < regNumbersForAll.length; i++) {
    const regNumbersForPaarl = regNumbersForAll[i].trim();
    if (regNumbersForPaarl.startsWith(regI)) {
      counter++;
    }
  }
  return counter;
}