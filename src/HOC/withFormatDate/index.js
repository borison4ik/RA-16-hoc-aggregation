import React from 'react';
import moment from 'moment';

export const withFormatDate = (param, fn) => (WrappedComponent) => {
  return class extends React.Component {
    /*eslint no-useless-constructor: "off"*/
    constructor(props) {
      super(props);
    }

    render() {
      let sortedProps = [...this.props.list];

      if (param === 'date') {
        sortedProps = [...this.props.list].sort((a, b) => moment(a.date) - moment(b.date));
      }

      const list = sortedProps.map((prop) => ({ ...prop, [param]: fn(prop.date) }));

      return <WrappedComponent {...this.props} list={list} />;
    }
  };
};
