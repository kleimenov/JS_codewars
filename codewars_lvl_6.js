/*
Quize #1

*/

function digital_root(n) {
    while (n > 0) {
      return n % 9 || 9;
    }
    return n;
  }


// or (it isn't my solution)

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce((sum, x) => sum + +x, 0));
  }