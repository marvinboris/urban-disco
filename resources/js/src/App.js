import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { init } from 'aos';

import asyncComponent from './hoc/asyncComponent/asyncComponent';

import AuthUser from './containers/Auth/User/Layout';
import AuthAdmin from './containers/Auth/Admin/Layout';
import Frontend from './containers/Frontend/Layout';
import Backend from './containers/Backend/Layout';

import Spinner from './components/UI/Spinner';

import { authCheckState } from './store/actions/auth';
import { getContent } from './store/actions/content';

import 'aos/dist/aos.css';

// User routes
const asyncUserCmsGlobal = asyncComponent(() => import('./containers/Backend/User/Cms/Global'));
const asyncUserCmsGeneral = asyncComponent(() => import('./containers/Backend/User/Cms/General'));
const asyncUserCmsMessages = asyncComponent(() => import('./containers/Backend/User/Cms/Messages'));
const asyncUserCmsComponents = asyncComponent(() => import('./containers/Backend/User/Cms/Components'));
const asyncUserCmsAuth = asyncComponent(() => import('./containers/Backend/User/Cms/Auth'));
const asyncUserCmsBackend = asyncComponent(() => import('./containers/Backend/User/Cms/Backend'));
const asyncUserCmsFrontend = asyncComponent(() => import('./containers/Backend/User/Cms/Frontend'));


const asyncUserDashboard = asyncComponent(() => import('./containers/Backend/User/Dashboard/Dashboard'));


const asyncUserFeatures = asyncComponent(() => import('./containers/Backend/User/Features'));
const asyncUserFeaturesAdd = asyncComponent(() => import('./containers/Backend/User/Features/Add'));
const asyncUserFeaturesEdit = asyncComponent(() => import('./containers/Backend/User/Features/Edit'));


const asyncUserLanguages = asyncComponent(() => import('./containers/Backend/User/Languages'));
const asyncUserLanguagesAdd = asyncComponent(() => import('./containers/Backend/User/Languages/Add'));
const asyncUserLanguagesEdit = asyncComponent(() => import('./containers/Backend/User/Languages/Edit'));


const asyncUserRoles = asyncComponent(() => import('./containers/Backend/User/Roles'));
const asyncUserRolesAdd = asyncComponent(() => import('./containers/Backend/User/Roles/Add'));
const asyncUserRolesEdit = asyncComponent(() => import('./containers/Backend/User/Roles/Edit'));


const asyncUserSettingsLanguage = asyncComponent(() => import('./containers/Backend/User/Settings/Language'));


const asyncUserUsers = asyncComponent(() => import('./containers/Backend/User/Users'));
const asyncUserUsersAdd = asyncComponent(() => import('./containers/Backend/User/Users/Add'));
const asyncUserUsersEdit = asyncComponent(() => import('./containers/Backend/User/Users/Edit'));


const asyncUserPostCategories = asyncComponent(() => import('./containers/Backend/User/PostCategories'));
const asyncUserPostCategoriesAdd = asyncComponent(() => import('./containers/Backend/User/PostCategories/Add'));
const asyncUserPostCategoriesEdit = asyncComponent(() => import('./containers/Backend/User/PostCategories/Edit'));


const asyncUserPosts = asyncComponent(() => import('./containers/Backend/User/Posts'));
const asyncUserPostsAdd = asyncComponent(() => import('./containers/Backend/User/Posts/Add'));
const asyncUserPostsEdit = asyncComponent(() => import('./containers/Backend/User/Posts/Edit'));


const asyncUserBrands = asyncComponent(() => import('./containers/Backend/User/Brands'));
const asyncUserBrandsAdd = asyncComponent(() => import('./containers/Backend/User/Brands/Add'));
const asyncUserBrandsEdit = asyncComponent(() => import('./containers/Backend/User/Brands/Edit'));


const asyncUserProducts = asyncComponent(() => import('./containers/Backend/User/Products'));
const asyncUserProductsAdd = asyncComponent(() => import('./containers/Backend/User/Products/Add'));
const asyncUserProductsEdit = asyncComponent(() => import('./containers/Backend/User/Products/Edit'));


