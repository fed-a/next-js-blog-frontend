export const DESCRIPTION_MAX_LENGTH = 180;
export const TITLE_MAX_LENGTH = 110;

export function cutText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength - 3)}…`;
  }
  return text;
}

export function cutTitle(text: string): string {
  return cutText(text, TITLE_MAX_LENGTH);
}

export function cutDescription(text: string): string {
  return cutText(text, DESCRIPTION_MAX_LENGTH);
}
