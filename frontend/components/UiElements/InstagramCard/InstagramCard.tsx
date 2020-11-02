import React from 'react';
import {
  IoIosImages,
  IoIosVideocam,
  IoIosPlay,
  IoIosHeart,
  IoIosChatbubbles,
} from 'react-icons/io';
import Image from '../Image/Image';
import Wrapper, {
  Caption,
  TopRight,
  List,
  ListItem,
} from './InstagramCard.styled';

type InstagramCardProps = {
  type?: string;
  image: string;
  numberOfView?: string;
  numberOflike?: string;
  numberOfcomment?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const InstagramCard = ({
  type,
  image,
  numberOfView,
  numberOfcomment,
  numberOflike,
  onClick,
  style,
}: InstagramCardProps) => {
  return (
    <Wrapper onClick={onClick} $cursor={onClick && onClick} style={style}>
      <Image url={image} alt="Post" />
      <TopRight>
        {type === 'gallery' && <IoIosImages />}
        {type === 'video' && <IoIosVideocam />}
      </TopRight>
      <Caption>
        <List>
          {type === 'video' ? (
            <ListItem>
              {numberOfView && (
                <>
                  {numberOfView}&nbsp; <IoIosPlay />
                </>
              )}
            </ListItem>
          ) : (
            <ListItem>
              {numberOflike && (
                <>
                  {numberOflike} &nbsp; <IoIosHeart />
                </>
              )}
            </ListItem>
          )}
          <ListItem>
            {numberOfcomment && (
              <>
                {numberOfcomment} &nbsp; <IoIosChatbubbles />
              </>
            )}
          </ListItem>
        </List>
      </Caption>
    </Wrapper>
  );
};

export default InstagramCard;
