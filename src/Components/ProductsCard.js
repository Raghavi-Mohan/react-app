import React, { Fragment } from 'react'

export default function ProductsCard({ topic, size, children }) {
    console.log(children);
    return (
        <Fragment>
            <div className="Mycard w-25 m-4 d-inline-block">
                <div className="card-header text-center">
                    <h5>{topic}</h5>
                </div>
                <div className="Mycard-body zoom-hover">
                    {children}
                </div>
                <div className="Mycard-footer text-start">
                <h6>{size}</h6>                
                </div>
            </div>
        </Fragment>
    )
}
