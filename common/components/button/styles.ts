export const getVariantType = (variant: string) => {
    switch (variant) {
        case 'primary':
            return 'bg-blue-500 hover:bg-blue-700 focus:shadow-outline-blue text-white border border-blue-600';
        case 'default':
            return 'bg-[#f5f5f7] hover:bg-[#e1e1e3] focus:shadow-outline-blue border-none text-white';
        case 'subtle':
            return 'bg-white border border-gray-300 hover:bg-gray-50 focus:shadow-outline-blue text-gray-700';
        case 'warning':
            return 'bg-warning-base hover:bg-warning-shade-1 focus:bg-warning-shade-1 text-white border-none';
        case "success":
            return 'bg-success-base hover:bg-success-shade-1 focus:bg-success-shade-1 text-white border-none';
        case "danger":
            return 'bg-danger-base hover:bg-danger-shade-1 focus:bg-danger-shade-1 text-white border-none';
        case "link":
            return 'bg-transparent hover:underline focus:bg-primary-shade-1 focus:underline text-primary-base border-transparent';
        default:
            return 'bg-blue-500 hover:bg-blue-700 text-white border-none';
    }
};

export const getVariant = (variant: string) => {
    switch (variant) {
        case 'normal':
            return '';
        case 'split':
            return 'border-tr-none border-br-none';
    }
}

export const getVariantSize = (variant: string) => {
    switch (variant) {
        case 'medium':
            return 'h-8';
        case 'small':
            return 'h-6';
    }
}

export const getSplitVariant = (variant: string) => {
    switch (variant) {
        case 'primary':
            return 'bg-primary-base border-none text-white hover:bg-[#3739bd] border-[#3739bd] focus:shadow-outline-blue';
        case 'default':
            return 'bg-[#f5f5f7] border-none text-white hover:bg-[#e1e1e3] border-[#e1e1e3] focus:shadow-outline-blue';
        case 'subtle':
            return 'bg-white border-none text-white hover:bg-[#bababc] border-[#e1e1e3] focus:shadow-outline-blue';
        case 'warning':
            return 'bg-warning-base border-warning-shade-1 text-white hover:border-warning-shade-1 hover:bg-warning-shade-1';
        case 'danger':
            return 'bg-danger-base border-danger-shade-1 text-white hover:border-warning-shade-1 hover:bg-warning-shade-1';
    }
}