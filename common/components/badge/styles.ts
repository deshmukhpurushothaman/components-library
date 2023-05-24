export const getVariantColor = (variant: string) => {
    switch (variant) {
        case 'default':
            return 'bg-gray-2';
        case 'primary':
            return 'bg-primary-base';
        case 'danger':
            return 'bg-danger-base';
        case 'success':
            return 'bg-success-tint-1';
        case 'warning':
            return 'bg-danger-tint-1';
    }
}

export const getVariantCount = (variant: string) => {
    switch (variant) {
        case 'plus':
            return 'rounded-2xl';
        case 'count':
            return 'rounded-[50%]'
    }
}