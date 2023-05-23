export const getVariantType = (variant: string) => {
    switch (variant) {
        case 'default':
            return 'bg-gray-2 text-text-color-title border-gray-2';
        case 'default-light':
            return 'bg-gray-1 text-text-color-title border-gray-2';
        case 'primary':
            return 'bg-primary-base';
        case 'primary-light':
            return 'bg-primary-tint-1 text-primary-shade-1';
        case 'light':
            return 'bg-white text-text-color-title border-gray-2';
        case 'success':
            return 'bg-success-base';
        case 'success-light':
            return 'bg-success-tint-1 text-success-shade-1';
        case 'danger':
            return 'bg-danger-base';
        case 'danger-light':
            return 'bg-danger-tint-1 text-danger-shade-1';
        case 'warning':
            return 'bg-warning-base';
        case 'warning-light':
            return 'bg-warning-tint-1 text-warning-shade-1';
        case 'info':
            return 'bg-info-base';
        case 'info-light':
            return 'bg-info-tint-1 text-info-shade-1';
    }
}

export const getVariantSize = (variant: string) => {
    switch (variant) {
        case 'small':
            return 'h-4';
        case 'large':
            return 'h-6';
        case 'veryLarge':
            return 'h-8';
    }
}