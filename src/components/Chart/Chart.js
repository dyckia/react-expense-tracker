import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
  return (
    <div className='chart'>
      {props.sumsByMonth.map(sum => 
        <ChartBar key={sum.label} sumOfMonth={sum} maxValue={props.maxValue}/>
      )}
    </div>
  );
}

export default Chart;