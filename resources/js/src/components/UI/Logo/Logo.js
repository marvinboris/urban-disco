import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Logo.css';

class Logo extends Component {
    render() {
        const {
            content: {
                cms: {
                    global: { logo }
                }
            },
            big, dark
        } = this.props;

        return <div className="Logo mb-0 text-white" >
            <img src={!dark ? logo.light : logo.dark} style={big ? { height: 120 } : { height: 80 }} />
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Logo);