class Pair {
  constructor (from, to) {
        this.from = from
        this.to = to
  }
   
  equals(pair){
    return this.from.equals(pair.from) && this.to.equals(pair.to)
  }
}