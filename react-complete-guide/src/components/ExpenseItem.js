import './ExpenseItem.css'

export function ExpenseItem(props) {
  const day = props.date.toLocaleString('pt-BR', { day: '2-digit' })
  const month = props.date.toLocaleString('pt-BR', { month: 'long' })
  const year = props.date.getFullYear()


  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>

      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          R${props.amount}

        </div>
      </div>
    </div>
  );
}
