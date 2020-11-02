import React from 'react';
import Wrapper, {
  Image,
  Content,
  Title,
  TitleLink,
  Paragraph,
  Link,
  Img,
} from './ListGridCard.styled';

type ListGridCardType = {
  thumb?: string;
  thumbWidth?: string;
  thumbHeight?: string;
  title?: string;
  description?: string;
  author?: string;
  authorUrl?: string;
  btn?: React.ReactNode;
  variant?: 'grid' | 'list';
  style?: React.CSSProperties;
  websiteUrl?: string;
};

const ListGridCard = ({
  thumb,
  thumbWidth,
  thumbHeight,
  title,
  description,
  author,
  authorUrl,
  btn,
  variant = 'list',
  style,
  websiteUrl,
}: ListGridCardType) => {
  const addClasses = [];
  if (variant === 'list') {
    addClasses.push('listgrid-card');
  }
  if (thumb) {
    addClasses.push('has-thumb');
  }

  return (
    <Wrapper className={addClasses.join(' ')} $variant={variant} style={style}>
      {thumb && (
        <Image $variant={variant} $thumbHeight={thumbHeight}>
          <Img $thumbWidth={thumbWidth} src={thumb} alt={title} />
        </Image>
      )}

      <Content>
        <Title $variant={variant}>
          {websiteUrl ? (
            <TitleLink href={websiteUrl} target="_blank">
              {title}
            </TitleLink>
          ) : (
            title
          )}
        </Title>
        <Paragraph $variant={variant}>
          {description}{' '}
          {author && (
            <span>
              Owned by <Link href={authorUrl}>{author}</Link>
            </span>
          )}
        </Paragraph>
        {btn && btn}
      </Content>
    </Wrapper>
  );
};

export default ListGridCard;
