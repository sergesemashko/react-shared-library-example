import React, {Component} from 'react';

export default class MyStyledComponent extends Component {
  render() {
    const styles = require('./MyStyledComponent.scss');

    return (
      <div className={styles.wrapper}>
        <div className={styles.content}></div>
      </div>
    );
  }
}
