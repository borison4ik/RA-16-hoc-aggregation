import React from 'react';
import moment from 'moment';

import { MonthTable } from './components/MonthTable';
import { YearTable } from './components/YearTable';
import { SortTable } from './components/SortTable';

import { withFormatDate } from './HOC/withFormatDate';

const MonthTableWithMonth = withFormatDate('month', (date) => moment(date).format('MMM'))(MonthTable);
const MonthTableWithYear = withFormatDate('year', (date) => moment(date).format('YYYY'))(YearTable);
const MonthTableWithDate = withFormatDate('date', (date) => moment(date).format('YYYY-MM-DD'))(SortTable);

export default class App extends React.Component {
  state = {
    list: [],
  };

  async componentDidMount() {
    const response = await fetch(process.env.REACT_APP_API_JSON);
    const data = await response.json();
    this.setState({ list: data.list });
  }

  render() {
    const { list } = this.state;
    return (
      <div id='app'>
        <MonthTableWithMonth list={list} />
        <MonthTableWithYear list={list} />
        <MonthTableWithDate list={list} />
      </div>
    );
  }
}
