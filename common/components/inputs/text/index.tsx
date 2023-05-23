'use client'
import React, {
    ForwardedRef,
    forwardRef,
    memo,
    useEffect,
    useState,
} from 'react';


export const TEXT_INPUT_TYPES = {
    DEFAULT: 'default',
    PASSWORD: 'password',
};

export type TextInputProps = {
    type?: string;
    isTextHidden?: boolean;
    label?: string | JSX.Element;
    value?: string;
    placeholder?: string;
    helpText?: string;
    hasError?: boolean;
    error?: string;
    required?: boolean;
    fullWidth?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (value: string, e: React.FocusEvent<HTMLInputElement>) => void;
    onRightIconClick?: () => void;
    onLeftIconClick?: () => void;
    onKeyDown?: (code: string, text: string) => void;
};

const TextInputComponent = forwardRef(
    (props: TextInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
        const {
            isTextHidden = false,
            label,
            value = '',
            placeholder,
            helpText,
            hasError = false,
            error,
            required,
            fullWidth = false,
            readOnly = false,
            disabled = false,
            leftIcon,
            rightIcon,
            onClick,
            onChange,
            onBlur,
            onFocus,
            onRightIconClick,
            onLeftIconClick,
            onKeyDown = () => { },
        } = props;

        const [textValue, setTextValue] = useState<string>('');

        useEffect(() => {
            value === undefined ? setTextValue('') : setTextValue(value);
        }, [value]);

        const handleTextClick = (evt: React.MouseEvent<HTMLInputElement>) => {
            onClick && onClick(evt);
        };

        const handleTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
            const value = evt.target.value;
            setTextValue(value);
            onChange && onChange(value, evt);
        };

        const handleTextBlur = (evt: React.ChangeEvent<HTMLInputElement>) => {
            onBlur && onBlur(evt.target.value, evt);
        };

        const handleTextFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
            onFocus && onFocus(evt.target.value, evt);
        };

        const handleLeftIconClick = (evt: React.MouseEvent<HTMLDivElement>) => {
            if (onLeftIconClick) {
                evt.stopPropagation();
                onLeftIconClick();
            }
        };

        const handleRightIconClick = (evt: React.MouseEvent<HTMLDivElement>) => {
            if (onRightIconClick) {
                evt.stopPropagation();
                onRightIconClick();
            }
        };

        return (
            <div
                className={
                    disabled
                        ? 'opacity-50 cursor-not-allowed select-none'
                        : 'flex flex-col w-full'
                }
                style={{ width: fullWidth ? '100%' : '' }}
            >
                {label && (
                    <div
                        className="font-semibold text-sm leading-5 text-text-color-primary mb-2"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {label}
                        {required && <span className="text-danger-shade-1"> *</span>}
                    </div>
                )}
                <div
                    className={`flex items-center bg-white border-gray-3 rounded-sm m-0 text-text-color-secondary outline-none h-8 p-1  
                    ${hasError || error ? 'text-danger-shade-1 text-sm leading-5 mt-2' : undefined
                        }`}
                >
                    {leftIcon && (
                        <div
                            className="h-4 w-4 flex mr-2"
                            onClick={handleLeftIconClick}
                        >
                            {leftIcon}
                        </div>
                    )}
                    <input
                        type={
                            isTextHidden
                                ? TEXT_INPUT_TYPES.PASSWORD
                                : TEXT_INPUT_TYPES.DEFAULT
                        }
                        className="outline-none border-none text-sm leading-4 p-0 w-full h-full"
                        value={textValue}
                        onChange={handleTextChange}
                        onBlur={handleTextBlur}
                        onFocus={handleTextFocus}
                        placeholder={placeholder}
                        onClick={handleTextClick}
                        tabIndex={2}
                        readOnly={readOnly}
                        disabled={disabled}
                        onKeyDown={(evt) => {
                            onKeyDown(evt.key, textValue);
                        }}
                        ref={ref}
                    />
                    {rightIcon && (
                        <div
                            className="h-4 w-4 flex ml-2"
                            onClick={handleRightIconClick}
                        >
                            {rightIcon}
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    {error && <div className="text-danger-shade-1 text-sm leading-5 mt-2">{error}</div>}
                    {helpText && (
                        <div className="text-text-color-primary text-sm leading-5 mt-2">{helpText}</div>
                    )}
                </div>
            </div>
        );
    }
);

export const TextInput = memo(TextInputComponent);
