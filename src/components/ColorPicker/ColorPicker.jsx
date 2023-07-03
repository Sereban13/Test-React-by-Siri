import { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassname = index => {
    const optionClasses = ['colorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('colorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    const { label } = options[activeOptionIdx];
    // console.log(activeOption);
    return (
      <div className="colorPicker">
        <h2 className="colorPicker_title">Color Picker</h2>
        <p>Color: {label} </p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            // const optionClassName = this.makeOptionClassname(index);

            return (
              <button
                key={label}
                className={this.makeOptionClassname(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;