class Sum {
    constructor (augend, addend)  {
      this.augEnd = augend
      this.addEnd = addend
    }
 
    plus(addend) {
        return new Sum(this, addend);
    }
 
    times(multiplier) {
        return new Sum(this.augEnd.times(multiplier), this.addEnd.times(multiplier))
    }
 
    reduce(bank, to) {
      let amount = this.augEnd.reduce(bank, to).amount +this.addEnd.reduce(bank, to).amount
      return new Money(amount, to)
    }
}
 