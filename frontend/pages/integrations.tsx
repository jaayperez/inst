import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Fade from 'react-reveal/Fade';
import { FiPlus, FiCheck } from 'react-icons/fi';
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import Container from 'components/UiElements/Container/Container';
import PageTitle from 'components/UiElements/PageTitle/PageTitle';
import Carousel, { Slide } from 'components/UiElements/Carousel/Carousel';
import ListGridCard from 'components/UiElements/ListGridCard/ListGridCard';
import IntegrationsMenu from 'components/SideMenu/IntegrationsMenu';
import useDirection from 'utils/useDirection';
import { useQuery, gql } from '@apollo/client';
import { withApollo } from 'apollo/client';

const GET_INTEGRATIONS = gql`
  query {
    integration {
      id
      title
      shortDescription
      banner

      apps {
        id
        type
        image
        isInstalled
        description
      }
    }
  }
`;

function Integrations({ data, loading }: { data: any; loading: boolean }) {
  const [visibleApps, setApps] = useState(data);
  const [install, setInstall] = useState('');
  function onFilter(selectedItem: string) {
    if (selectedItem !== 'all') {
      const items = data.filter((item: any) =>
        item.type.includes(selectedItem)
      );
      setApps(items);
    } else {
      setApps(data);
    }
  }
  return (
    <Block paddingTop={['15px', '20px', '30px', '40px']}>
      <Row>
        <Col lg={3}>
          <IntegrationsMenu onClick={onFilter} />
        </Col>
        <Col lg={9}>
          <Row>
            {visibleApps.map((item: any) => (
              <Col md={6} xl={4} key={`integration-app--key${item.id}`}>
                <Fade>
                  <ListGridCard
                    style={{
                      padding: '20px 25px 22px',
                      boxShadow: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
                      marginTop: '20px',
                    }}
                    variant="grid"
                    thumb={item.image}
                    thumbHeight="60px"
                    title={item.title}
                    description={item.description}
                    btn={
                      <Button
                        kind="secondary"
                        size="compact"
                        shape="pill"
                        isLoading={item.id === install && loading}
                        // onClick={() => handleAppInstallation(item.id)}
                        overrides={{
                          BaseButton: {
                            style: () => {
                              return {
                                fontSize: '14px',
                                paddingLeft: '14px',
                                paddingRight: '14px',
                                color: item.isInstalled ? '#36AF00' : '#000000',
                              };
                            },
                          },
                        }}
                      >
                        {item.isInstalled ? (
                          <>
                            <FiCheck />
                            &nbsp;Installed
                          </>
                        ) : (
                          <>
                            <FiPlus />
                            &nbsp;Add
                          </>
                        )}
                      </Button>
                    }
                  />
                </Fade>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Block>
  );
}
const IntegrationPage: NextPage<{}> = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_INTEGRATIONS, {
    notifyOnNetworkStatusChange: true,
  });
  const [direction] = useDirection();

  if (!data) return null;
  const { title, shortDescription, banner, apps } = data.integration;
  return (
    <>
      <Head>
        <title>{title} | INST.</title>
        <meta name="Description" content="Inst integrations page" />
      </Head>

      <PageTitle title={title} subtitle={shortDescription} />
      <Container>
        <Carousel
          options={{ direction, autoplay: 5000 }}
          bullets={true}
          numberOfBullets={banner.length}
          carouselSelector="gallery"
          className="application"
          controls={false}
        >
          {banner.map((item: string, index: number) => (
            <Slide key={`gallery-key${index}`}>
              <img src={item} alt={`banner ${index}`} />
            </Slide>
          ))}
        </Carousel>

        <Integrations data={apps} loading={loading} />
      </Container>
    </>
  );
};
export default withApollo(IntegrationPage);
