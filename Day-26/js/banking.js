/* // handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount depositted
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    // update deposit Total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal =
      parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // update Account Balance
    const balanceTotal = document.getElementById("balance-total");

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = "";
  });

// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // dealing with total Withdrawal
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputText);
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotal.innerText = newWithdrawTotal;

    // dealing with total Balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdrawal input
    withdrawInput.value = "";
  });
 */
