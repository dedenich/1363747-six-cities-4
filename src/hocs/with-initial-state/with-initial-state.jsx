import React, {PureComponent} from "react";

const withInitialState = (Component) => {
  return class WithInitialState extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        isOpened: false,
      };
      this.handleOpenClick = this.handleOpenClick.bind(this);
      this.handleSelectClick = this.handleSelectClick.bind(this);
    }

    handleOpenClick() {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
      }));
    }

    handleSelectClick() {
      this.setState({isOpened: false});
    }

    render() {
      const {isOpened} = this.state;

      return (
        <Component
          {...this.props}
          isOpened={isOpened}
          onOpenClick={this.handleOpenClick}
          onSelectClick={this.handleSelectClick}
        />
      );
    }
  };
};

export default withInitialState;
