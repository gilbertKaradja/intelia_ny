import React, { Component } from 'react';

class PeriodRange extends Component {

    render() {
        return (
            <div className="PeriodRange">
                {this.props.options.map(item => {
                    return (
                        <div 
                            key={item.value}
                            className={this.props.value.value === item.value ? 'item active': 'item'}
                            onClick={() => { this.props.onChange(item) }}
                        >
                            {item.label}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PeriodRange;