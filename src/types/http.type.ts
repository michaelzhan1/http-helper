import { METHODS } from "@/constants/http.constant";

export type MethodType = typeof METHODS[number];

export interface MethodOption {
  value: MethodType;
  label: MethodType;
}

export interface EelHttpResponse {
  status: number;
  headers: Record<string, string>;
  body: string;
}
