export function generateBingoSets(
  aantalZinnenPerSet: number,
  aantalBingoSets: number,
  aantalBeschikbareZinnen: number,
): Set<number>[] {
  if (aantalZinnenPerSet > aantalBeschikbareZinnen)
    throw new Error('Er zijn niet genoeg zinnen om zoveel zinnen per set te genereren');

  const bingoSets: Set<number>[] = [];

  // Generate numbers based on the input
  for (let i = 0; i <= aantalBingoSets; i += 1) {
    const numberSet: Set<number> = new Set<number>();
    do {
      numberSet.add(Math.floor(Math.random() * aantalBeschikbareZinnen));
    } while (numberSet.size < aantalZinnenPerSet);

    bingoSets.push(numberSet);
  }

  return bingoSets;
}
