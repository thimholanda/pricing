import React from 'react';
import ReactDom from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { ButtonClose, Overlay } from './styles';

interface IModalProps {
    children?: React.ReactNode;
    isOpen?: Boolean;
    onClose?(): void;
}

export function Modal({ children, isOpen, onClose }: IModalProps) {
    const portal = document.getElementById('portal');

    if (!isOpen) return null;

    return portal
        ? ReactDom.createPortal(
              <Overlay>
                  <div>
                      <ButtonClose type="button" onClick={onClose}>
                          <AiOutlineClose size={20} />
                      </ButtonClose>
                      {children}
                  </div>
              </Overlay>,
              portal,
          )
        : null;
}
