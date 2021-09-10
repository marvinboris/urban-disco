import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Save extends Component {
    render() {
        const {
            content: { cms: { pages: { components: { form: { save, save_add } } } } },
            saveAddHandler, edit
        } = this.props;

        return <div className="col-12">
            <Button color="green" className="rounded-4 py-2 py-sm-3 px-3 px-sm-4">
                <div className="mx-2 mx-sm-3 text-20 d-none d-sm-block">{save}<FontAwesomeIcon icon={faSave} className="ml-3 ml-sm-4" /></div>

                <div className="mx-2 mx-sm-3 text-14 d-sm-none">{save}<FontAwesomeIcon icon={faSave} className="ml-3 ml-sm-4" /></div>
            </Button>

            {!edit && <Button color="border" onClick={saveAddHandler} className="rounded-4 py-2 py-sm-3 px-3 px-sm-4 ml-2 ml-sm-3">
                <div className="mx-2 mx-sm-3 text-20 d-none d-sm-block">{save_add}<FontAwesomeIcon icon={faSave} className="ml-3 ml-sm-4" /></div>

                <div className="mx-2 mx-sm-3 text-14 d-sm-none">{save_add}<FontAwesomeIcon icon={faSave} className="ml-3 ml-sm-4" /></div>
            </Button>}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Save);