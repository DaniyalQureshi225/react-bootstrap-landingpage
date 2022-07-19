import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {


  return (

    <>
      <h1 className="text-center m-5 text-capitalize text-danger bg-warning p-5">WELCOME TO MY WEBSITE</h1>
      <div className="row align-items-center text-center">
      <div className="col">
          <div className="card m-5">
            <img src="https://picsum.photos/200/301" className="card-img-top" alt="image" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-5">
            <img src="https://picsum.photos/200/302" className="card-img-top" alt="image" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card m-5">
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="image" height="200px" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div></div>
    </>

  );

};

export default App;
