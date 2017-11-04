
describe('Basic check for the source code', () => {
	describe('Bank', () => {
		let theBank
		beforeEach(() => {
			theBank = new Bank()
		})
		
	describe('the testMultiplication', () => {
		it('should test Multiplication', () => {
			Money five = Money.dollar(5);
			expect(Money.dollar(10), five.times(2)).toBeEquals;
			expect(Money.dollar(15), five.times(3)).toBeEquals;
		})
		
	describe('the testEquality', () => {
		it('should test equality', () => {
			expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy;
			expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy;
        })
		
	describe('the testCurrency', () => {
		it('should test the currency', () => {
			expect("USD", Money.dollar(1).currency()).toBeEquals;
			expect("CHF", Money.franc(1).currency()).toBeEquals;
		})
    
	describe(' the testSimpleAddition', () => {
		it('should test for the addition', () => {
		Money five = Money.dollar(5);
        Expression sum = five.plus(five);
        Bank bank = new Bank();
        Money reduced = bank.reduce(sum, "USD");
		expect(Money.dollar(10), reduced).toBeEquals;
		})
   
   // TODO-story: Return Money from $5 + $5
    describe('the testPlusReturnsSum', () =>
        it('should test and return sum', () => {
		Money five = Money.dollar(5);
        Expression result = five.plus(five);
        Sum sum = (Sum)result;
		expect(five, sum.augend).toBeEquals;
		expect(five, sum.addend).toBeEquals;
	}
 
    describe('the testReduceSum', () =>
	    it('should reduce sum', () => {
		Expression sum = new Sum(Money.dollar(3), Money.dollar(4));
        Bank bank = new Bank();
        Money result = bank.reduce(sum, "USD");
		expect(Money.dollar(7), result).toBeEquals;
		})
   
    describe('the testReduceMoney', () =>
		it('should reduce the amount', () => {
		Bank bank = new Bank();
        Money result = bank.reduce(Money.dollar(1), "USD");
		expect(Money.dollar(1), result).toBeEquals;
		})
	
	describe('the testReduceMoneyDifferentCurrency', () =>
		it('should reduce the money different currency', () => {
		Bank bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        Money result = bank.reduce(Money.franc(2), "USD");
		expect(Money.dollar(1), result).toBeEquals;
	})

    describe('the testIdentityRate', () =>
		it('should test the identity rate', () => {
			expect(1, new Bank().rate("USD", "USD")).toBeEquals;
	})

    describe('the testMixedAddition', () =>
	    it('should test the mixed addition', () => {
		Expression fiveBucks = Money.dollar(5);
        Expression tenFrancs = Money.franc(10);
        Bank bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        Money result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
		expect(Money.dollar(10), result).toBeEquals;
	})

	describe('the testSumPlusMoney', () =>
	    it('should test the sum and the money', () => {
		Expression fiveBucks = Money.dollar(5);
        Expression tenFrancs = Money.franc(10);
        Bank bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        Expression sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
        Money result = bank.reduce(sum, "USD");
		expect(Money.dollar(15), result).toBeEquals
	})
	
	describe('the testSumTimes', () => {
		Expression fiveBucks = Money.dollar(5);
        Expression tenFrancs = Money.franc(10);
        Bank bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        Expression sum = new Sum(fiveBucks, tenFrancs).times(2);
	    Money result = bank.reduce(sum, "USD");
		expect(Money.dollar(20), result).toBeEquals
	})

   
}