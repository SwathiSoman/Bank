using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TDDMoney
{
    public class Bank
    {
        class Pair
        {
            private String from;
            private String to;

            public Pair(String from, String to)
            {
                this.from = from;
                this.to = to;
            }

            public override bool Equals(Object obj)
            {
                Pair pair = (Pair)obj;
                return from.Equals(pair.from) && to.Equals(pair.to);
            }

            public override int GetHashCode()
            {
                return 0;
            }
        }

        private Dictionary<Pair, int> rates = new Dictionary<Pair,int>();

        public Money Reduce(Expression source, string to)
        {
            return source.Reduce(this, to);
        }

        public int Rate(String from, String to)
        {
            if (from.Equals(to)) return 1;
            return rates[new Pair(from, to)];
        }

        public void AddRate(string from, string to, int rate)
        {
            rates.Add(new Pair(from, to), rate);
        }
    }
}
