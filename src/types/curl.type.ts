import { METHODS } from "@/constants/curl.constant";

export type MethodType = typeof METHODS[number];

export interface MethodOption {
  value: MethodType;
  label: MethodType;
}
