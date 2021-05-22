import Chart from '../Chart/Chart';

function ExpensesChart(props) {
  const sumsByMonth = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const item of props.items) {
    // 0 based index
    const month = item.date.getMonth();
    sumsByMonth[month].value += item.amount;
  }

  const valuesArray = sumsByMonth.map(sum => sum.value);
  const maxValue = Math.max(...valuesArray);

  return <Chart sumsByMonth={sumsByMonth} maxValue={maxValue} />;
}

export default ExpensesChart;