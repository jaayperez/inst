import React from 'react';
import Emoji from 'react-emoji-render';
import Response from './ShowChats.styled';

const ShowChats = ({ chats }) => {
  return (
    <>
      {chats && chats.length
        ? chats.map((chat, index) => (
            <Response key={index} $authorType={chat.type}>
              <Emoji text={chat.message} />
            </Response>
          ))
        : null}
    </>
  );
};

export default ShowChats;
