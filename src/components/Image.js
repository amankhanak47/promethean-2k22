import React, { useEffect, useState } from "react";

const Image = ({img}) => {
 
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalLong3"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
        style={{ backgroundColor: "gray" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div class="modal-body">
              <div class="row" height="90px">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                  {img == "" ? <>loading...</> : <img src={img}  alt="promethean2k22" loading="lazy"  id="img1" style={{
                    width: "100%",
                    display: "block",
                    alignItems: "center",
                    position: "relative"
                  }} />}
                </div>
                <div class="col-md-3"></div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
