import { keyframes } from 'styled-components';

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;

const zoomOut = keyframes`
  from {
    opacity: 1;
    }

    50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
    }

    to {
    opacity: 0;
    }
`;

export default {
  zoomIn,
  zoomOut,
};
