import {
  Dropdown,
  TextFieldLabelStyles,
} from 'elephanz-rn-ui/src/components/inputs';
import {
  getIn,
  useFormikContext,
} from 'formik';
import React, {
  useEffect,
} from 'react';
import {
  View,
} from 'react-native';
import {
  DropdownTypes,
} from '../../types';
import {
  FieldError,
} from '../../Utils';
import {
  DropdownFieldValue,
  FieldPropsCommon,
} from '../types';
import {
  onChange,
} from '../utils';

type Props<T> = FieldPropsCommon<T> & DropdownFieldValue;

// eslint-disable-next-line max-len
export const DropdownFormField = <FormModel extends object>(props: Props<FormModel>) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    isSubmitting,
    setFieldTouched,
  } = useFormikContext<FormModel>();

  const {
    title,
    location,
    fieldOptions: {
      options,
      type = DropdownTypes.NORMAL,
      multiple,
      selectText,
      onSelect,
    },
  } = props;

  const value: string = getIn(values, location);
  const onValueChange = onChange(handleChange, location);
  const error = getIn(errors, location);
  const isTouched = getIn(touched, location);

  useEffect(() => {
    if (isSubmitting) {
      setFieldTouched(location);
    }
  }, [isSubmitting, location, setFieldTouched]);

  if (!values) {
    return null;
  }

  return (
    <View>
      <Dropdown
        options={options}
        onChange={onValueChange}
        value={value}
        label={title}
        multiple={multiple}
        selectText={selectText}
        type={type}
        onSelect={onSelect}
        labelStyle={TextFieldLabelStyles.STACKED}
      />
      <FieldError
        errors={error}
        touched={isTouched}
      />
    </View>
  );
};
