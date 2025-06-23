export const METHODS = [
  'GET',
  'POST',
  'PUT',
  'DELETE',
  'PATCH',
  'HEAD',
  'OPTIONS',
] as const;

export const METHOD_OPTIONS = METHODS.map((method) => ({
  value: method,
  label: method,
}));
