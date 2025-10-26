function calculateInterest() {
    let inputBalance = document.getElementsByClassName("input-balance");
    let displayNewBalances = document.getElementsByClassName("display-updated-balance");
  
    let bankBalances = []
  
    for (let i = 0; i < inputBalance.length; i++) {
      bankBalances[i] = Number(inputBalance[i].value);
      if(bankBalances[i] > 200000){
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
      } else if (bankBalances[i] > 100000 ) {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
      } else {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
      }
      displayNewBalances[i].value = bankBalances[i]
    }
  }