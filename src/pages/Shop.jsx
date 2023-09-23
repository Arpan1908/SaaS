import React from 'react'
import Sidebar from '../components/Sidebar'
function Shop() {
  return (
    <div>
        <Sidebar />
        <div className="container">
  <h2>Bootstrap Cards Varation: </h2>
  <h3>Same Aspect Ratio ―</h3>
  <div className="row mb-5">
    <div className="col-md-4">
      <div className="card">
        {/* <img
          src="https://source.unsplash.com/random/1920x1080"
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          <h5 className="card-title">Paraphraser</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/paraphrase" className="btn btn-sm btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        {/* <img
          src="https://source.unsplash.com/random/1920x1080"
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          <h5 className="card-title">Summarizer bot</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/summary" className="btn btn-sm btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        {/* <img
          src="https://source.unsplash.com/random/1920x1080"
          className="card-img-top"
          alt="..."
        /> */}
        <div className="card-body">
          <h5 className="card-title">QR CODE GENERATOR</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/qrgen" className="btn btn-sm btn-primary">
            Go 
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Shop