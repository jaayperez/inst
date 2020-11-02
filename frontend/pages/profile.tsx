import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Avatar } from 'baseui/avatar';
import { Modal, ModalHeader, ModalBody } from 'baseui/modal';
import { Button } from 'baseui/button';
import Container from '../components/UiElements/Container/Container';
import Posts from '../containers/Posts/Posts';
import { useQuery, gql } from '@apollo/client';
import { withApollo } from '../apollo/client';
import {
  PageTitle,
  InfoBar,
  UserAvatar,
  UserName,
  UserRole,
  Menu,
  MenuList,
  Strong,
  AlignItems,
  List,
  ListItem,
} from '../components/PageStyles/Profile.styled';
import { Block } from 'baseui/block';

const GET_PROFILE = gql`
  query getProfile($id: String!) {
    profile(id: $id) {
      id
      name
      role
      avatar
      posts {
        id
        type
        image
        video
        gallery
        comments {
          id
          role
          username
          avatar
          comment
          createdAt
        }
      }
      followers {
        id
        avatar
        name
      }
      following {
        id
        avatar
        name
      }
    }
  }
`;

const Profile: NextPage<{}> = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_PROFILE, {
    variables: {
      id: 'user_1',
    },
    notifyOnNetworkStatusChange: true,
  });

  const [active, setActive] = useState('posts');
  const [visible, setVisible] = useState(false);
  if (!data) return null;
  const { name, role, avatar, posts, followers, following } = data.profile;

  return (
    <>
      <Head>
        <title>Profile | INST.</title>
        <meta name="Description" content="Inst profile page" />
      </Head>

      <PageTitle>
        <Container>
          <Block
            overrides={{
              Block: {
                style: {
                  '@media only screen and (max-width: 667px)': {
                    textAlign: 'center',
                  },
                },
              },
            }}
          >
            <UserAvatar src={avatar} alt={name} />
          </Block>

          <InfoBar>
            <Block>
              <UserName>{name}</UserName>
              <UserRole>{role}</UserRole>
            </Block>

            <Menu className="profile-menu">
              <MenuList
                className={active === 'posts' ? 'active' : ''}
                onClick={() => {
                  setActive('posts');
                }}
              >
                Posts <Strong>{posts.length}</Strong>
              </MenuList>
              <MenuList
                className={active === 'followers' ? 'active' : ''}
                onClick={() => {
                  setActive('followers');
                  setVisible(true);
                }}
              >
                Followers <Strong>{followers.length}</Strong>
              </MenuList>
              <MenuList
                className={active === 'following' ? 'active' : ''}
                onClick={() => {
                  setActive('following');
                  setVisible(true);
                }}
              >
                Following <Strong>{following.length}</Strong>
              </MenuList>
            </Menu>
          </InfoBar>
        </Container>
      </PageTitle>

      <Container>
        <Posts data={posts} avatar={avatar} username={name} />

        <Modal
          onClose={() => {
            setVisible(false);
            setActive('posts');
          }}
          closeable
          isOpen={visible}
          animate
          size="default"
          role="dialog"
          unstable_ModalBackdropScroll={true}
          overrides={{
            Root: {
              style: () => {
                return { zIndex: 9999 };
              },
            },
          }}
        >
          {active === 'followers' && (
            <>
              <ModalHeader>Followers</ModalHeader>
              <ModalBody style={{ overflow: 'hidden' }}>
                {followers.length > 0 ? (
                  <List className="followers-list">
                    {followers.map((follower: any) => (
                      <ListItem key={`follower-key${follower.id}`}>
                        <AlignItems>
                          <Avatar
                            name={follower.name}
                            size="scale1400"
                            src={follower.avatar}
                          />
                          <span style={{ margin: '0 10px' }}>
                            {follower.name}
                          </span>
                        </AlignItems>
                        <Button
                          size="compact"
                          kind="secondary"
                          shape="pill"
                          onClick={() => console.log('Follow', follower.id)}
                        >
                          Follow
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  '0 Followers'
                )}
              </ModalBody>
            </>
          )}

          {active === 'following' && (
            <>
              <ModalHeader>Following</ModalHeader>
              <ModalBody style={{ overflow: 'hidden' }}>
                {following.length > 0 ? (
                  <List className="followers-list">
                    {following.map((follower: any) => (
                      <ListItem key={`following-key${follower.id}`}>
                        <AlignItems>
                          <Avatar
                            name={follower.name}
                            size="scale1400"
                            src={follower.avatar}
                          />
                          <span style={{ margin: '0 10px' }}>
                            {follower.name}
                          </span>
                        </AlignItems>
                        <Button
                          size="compact"
                          kind="secondary"
                          shape="pill"
                          onClick={() => console.log('Unfollow', follower.id)}
                        >
                          Unfollow
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  '0 Following'
                )}
              </ModalBody>
            </>
          )}
        </Modal>
      </Container>
    </>
  );
};

export default withApollo(Profile);
