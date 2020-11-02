import React, { useState } from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { Block } from 'baseui/block';
import { Button } from 'baseui/button';
import { Modal, ModalBody } from 'baseui/modal';

const Payment = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const handlePayment = (type: string) => {
    setLoading(true);
    setPaymentMethod(type);

    setTimeout(() => {
      setLoading(false);
      setVisible(true);
    }, 600);
  };

  return (
    <Block marginLeft="-16px" marginRight="-16px">
      <Button
        kind="minimal"
        isLoading={loading && paymentMethod === 'paypal'}
        onClick={() => handlePayment('paypal')}
      >
        <img
          src={require('../../assets/images/payment/paypal.png')}
          alt="paypal"
        />
      </Button>
      <Button
        kind="minimal"
        isLoading={loading && paymentMethod === 'mastercard'}
        onClick={() => handlePayment('mastercard')}
      >
        <img
          src={require('../../assets/images/payment/mastercard.png')}
          alt="mastercard"
        />
      </Button>
      <Button
        kind="minimal"
        isLoading={loading && paymentMethod === 'visa'}
        onClick={() => handlePayment('visa')}
      >
        <img src={require('../../assets/images/payment/visa.png')} alt="visa" />
      </Button>

      <Modal
        onClose={() => {
          setVisible(false);
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
        <ModalBody style={{ overflow: 'hidden' }}>
          <Block
            overrides={{
              Block: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '45px 30px',
                },
              },
            }}
          >
            <IoIosCheckmarkCircleOutline
              size="4em"
              color="#3AA76D"
              style={{ marginBottom: '20px' }}
            />

            <Block
              as="h2"
              overrides={{
                Block: {
                  style: ({ $theme }) => {
                    return {
                      ...$theme.typography.font750,
                      color: $theme.colors.primary,
                      marginBottom: '30px',
                      '@media only screen and (max-width: 480px)': {
                        ...$theme.typography.font650,
                        marginBottom: '20px',
                      },
                    };
                  },
                },
              }}
            >
              Order Placed
            </Block>

            <Block as="p" marginBottom="15px">
              <Block
                as="strong"
                overrides={{
                  Block: {
                    style: ({ $theme }) => {
                      return { color: $theme.colors.primary };
                    },
                  },
                }}
              >
                Order ID :{' '}
              </Block>
              <Block as="span">123djbre4</Block>
            </Block>

            <Block as="p" marginBottom="15px">
              <Block
                as="strong"
                overrides={{
                  Block: {
                    style: ({ $theme }) => {
                      return { color: $theme.colors.primary };
                    },
                  },
                }}
              >
                Delivery :{' '}
              </Block>
              <Block as="span">within 3-5 working days</Block>
            </Block>

            <Block as="p" marginBottom="15px">
              <Block
                as="strong"
                overrides={{
                  Block: {
                    style: ({ $theme }) => {
                      return { color: $theme.colors.primary };
                    },
                  },
                }}
              >
                Thanks for your order :{' '}
              </Block>
              <Block as="span">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                aliquid beatae ipsam quisquam voluptatem tenetur.
              </Block>
            </Block>
          </Block>
        </ModalBody>
      </Modal>
    </Block>
  );
};

export default Payment;
