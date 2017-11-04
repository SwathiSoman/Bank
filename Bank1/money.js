class money{
	constructor(int amount, String currency) {
		this.amount = amount;
		this.currency = currency;
	}

	get boolean equals(Object object) {
        Money money = (Money)object;
        return this.amount == money.amount
        && this.currency().equals(money.currency());
    }
	
	get Money dollar(int amount) {
        return new Money(amount, "USD");
	}

	get expression times(int multiplier) {
        return new Money(amount * multiplier, currency);
	}
 
	get money franc(int amount) {
        return new Money(amount, "CHF");
	}

	get string currency() {
        return currency;
	}

	get expression plus(Expression addend) {
        return new Sum(this, addend);
	}

	get money reduce(bank,to) {
        int rate = bank.rate(currency, to);
        return new Money(amount / rate, to);
    }
}


