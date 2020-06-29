function createTransaction(user, transaction) {
    user.transactions.push(transaction)
    updateCredit(user, transaction)
    
}

function updateCredit(user, transaction){
    if (transaction.type == 'credit'){
        user.balance += transaction.value;
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(user, transactionType) {

    let highestTransaction = {
        type: null,
        value: 0
    };

    for (let transaction of user.transactions) {
        if ((transaction.type == transactionType) && (transaction.value > highestTransaction.value)) {
            highestTransaction = transaction;
        }
    }

    return highestTransaction

}

function getAverageTransactionValue(user) {
    let averageTransaction = 0;
    for(let transaction of user.transactions) {
        averageTransaction += transaction.value;
    }

    averageTransaction /= user.transactions.length;

    return averageTransaction
}

function getTransactionsCount(user) {
    let transactionCount =  {
        credit: 0,
        debit: 0
    }

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            transactionCount.credit += 1;
        } else if (transaction.type == 'debit') {
            transactionCount.debit += 1;
        }
    }

    return transactionCount

} 

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};


const transaction = {
    type: 'credit',
    value: 50.5
};

createTransaction(user, { type: "credit", value: 50 });
createTransaction(user, { type: "credit", value: 120 });
createTransaction(user, { type: "debit", value: 80 });
createTransaction(user, { type: "debit", value: 30 });
console.log(user.balance);
console.log(getHigherTransactionByType(user,"credit"));
console.log(getHigherTransactionByType(user,"debit")); 
console.log(getAverageTransactionValue(user));
console.log(getTransactionsCount(user));

