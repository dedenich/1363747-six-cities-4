import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  return class WithActiveItem extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        activeItem: ``,
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
      this.setState({
        activeItem: evt.target.textContent,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleChange={this.handleChange}
          activeItem={this.state.activeItem}
        />
      );
    }

    componentWillUnmount() {
      this.setState({
        activeItem: null
      });
    }
  };
};

export default withActiveItem;
