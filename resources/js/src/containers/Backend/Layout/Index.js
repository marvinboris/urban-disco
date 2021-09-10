import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import Settings from './Settings';
import Notifications from './Notifications';
import Languages from './Languages';

import SideDrawer from '../../../components/Backend/Navigation/SideDrawer/SideDrawer';
import CustomSpinner from '../../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout } from '../../../store/actions/auth';
import { setLanguage } from '../../../store/actions/content';

import './Layout.css';

class Layout extends Component {
    state = {
        selectedItem: '',

        language: null,
    }

    componentDidMount() {
        this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.content.cms) !== JSON.stringify(this.props.content.cms)) this.setState({ language: this.props.content.languages.find(l => l.abbr === localStorage.getItem('lang')) });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    logoutHandler = () => {
        const { logout } = this.props;
        logout();
    }

    toggle = () => {
        const left = $('.App.SideDrawer').css('left');
        if (left === "0px") {
            $('.App.SideDrawer').animate({ left: '-100%' });
            $('.App.SideDrawer .backdrop').hide();
        }
        else {
            $('.App.SideDrawer').animate({ left: 0 });
            $('.App.SideDrawer .backdrop').show();
        }
    }

    setLanguage = id => {
        this.props.set(id);
    }

    selectItem = item => this.setState({ selectedItem: item });

    render() {
        const { selectedItem, language } = this.state;
        const {
            auth: { loading, data, role },
            content: { cms, languages },
            children,
            dark = false
        } = this.props;
        let footerContent;

        const {
            global: { app_name, company_logo },
            pages: { backend: { header, footer: { copyright, all_rights } } }
        } = cms;

        footerContent = <>
            {copyright} {new Date().getFullYear()} <span className={`text-700 text-${dark ? "black" : "border"}`}>{app_name}</span>. {all_rights} <img src={company_logo} style={{ height: 47 }} />.
        </>;

        const isAuthenticated = role !== undefined;

        return <div className="Backend Layout text-left text-secondary">
            {isAuthenticated && <SideDrawer data={data} toggle={this.toggle} selectItem={this.selectItem} logoutHandler={this.logoutHandler} selectedItem={selectedItem} cms={cms} />}

            <main className={`bg-${dark ? 'black' : 'white'} position-relative min-vh-100 pb-4 pb-sm-5`}>
                <div className="toolbar-height row m-0 align-items-stretch border-bottom border-light sticky-top bg-white">
                    <div className="col-8 px-3 px-md-4 px-xxl-5 d-flex align-items-center">
                        <div className="text-black text-30">
                            <i onClick={this.toggle} className="fad fa-th-large text-border cursor-pointer" />
                        </div>

                        <div className="ml-auto mr-3 mr-md-4 mr-xxl-5 pr-1 pr-md-2 pr-xxl-3">
                            <div className="position-relative">
                                <Input type="search" placeholder="Search" className="rounded-pill border-0 text-12 text-md-15 text-xxl-18 text-secondary bg-soft py-1 py-md-2 px-2 px-md-3 px-xxl-4" />

                                <button className="fas fa-search text-border text-15 text-md-19 text-xxl-23 border-0 bg-transparent p-0 mr-2 mr-md-3 mr-xxl-4 position-absolute" style={{ top: '50%', right: 0, transform: 'translateY(-50%)' }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-4 border-left border-light d-flex align-items-center pl-3 pl-md-4 pl-xxl-5 pr-2 pr-md-3 pr-xxl-4">
                        <div className="mr-3 text-16 text-md-20 text-xxl-24 text-black">
                            <Notifications cms={{ header }} notifications={data.notifications} role={role} />
                        </div>

                        <div className="ml-auto">
                            <Settings cms={{ header }} logoutHandler={this.logoutHandler} />
                        </div>
                    </div>
                </div>

                <div className="main mb-4 mb-sm-5 pb-4 pb-sm-5">
                    {loading ? <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div> : children}
                </div>

                <footer className={`position-absolute d-none d-sm-block w-100 py-3 px-4 bg-${dark ? "border" : "border-15"} text-secondary`} style={{ bottom: 0 }}>
                    {footerContent}
                </footer>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(authLogout()),
    set: id => dispatch(setLanguage(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));