export interface FormDataSchema {
  fields: {
    [fieldName: string]: FormField;
  };
}

export type FormField =
  | FormTextField
  | FormTextAreaField
  | FormIntegerField
  | FormFloatField
  | FormCheckboxField
  | FormRadioField
  | FormSelectField
  | FormDateField
  | FormDateTimeField
  | FormPictureListField;

export interface FormBaseField {
  label?: string;
  caption?: string;
  error?: string;
  required?: boolean;
  checkboxLabel?: string;
  condition?: FormFieldDisplayCondition;
}

export interface FormTextField extends FormBaseField {
  type: 'text';
}

export interface FormTextAreaField extends FormBaseField {
  type: 'textarea';
}

export interface FormIntegerField extends FormBaseField {
  type: 'integer';
  unit?: string;
}

export interface FormFloatField extends FormBaseField {
  type: 'float';
}

export interface FormCheckboxField extends FormBaseField {
  type: 'checkbox';
  checkboxLabel?: string;
}

export interface FormRadioField extends FormBaseField {
  type: 'radio';
  options: FormFieldOption[];
}

export interface FormSelectField extends FormBaseField {
  type: 'select';
  options: FormFieldSelectOption[];
}

export interface FormDateField extends FormBaseField {
  type: 'date';
}

export interface FormDateTimeField extends FormBaseField {
  type: 'datetime';
}

export interface FormPictureListField extends FormBaseField {
  type: 'picturelist';
}

export interface FormFieldOption {
  label: string;
  value: string;
}
export interface FormFieldSelectOption {
  label: string;
  id: string;
}

export interface FormFieldDisplayRule {
  field: string;
  value: string | number | boolean | null | undefined;
}

export interface FormFieldDisplayCondition {
  rules: FormFieldDisplayRule[];
  operator: 'OR' | 'AND';
}

export interface FormUISchema {
  sections: FormUISchemaSection[];
}

export interface FormUISchemaSection {
  title?: string;
  caption?: string;
  fields: string[];
}
