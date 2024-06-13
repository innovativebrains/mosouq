import React from "react"

import Marquee from "react-fast-marquee";

import { Row, Col } from "react-bootstrap"

import ReactStars from 'react-stars'

const HomeReview = () => {
    return (
        <div style={{ marginTop: '50px' }}>
            <h2 className="text-center">
                Recent Reviews
            </h2>
            <Marquee className="mt-5" >
            {[1, 2, 3, 4, 5, 6, 7].map((announcementts) => (

                <div class="card ms-3" style={{ width: '424px' }}>
                    <div class="card-body">
                        <div className="d-flex">

                            <div>
                                <ReactStars
                                    count={5} // Static number of stars
                                    value={3} // Static rating value
                                    size={35} // Size of the stars
                                    edit={false} // Disable editing
                                />
                            </div>
                        </div>
                        <p className="review-descrp">
                            “Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ”
                        </p>

                        <div>
                            <div className="d-flex">
                                <img src='/person.png' style={{height:'50px', width:"50px", marginRight:"1rem"}} />
                                <h5>
                                    Robert Fox
                                </h5>
                            </div>

                            <div style={{paddingLeft:"4rem"}}>
                                Designation
                            </div>
                        </div>

                    </div>
                </div>
            ))}

        </Marquee>
        </div>
    )
}

export default HomeReview