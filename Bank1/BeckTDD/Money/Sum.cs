using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TDDMoney
{
    public class Sum : Expression
    {
        public Expression AugEnd;
        public Expression AddEnd;

        public Sum(Expression augend, Expression addend)
        {
            this.AugEnd = augend;
            this.AddEnd = addend;
        }

        public Expression Plus(Expression addend)
        {
            return new Sum(this, addend);
        }

        public Expression Times(int multiplier)
        {
            return new Sum(AugEnd.Times(multiplier), AddEnd.Times(multiplier));
        }

        public Money Reduce(Bank bank, string to)
        {
            int amount = AugEnd.Reduce(bank, to).amount + AddEnd.Reduce(bank, to).amount;
            return new Money(amount, to);
        }
    }
}
