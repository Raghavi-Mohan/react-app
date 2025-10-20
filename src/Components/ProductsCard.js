import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductsCard({ children,paintingId }) {

  const navigate = useNavigate();
    return (
        <Fragment>
            <div className="Mycard w-25 d-inline-block" 
            onClick={() => navigate(`/painting/${paintingId}`)} style={{ cursor: 'pointer' }}>
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
