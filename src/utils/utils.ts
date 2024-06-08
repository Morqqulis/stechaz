// For convert string in Metadata
export const convertString = (string: string) => string.charAt(0).toUpperCase() + string.slice(1).split('-').join(' ')
