// @flow
import React from 'react';

type Props = {
};

class Sample extends React.Component<Props> {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log(this.concat("hello", "world"));
  }

  concat = (a: string, b: string) :string => {
    return `${a} ${b}`;
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default Sample;
