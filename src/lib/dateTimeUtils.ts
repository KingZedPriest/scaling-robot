export function formatDateTime(dateTimeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
  
    return formattedDate;
  }
  
const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
  
    return date.toLocaleDateString(undefined, options);
};
  
export { formatDate };