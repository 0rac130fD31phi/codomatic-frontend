export const logError = (error: Error, errorInfo: React.ErrorInfo) => {
  const logMessage = `${new Date().toISOString()} - Error: ${error.message}\nStack: ${error.stack}\nInfo: ${JSON.stringify(errorInfo)}\n\n`;
  const existingLogs = localStorage.getItem('errorLogs') || '';
  localStorage.setItem('errorLogs', existingLogs + logMessage);
};

export const getErrorLogs = () => {
  return localStorage.getItem('errorLogs') || '';
};
