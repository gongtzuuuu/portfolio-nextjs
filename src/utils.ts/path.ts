export const normalizePath = (path: string) =>
  path.endsWith('/') ? path.slice(0, -1) : path;
