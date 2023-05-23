import './styles.css'

export const getVariantSize = (size: string) => {
    switch (size) {
        case 'tiny':
            return 'h-3 w-3';
        case 'small':
            return 'h6 w-6';
        case 'medium':
            return 'h-8 w-8';
        case 'large':
            return 'h-12 w-12';
    }
}