const asyncUserMethods = asyncComponent(() => import('./containers/Backend/User/Methods'));
const asyncUserMethodsAdd = asyncComponent(() => import('./containers/Backend/User/Methods/Add'));
const asyncUserMethodsEdit = asyncComponent(() => import('./containers/Backend/User/Methods/Edit'));

// Admin routes
const asyncAdminAdmins = asyncComponent(() => import('./containers/Backend/Admin/Admins'));
const asyncAdminAdminsAdd = asyncComponent(() => import('./containers/Backend/Admin/Admins/Add'));
const asyncAdminAdminsEdit = asyncComponent(() => import('./containers/Backend/Admin/Admins/Edit'));


const asyncAdminCmsGlobal = asyncComponent(() => import('./containers/Backend/Admin/Cms/Global'));
const asyncAdminCmsGeneral = asyncComponent(() => import('./containers/Backend/Admin/Cms/General'));
const asyncAdminCmsMessages = asyncComponent(() => import('./containers/Backend/Admin/Cms/Messages'));
const asyncAdminCmsComponents = asyncComponent(() => import('./containers/Backend/Admin/Cms/Components'));
const asyncAdminCmsAuth = asyncComponent(() => import('./containers/Backend/Admin/Cms/Auth'));
const asyncAdminCmsBackend = asyncComponent(() => import('./containers/Backend/Admin/Cms/Backend'));


const asyncAdminDashboard = asyncComponent(() => import('./containers/Backend/Admin/Dashboard/Dashboard'));


const asyncAdminFeatures = asyncComponent(() => import('./containers/Backend/Admin/Features'));
const asyncAdminFeaturesAdd = asyncComponent(() => import('./containers/Backend/Admin/Features/Add'));
const asyncAdminFeaturesEdit = asyncComponent(() => import('./containers/Backend/Admin/Features/Edit'));


const asyncAdminLanguages = asyncComponent(() => import('./containers/Backend/Admin/Languages'));
const asyncAdminLanguagesAdd = asyncComponent(() => import('./containers/Backend/Admin/Languages/Add'));
const asyncAdminLanguagesEdit = asyncComponent(() => import('./containers/Backend/Admin/Languages/Edit'));


const asyncAdminRoles = asyncComponent(() => import('./containers/Backend/Admin/Roles'));
const asyncAdminRolesAdd = asyncComponent(() => import('./containers/Backend/Admin/Roles/Add'));
const asyncAdminRolesEdit = asyncComponent(() => import('./containers/Backend/Admin/Roles/Edit'));


const asyncAdminSettingsLanguage = asyncComponent(() => import('./containers/Backend/Admin/Settings/Language'));


const asyncAdminUsers = asyncComponent(() => import('./containers/Backend/Admin/Users'));
const asyncAdminUsersAdd = asyncComponent(() => import('./containers/Backend/Admin/Users/Add'));
const asyncAdminUsersEdit = asyncComponent(() => import('./containers/Backend/Admin/Users/Edit'));


// Auth routes
const asyncUserLogin = asyncComponent(() => import('./containers/Auth/User/Login/Login'));


const asyncAdminLogin = asyncComponent(() => import('./containers/Auth/Admin/Login/Login'));
const asyncAdminVerify = asyncComponent(() => import('./containers/Auth/Admin/Verify/Verify'));


// Frontend routes
const asyncProductsShow = asyncComponent(() => import('./containers/Frontend/Products/Show'));
const asyncProducts = asyncComponent(() => import('./containers/Frontend/Products'));

const asyncPostsShow = asyncComponent(() => import('./containers/Frontend/Posts/Show'));
const asyncPosts = asyncComponent(() => import('./containers/Frontend/Posts'));

const asyncContact = asyncComponent(() => import('./containers/Frontend/Contact'));
const asyncAboutUs = asyncComponent(() => import('./containers/Frontend/AboutUs'));
const asyncHome = asyncComponent(() => import('./containers/Frontend/Home'));

