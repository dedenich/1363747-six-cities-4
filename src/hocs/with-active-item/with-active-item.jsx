import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  return class WithActiveItem extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        activeItem: ``,
      };
      this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    handleActiveChange(evt) {
      this.setState({
        activeItem: evt.target.textContent,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleActiveChange={this.handleActiveChange}
          activeItem={this.state.activeItem}
        />
      );
    }
  };
};

export default withActiveItem;
