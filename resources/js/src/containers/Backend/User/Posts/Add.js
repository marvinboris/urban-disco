import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, FormGroup, Input, Row } from 'reactstrap';
import { faCheckCircle, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import Editor from '../../../../components/Backend/UI/Editor';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import Save from '../../../../components/Backend/UI/Food/Form/Save';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Feedback from '../../../../components/Feedback/Feedback';

import { getPost, getPostsInfo, postPosts, patchPosts, resetPosts } from '../../../../store/actions/backend/posts';

const icon = "blog";
const initialState = {
    title: {},
    body: {},
    photo: null,
    post_category_id: '',
    is_active: '1',

    translate: '',

    add: false,
}

class Add extends Component {
    state = { ...initialState }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (this.props.edit) this.props.patch(this.props.match.params.id, e.target);
        else this.props.post(e.target);
    }

    saveAddHandler = () => this.setState({ add: true }, () => this.props.post(document.querySelector('form')))

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (files) this.readURL(e.target);
        if (name.includes('[')) {
            const { translate } = this.state;
            const stateName = name.split('[')[0];
            const element = this.state[stateName];
            element[translate] = value;
            return this.setState({ [stateName]: element });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    readURL = input => {
        if (input.files && input.files[0]) {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById(`embed-${input.name}`).style.backgroundImage = `url('${e.target.result}')`;
                document.getElementById(`embed-${input.name}`).style.backgroundSize = "cover";
                document.getElementById(`embed-${input.name}`).querySelector(".file-selected").innerHTML = file.name;
            }

            reader.readAsDataURL(file); // convert to base64 string
        }
    }

    fileUpload = () => document.getElementById('photo').click()



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
        else this.props.info();
        this.setState({ translate: process.env.MIX_DEFAULT_LANG });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.posts.message && this.props.backend.posts.message && this.props.backend.posts.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState, translate: process.env.MIX_DEFAULT_LANG });
            else this.props.history.push({
                pathname: '/user/posts',
                state: {
                    message: this.props.backend.posts.message,
                },
            });
        }
        if ((!prevProps.backend.posts.post && this.props.backend.posts.post) || (this.props.edit && !prevProps.backend.posts.message && this.props.backend.posts.message && this.props.backend.posts.message.type === 'success')) {
            const { backend: { posts: { post } } } = this.props;
            this.setState({ ...post });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { active, inactive } }, backend: { pages: { posts: { title, add, edit, index, form } } } }
                }, languages
            },
            backend: { posts: { loading, error, message, post, post_categories } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { title: post_title, photo, post_category_id, is_active, body, translate } = this.state;
        let content;
        let errors = null;
        const lang = localStorage.getItem('lang');

        const feature = features.find(f => f.prefix === 'posts');
        const redirect = !(feature && JSON.parse(feature.permissions).includes(this.props.edit ? 'u' : 'c')) && <Redirect to="/user/dashboard" />;

        const languagesOptions = languages.sort((a, b) => a.name > b.name).map(language => <option key={JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        if (!post_categories) post_categories = [];
        const postCategoriesOptions = post_categories.sort((a, b) => a.name[lang].localeCompare(b.name[lang])).map(post_category => <option key={JSON.stringify(post_category)} value={post_category.id}>{post_category.name[lang]}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Col xl={9}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="col-lg-9">
                                    <div className="row">
                                        {languages.map(l => <Fragment key={'language-' + l.abbr}>
                                            <FormInput type="text" id={"title-" + l.abbr} className={"col-md-12" + (l.abbr === translate ? "" : " d-none")} icon={icon} onChange={this.inputChangeHandler} value={post_title[l.abbr]} name={"title[" + l.abbr + "]"} required placeholder={form.title} />
                                            <FormGroup id={"body-" + l.abbr} className={"col-md-12" + (l.abbr === translate ? "" : " d-none")}>
                                                {this.props.edit && post && post.body[l.abbr] === body[l.abbr] && <Editor defaultValue={post.body[l.abbr]} name={"body[" + l.abbr + "]"} placeholder={form.body} />}
                                                {!this.props.edit && <Editor name={"body[" + l.abbr + "]"} placeholder={form.body} />}
                                            </FormGroup>
                                        </Fragment>)}
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <FormGroup>
                                        <Input type="select" name="translate" onChange={this.inputChangeHandler} value={translate}>
                                            {languagesOptions}
                                        </Input>
                                    </FormGroup>
                                </div>

                                <div className="col-12 mb-3">
                                    <hr />
                                </div>

                                <div className="col-lg-9">
                                    <FormGroup>
                                        <div id="embed-photo" className="embed-responsive embed-responsive-21by9 bg-soft rounded-8 d-flex justify-content-center align-items-center position-relative" style={{
                                            cursor: 'pointer',
                                            backgroundImage: photo && `url("${photo}")`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            overflow: 'visible',
                                        }} onClick={this.fileUpload}>
                                            {this.props.edit
                                                ? photo && (photo !== post.photo) && <div className="text-center text-green w-100">
                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                </div>
                                                : photo ? <div className="text-center text-green w-100">
                                                    <div className="position-absolute" style={{ top: 0, right: 0, transform: 'translate(50%,-50%)' }}><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="2x" /></div>

                                                    <div className="position-absolute file-selected text-truncate w-100 pt-3" style={{ top: '100%', left: 0 }} />
                                                </div> : <div className="text-center text-light w-100 overflow-hidden px-3">
                                                    <div><FontAwesomeIcon icon={faFileImage} fixedWidth size="4x" /></div>

                                                    <div className="mt-3 mb-1 text-center text-12 text-truncate">{form.upload}</div>

                                                    <div className="text-center text-12 text-truncate">{form.size}</div>
                                                </div>}
                                        </div>
                                    </FormGroup>
                                </div>

                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput className="col-md-6" type="select" name="post_category_id" placeholder={form.post_category} onChange={this.inputChangeHandler} icon="th-list" required value={post_category_id}>
                                            <option>{form.select_post_category}</option>
                                            {postCategoriesOptions}
                                        </FormInput>
                                        <FormInput type="select" className="col-md-6" icon="pencil-alt" onChange={this.inputChangeHandler} value={is_active} name="is_active" required>
                                            <option>{form.select_status}</option>
                                            <option value={1}>{active}</option>
                                            <option value={0}>{inactive}</option>
                                        </FormInput>
                                    </Row>
                                </div>


                                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={this.props.edit && [{ to: '/user/posts', content: index }]} main={this.props.edit ? edit : add} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={icon} title={this.props.edit ? edit : add} list={index} link="/user/posts" innerClassName="row justify-content-center">
                            <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />
                            {content}
                        </Form>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(getPost(id)),
    info: () => dispatch(getPostsInfo()),
    post: data => dispatch(postPosts(data)),
    patch: (id, data) => dispatch(patchPosts(id, data)),
    reset: () => dispatch(resetPosts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));