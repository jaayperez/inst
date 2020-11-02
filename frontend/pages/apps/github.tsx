import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { GoStar } from 'react-icons/go';
import { Grid, Cell } from 'baseui/layout-grid';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { Search } from 'baseui/icon';
import { Input } from 'baseui/input';
import { Tag } from 'baseui/tag';
import Container from 'components/UiElements/Container/Container';
import ListGridCard from 'components/UiElements/ListGridCard/ListGridCard';
import Loader from 'components/UiElements/Loader/Loader';
import AppsMenu from 'components/SideMenu/AppsMenu';
import { useQuery, gql } from '@apollo/client';

const GetRepositoriesBySearch = gql`
  query SearchRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            nameWithOwner
            description
            repositoryTopics(first: 5) {
              nodes {
                id
                topic {
                  id
                  name
                }
              }
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;
const TITLE = 'Github Search';
const INITIAL_SEARCH_TEXT = 'react';

const Github: NextPage<{}> = () => {
  const [searchText, setSearchText] = React.useState(INITIAL_SEARCH_TEXT);
  const { data, loading, error, refetch } = useQuery(GetRepositoriesBySearch, {
    variables: {
      queryString: INITIAL_SEARCH_TEXT,
    },
  });
  if (error) return <div>Error! ${error.message}</div>;

  function onSearch(e: any) {
    e.preventDefault();
    refetch({ queryString: searchText });
  }

  function After() {
    return (
      <Block
        overrides={{
          Block: {
            style: ({ $theme }) => {
              return {
                display: 'flex',
                alignItems: 'center',
                paddingLeft: $theme.sizing.scale500,
                paddingRight: $theme.sizing.scale500,
              };
            },
          },
        }}
      >
        <Search size="24px" />
      </Block>
    );
  }

  return (
    <>
      <Head>
        <title>{TITLE} | INST.</title>
        <meta name="Description" content="Inst Github app" />
      </Head>

      <Container>
        <Block paddingTop={['0', '0', '0', '40px']}>
          <Grid gridColumns={12} gridGutters={0} gridMargins={0}>
            <Cell span={[12, 12, 3]}>
              <AppsMenu />
            </Cell>
            <Cell span={[12, 12, 9]}>
              {!loading ? (
                <>
                  <Block
                    paddingTop={['10px', '15px', '30px', '0']}
                    paddingBottom="25px"
                  >
                    <Block
                      as="h3"
                      overrides={{
                        Block: {
                          style: ({ $theme }) => {
                            return {
                              ...$theme.typography.font450,
                              color: $theme.colors.primary,
                              marginBottom: '10px',
                            };
                          },
                        },
                      }}
                    >
                      {TITLE}
                    </Block>
                    <Block
                      as="p"
                      overrides={{
                        Block: {
                          style: ({ $theme }) => {
                            return {
                              ...$theme.typography.font200,
                              color: $theme.colors.contentSecondary,
                            };
                          },
                        },
                      }}
                    >
                      <Block
                        as="span"
                        overrides={{
                          Block: {
                            style: ({ $theme }) => {
                              return {
                                color: $theme.colors.primary,
                                marginRight: '5px',
                              };
                            },
                          },
                        }}
                      >
                        {data?.search?.repositoryCount}
                      </Block>
                    </Block>
                  </Block>

                  <Block
                    overrides={{
                      Block: {
                        style: ({ $theme }) => {
                          return {
                            paddingBottom: '40px',
                            borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
                            '@media only screen and (max-width: 991px)': {
                              paddingBottom: '30px',
                            },
                          };
                        },
                      },
                    }}
                  >
                    <form onSubmit={onSearch}>
                      <Input
                        overrides={{ After }}
                        placeholder="Search"
                        value={searchText}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setSearchText(e.target.value)
                        }
                      />
                    </form>
                  </Block>

                  {data?.search?.edges.map(({ node }: any) => (
                    <Block
                      key={`github-repo--key${node.id}`}
                      overrides={{
                        Block: {
                          style: ({ $theme }) => {
                            return {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              paddingTop: '23px',
                              paddingBottom: '20px',
                              borderBottom: `1px solid ${$theme.colors.backgroundTertiary}`,
                            };
                          },
                        },
                      }}
                    >
                      <ListGridCard
                        title={node.nameWithOwner}
                        description={node.description}
                        btn={node.repositoryTopics.nodes.map((item: any) => (
                          <Tag
                            key={item.id}
                            overrides={{
                              Root: {
                                style: {
                                  marginTop: '15px',
                                },
                              },
                            }}
                            closeable={false}
                            variant="solid"
                          >
                            {item.topic.name}
                          </Tag>
                        ))}
                        style={{
                          alignItems: 'flex-start',
                        }}
                      />
                      <Button
                        kind="secondary"
                        overrides={{
                          BaseButton: {
                            style: ({ $theme }) => {
                              return {
                                minWidth: '80px',
                                justifyContent: 'space-around',
                                flexShrink: 0,
                                ...$theme.typography.font250,
                              };
                            },
                          },
                        }}
                      >
                        <GoStar style={{ flexShrink: 0 }} />
                        <Block paddingLeft="5px" paddingRight="5px">
                          {node.stargazers.totalCount}
                        </Block>
                      </Button>
                    </Block>
                  ))}
                </>
              ) : (
                <Loader />
              )}
            </Cell>
          </Grid>
        </Block>
      </Container>
    </>
  );
};

export default Github;
