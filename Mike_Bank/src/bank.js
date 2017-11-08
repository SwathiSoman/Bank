class Bank {
  constructor () {
    this.rates = []
  }
 
  reduce(source, to) {
    return source.reduce(this, to)
  }
 
 
 
  rate(from, to)   {
    if (from === to) {
      return 1
    }
    let result = this.rates.find( aPair => aPair[0][0] === from && aPair[0][1] === to)
    //console.log(result)
    let exchangerate = result[1]
    return exchangerate
  }
 
  addRate(from, to, rate) {
      this.rates.push([[from, to], rate])
  }
 
}