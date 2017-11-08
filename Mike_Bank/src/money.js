class Money {
  constructor (amount,  currency) {
    this.amount = amount
    this.currency = currency
  }
 
  static dollar (amount){
    return new Money(amount, "USD");
  }
 
  static franc (amount) {
     return new Money(amount, "CHF");
  }
 
  getCurrency(){
        return this.currency;
  }
 
  reduce(bank, to)     {
    let rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
  }
 
  equals( money) {
        return amount == money.amount && this.getCurrency() === money.getCurrency()
  }
 
  times (multiplier) {
        return new Money(this.amount * multiplier, this.currency)
    }
 
  plus (addend){
    return new Sum(this, addend);
 }
 
  toString()     {
        return amount.toString() + " " + this.currency;
  }
}
 