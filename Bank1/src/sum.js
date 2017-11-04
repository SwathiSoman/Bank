class sum{
	constructor(Expression augend,Expression addend){
	this.augend = augend;
	this.addend = addend;
	}
	
    get Moneyreduce(bank,to ) {
        int amount = augend.reduce(bank, to).amount + addend.reduce(bank, to).amount;
        return new Money(amount, to);
    }/*doubt*/

    @Override
	var expression plus(addend) {
	return new Sum(this, addend);  /* not sure of how to override in JS*/
	}

    var times(multiplier) {
        return new Sum(augend.times(multiplier), addend.times(multiplier));
    }
}