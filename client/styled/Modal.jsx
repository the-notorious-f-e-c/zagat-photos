import styled from 'styled-components';
import zoomIn from './Keyframes';

const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(16,24,32,.95); 
  animation-name: ${props => (props.onEnter ? zoomIn : 'none')};
  animation-duration: 0.3s;
`;

const ModalTitle = styled.div`
  margin: 28px 0;
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-size: 17px;
  letter-spacing: .086em;
`;

export {
  ModalContainer,
  ModalTitle,
};
