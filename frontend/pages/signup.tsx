import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import Container from '../components/UiElements/Container/Container';

const Signup: NextPage<{}> = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Signup | INST.</title>
        <meta name="Description" content="Inst signup page" />
      </Head>

      <Container>
        <Block
          overrides={{
            Block: {
              style: {
                minHeight: 'calc(100vh - 213px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          }}
        >
          <Block
            as="h1"
            overrides={{
              Block: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font1250,
                    fontWeight: 700,
                    marginBottom: '30px',
                  };
                },
              },
            }}
          >
            Sign up for INST.
          </Block>

          <Button
            onClick={() => router.push('/')}
            startEnhancer={() => <IoLogoFacebook size="1.25rem" />}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font250,
                    width: '100%',
                    maxWidth: '260px',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    marginTop: '10px',
                    justifyContent: 'flex-start',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    backgroundColor: '#4267B2',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#4267B2',
                      opacity: 0.95,
                    },
                  };
                },
              },
            }}
          >
            Continue with Facebook
          </Button>

          <Button
            onClick={() => router.push('/')}
            startEnhancer={() => <IoLogoTwitter size="1.25rem" />}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => {
                  return {
                    ...$theme.typography.font250,
                    backgroundColor: '#1DA1F2',
                    width: '100%',
                    maxWidth: '260px',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    borderBottomLeftRadius: '4px',
                    borderBottomRightRadius: '4px',
                    marginTop: '10px',
                    justifyContent: 'flex-start',
                    paddingLeft: '25px',
                    paddingRight: '25px',
                    ':hover': {
                      backgroundColor: '#1DA1F2',
                      opacity: 0.95,
                    },
                  };
                },
              },
            }}
          >
            Continue with Twitter
          </Button>
        </Block>
      </Container>
    </>
  );
};

export default Signup;
