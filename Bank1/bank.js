class Bank {
	constructor ( newPair ){
		this.pair = newPair
	}
	
	
	Pair(from,to) {
            this.from = from;
            this.to = to;
	}
	
    boolean equals(Object) {
            Pair pair = (Pair)object;
            return from.equals(pair.from) && toequals(pair.to);
    }
	
	addRate(from,to,rate){
		let newRate = new Rate ()
		this.allMyRates.push( newRate)
		return newRate
	}
	
	getMoneyReduce(Expression source, String to)
	let result = ""
		for (let aRate of this.allMyRates)
			result += aRate
		return result
	}
	
	
	getrate(from,to) {
        if (from.equals(to)) return 1;
        Integer rate = (Integer)rates.get(new Pair(from, to));
        return rate.intValue();
	}
	
}

}