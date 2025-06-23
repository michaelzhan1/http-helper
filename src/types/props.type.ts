import { MethodType } from '@/types/http.type';

export interface RequestBarProps {
  onSend: (method: MethodType, url: string) => void; // on send button click
}
