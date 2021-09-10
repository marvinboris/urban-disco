import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row, Container } from 'reactstrap';

import Feedback from '../../../../components/Feedback/Feedback';
import Error from '../../../../components/Error/Error';
import Spinner from '../../../../components/UI/Spinner';
import Banner from '../../../../components/UI/Banner/Banner';
import PresentationalContainer from '../../../../components/UI/PresentationalContainer/PresentationalContainer';

import { getProduct } from '../../../../store/actions/frontend/products';

class Product extends Component {
    componentDidMount() {
        this.props.get(this.props.match.params.slug)
    }

    render() {
        const {
            frontend: { products: { loading, message, error, product } }
        } = this.props;
        let content;
        const lang = localStorage.getItem('lang');

        const feedback = <Feedback message={message} />;
        const errors = <>
            <Error err={error} />
        </>;

        if (loading) content = <>
            <Banner items={[{ to: '/products', content: 'Products' }]} title="Loading..." />

            <Spinner />
        </>;
        else if (product) {
            const { name, photo, price, description } = product;
            content =
                <>
                    <Banner items={[{ to: '/products', content: 'Products' }]} title={name[lang]} />

                    <PresentationalContainer>
                        <div className="py-5">
                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <div className="embed-responsive embed-responsive-16by9 w-100" style={{ background: 'url("' + photo + '") no-repeat center', backgroundSize: 'contain' }} />
                                    </Col>

                                    <Col md={6}>
                                        <h1 className="bg-dark-gradient bg-text texet-700">{name[lang]}</h1>

                                        <hr />

                                        <h4>{price || 0} FCFA</h4>

                                        <hr />

                                        <Button color="dark">Add to cart</Button>
                                    </Col>

                                    <Col xs={12}>
                                        <h5 className="mb-4">Description</h5>

                                        <div className="text-300" dangerouslySetInnerHTML={{ __html: description[lang] }} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </PresentationalContainer>
                </>;
        }

        return <Col xs={12} className="Products p-0">
            {feedback}
            {errors}
            {content}
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: slug => dispatch(getProduct(slug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);