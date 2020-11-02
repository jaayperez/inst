import { NextPage } from 'next';
import Head from 'next/head';
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import Sticky from 'react-stickynode';
import { Block } from 'baseui/block';
import Container from '../components/UiElements/Container/Container';
import PageTitle from '../components/UiElements/PageTitle/PageTitle';
import ScrollSpyMenu from '../components/UiElements/ScrollSpyMenu/ScrollSpyMenu';

import termsPageData from '../data/termsPage';

const Privacy: NextPage<{}> = () => {
  const { title, date, content } = termsPageData;

  const menuItems: string[] = [];
  content.forEach((item) => {
    menuItems.push(item.title);
  });

  return (
    <>
      <Head>
        <title>{title} | INST.</title>
        <meta name="Description" content="Inst privacy page" />
      </Head>

      <Container>
        <PageTitle
          title={title}
          subtitle={`Last update: ${date}`}
          backdrop={false}
        />

        <Row>
          <Col md={4}>
            <Sticky top=".navbar" innerZ="1">
              <ScrollSpyMenu
                showCounter={true}
                isSeparator={true}
                items={menuItems}
                style={{ padding: '30px 0' }}
              />
            </Sticky>
          </Col>

          <Col md={8}>
            <Block paddingBottom={['270px', '370px']}>
              {content.map((item) => {
                const sectionID = item.title.split(' ').join('_');
                return (
                  <section
                    id={sectionID}
                    key={sectionID}
                    style={{ padding: '30px 0' }}
                  >
                    <Block
                      as="h2"
                      paddingBottom="20px"
                      overrides={{
                        Block: {
                          style: ({ $theme }) => {
                            return {
                              ...$theme.typography.font750,
                              color: $theme.colors.primaryA,
                            };
                          },
                        },
                      }}
                    >
                      {item.title}
                    </Block>
                    <Block
                      overrides={{
                        Block: {
                          style: ({ $theme }) => {
                            return {
                              ...$theme.typography.font200,
                              lineHeight: '26px',
                              color: $theme.colors.contentSecondary,
                            };
                          },
                        },
                      }}
                    >
                      <div
                        className="html-content"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></div>
                    </Block>
                  </section>
                );
              })}
            </Block>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Privacy;
