import { Component } from 'react';
import css from './DropDown.module.css';

class DropDown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className={css.dropDown}>
        <button type="button" className={css.button} onClick={this.toggle}>
          {this.state.visible ? 'Close' : 'Open'}
        </button>

        {this.state.visible && <div className={css.dropDown_menu}>Hello</div>}
      </div>
    );
  }
}

export default DropDown;
