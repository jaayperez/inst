import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Select } from 'baseui/select';
import { Textarea } from 'baseui/textarea';
import { Checkbox } from 'baseui/checkbox';
import { RadioGroup, Radio } from 'baseui/radio';
import { Datepicker } from 'baseui/datepicker';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';

type Props = any;

const HookForm: React.FC<Props> = props => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const [select, setSelect] = useState([]);
  const [datepicker, setDatepicker] = useState([]);
  const [aboutYourself, setAboutYourself] = useState('');
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState('1');

  useEffect(() => {
    register({ name: 'dateOfBirth' });
    register({ name: 'favoriteColor' });
    register({ name: 'aboutYourself' });
    register({ name: 'gender' });
  }, [register]);

  const onSubmit = data => {
    console.log(data);
    alert(JSON.stringify(data, null, 4));
  };

  const handleSelect = ({ value }) => {
    setValue('favoriteColor', value);
    setSelect(value);
  };

  const handleDatepicker = ({ date }) => {
    setValue('dateOfBirth', date);
    setDatepicker(date);
  };

  const handleTextarea = event => {
    const value = event.target.value;
    setAboutYourself(value);
    setValue('aboutYourself', value);
  };

  const handleRadioGroup = event => {
    setValue('gender', event.currentTarget.value);
    setRadio(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Block marginBottom="30px">
        <FormControl
          label="Your Name"
          caption="Please use 32 characters at maximum"
          error={errors.name && 'This field is required'}
        >
          <Input
            name="name"
            inputRef={register({ required: true, maxLength: 32 })}
            overrides={{
              InputContainer: {
                style: () => {
                  return { backgroundColor: 'transparent' };
                },
              },
            }}
          />
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl
          label="Your Email"
          caption="johndoe@demo.io"
          error={errors.email && 'Please enter a valid email address'}
        >
          <Input
            name="email"
            inputRef={register({
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            overrides={{
              InputContainer: {
                style: () => {
                  return { backgroundColor: 'transparent' };
                },
              },
            }}
          />
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl label="Date of Birth">
          <Datepicker value={datepicker} onChange={handleDatepicker} />
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl
          label="Your Favorite Color"
          caption="Select your favorite color"
        >
          <Select
            id="select-id"
            value={select}
            onChange={handleSelect}
            options={[
              { id: 'AliceBlue', color: '#F0F8FF' },
              { id: 'AntiqueWhite', color: '#FAEBD7' },
              { id: 'Aqua', color: '#00FFFF' },
              { id: 'Aquamarine', color: '#7FFFD4' },
              { id: 'Azure', color: '#F0FFFF' },
              { id: 'Beige', color: '#F5F5DC' },
            ]}
            labelKey="id"
            valueKey="color"
            placeholder=""
            overrides={{
              ControlContainer: {
                style: () => {
                  return { backgroundColor: 'transparent' };
                },
              },
            }}
          />
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl
          label="About Yourself"
          caption="Please use 150 characters at maximum"
        >
          <Textarea
            value={aboutYourself}
            onChange={handleTextarea}
            overrides={{
              InputContainer: {
                style: () => {
                  return { backgroundColor: 'transparent' };
                },
              },
            }}
          />
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl label="Your Gender">
          <RadioGroup name="gender" value={radio} onChange={handleRadioGroup}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </RadioGroup>
        </FormControl>
      </Block>

      <Block marginBottom="30px">
        <FormControl
          label="Profile Status"
          error={errors.profileStatus && 'This field is required'}
        >
          <Checkbox
            inputRef={register({ required: true })}
            name="profileStatus"
            checked={checked}
            onChange={() => setChecked(!checked)}
          >
            Active
          </Checkbox>
        </FormControl>
      </Block>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default HookForm;
