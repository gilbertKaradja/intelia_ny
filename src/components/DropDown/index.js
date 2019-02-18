import React, { Component } from 'react';
import PropTypes from 'prop-types';

import icon from './caret-down.svg';

class DropDown extends Component {
    constructor() {
        super();

        this.state = {
            showList: false
        }

        this.openHandler = this.openHandler.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.closeHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closeHandler);
    }

    render() {
        return (
            <div className="DropDown">
                
                {this.state.showList && (
                    <div className="overlay"></div>
                )}
                
                <div className="value_container" onClick={this.openHandler}>

                    <div className="text">
                        {this.props.value.label}
                    </div>

                    <div className="icon">
                        <img src={icon} />
                    </div>

                </div>

                {this.state.showList && (
                    <div className="dropdown_list">
                        <ul>
                            {this.props.options.map(item => {
                                return <li key={item.value} onClick={() => { this.itemSelectHandler(item) }}>{item.label}</li>;
                            })}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

    openHandler(evt) {
        // evt.stopPropagation();
        evt.nativeEvent.stopImmediatePropagation();

        let { showList } = this.state;
        if (showList) {
            return;
        }

        this.setState({ showList: true });
    }

    itemSelectHandler(value) {
        this.props.onChange(value);

        this.setState({ showList: false });
    }

    closeHandler(evt) {
        this.setState({ showList: false });
    }


}

DropDown.propTypes = {
    value: PropTypes.object,
    options: PropTypes.array,
    onChange: PropTypes.func
}

export default DropDown;


