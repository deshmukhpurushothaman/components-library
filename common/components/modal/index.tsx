import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Button, ButtonProps, BUTTON_TYPES } from '../button';
// import { Scrim } from '../scrim';

import { IconLeftArrowAlt } from '../../icons/IconLeftArrowAlt';
import { IconClose } from '../../icons/IconClose';

export const MODAL_SIZES = {
    DEFAULT: 'default',
    SMALL: 'small',
    LARGE: 'large',
    VERY_LARGE: 'veryLarge',
};

export const MODAL_TYPES = {
    DEFAULT: 'default',
    WARNING: 'warning',
    DANGER: 'danger',
};

type ModalButtonProps = Pick<
    ButtonProps,
    'disabled' | 'loading' | 'leftIcon' | 'rightIcon'
>;

export type ModalProps = {
    title?: string;
    open: boolean;
    children: React.ReactNode;
    width?: string;
    maxHeight?: string;
    size?: string;
    type?: string;
    hasOverlay?: boolean;
    shouldCloseOnClickOverlay?: boolean;
    closable?: boolean;
    onClose?: () => void;
    onOK?: () => void;
    okText?: string;
    okButtonProps?: ModalButtonProps;
    onCancel?: () => void;
    cancelText?: string;
    cancelButtonProps?: ModalButtonProps;
    headerRenderer?: () => JSX.Element;
    footerRenderer?: () => JSX.Element;
    goBack?: () => void;
};

export function Modal(props: ModalProps): JSX.Element | null {
    const {
        title = 'Create',
        open,
        children,
        width,
        maxHeight,
        size = MODAL_SIZES.DEFAULT,
        type = MODAL_TYPES.DEFAULT,
        hasOverlay = true,
        shouldCloseOnClickOverlay = false,
        closable = false,
        onClose,
        onOK,
        okText = 'Confirm',
        okButtonProps = {
            loading: false,
            disabled: false,
        },
        onCancel,
        cancelText = 'Cancel',
        cancelButtonProps = {
            loading: false,
            disabled: false,
        },
        headerRenderer,
        footerRenderer,
        goBack,
    } = props;

    // @ts-ignore
    const rootElement = document.getElementById('root');

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        setVisible(open);
    }, [open]);

    const onClickOverlay = () => {
        shouldCloseOnClickOverlay && setVisible(false);
    };

    const handleClose = () => {
        setVisible(false);
        onClose && onClose();
    };

    const handleCancelButton = () => {
        onCancel && onCancel();
    };

    const getActionButton = () => {
        const handleButton = () => {
            onOK && onOK();
        };
        switch (true) {
            case type === MODAL_TYPES.DEFAULT:
                return (
                    <Button
                        type={BUTTON_TYPES.PRIMARY}
                        onClick={handleButton}
                        loading={okButtonProps.loading}
                        disabled={okButtonProps.disabled}
                        leftIcon={okButtonProps.leftIcon}
                        rightIcon={okButtonProps.rightIcon}
                    >
                        {okText}
                    </Button>
                );
            case type === MODAL_TYPES.WARNING:
                return (
                    <Button
                        type={BUTTON_TYPES.WARNING}
                        onClick={handleButton}
                        loading={okButtonProps.loading}
                        disabled={okButtonProps.disabled}
                        leftIcon={okButtonProps.leftIcon}
                        rightIcon={okButtonProps.rightIcon}
                    >
                        {okText}
                    </Button>
                );
            case type === MODAL_TYPES.DANGER:
                return (
                    <Button
                        type={BUTTON_TYPES.DANGER}
                        onClick={handleButton}
                        loading={okButtonProps.loading}
                        disabled={okButtonProps.disabled}
                        leftIcon={okButtonProps.leftIcon}
                        rightIcon={okButtonProps.rightIcon}
                    >
                        {okText}
                    </Button>
                );
        }
    };

    return rootElement && visible
        ? ReactDOM.createPortal(
            <div className={`flex justify-center items-center h-screen w-screen bg-transparent mx-auto absolute inset-0`}>
                {/* {hasOverlay && <Scrim onClick={onClickOverlay} />} */}
                <div
                    className={`kl-modal-wrapper kl-modal-${size} `}
                    style={{ width: width }}
                >
                    {headerRenderer ? (
                        headerRenderer()
                    ) : (
                        <div className="flex justify-between items-center px-5 py-4 ">
                            <div className="flex items-center">
                                {goBack && (
                                    <div className="flex mr-2 cursor-pointer" onClick={goBack}>
                                        <IconLeftArrowAlt size="20" />
                                    </div>
                                )}
                                <div className="text-bold text-l leading-6">{title}</div>
                            </div>
                            {closable && (
                                <div
                                    className="flex cursor-pointer"
                                    onClick={handleClose}
                                >
                                    <IconClose size="20" />
                                </div>
                            )}
                        </div>
                    )}
                    <div
                        className="flex flex-col h-full w-full overflow-y-auto"
                        style={{ maxHeight: maxHeight || undefined }}
                    >
                        <div>{children}</div>
                    </div>
                    {footerRenderer ? (
                        footerRenderer()
                    ) : (
                        <div className="flex justify-end items-center gap-2 px-6 py-4">
                            <Button
                                type={BUTTON_TYPES.DEFAULT}
                                onClick={handleCancelButton}
                                loading={cancelButtonProps.loading}
                                disabled={cancelButtonProps.disabled}
                                leftIcon={cancelButtonProps.leftIcon}
                                rightIcon={cancelButtonProps.rightIcon}
                            >
                                {cancelText}
                            </Button>
                            {getActionButton()}
                        </div>
                    )}
                </div>
            </div>,
            rootElement
        )
        : null;
}
