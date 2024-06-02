document.addEventListener('DOMContentLoaded', function() {
    loadExpenses();
});

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;

    if (description && amount) {
        const expense = {
            id: new Date().getTime(),
            description,
            amount
        };

        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        clearForm();
        loadExpenses();
    } else {
        alert('Please enter both description and amount.');
    }
}

function deleteExpense(id) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    loadExpenses();
}

function clearForm() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function loadExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = () => deleteExpense(expense.id);

        expenseItem.innerHTML = `<span>${expense.description}</span><span>${expense.amount}</span>`;
        expenseItem.appendChild(deleteBtn);

        expenseList.appendChild(expenseItem);
    });
}