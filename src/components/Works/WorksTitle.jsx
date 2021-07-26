import React from 'react'

class WorksTitle extends React.Component {
  render () {
    return (
      <div className="container works d-flex justify-content-center align-items-start pt-70 pb-70">
        <div className="inner-works d-flex justify-content-center align-items-start row w-100">
          <div className="title-wrapper d-flex flex-wrap justify-content-lg-between justify-content-md-between justify-content-sm-center align-items-lg-start align-items-sm-center pb-50 col-lg-9 col-sm-12">
            <h1 className="title dark-color ta-l ta-sm-c p-0 col-lg-2 col-md-6 col-sm-12">OUR WORKS</h1><a className="sm-t go-to-right ta-sm-c col-lg-2 col-md-6 col-sm-12" href="#">See All Project in dribbble</a>
          </div>
        </div>
      </div>
    )
  }
}

export default WorksTitle
