import React from "react";
import './Card.scss'

function Card(props) {
  return (
    <div className="user-detail">
      <div className="user-name">
        <span className="detail-label">Name : </span>
        <span className="user-data">{props.user.name}</span>{" "}
      </div>
      <div className="user-email">
        <span className="detail-label">Email : </span>
        <span className="user-data">{props.user.email}</span>{" "}
      </div>
      <div className="user-phone">
        <span className="detail-label">Phone : </span>
        <span className="user-data">{props.user.phone}</span>{" "}
      </div>
      <div className="user-username">
        <span className="detail-label">Username : </span>
        <span className="user-data">{props.user.username}</span>{" "}
      </div>
      <div className="user-website">
        <span className="detail-label">Website : </span>
        <span className="user-data">
          <a className="user-data" href={props.user.website}>
            {props.user.website}
          </a>
        </span>{" "}
      </div>
      {props.user.company && props.user.company.name ? (
        <div className="user-company">
          <span className="detail-label">Company : </span>
          <span className="user-data-obj">
            <div className="obj-detail">
              <span className="obj-detail-label">Name : </span>
              <span className="obj-detail-data">
                {props.user.company.name}{" "}
              </span>
            </div>
            <div className="obj-detail">
              <span className="obj-detail-label">Catch Phrase : </span>
              <span className="obj-detail-data">
                {props.user.company.catchPhrase}{" "}
              </span>
            </div>
            <div className="obj-detail">
              <span className="obj-detail-label">BS : </span>
              <span className="obj-detail-data">{props.user.company.bs} </span>
            </div>
          </span>{" "}
        </div>
      ) : null}
      {props.user.address && props.user.address.city ? (
        <div className="user-company">
          <span className="detail-label">Address : </span>
          <span className="user-data-obj">
            <div className="obj-detail">
              <span className="obj-detail-label">City : </span>
              <span className="obj-detail-data">
                {props.user.address.city}{" "}
              </span>
            </div>
            <div className="obj-detail">
              <span className="obj-detail-label">Street : </span>
              <span className="obj-detail-data">
                {props.user.address.street}{" "}
              </span>
            </div>
            <div className="obj-detail">
              <span className="obj-detail-label">Suite : </span>
              <span className="obj-detail-data">
                {props.user.address.suite}{" "}
              </span>
            </div>
            <div className="obj-detail">
              <span className="obj-detail-label">Zipcode : </span>
              <span className="obj-detail-data">
                {props.user.address.zipcode}{" "}
              </span>
            </div>
          </span>{" "}
        </div>
      ) : null}
    </div>
  );
}
export default Card;
