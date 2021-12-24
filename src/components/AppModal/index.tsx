import React from 'react'
import Modal from 'react-modal';
import closeImg from './close.svg';
import './index.scss';

export type ModalProps = {
  isVisible: boolean;
  onClose: () => void
}

export const AppModal: React.FC<ModalProps> = ({children, isVisible, onClose}) => {
  return (
    <Modal preventScroll style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.25)'}}} isOpen={isVisible} onRequestClose={onClose} ariaHideApp={false} className="modal">
      <button className="modal__close" onClick={onClose}>
        <img src={closeImg} alt="close button" />
      </button>
      {children}
    </Modal>
  )
}
