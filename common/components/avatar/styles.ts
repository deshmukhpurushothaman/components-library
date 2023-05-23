export const getVariantType = (variant: string) => {
    switch (variant) {
        case 'tiny':
            return 'w-4 h-4 text-xs';
        case 'small':
            return 'w-6 h-6 text-sm';
        case 'medium':
            return 'w-8 h-8 text-base';
        case 'large':
            return 'w-12 h-12 text-lg';
        case 'veryLarge':
            return 'w-16 h-16 text-xl';
    }
}

export const getVariantColor = (variant: string) => {
    switch (variant) {
        case 'default':
            return 'bg-gray-1';
        case 'primary':
            return 'bg-primary-tint-2';
        case 'success':
            return 'bg-success-tint-2';
        case 'warning':
            return 'bg-warning-tint-2';
        case 'danger':
            return 'bg-danger-tint-2';
        case 'info':
            return 'bg-info-tint-2';
    }
}