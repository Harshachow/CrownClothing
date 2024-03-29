import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title , route} = category;
  const navigation = useNavigate();
  const navigationHandler = () =>  navigation(route);
  return (
    <DirectoryItemContainer id ='test' onClick={navigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
