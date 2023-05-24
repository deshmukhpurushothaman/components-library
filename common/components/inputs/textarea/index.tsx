import React, { useEffect, useState } from 'react';

export type TextAreaInputProps = {
    label?: string;
    value?: string;
    helpText?: string;
    error?: string;
    required?: boolean;
    onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (value: string, e: React.FocusEvent<HTMLTextAreaElement>) => void;
    fullWidth?: boolean;
    minHeight?: string;
};

export function TextAreaInput(props: TextAreaInputProps): JSX.Element {
    const {
        label,
        value = '',
        helpText,
        error,
        required,
        onChange,
        onBlur,
        onFocus,
        fullWidth = false,
        minHeight,
    } = props;

    const [textValue, setTextValue] = useState<string>();

    useEffect(() => {
        setTextValue(value);
    }, [value]);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setTextValue(value);
        onChange && onChange(value, e);
    };

    const handleTextBlur = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onBlur && onBlur(e.target.value, e);
    };

    const handleTextFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        onFocus && onFocus(e.target.value, e);
    };

    return (
        <div
            className={`flex flex-col w-60 gap-2 outline-none min-h-[96px] bg-white border-gray-4 rounded-xs m-0 text-text-color-primary ${fullWidth ? 'w-full' : ''
                }`}
        >
            {label && (
                <div className="text-bold text-sm leading-5 text-text-color-secondary">
                    {label}
                    {required && <span className="text-danger-shade-1"> *</span>}
                </div>
            )}
            <textarea
                className={`outline-none min-h-[96px] bg-white border-gray-4 rounded-xs m-0 text-text-color-secondary ${error ? 'text-danger-shade-1 text-sm leading-5 m-1' : ''
                    }`}
                value={textValue}
                onChange={handleTextChange}
                onBlur={handleTextBlur}
                onFocus={handleTextFocus}
                style={{ minHeight: minHeight }}
            >
                {textValue}
            </textarea>
            <div className="flex flex-col">
                {error && <div className="border-danger-shade-1 m-0">{error}</div>}
                {helpText && (
                    <div className="text-sm leading-5 text-text-color-primary">{helpText}</div>
                )}
            </div>
        </div>
    );
}
