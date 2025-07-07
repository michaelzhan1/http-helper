import { MethodType } from '@/types/http.type';

export interface RequestBarProps {
  onSend: (method: MethodType, url: string) => void; // on send button click
}

export interface ListInputProps {
  items: [string, string][]; // list of items
  setItems: (items: [string, string][]) => void; // function to update the list of items
}
