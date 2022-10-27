import './ExpenseItem.css'

export function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28).toDateString()
  const expenseTitle = 'Car Insurance'
  const expenseAmount = 3800

  return (
    <div className="expense-item">
      <div>
        {expenseDate}
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">
          R$ {expenseAmount}
        </div>
      </div>
    </div>
  );
}
