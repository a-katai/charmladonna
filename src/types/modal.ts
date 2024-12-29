export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface VideoModalProps extends ModalProps {
  videoId: string;
}

export interface ClickPosition {
  x: number;
  y: number;
} 