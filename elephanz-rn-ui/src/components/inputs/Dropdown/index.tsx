import {
  Item,
  Picker,
} from 'native-base';
import React,
{
  useEffect,
  useState,
} from 'react';
import {
  Modal,
  TouchableOpacity,
} from 'react-native';
import {
  DropdownProps,
} from './types';
import {
  defaultStyles,
} from './styles';
import {
  useStyles,
  useTheme,
} from '../../../theming';
import {
  TextFieldLabelStyles,
} from '../TextField';
import {
  getItemLabelProp,
} from './utils';
import {
  ExtendedSVG,
  Typography,
} from '../../dataDisplay';
import {
  DropdownTypes,
} from '../../GeneralFormView';
import {
  MultiSelectModal,
} from './MultiSelectModal';
import chevronDown from '../../../assets/images/chevronDown.svg';

export const Dropdown = (props: DropdownProps) => {
  const {
    onChange,
    value = undefined,
    labelStyle = TextFieldLabelStyles.STACKED,
    itemProps,
    multiple,
    selectText = 'Select',
    onSelect,
    options,
    arrowIcon,
    label,
    isRequired,
    type = DropdownTypes.NORMAL,
  } = props;
  const {
    selectStyle,
  } = useStyles(defaultStyles);
  const {
    theme: {
      spacing: {
        spacing,
      },
    },
  } = useTheme();
  const [multipleSelectionLabel, setMultipleSelectionLabel] = useState('');
  const setLabel = (values: string[]) => {
    const newMultipleSelectionLabel = options.map((option) => (values.includes(option.value)
      ? option.label : '')).join(' ');
    setMultipleSelectionLabel(newMultipleSelectionLabel);
  };

  useEffect(() => {
    if (multiple && !!value) {
      setLabel(value as string[]);
    }
  });

  const selectedLabel = options.filter((option) => option.value === value)[0]?.label;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <MultiSelectModal
          options={options}
          values={value as string[]}
          onSelect={(values) => {
            setModalVisible(false);
            onChange(values);
            setLabel(values);
          }}
        />
      </Modal>
      <Item
        {...getItemLabelProp(labelStyle)}
        style={[
          selectStyle('item'),
          {
            width: type === DropdownTypes.NORMAL ? '100%' : spacing(10.5),
          },
        ]}
        {...itemProps}
      >
        <TouchableOpacity
          disabled={!multiple}
          activeOpacity={0}
          onPress={() => {
            if (multiple) {
              setModalVisible(true);
            }
          }}
          style={selectStyle('pseudoView')}
        >
          <Typography
            isCustomColor
            numberOfLines={1}
            ellipsizeMode="tail"
            color="title"
            customStyles={() => ({
              text: selectStyle('value'),
            })}
          >
            {multiple ? multipleSelectionLabel : selectedLabel || label}
            {isRequired ? ' *' : ''}
          </Typography>
          <ExtendedSVG
            svgFile={arrowIcon || chevronDown}
            style={[
              selectStyle('chevron'),
            ]}
          />
        </TouchableOpacity>

        {!multiple && (
          <Picker
            style={[
              selectStyle('picker'),
              {
                display: multiple ? 'none' : 'flex',
              },
            ]}
            mode="dropdown"
            selectedValue={value}
            onValueChange={(itemValue) => {
              if (itemValue !== 0) {
                onChange(itemValue);
                if (onSelect) {
                  onSelect(itemValue);
                }
              }
            }}
          >
            <Picker.Item label={selectText} value={0} />
            {options?.map((option) => (
              <Picker.Item label={option.label} value={option.value} />
            ))}
          </Picker>
        )}
      </Item>
    </>
  );
};

export * from './types';
