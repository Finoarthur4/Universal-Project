function Prime(n)
{
  var prime = []
  //bool[] prime = new bool[n];
  //first mark all numbers from 2 to n as a primenumber
  for (var i = 2; i < n; i++)
  {
    prime.push(true);
  }

  //Individual section
  {
    var i = 2;

    for (; (i*i) < n; i++)
    {
      if (prime[i])
      {
        console.log(i);

        for (var j = (i*i); j < n; j++)
        {
          prime[j] = false;
        }
      }
    }

    for (; i < n; i++)
    {
      if (prime[i])
      {
        console.log(i);
      }
    }
  }

  //deleting too small primenumbers

  for (var i = 0; i < prime.length; i++)
  {
    if(prime[i] == false)
    {
      prime.reduce(i);
    }
  }
}