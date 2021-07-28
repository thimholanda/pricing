import React, { useRef, useEffect } from 'react';
import ReactSelect, {
    OptionTypeBase,
    Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { colors } from '../../styles/colors';
import { Error } from './styles';

interface Props extends SelectProps<OptionTypeBase> {
    name: string;
}

export default function Select({ name, ...rest }: Props) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map(
                        (option: OptionTypeBase) => option.value,
                    );
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    return (
        <>
            <ReactSelect
                isClearable={false}
                isSearchable={false}
                defaultValue={defaultValue}
                placeholder="Modalidade de antecipação"
                ref={selectRef}
                classNamePrefix="react-select"
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        text: `${colors.gray_placeholder}`,
                        neutral70: `${colors.gray_placeholder}`,
                        neutral80: `${colors.gray_placeholder}`,
                        neutral90: `${colors.gray_placeholder}`,
                        primary25: `${colors.yellow}`,
                        primary: `${colors.yellow}`,
                    },
                })}
                styles={{
                    control: styles => ({
                        ...styles,
                        height: 55,
                        borderRadius: 10,
                    }),
                }}
                {...rest}
            />
            {error && (
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
        </>
    );
}
