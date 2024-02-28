import PropTypes from "prop-types";
import '../css/Modal.css'

const Modal = ({ closeModal }) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h2>Modal Title</h2>
					<button className="modal-close-btn" onClick={closeModal}>
						&times;
					</button>
				</div>
				<div className="modal-body">
					<p>This is the content of the modal.</p>
				</div>
				<div className="modal-footer">
					<button onClick={closeModal}>Close</button>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
};

export default Modal;
