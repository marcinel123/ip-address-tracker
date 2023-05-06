const validIpNumber = (/^(([0-9.]?)*)+$/);

export const validateIpAddress = (inputValue: string) => !!(inputValue === "" || !validIpNumber.test(inputValue))