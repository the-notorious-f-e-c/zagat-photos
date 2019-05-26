import styled from 'styled-components';
import zoomOut from './Keyframes';

const SlideshowViewIndex = styled.span`
  font-size: 14px;
  letter-spacing: .013em;
  color: white;
  margin-right: 20px;
`;

const SlideshowViewer = styled.div`
  height: calc(100vh - 76px - 92px - 20px);
  padding: 10px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  animation-name: ${props => (props.onExit ? zoomOut : 'none')};
  animation-duration: 0.3s;

  > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const SlideshowFooter = styled.div`
  width: 100%;
  height: 52px;
`;

const SlideshowSeparator = styled.div`
  border-bottom: 1px white solid;
  border-top: 1px white solid;
  height: 2px;
  margin-bottom: 8px;
  margin-top: 16px;
  margin-left: 40px;
  width: 32px;
`;

const SlideshowUserAvatar = styled.div`
  display: inline-block;
  height: 24px;
  width: 24px;
  margin-left: 40px;
  margin-right: 12px;
  vertical-align: middle;
`;

const SlideshowUserName = styled.div`
  display: inline-block;
  color: white;
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.013em ;
  line-height: 24px;
  text-transform: uppercase;
  vertical-align: middle;
  text-align: left;
`;

export {
  SlideshowViewIndex,
  SlideshowViewer,
  SlideshowFooter,
  SlideshowSeparator,
  SlideshowUserAvatar,
  SlideshowUserName,
};
