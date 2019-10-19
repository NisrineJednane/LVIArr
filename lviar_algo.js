//algorithm using map and reduce 

function largestValueinArray(xarr) {
    return xarr.map((narr) => {
      return narr.reduce((a,b) => {
        return (a > b) ? a : b;
      })
    })
  }
