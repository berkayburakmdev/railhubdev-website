// Navigation helper for GitHub Pages compatibility
export function getPath(path: string): string {
  // In production (GitHub Pages), add base path
  if (import.meta.env.PROD) {
    return `/railhubdev-website${path}`;
  }
  // In development, use relative paths
  return path;
}
