function mnozenje(broj1, broj2) {
  let rezultat
  rezultat = broj1 * broj2
  console.log(`Rezultat mnozenja brojeva ${broj1} i ${broj2} je ${rezultat}`)
}
mnozenje(3, 2)

function sabiranje(num1, num2) {
  let sum
  sum = Number(num1) + Number(num2)
  console.log(`Rezultat zbira brojeva ${num1} i ${num2} je ${sum}`)
}

sabiranje(8, 3)

function kvadrat(baza, stepen) {
  let kvadrat = 0
  kvadrat = Number(baza) ** Number(stepen)
  console.log(
    `Rezultat kvadrata broja ${baza} na ${stepen} stepen je ${kvadrat}`
  )
}

kvadrat(4, 2)

function korijen(broj) {
  let rezultat
  rezultat = Math.sqrt(broj)
  console.log(`Kvadratni korijen broja ${broj} je ${rezultat}`)
}

korijen(25)
