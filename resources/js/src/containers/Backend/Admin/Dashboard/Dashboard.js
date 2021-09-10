import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faTachometerAlt, faTasks, faEye, faEdit, faTrash, faCircleNotch, faUserGraduate, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import Table from '../../../../components/Backend/UI/Table/Table';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import { getDashboard, resetDashboard } from '../../../../store/actions/backend/dashboard';
import { updateObject } from '../../../../shared/utility';


class Dashboard extends Component {
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
                    pages: { backend: { pages: { dashboard: { admin: { title, subtitle, blocks: { total_cycles, total_years, total_subjects, total_students } } } } } }
                }
            },
            backend: { dashboard: { loading, error, blocksData, totalCycles, totalYears, totalSubjects, totalStudents } },
        } = this.props;

        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const data = [
                    {
                        title: total_cycles.title,
                        children: blocksData.totalCycles,
                        icon: faCircleNotch,
                        link: '/admin/cycles/',
                        color: 'yellow',
                        details: total_cycles.description,
                        titleColor: 'white',
                    },
                    {
                        title: total_years.title,
                        children: blocksData.totalYears,
                        icon: faCalendar,
                        link: '/admin/years/',
                        color: 'brown',
                        details: total_years.description,
                        titleColor: 'white',
                    },
                    {
                        title: total_subjects.title,
                        children: blocksData.totalSubjects,
                        icon: faBook,
                        link: '/admin/subjects/',
                        color: 'lightyellow',
                        details: total_subjects.description,
                        titleColor: 'white',
                    },
                    {
                        title: total_students.title,
                        children: blocksData.totalStudents,
                        icon: faUserGraduate,
                        link: '/admin/students/',
                        color: 'darkhead',
                        details: total_students.description,
                        titleColor: 'white',
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor, light }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);

                const cyclesData = totalCycles.map(cycle => updateObject(cycle, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/admin/cycles/${cycle.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/admin/cycles/${cycle.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                        <a className="text-red" href="#" onClick={() => this.props.deletecycles(cycle.id)}><FontAwesomeIcon icon={faTrash} fixedWidth /></a>
                    </div>
                }));

                const yearsData = totalYears.map(year => updateObject(year, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/admin/years/${year.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/admin/years/${year.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                        <a className="text-red" href="#" onClick={() => this.props.deleteyears(year.id)}><FontAwesomeIcon icon={faTrash} fixedWidth /></a>
                    </div>
                }));

                const subjectsData = totalSubjects.map(subject => updateObject(subject, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/admin/subjects/${subject.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/admin/subjects/${subject.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                        <a className="text-red" href="#" onClick={() => this.props.deletesubjects(subject.id)}><FontAwesomeIcon icon={faTrash} fixedWidth /></a>
                    </div>
                }));

                const studentsData = totalStudents.map(student => updateObject(student, {
                    action: <div className="text-center">
                        <Link className="text-blue mr-2" to={`/admin/students/${student.id}`}><FontAwesomeIcon icon={faEye} fixedWidth /></Link>
                        <Link className="text-green mr-2" to={`/admin/students/${student.id}/edit`}><FontAwesomeIcon icon={faEdit} fixedWidth /></Link>
                        <a className="text-red" href="#" onClick={() => this.props.deletestudents(student.id)}><FontAwesomeIcon icon={faTrash} fixedWidth /></a>
                    </div>
                }));

                content = (
                    <>
                        <div className="pt-4 px-4 pb-3 bg-yellow-10">
                            <Row>
                                {cards}
                            </Row>
                        </div>

                        <Row className="mt-5">
                            <Table array={cyclesData} searchable draggable closable title="Total Cycles" icon={faTasks} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'Name', key: 'name' },
                                    { name: 'Slug', key: 'slug' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/admin/cycles" className="text-reset">{'View full cycle list | >'}</Link>
                            </Table>

                            <Table array={yearsData} searchable draggable closable title="Total Years" icon={faTasks} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'Name', key: 'name' },
                                    { name: 'Slug', key: 'slug' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/admin/years" className="text-reset">{'View full year list | >'}</Link>
                            </Table>

                            <Table array={subjectsData} searchable draggable closable title="Total Subjects" icon={faTasks} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'Name', key: 'name' },
                                    { name: 'Slug', key: 'slug' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/admin/subjects" className="text-reset">{'View full subject list | >'}</Link>
                            </Table>

                            <Table array={studentsData} searchable draggable closable title="Total Students" icon={faTasks} bordered limit={5} lg={6}
                                fields={[
                                    { name: 'First name', key: 'first_name' },
                                    { name: 'Last name', key: 'last_name' },
                                    { name: 'Birth date', key: 'birth_date' },
                                    { name: 'Birth place', key: 'birth_place' },
                                    { name: 'Matricule', key: 'matricule' },
                                    { name: 'Action', key: 'action' }
                                ]}>
                                <Link to="/admin/students" className="text-reset">{'View full student list | >'}</Link>
                            </Table>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={subtitle} icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>{title}</SpecialTitle>
                    <Subtitle user>{subtitle}</Subtitle>
                </TitleWrapper>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getDashboard()),
    reset: () => dispatch(resetDashboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));