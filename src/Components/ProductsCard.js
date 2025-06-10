import React, { Fragment } from 'react'

export default function ProductsCard({ children }) {
    console.log(children);
    return (
        <Fragment>
            <div className="Mycard w-25 d-inline-block">
                <div className="Mycard-body zoom-hover">
                    {children}
                </div>
               {/*} <div className="Mycard-footer text-start">
                <h6 className="font-adjust">{size}</h6>                
                </div>*/}
            </div>
        </Fragment>
    )
}