class App extends Component {
    componentDidMount() {
        const { onTryAuthSignup, onGetContent } = this.props;
        onTryAuthSignup();
        onGetContent();
        init();
    }

    render() {
        const { content: { cms, currencies, countries }, auth: { role } } = this.props;
        const isAuthenticated = localStorage.getItem('token') !== null;

        let routes = (
            <Switch>
                <Route path="/auth/admin">
                    <AuthAdmin>
                        <Switch>
                            <Route path="/auth/admin/verify" component={asyncAdminVerify} />
                            <Route path="/auth/admin/login" component={asyncAdminLogin} />
                        </Switch>
                    </AuthAdmin>
                </Route>
                <Redirect path="/admin" to="/auth/admin/login" />

                <Route path="/auth/user">
                    <AuthUser>
                        <Switch>
                            <Route path="/auth/user/login" component={asyncUserLogin} />
                        </Switch>
                    </AuthUser>
                </Route>
                <Redirect path="/user" to="/auth/user/login" />
                <Redirect path="/auth" to="/auth/user/login" />

                <Route path="/">
                    <Frontend>
                        <Switch>
                            <Route path="/post-categories/:postCategorySlug/posts/:slug" component={asyncPostsShow} />
                            <Route path="/post-categories/:postCategorySlug/posts" component={asyncPosts} />
                            <Route path="/posts/:slug" component={asyncPostsShow} />
                            <Route path="/posts" component={asyncPosts} />

                            <Route path="/products/:slug" component={asyncProductsShow} />
                            <Route path="/products" component={asyncProducts} />

                            <Route path="/contact" component={asyncContact} />
                            <Route path="/about-us" component={asyncAboutUs} />
                            <Route path="/" component={asyncHome} />
                        </Switch>
                    </Frontend>
                </Route>
            </Switch>
        );

        if (isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/user">
                        <Backend>
                            <Switch>
                                <Route path="/user/cms/global" component={asyncUserCmsGlobal} />
                                <Route path="/user/cms/general" component={asyncUserCmsGeneral} />
                                <Route path="/user/cms/messages" component={asyncUserCmsMessages} />
                                <Route path="/user/cms/components" component={asyncUserCmsComponents} />
                                <Route path="/user/cms/auth" component={asyncUserCmsAuth} />
                                <Route path="/user/cms/backend" component={asyncUserCmsBackend} />
                                <Route path="/user/cms/frontend" component={asyncUserCmsFrontend} />

                                <Route path="/user/dashboard" component={asyncUserDashboard} />

                                <Route path="/user/features/:id/edit" component={asyncUserFeaturesEdit} />
                                <Route path="/user/features/add" component={asyncUserFeaturesAdd} />
                                <Route path="/user/features" component={asyncUserFeatures} />

                                <Route path="/user/languages/:id/edit" component={asyncUserLanguagesEdit} />
                                <Route path="/user/languages/add" component={asyncUserLanguagesAdd} />
                                <Route path="/user/languages" component={asyncUserLanguages} />

                                <Route path="/user/roles/:id/edit" component={asyncUserRolesEdit} />
                                <Route path="/user/roles/add" component={asyncUserRolesAdd} />
                                <Route path="/user/roles" component={asyncUserRoles} />

                                <Route path="/user/settings/language" component={asyncUserSettingsLanguage} />

                                <Route path="/user/users/:id/edit" component={asyncUserUsersEdit} />
                                <Route path="/user/users/add" component={asyncUserUsersAdd} />
                                <Route path="/user/users" component={asyncUserUsers} />

                                <Route path="/user/methods/:id/edit" component={asyncUserMethodsEdit} />
                                <Route path="/user/methods/add" component={asyncUserMethodsAdd} />
                                <Route path="/user/methods" component={asyncUserMethods} />

                                <Route path="/user/post-categories/:id/edit" component={asyncUserPostCategoriesEdit} />
                                <Route path="/user/post-categories/add" component={asyncUserPostCategoriesAdd} />
                                <Route path="/user/post-categories" component={asyncUserPostCategories} />

                                <Route path="/user/posts/:id/edit" component={asyncUserPostsEdit} />
                                <Route path="/user/posts/add" component={asyncUserPostsAdd} />
                                <Route path="/user/posts" component={asyncUserPosts} />

                                <Route path="/user/brands/:id/edit" component={asyncUserBrandsEdit} />
                                <Route path="/user/brands/add" component={asyncUserBrandsAdd} />
                                <Route path="/user/brands" component={asyncUserBrands} />

                                <Route path="/user/products/:id/edit" component={asyncUserProductsEdit} />
                                <Route path="/user/products/add" component={asyncUserProductsAdd} />
                                <Route path="/user/products" component={asyncUserProducts} />
                            </Switch>
                        </Backend>
                    </Route>



                    <Route path="/admin">
                        <Backend>
                            <Switch>
                                <Route path="/admin/admins/:id/edit" component={asyncAdminAdminsEdit} />
                                <Route path="/admin/admins/add" component={asyncAdminAdminsAdd} />
                                <Route path="/admin/admins" component={asyncAdminAdmins} />

                                <Route path="/admin/cms/global" component={asyncAdminCmsGlobal} />
                                <Route path="/admin/cms/general" component={asyncAdminCmsGeneral} />
                                <Route path="/admin/cms/messages" component={asyncAdminCmsMessages} />
                                <Route path="/admin/cms/components" component={asyncAdminCmsComponents} />
                                <Route path="/admin/cms/auth" component={asyncAdminCmsAuth} />
                                <Route path="/admin/cms/backend" component={asyncAdminCmsBackend} />

                                <Route path="/admin/dashboard" component={asyncAdminDashboard} />

                                <Route path="/admin/features/:id/edit" component={asyncAdminFeaturesEdit} />
                                <Route path="/admin/features/add" component={asyncAdminFeaturesAdd} />
                                <Route path="/admin/features" component={asyncAdminFeatures} />

                                <Route path="/admin/languages/:id/edit" component={asyncAdminLanguagesEdit} />
                                <Route path="/admin/languages/add" component={asyncAdminLanguagesAdd} />
                                <Route path="/admin/languages" component={asyncAdminLanguages} />

                                <Route path="/admin/roles/:id/edit" component={asyncAdminRolesEdit} />
                                <Route path="/admin/roles/add" component={asyncAdminRolesAdd} />
                                <Route path="/admin/roles" component={asyncAdminRoles} />

                                <Route path="/admin/settings/language" component={asyncAdminSettingsLanguage} />

                                <Route path="/admin/users/:id/edit" component={asyncAdminUsersEdit} />
                                <Route path="/admin/users/add" component={asyncAdminUsersAdd} />
                                <Route path="/admin/users" component={asyncAdminUsers} />
                            </Switch>
                        </Backend>
                    </Route>

                    <Redirect path="/dashboard" to={`/${role}/dashboard`} />
                    <Redirect path="/auth" to={`/${role}/dashboard`} />

                    <Route path="/">
                        <Frontend>
                            <Switch>
                                <Route path="/post-categories/:postCategorySlug/posts/:slug" component={asyncPostsShow} />
                                <Route path="/post-categories/:postCategorySlug/posts" component={asyncPosts} />
                                <Route path="/posts/:slug" component={asyncPostsShow} />
                                <Route path="/posts" component={asyncPosts} />

                                <Route path="/products/:slug" component={asyncProductsShow} />
                                <Route path="/products" component={asyncProducts} />

                                <Route path="/contact" component={asyncContact} />
                                <Route path="/about-us" component={asyncAboutUs} />
                                <Route path="/" component={asyncHome} />
                            </Switch>
                        </Frontend>
                    </Route>
                </Switch>
            );
        }

        const dataReady = cms !== undefined && currencies !== undefined && countries !== undefined && ((isAuthenticated && role !== undefined) || !isAuthenticated);

        return dataReady ? routes : <Spinner />;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onTryAuthSignup: () => dispatch(authCheckState()),
    onGetContent: () => dispatch(getContent()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
