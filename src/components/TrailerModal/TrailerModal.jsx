import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { closeModalAction } from '../../store/trailerModal/actions';

const TrailerModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.trailerModal.modalOpen);
  const trailerId = useSelector((state) => state?.trailerModal?.trailer?.key);
  const handleClose = () => {
    dispatch(closeModalAction());
  };
  return (
    <Modal size='xl' centered={true} show={show} onHide={handleClose}>
      <iframe
        title='youtube trailer'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${trailerId}`}
      ></iframe>
    </Modal>
  );
};

export default TrailerModal;
