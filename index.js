// Give an integer 'n' find the factorial of the integer

function recursivefactorial(n) {
  if (n === 0)
    return 1

return  n * recursivefactorial(n-1)
}
console.log(recursivefactorial(0))
console.log(recursivefactorial(1))
console.log(recursivefactorial(7))