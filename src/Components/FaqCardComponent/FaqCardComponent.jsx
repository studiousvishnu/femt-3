import "./FaqCardComponent.css";

const FaqCardComponent = () => {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 col-11 pe-1 ps-0 px-md-4  col-md-9 bg-white rounded-4 p-5  card-container start-50 translate-middle-x position-absolute">
          <div className="heading d-flex align-items-center    ">
            <img src="./src/assets/icon-star.svg" alt="" className="me-2" />
            <h1 className="fw-bold text-center text-lg-start">FAQs</h1>
          </div>
          <div className="content d-flex align-items-center ">
            <h5 className="fw-bold d-flex mt-3 me-lg-4 ms-3">
              What is Frontend Mentor, and how Will it help me?
            </h5>
            <img
              className="my-0 py-0"
              src="./src/assets/icon-minus.svg"
              alt=""
            />{" "}
          </div>
          <div className="content-container ms-3 ">
            <p className="fw-bold fs-5" style={{ color: "#88788a" }}>
              Frontend Mentor offers realistic coding to help developers improve
              their frontend coding skills with projects in HTML, CSS, and
              JavaScript. Its suitable for all levels and ideal for portfolio
              building.
            </p>
            <div className="breaker my-4"></div>
          </div>
          <div className="questions-container ms-3">
            <div className="d-flex justify-content-between ">
              <h5 className="fw-bold"> is FrontEnd Mentor Free?</h5>{" "}
              
              <img src="./src/assets/icon-plus.svg" alt="" className="me-2" />{" "}
              
            </div>
            <div className="breaker my-4"></div>
            
            <div className="d-flex justify-content-between ">
              <h5 className="fw-bold">
                {" "}
                Can I use Frontend Mentor projects in my portfolio?
              </h5>{" "}
              <img
                src="./src/assets/icon-plus.svg"
                alt=""
                className="me-2"
              />{" "}
            </div>
           
            <div className="breaker my-4"></div>
            <div className="d-flex justify-content-between ">
              <h5 className="fw-bold">
                {" "}
                How can I get help if I am stuck on a challenge?
              </h5>{" "}
              <img
                src="./src/assets/icon-plus.svg"
                alt=""
                className="me-2"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCardComponent;
