'use client';
import React, { useCallback, useEffect, useState } from 'react';

export type NumberInputProps = {
    label?: string;
    start?: number;
    end?: number;
    value?: number;
    helpText?: string;
    hasError?: boolean;
    error?: string;
    required?: boolean;
    width?: string; // with units
    onChange?: (value: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (value: number, e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (value: number, e: React.FocusEvent<HTMLInputElement>) => void;
};

export function NumberInput(props: NumberInputProps): JSX.Element {
    const {
        label,
        start,
        end,
        value,
        helpText,
        hasError = false,
        error,
        required,
        onChange,
        onBlur,
        onFocus,
        width,
    } = props;

    const [numberValue, setNumberValue] = useState<number>();

    useEffect(() => {
        value !== undefined
            ? setNumberValue(value)
            : start && setNumberValue(start);
    }, [start, value]);

    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (start && Number(value) < start) {
            setNumberValue(start);
            return;
        }
        if (end && Number(value) > end) {
            setNumberValue(end);
            return;
        }
        setNumberValue(value !== undefined ? Number(value) : start ?? undefined);
        onChange && onChange(Number(value), event);
    };

    const handleNumberBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (start && Number(value) < start) {
            setNumberValue(start);
            return;
        }
        if (end && Number(value) > end) {
            setNumberValue(end);
            return;
        }
        setNumberValue(value !== undefined ? Number(value) : start ?? undefined);
        onBlur && onBlur(Number(value), event);
    };

    const handleNumberFocus = useCallback(
        (event: React.FocusEvent<HTMLInputElement>) => {
            onFocus && onFocus(Number(event.target.value), event);
        },
        [onFocus]
    );

    return (
        <div className="flex flex-col max-w-fit gap-x-2 select-none w-9" style={{ width: width }}>
            {label && (
                <div className="font-semibold text-sm leading-5 text-white">
                    {label}
                    {required && <span className="text-dnager-shade-1"> *</span>}
                </div>
            )}
            <input
                min={start?.toString()}
                max={end?.toString()}
                type="number"
                className={`outline-none h-8 p-1 bg-white border-gray-4 rounded-xs m-0 text-text-color-secondary text-sm leading-4 hover:border-primary-base focus:border-primary-base focus:shadow-outline-primary-tint-2 active:shadow-outline-primary-tint-2 
                ${hasError ? 'text-danger-shade-1 text-sm leading-5 mb-1' : undefined
                    }`}
                value={numberValue}
                onChange={handleNumberChange}
                onBlur={handleNumberBlur}
                onFocus={handleNumberFocus}
            />
            {(error || helpText) && (
                <div className="flex flex-col">
                    {error && <div className="text-danger-shade-1 text-sm leading-5 mb-1">{error}</div>}
                    {helpText && (
                        <div className="text-sm leading-5 text-text-color-primary">{helpText}</div>
                    )}
                </div>
            )}
        </div>
    );
}
