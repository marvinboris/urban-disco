import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import View from '../../../../components/Backend/UI/View/View';

import { getUsers, deleteUsers, resetUsers } from '../../../../store/actions/backend/users';
import { updateObject, convertDate, } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action, see } }, backend: { pages: { users: { title, add, index, form } } } }
                }
            },
            backend: { users: { loading, error, message, users, total } },
        } = this.props;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (!users) users = [];
        const data = users.map(user => {
            return updateObject(user, {
                created_at: convertDate(user.created_at),
                photo: user.photo && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <View title={`${form.user_photo}: ${user.name}`} content={<img src={user.photo} className="w-100" />}>
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                        </View>
                    </span>
                </div>,
                action: <div className="text-center">
                    <Link to={`/user/users/${user.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/user/users/${user.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <span className="mx-1"><Delete deleteAction={() => this.props.delete(user.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(users)} get={this.props.get} total={total} bordered add={add} link="/user/users/add" icon={faUser} title={index} className="shadow-sm"
                        fields={[
                            { name: form.full_name, key: 'name' },
                            { name: form.email, key: 'email' },
                            { name: form.phone, key: 'phone' },
                            { name: form.role, key: 'role' },
                            { name: form.photo, key: 'photo' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={faUser} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    {flash}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(getUsers(page, show, search)),
    delete: id => dispatch(deleteUsers(id)),
    reset: () => dispatch(resetUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));