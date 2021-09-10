import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row, Input, Button, Form, CustomInput, FormGroup } from 'reactstrap';

import Feedback from '../../../components/Feedback/Feedback';
import Error from '../../../components/Error/Error';
import Spinner from '../../../components/UI/Spinner';
import Banner from '../../../components/UI/Banner/Banner';
import ArticleCard from '../../../components/UI/ArticleCard/ArticleCard';
import PresentationalContainer from '../../../components/UI/PresentationalContainer/PresentationalContainer';

import { updateObject } from '../../../shared/utility';
import { getProducts } from '../../../store/actions/frontend/products';

class Products extends Component {
    componentDidMount() {
        this.props.get();
    }

    render() {
        const {
            frontend: { products: { loading, message, error, products = [], brands = [] } }
        } = this.props;
        let content;
        const lang = localStorage.getItem('lang');

        const feedback = <Feedback message={message} />;
        const errors = <>
            <Error err={error} />
        </>;

        const articleCards = products.map(product => <ArticleCard key={JSON.stringify(product)} {...updateObject(product, { name: product.name[lang], description: product.description[lang] })} />);

        if (loading) content = <Spinner />;
        else content = <Row>
            <Col lg={9}>
                <Form inline className="mb-5">
                    <Input type="search" className="mb-2 mr-sm-2" id="search" />
                    <Button type="submit" className="mb-2 mr-sm-2" color="dark">Go</Button>
                    <Button type="reset" className="mb-2 mr-sm-2" color="light">Reset</Button>
                    <Input type="select" className="mb-2" name="sort" id="sort">
                        <option>Sort Product by</option>
                    </Input>
                </Form>

                <Row>
                    {articleCards}
                </Row>
            </Col>

            <Col>
                <div className="mb-4">
                    <h3>Filter by Price</h3>
                    <CustomInput id="range" type="range" min={0} max={1000} />
                </div>

                <div className="mb-4">
                    <h3>Filter by Brands</h3>
                    <FormGroup>
                        {brands.map(brand => <CustomInput key={JSON.stringify(brand)} type="switch" id={brand.id} name="brands[]" label={brand.name} />)}
                    </FormGroup>
                </div>
            </Col>
        </Row>;

        return <Col xs={12} className="Products p-0">
            <Banner title="Products" />

            <PresentationalContainer>
                <div className="py-5">
                    <Container>
                        {feedback}
                        {errors}
                        {content}
                    </Container>
                </div>
            </PresentationalContainer>
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);