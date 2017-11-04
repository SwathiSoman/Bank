using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TDDMoney
{
    public interface Expression
    {
        Money Reduce(Bank bank, String to);
        Expression Plus(Expression addend);
        Expression Times(int multiplier);
    }
}
