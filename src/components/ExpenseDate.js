const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear()

    return(
        <div className='expense-item__date'>
            <div>{month}</div>
            <div>{day}</div>
            <div className='expense-item__year'>{year}</div>
        </div>
    )
}

export default ExpenseDate 