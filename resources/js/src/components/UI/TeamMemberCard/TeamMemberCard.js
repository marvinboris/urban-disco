import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';

import './TeamMemberCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const teamMemberCard = ({ name, title, children, src, lg }) => (
    <Col md={6} lg={3}>
        <Card className="border-0 rounded-0 bg-transparent overflow-hidden position-relative text-left shadow-sm">
            <div className="position-absolute w-100 h-100" style={{ background: "url('" + src + "') no-repeat center", backgroundSize: 'cover' }} />
            <div className="card-img-top embed-responsive embed-responsive-1by1 bg-black" style={{ opacity: .3 }} />
            <CardBody className="bg-black-80 text-white position-relative">
                <div className="bg-white rounded-right position-absolute" style={{ width: 8, height: 36, top: '50%', left: 0, transform: 'translateY(-50%)' }} />
                <div className="ml-3">
                    <div className="font-weight-normal text-montserrat-alt h4 position-relative d-flex align-items-center">
                        <span className="pr-2">{name}</span>

                        <div className="position-absolute border-bottom border-white-20" style={{ top: 13, left: -50, width: 45 }}>
                            <FontAwesomeIcon icon="circle" className="text-xx-small position-absolute" style={{ right: 0, top: 0, transform: 'translateY(-50%)' }} />
                        </div>

                        <div className="position-relative border-bottom border-white-20 flex-fill" style={{ marginRight: -20 }}>
                            <FontAwesomeIcon icon="play" className="text-xx-small text-yellow position-absolute" style={{ left: 0, top: 0, transform: 'translateY(-50%)' }} />
                        </div>
                    </div>
                    <div className="card-text text-light text-montserrat-alt pb-1 mb-3">
                        {title}
                    </div>
                    <div>
                        <FontAwesomeIcon size="lg" className="mr-2" icon={["fab", "facebook-square"]} />
                        <FontAwesomeIcon size="lg" className="mr-2" icon={["fab", "twitter-square"]} />
                        <FontAwesomeIcon size="lg" className="mr-2" icon={["fab", "instagram"]} />
                        <FontAwesomeIcon size="lg" className="mr-2" icon={["fab", "whatsapp"]} />
                    </div>
                </div>
            </CardBody>
        </Card>
    </Col>
);

export default teamMemberCard;