import React from 'react'

function Plan() {
  return (
    <div>
      
    <div className="container pt-5 mb-5">
    <div className="row">
      <div className="col-lg-4 col-md-12 pt-5">
        <div className="">
          <div className="top-card">
          <span className="price">$0</span>/month 
              <h1 className="card-title">Basic</h1>
              <small></small>
            <div className="flip-card-back pt-2">
             <ul className="list-group list-group-flush">
              <li className="list-group-item">
             Pick your songs</li>
              <li className="list-group-item"> - </li>
              <li className="list-group-item"> - </li>
            </ul>
            <button className="my-5 btn btn-dark">Select</button>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-12 pt-5">
    <div className="h-100 flip-card m-1">
          <div className="flip-card-inner">
          <span className="price">$6.99</span>/month 
              <h1 className="card-title">standard</h1>
              <small></small>
            <div className="flip-card-back pt-2">
             <ul className="list-group list-group-flush">
              <li className="list-group-item">
             Pick your songs</li>
              <li className="list-group-item"> Create Playlists </li>
              <li className="list-group-item"> - </li>
            </ul>
            <button className="my-5 btn btn-dark">Select</button>
          </div>
        </div>
      </div>
  </div>


  <div className="col-lg-4 col-md-12  pt-5">
  <div className="h-100 flip-card">
          <div className="flip-card-inner">
          <span className="price">$8.99</span>/month 
              <h1 className="card-title">Premium</h1>
              <small></small>
            <div className="flip-card-back pt-2">
             <ul className="list-group list-group-flush">
              <li className="list-group-item">
             Pick your songs</li>
              <li className="list-group-item"> Create Playlists </li>
              <li className="list-group-item"> Select locations </li>
            </ul>
            <button className="my-5 btn btn-dark">Select</button>
          </div>
        </div>
      </div> 
      </div>
      </div>
</div>
    </div>
  )
}

export default Plan
