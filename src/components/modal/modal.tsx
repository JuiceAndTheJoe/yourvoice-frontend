import styled from "@emotion/styled";
import {
  backgroundLightColour,
  borderAccentColour,
  accentColour,
  modalShadow,
} from "../../css-helpers/defaults";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: linear-gradient(145deg, rgba(22, 33, 62, 0.95) 0%, rgba(15, 52, 96, 0.95) 100%);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1.2rem;
  border: 1px solid ${borderAccentColour};
  box-shadow: ${modalShadow}, 0 0 30px rgba(52, 152, 219, 0.1);
  width: fit-content;
  max-width: 90%;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid rgba(52, 152, 219, 0.3);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  font-size: 1.8rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(52, 152, 219, 0.2);
    border-color: ${accentColour};
    color: ${accentColour};
    transform: scale(1.1);
  }
`;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
