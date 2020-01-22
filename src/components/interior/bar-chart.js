import React from 'react';

const BarChart = ({title, subTitle, data, yTextWidth}) => {
  return (
    <div className="chart chart--bar">
      <dl>
        <dt>
          {title}
          {subTitle ? <span>{subTitle}</span> : null}
        </dt>
        {
          data.map((datum) => {
            return (
              <dd
                key={datum.label}
                class={`percentage percentage-${Math.round(datum.percent)}`}
                style={{paddingLeft: yTextWidth}}>
                <span class="text" style={{width: yTextWidth}}>
                  {datum.label}
                </span>
                <div className="bar" style={{backgroundColor: datum.color}}>
                  <span>{datum.number ? `${datum.number} (${datum.percent}%)` : `${datum.percent}%`}</span>
                </div>
              </dd>
            );
          })
        }
      </dl>
    </div>
  )
}

export default BarChart;