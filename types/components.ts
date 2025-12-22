export type ColorSchema =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'muted'
  | 'border';

export type Variant = 'solid' | 'outline' | 'ghost' | 'link';

export interface BaseComponentProps {
  colorSchema?: ColorSchema;
  variant?: Variant;
  className?: string;
}

export interface ButtonProps extends BaseComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export interface CardProps extends BaseComponentProps {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
}

export interface InputProps extends BaseComponentProps {
  id?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  min?: string;
  max?: string;
}

export interface TextareaProps extends BaseComponentProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  size?: 'sm' | 'md' | 'lg';
}