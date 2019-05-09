let keepBanking = true;
let balance = 0;
let income = 0;
let expense = 0;
let input;

while (keepBanking == true) {
  input = prompt("What would you like to do? (B/D/W/Q)");
  switch (input.toUpperCase()) {
    case 'B':
      printBalance();
      break;
    case 'D':
      deposit();
      break;
    case 'W':
      withdraw();
      break;
    case 'Q':
      quit();
    case undefined:
      break;
  }
}

function printBalance() {
  alert("Your Balance is $" + balance.toFixed(2));
}

function deposit() {
  income = prompt("How much are you depositing? ");
  balance += parseFloat(income);
}

function withdraw() {
  expense = prompt("How much are you withdrawing? ");
  balance -= parseFloat(expense);
}

function quit() {
  keepBanking = false;
}
