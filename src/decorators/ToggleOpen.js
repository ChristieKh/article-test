import React, {Component} from 'react';

export default (OriginalComponent) =>
    class ToggleOpen extends Component {
        state = {
            isOpen: false
        };

        toggleOpen = () =>
            this.setState((state) => ({
                    isOpen: !state.isOpen
                })
            );

        render() {
            return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen}/>
        }
    }