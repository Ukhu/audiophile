export interface ITextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  full?: boolean;
}

export interface IQuantityInput {
  small?: boolean;
  quantity: number;
  onChange: (quantity: number) => void;
}

export interface IOrderConfirmationProps {
  hide: () => void;
}

export interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export interface IMenuDropdownProps {
  hideMenu: () => void;
}

export interface IHeaderProps {
  variant?: "filled" | "transparent";
}

export interface IRadioInputProps {
  name: string;
  label: string;
  id: string;
  value: string;
}

export interface IButtonProps {
  text: string;
  variant: "filled" | "outline" | "ghost";
  color?: string;
  onClick?: () => void;
}
