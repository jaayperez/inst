import { FormDataSchema, FormUISchema } from './types';

export const dataSchema: FormDataSchema = {
  fields: {
    name: {
      type: 'text',
      label: 'Your Name',
      caption: 'Please use 32 characters at maximum',
      required: true,
    },
    email: {
      type: 'text',
      label: 'Your Email',
      caption: 'johndoe@demo.io',
      required: true,
    },
    dateOfBirth: {
      type: 'date',
      label: 'Date of Birth',
    },
    favoriteColor: {
      label: 'Your Favorite Color',
      type: 'select',
      options: [
        { label: 'AliceBlue', id: '#F0F8FF' },
        { label: 'AntiqueWhite', id: '#FAEBD7' },
        { label: 'Aqua', id: '#00FFFF' },
        { label: 'Aquamarine', id: '#7FFFD4' },
        { label: 'Azure', id: '#F0FFFF' },
        { label: 'Beige', id: '#F5F5DC' },
      ],
    },
    aboutYourself: {
      label: 'About Yourself',
      type: 'textarea',
      caption: 'Please use 150 characters at maximum',
      required: true,
    },
    radioGroup: {
      label: 'Your Gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ],
    },
    profileStatus: {
      type: 'checkbox',
      label: 'Profile Status',
      checkboxLabel: 'Active',
      required: true,
    },
  },
};

export const uiSchema: FormUISchema = {
  sections: [
    {
      title: 'Formik Form',
      fields: [
        'name',
        'email',
        'dateOfBirth',
        'favoriteColor',
        'aboutYourself',
        'radioGroup',
        'profileStatus',
      ],
    },
  ],
};
