import React from 'react';
import Scrollspy from 'react-scrollspy';
import { ListItem, AnchorText } from './ScrollSpyMenu.styled';
import { Block } from 'baseui/block';

type ScrollSpyMenuType = {
  items: string[];
  menuItemOffset?: string;
  showCounter?: boolean;
  isSeparator?: boolean;
  [props: string]: any;
};

const ScrollSpyMenu = ({
  items,
  showCounter,
  isSeparator,
  menuItemOffset,
  ...props
}: ScrollSpyMenuType) => {
  const scrollItems: string[] = [];

  items.forEach(item => {
    const path = item.split(' ').join('_');
    scrollItems.push(path);
  });

  return (
    <Scrollspy
      className="scrollspy-menu"
      items={scrollItems}
      currentClassName="is-current"
      {...props}
    >
      {items.map((item, index) => {
        const path = item.split(' ').join('_');

        function pad(index: number) {
          let valString = index + '';
          if (valString.length < 2) {
            return '0' + valString;
          } else {
            return valString;
          }
        }

        return (
          <ListItem key={`scroll-item--key${index}`}>
            <AnchorText href={`#${path}`} offset={menuItemOffset}>
              {showCounter && pad(index)}
              {isSeparator && (
                <Block as="span" paddingLeft="5px" paddingRight="5px"></Block>
              )}
              {item}
            </AnchorText>
          </ListItem>
        );
      })}
    </Scrollspy>
  );
};

export default ScrollSpyMenu;
