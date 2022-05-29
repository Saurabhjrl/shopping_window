import React from "react";

const Window = ({ window, onChange, location }) => {
  return (
    <div key={window.id} className="col-12 col-md-6 col-xl-4 window py-4">
      <div className="card p-4">
        <div className="img-container d-none d-md-block">
          <div className={window.state ? "overlay off" : "overlay on"} />
          <img
            src={window.url ? window.url : "/images/default.jpg"}
            className="card-img-top"
            alt={window.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{window.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="form-check form-switch d-inline-block">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked={window.state}
                onChange={() => onChange(window)}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                {window.state ? "On" : "Off"}
              </label>
            </div>
          </li>
          <li className="list-group-item">{window.items} Accessories</li>
          <li className="list-group-item">
            <i className="fa fa-map-marker" aria-hidden="true"></i> {location}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Window;
