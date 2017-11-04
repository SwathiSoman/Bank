using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TDDMoney
{
    public class Money : Expression
    {
        public readonly int amount;
        string currency;

        public Money(int amount, string currency)
        {
            this.amount = amount;
            this.currency = currency;
        }

        public static Money Dollar(int amount)
        {
            return new Money(amount, "USD");
        }

        public static Money Franc(int amount)
        {
            return new Money(amount, "CHF");
        }

        public string GetCurrency()
        {
            return currency;
        }

        public Money Reduce(Bank bank, String to)
        {
            int rate = bank.Rate(currency, to);
            return new Money(amount / rate, to);
        }

        public override bool Equals(Object obj)
        {
            Money money = (Money)obj;
            return amount == money.amount && GetCurrency().Equals(money.GetCurrency());
        }

        public override int GetHashCode()
        {
            return 0;
        }

        public Expression Times(int multiplier)
        {
            return new Money(amount * multiplier, currency);
        }

        public Expression Plus(Expression addend)
        {
            return new Sum(this, addend);
        }

        public override string ToString()
        {
            return amount.ToString() + " " + currency;
        }
    }
}
