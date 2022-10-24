export interface SelectProps {
    items: string[];
    value?: string;
    placeholder?: string;
    onChange: (value?: string) => void
}