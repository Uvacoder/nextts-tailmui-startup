import React, { ChangeEvent } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import emptyFieldCheck from '@utils/emptyFieldCheck'

interface Props {
    required?: boolean,
    inputError?: boolean,
    value: string,
    name: string,
    label: string,
    multiline?: boolean,
    type?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextFieldSimple = ({ inputError = false, required = true, value, name, label, onChange, multiline = false, type = 'text', ...props }: Props & TextFieldProps) => {
    return (
        <TextField
            required={required}
            error={inputError && emptyFieldCheck({ value }) ? true : false}
            helperText={inputError && emptyFieldCheck({ value }) ? `Please provide a ${label.toLowerCase()}` : ''}
            multiline={multiline}
            type={type}
            rows={7}
            name={name}
            label={label}
            variant="outlined"
            className="w-full h-full"
            value={value}
            autoComplete='off'
            onChange={onChange}
            {...props}

            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}

export default TextFieldSimple