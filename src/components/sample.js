// @flow
import React from 'react';

type Props = {
};

class Sample extends React.Component<Props> {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log(this.concat("hello", "world"));
    console.log(this.concat(1, 2));
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

// export default class Sample extends Component {
//     activateLasers = () => {
//         alert(this.concat('activate', 'laser'));
//         // alert(this.concat(1, 2));
//     }

//     concat = (a: string, b: string) => {
//         return `${a} ${b}`;
//     }

//     render () {
//         return (
//             <button onclick={this.activateLasers}>
//                 Activate Lasers
//             </button>
//         )
//     }
// }
