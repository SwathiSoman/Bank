
describe('Basic check for the source code', () => {
	describe('Bank', () => {
		let theBank
		beforeEach(() => {
			theBank = new Bank()
			let five = new moneyDollar(5)
		})
		
	describe('the test Multiplication', () => {
		it('should test Multiplication for 10 and 2', () => {
			expect(Money.dollar(10), five.times(2)).toBeEquals()
		})
		it('should test multiplication for 15 and 3', () => {
			expect(Money.dollar(15), five.times(3)).toBeEquals()
		})
	})
		
	describe('the test Equality', () => {
		it('should test equality if 5 is equal to 5', () => {
			expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
		})
		it('should test if the given two numbers are not equal', () => {
			expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
        })
		it('should test if both the dollar and franc are equal', () => {
			expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy()
		})
	})

	describe('the testCurrency', () => {
		it('should test the dollar "USD"', () => {
			expect(Money.dollar(1).Getcurrency()).toBeEquals()
		})
		it('should test the franc "CHF"', () => {
			expect(Money.franc(1).Getcurrency()).toBeEquals()
		})
    })
	
	
	describe('the test Simple Addition', () => {
		it('should test for the addition', () => {
		let five = new moneyDollar(5)
		let expressionSum = new five.plus(five)
        let bank = new Bank()
		moneyReduced = bank.reduce(sum,"USD")
		expect(Money.dollar(10),moneyReduced()).toBeEquals()
		})
	})


	describe('the test mixed addition',() => {
		it('should test for the mixed addition', () => {
			let expressionFiveBucks = new moneyDollar(5)
			let expressionTenFrancs = new moneyFranc(10)
			let bank = new Bank()
			bank.addRate("USD","CHF",2)
		    moneyResult = bank.reduce(fiveBucks.plus(tenFrancs), "USD")
			expect(Money.dollar(10),moneyResult()).toBeEquals()
		})
	})
	 
	
	describe('the test sum plus money',() => {
		it('should test for the sum plus money', () => {
			let expressionFiveBucks = new moneyDollar(5)
			let expressionTenFrancs = new moneyFranc(10)
			let bank = new bank()
			bank.addRate("USD","CHF",2)
			expressionSum = new Sum(fiveBucks,tenFrancs).plus(fiveBucks)
			moneyResult = bank.reduce(sum,"USD")
			expect(Money.dollar(15),moneyResult()).toBeEquals()
		})
	})
			
  
	describe('the test sum times', () => {
		it('should test the sum of times', () => {
			let expressionfiveBucks = new moneyDollar(5)
			let expressiontenFrancs = new moneyFranc(10)
			let bank = new Bank()
			bank.addRate("USD", "CHF", 2);
			expressionSum = new Sum(fiveBucks, tenFrancs).times(2);
			moneyResult = bank.reduce(sum, "USD");
			expect(Money.dollar(20), moneyResult()).toBeEquals()
		})
	})
	
	describe('the test Plus Returns Sum', () => {
        it('should test and return sum', () => {
			let moneyFive = new moneyDollar(5)
			let expressionResult = new fivePlus(five)
			let sum = (Sum).moneyResult
			expect(five, sumAugend()).toBeEquals()
			expect(five, sumAddend()).toBeEquals()
		})
	})
 
    describe('the test Reduce Sum', () => {
	    it('should reduce sum', () => {
			let expressionSum = new Sum(Money.dollar(3), Money.dollar(4))
			let bank = new Bank()
			moneyResult = bank.reduce(sum, "USD");
			expect(Money.dollar(7), moneyresult).toBeEquals()
		})
    })
	
    describe('the test Reduce Money', () => {
		it('should reduce the amount', () => {
			let bank = new Bank()
			moneyResult = bank.reduce(Money.dollar(1), "USD");
			expect(Money.dollar(1), moneyResult).toBeEquals()
		})
	})
	
	describe('test identity rate', () => {
		expect(1,new bank().rate("USD","USD"))
	})
	
	describe('the test Reduce Money Different Currency', () => {
		it('should reduce the money different currency', () => {
			let bank = new Bank()
			bank.addRate("USD", "CHF", 2);
			moneyResult = bank.reduce(Money.franc(2), "USD");
			expect(Money.dollar(1), moneyResult).toBeEquals()
		})
	})

/*	
	describe('Test array equals', () => {
		it('should test if all the array are equal', () => {
			expect(newObject[] {"abc"}, newObject[] {"abc"})
		})
	})
*/

  
})
   
})