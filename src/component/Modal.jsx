import PropTypes from "prop-types";
import "../css/Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ closeModal }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				{/* <div className="modal-header">
					<h2>Ticket Created Successfully</h2>
					<button className="modal-close-btn" onClick={closeModal}>
						&times;
					</button>
				</div> */}
				<div className="modal-body">
					<svg viewBox="0 0 100 100">
						<path d="M20,50 L40,70 L80,30" />
					</svg>
					<p>
						You have successfully created a ticket. Now, design your ticket.
					</p>
					<Link onClick={closeModal} className="design-btn" to="/design">
						Design Ticket
					</Link>
				</div>
				{/* <div className="modal-footer">
					<button onClick={closeModal}>Close</button>
				</div> */}
			</div>
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
};

export default Modal;
