import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';

import { getPostCategories, deletePostCategories, resetPostCategories } from '../../../../store/actions/backend/post-categories';
import { updateObject, convertDate } from '../../../../shared/utility';

const icon = "th-list";

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
                    pages: { components: { list: { action } }, backend: { pages: { post_categories: { title, add, index, form } } } }
                }
            },
            backend: { post_categories: { loading, error, message, post_categories, total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'post-categories');
        const redirect = !feature && <Redirect to="/user/dashboard" />;

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;
        const lang = localStorage.getItem('lang');

        if (!post_categories) post_categories = [];
        const data = post_categories.map(post_category => {
            return updateObject(post_category, {
                created_at: convertDate(post_category.created_at),
                name: post_category.name[lang],
                action: <div className="text-center">
                    <Link to={`/user/post-categories/${post_category.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    {JSON.parse(feature.permissions).includes('u') && <Link to={`/user/post-categories/${post_category.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>}
                    {JSON.parse(feature.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(post_category.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>}
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(post_categories)} get={this.props.get} total={total} bordered add={add} link="/user/post-categories/add" icon={icon} title={index} className="shadow-sm"
                        fields={[
                            { name: form.name, key: 'name' },
                            { name: form.slug, key: 'slug' },
                            { name: form.is_active, key: 'is_active' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={index} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{index}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
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
    get: (page, show, search) => dispatch(getPostCategories(page, show, search)),
    delete: id => dispatch(deletePostCategories(id)),
    reset: () => dispatch(resetPostCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));