import { Modal } from 'react-bootstrap';
import './Detail.css';

const DetailModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalDetail"
        id="detailModal"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ paddingLeft: '50px' }}
          >
            {props.winery}
            <hr></hr>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontStyle: 'italic', textAlign: 'center' }}>
          {`"${props.details}"`}
        </Modal.Body>
        <Modal.Footer style={{ fontStyle: 'italic' }}>2021</Modal.Footer>
      </Modal>
    </>
  );
};
export default DetailModal;
