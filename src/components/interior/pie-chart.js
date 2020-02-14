import React from 'react';

const PieChart = ({title, data}) => {
  let pieGradient = '';

  data.forEach((datum) => {
    pieGradient += `${datum.color} 0 ${datum.percent}%, `
  });

  return (
    <div className="chart chart--pie">
      <strong className="chart--pie--title">{title}</strong>
      <div className="chart--pie__inner">
        <div className="chart--pie__l">
          <div
            class="pie"
            style={{background: `conic-gradient(${pieGradient})`}}
          />
        </div>
        <div className="chart--pie__r">
          <ul class="key">
            {
              data.map((datum) => {
                return (
                  <li key={datum.label}>
                    <span className="key--color" style={{backgroundColor: datum.color}}/>
                    {datum.label}<span> - {`${datum.number} (${datum.percent}%)`}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PieChart;