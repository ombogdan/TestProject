import { format, parseISO } from 'date-fns';

export function dateFormat(date?: Date, formatDate?: string) {
  if (date && formatDate) {
    const dateIsoString = new Date(date)?.toISOString();
    return format(parseISO(dateIsoString), formatDate);
  }
  return '';
}
