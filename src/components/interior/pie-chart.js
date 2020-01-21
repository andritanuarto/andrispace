import React from 'react';

const PieChart = () => {
  return (
    <div className="chart chart--pie">
      <strong className="chart--pie--title">Chart title</strong>
      <div className="chart--pie__inner">
        <div className="chart--pie__l"><div class="pie"/></div>
        <div className="chart--pie__r">
          <ul class="key">
            <li>
              <strong class="percent red">4%</strong>
              <span class="choice">Jump right in, startupfille here I come.</span>
            </li>
            <li>
              <strong class="percent gray">4%</strong>
              <span class="choice">Email back to discuss, flattered and positive.</span>
            </li>
            <li>
              <strong class="percent purple">6%</strong>
              <span class="choice">Respond and say "Thanks but no thanks."</span>
            </li>
            <li>
              <strong class="percent blue">9%</strong>
              <span class="choice">Email back to discuss, all business.</span>
            </li>
            <li>
              <strong class="percent yellow">31%</strong>
              <span class="choice">Email back to discuss, but skeptically.</span>
            </li>
            <li>
              <strong class="percent orange">46%</strong>
              <span class="choice">Delete the email.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PieChart;