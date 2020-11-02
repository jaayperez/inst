import React, { useState } from 'react';
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import {
  Header,
  Title,
  ButtonGroup,
} from '../../components/PageStyles/Checkout.styled';

const Address = () => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    area: '',
  });

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    console.log('Address form: ', state);
  };

  const handleResetForm = () => {
    setState({
      name: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      area: '',
    });
  };

  return (
    <>
      <Header style={{ borderBottom: 0 }}>
        <Title>Add Address</Title>
      </Header>

      <Row>
        <Col lg={6}>
          <FormControl label="Your Name">
            <Input
              onChange={handleOnChange}
              name="name"
              overrides={{
                InputContainer: {
                  style: () => {
                    return { backgroundColor: 'transparent' };
                  },
                },
              }}
            />
          </FormControl>
        </Col>
        <Col lg={6}>
          <FormControl label="Phone Number">
            <Input
              onChange={() => handleOnChange('phone')}
              overrides={{
                InputContainer: {
                  style: () => {
                    return { backgroundColor: 'transparent' };
                  },
                },
              }}
            />
          </FormControl>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <FormControl label="Address">
            <Input
              onChange={() => handleOnChange('address')}
              overrides={{
                InputContainer: {
                  style: () => {
                    return { backgroundColor: 'transparent' };
                  },
                },
              }}
            />
          </FormControl>
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <FormControl label="City">
            <Input
              onChange={() => handleOnChange('city')}
              overrides={{
                InputContainer: {
                  style: () => {
                    return { backgroundColor: 'transparent' };
                  },
                },
              }}
            />
          </FormControl>
        </Col>
        <Col lg={6}>
          <FormControl label="Zip code">
            <Input
              onChange={() => handleOnChange('zipCode')}
              overrides={{
                InputContainer: {
                  style: () => {
                    return { backgroundColor: 'transparent' };
                  },
                },
              }}
            />
          </FormControl>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <FormControl label="Area">
            <Input
              onChange={() => handleOnChange('area')}
              overrides={{
                InputContainer: {
                  style: () => {
                    return { backgroundColor: 'transparent' };
                  },
                },
              }}
            />
          </FormControl>
        </Col>
      </Row>

      <ButtonGroup>
        <Button
          onClick={handleOnSubmit}
          size="large"
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                return {
                  width: '131px',
                  ...$theme.typography.font250,
                };
              },
            },
          }}
        >
          Save
        </Button>
        <Button
          onClick={handleResetForm}
          kind="tertiary"
          size="large"
          overrides={{
            BaseButton: {
              style: ({ $theme }) => {
                return {
                  width: '131px',
                  ...$theme.typography.font250,
                };
              },
            },
          }}
        >
          Cancel
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Address;
