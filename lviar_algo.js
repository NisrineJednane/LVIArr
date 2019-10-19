//algorithm using map and reduce 

function largestValueinArray(xarr) {
    return xarr.map(function(narr) {
      return narr.reduce(function(a,b) {
        return (a > b) ? a : b;
      })
    })
  }
