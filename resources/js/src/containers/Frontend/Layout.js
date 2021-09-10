import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        const { children, auth: { token, profile } } = this.props;
        const { sideDrawerToggleHandler, logoutHandler } = this;
        const { name, role, notifications } = profile ? profile : { name: null, role: null, photo: null, notifications: null };

        return <div className="Frontend">
            <Toolbar isAuth={token !== null} name={name} notifications={notifications} role={role} logoutHandler={logoutHandler} drawerToggleClicked={sideDrawerToggleHandler} />

            <main className="Content w-100 min-vh-100">
                {children}
            </main>

            <Footer />
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Layout));