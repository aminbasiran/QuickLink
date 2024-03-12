export const validateURL = (url) => {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const isValidUrl = urlRegex.test(url);
    return isValidUrl
}