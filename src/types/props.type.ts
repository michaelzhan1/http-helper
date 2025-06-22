import { MethodType } from '@/types/curl.type';

export interface RequestBarProps {
  onSend: (method: MethodType, url: string) => void; // on send button click
}
