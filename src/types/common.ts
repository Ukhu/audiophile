export interface ITextInputProps {
  name: string;
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

export interface ICheckoutSummaryProps {
  showConfirmation: () => void;
}

export interface ICheckBoxProps {
  name: string;
  label: string;
  id: string;
}

export interface IButtonProps {
  text: string;
  variant: "filled" | "outline" | "ghost";
  color?: string;
  onClick?: () => void;
}
