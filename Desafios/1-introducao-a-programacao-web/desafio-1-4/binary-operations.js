const user = {
  name: 'Vitor',
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction);
  
  if (transaction.type === 'credit') {
    user.balance += transaction.value;
  } else {
    user.balance -= transaction.value;
  }
}

function getHigherTransactionByType(transactionType) {
  let higherTransaction = {
    type: transactionType,
    value: 0
  };

  for (let transaction of user.transactions)  {
    if (transaction.type === transactionType && transaction.value > higherTransaction.value) {
      higherTransaction.value = transaction.value;
    }
  }

  if (higherTransaction.value === 0) {
    console.log(`There are no ${transactionType} transactions.`);
    return;
  }

  return higherTransaction;
}

function getAverageTransactionValue() {
  let sumOfTransactions = 0;
  let numberOfTransactions = 0;

  for (let transaction of user.transactions) {
    sumOfTransactions += transaction.value;
    numberOfTransactions++;
  }

  const averageTransactionValue = (sumOfTransactions / numberOfTransactions).toFixed(2);

  return Number(averageTransactionValue);
}

function getTransactionsCount() {
  const totalTransactionsByType = {
    credit: 0,
    debit: 0
  };

  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') {
      totalTransactionsByType.credit++;
    } else {
      totalTransactionsByType.debit++;
    }
  }

  return totalTransactionsByType;
}

createTransaction({ type: 'credit', value: 50 });
createTransaction({ type: 'credit', value: 120 });
createTransaction({ type: 'debit', value: 80 });
createTransaction({ type: 'debit', value: 30 });
createTransaction({ type: 'debit', value: 22 });
createTransaction({ type: 'debit', value: 94 });
createTransaction({ type: 'credit', value: 100 });

console.log(user.balance);

console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());