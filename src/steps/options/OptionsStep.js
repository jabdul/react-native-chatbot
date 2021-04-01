import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import OptionElement from './OptionElement';
import OptionText from './OptionText';
import Options from './Options';

class OptionsStep extends Component {
  /* istanbul ignore next */
  constructor(props) {
    super(props);
    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onOptionClick({ value }) {
    this.props.triggerNextStep({ value });
  }

  render() {
    const { optionStyle, optionElementStyle, step } = this.props;
    const { optionBubbleColor, optionFontColor, bubbleColor, fontColor, options } = step;

    return (
      <Options>
        {options.map((item) => (
          <Option
            key={item.value}
            style={optionStyle}
            onPress={() => this.onOptionClick({ value: item.value })}>
            <OptionElement
              style={optionElementStyle}
              bubbleColor={optionBubbleColor || bubbleColor}>
              <OptionText fontColor={optionFontColor || fontColor}>{item.label}</OptionText>
            </OptionElement>
          </Option>
        ))}
      </Options>
    );
  }
}

OptionsStep.propTypes = {
  step: PropTypes.object.isRequired,
  triggerNextStep: PropTypes.func.isRequired,
  optionStyle: PropTypes.object.isRequired,
  optionElementStyle: PropTypes.object.isRequired,
};

export default OptionsStep;
