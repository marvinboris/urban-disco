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
import View from '../../../../components/Backend/UI/View/View';

import { getProducts, deleteProducts, resetProducts } from '../../../../store/actions/backend/products';
import { updateObject, convertDate, htmlEntities } from '../../../../shared/utility';

const icon = "blog";

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
                    pages: { components: { list: { action, see } }, backend: { pages: { products: { title, add, index, form } } } }
                }
            },
            backend: { products: { loading, error, message, products, total } },
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'products');
        const redirect = !feature && <Redirect to="/user/dashboard" />;
        const lang = localStorage.getItem('lang');

        const errors = <>
            <Error err={error} />
        </>;
        const flash = this.props.location.state ? <Feedback time={5000} message={this.props.location.state.message} /> : null;
        const feedback = <Feedback message={message} />;

        if (!products) products = [];
        const data = products.map(product => {
            return updateObject(product, {
                created_at: convertDate(product.created_at),
                name: product.name[lang],
                description: htmlEntities(product.description[lang]),
                photo: product.photo && <div className="d-flex">
                    <span>{see}</span>

                    <span className="ml-auto">
                        <View title={`${form.post_photo}: ${product.name[lang]}`} content={<img src={product.photo} className="w-100" />}>
                            <FontAwesomeIcon icon={faEye} className="text-green mr-2" fixedWidth />
                        </View>
                    </span>
                </div>,
                action: <div className="text-center">
                    <Link to={`/user/products/${product.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    {JSON.parse(feature.permissions).includes('u') && <Link to={`/user/products/${product.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>}
                    {JSON.parse(feature.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(product.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>}
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(products)} get={this.props.get} total={total} bordered add={add} link="/user/products/add" icon={icon} title={index} className="shadow-sm"
                        fields={[
                            { name: form.name, key: 'name' },
                            { name: form.brand, key: 'brand' },
                            { name: form.price, key: 'price' },
                            { name: form.description, key: 'description' },
                            { name: form.photo, key: 'photo' },
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
    get: (page, show, search) => dispatch(getProducts(page, show, search)),
    delete: id => dispatch(deleteProducts(id)),
    reset: () => dispatch(resetProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));