import { Modal } from 'react-bootstrap';

const SuccessModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalDetail"
      >
        <Modal.Header
          closeButton
          className="successModal"
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#d1e7dd',
          }}
        >
          {' '}
          Your wine was succesfully saved!
        </Modal.Header>
        <Modal.Body
          style={{
            fontStyle: 'italic',
            textAlign: 'center',
            backgroundColor: '#d1e7dd',
          }}
          className="successModal"
        >
          (You can safely close window now)
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SuccessModal;
