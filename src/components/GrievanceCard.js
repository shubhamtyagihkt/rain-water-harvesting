import React, { Component } from "react";

export default class GrievanceCard extends Component {
  render() {
    return (
      <div className="row justify-content-center mt5">
        <div className="col">
          <div class="card" style={{ width: "100rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
