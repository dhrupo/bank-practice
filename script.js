document.getElementById('login').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username == 'admin' && password == 'admin') {
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
  }
  else {
    document.getElementById('login-area').style.display = "none";
    document.getElementById('login-fail').style.display = "block";
  }
});

document.getElementById('try-again').addEventListener('click', () => {
  document.getElementById('login-fail').style.display = "none";
  document.getElementById('login-area').style.display = "block";
});

document.getElementById('addDeposit').addEventListener('click', () => {
  const depositAmount = parseFloat(document.getElementById('depositAmount').value);
  updateSpanText('currentDeposit', depositAmount);
  updateSpanText('currentBalance', depositAmount);

  document.getElementById('depositAmount').value = '';
});

document.getElementById('addWithdraw').addEventListener('click', () => {
  const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
  updateSpanText('currentWithdraw', withdrawAmount);
  updateSpanText('currentBalance', -1 * withdrawAmount);

  document.getElementById('withdrawAmount').value = '';
});

function updateSpanText(id, depositAmount) {
  const current = parseFloat(document.getElementById(id).innerText);
  const total = current + depositAmount;
  document.getElementById(id).innerText = total;
}