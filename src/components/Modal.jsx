import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ modalTitle, modalContent, postData }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{modalTitle}</h3>
          <p className="py-4">{modalContent}</p>
          <div className="modal-action">
            {/* <Link to={`/plan_detail/${id}`}> */}
            <button className="btn" onClick={postData}>
              저장하기
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
