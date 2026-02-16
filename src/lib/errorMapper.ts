/**
 * Centralized error mapper for translating error messages
 * Uses safe interpolation to prevent XSS attacks
 */

// Error codes that map to translation keys
export type ErrorCode =
  | 'generic'
  | 'networkError'
  | 'serverError'
  | 'validationError'
  | 'notFound'
  | 'unauthorized'
  | 'sessionExpired'
  | 'formSubmissionFailed'
  | 'invalidEmail'
  | 'requiredField'
  | 'tooShort'
  | 'tooLong';

// Custom error type with code
export interface AppError extends Error {
  code?: ErrorCode;
  statusCode?: number;
}

// Map HTTP status codes to error codes
const statusCodeToErrorCode: Record<number, ErrorCode> = {
  400: 'validationError',
  401: 'unauthorized',
  403: 'unauthorized',
  404: 'notFound',
  500: 'serverError',
  502: 'serverError',
  503: 'serverError',
};

/**
 * Maps an error to a translation key
 * @param error - The error object or string
 * @returns The translation key for the error
 */
export function getErrorTranslationKey(error: unknown): ErrorCode {
  // Handle AppError with code
  if (error && typeof error === 'object' && 'code' in error) {
    const appError = error as AppError;
    if (appError.code) {
      return appError.code;
    }
    // Map by status code if available
    if (appError.statusCode && statusCodeToErrorCode[appError.statusCode]) {
      return statusCodeToErrorCode[appError.statusCode];
    }
  }

  // Handle network errors
  if (error instanceof TypeError && error.message.includes('fetch')) {
    return 'networkError';
  }

  // Handle common error patterns from error messages
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    if (message.includes('network') || message.includes('connection')) {
      return 'networkError';
    }
    if (message.includes('unauthorized') || message.includes('authentication')) {
      return 'unauthorized';
    }
    if (message.includes('not found') || message.includes('404')) {
      return 'notFound';
    }
    if (message.includes('validation') || message.includes('invalid')) {
      return 'validationError';
    }
    if (message.includes('session') || message.includes('expired')) {
      return 'sessionExpired';
    }
  }

  // Default to generic error
  return 'generic';
}

/**
 * Gets a user-facing error message using the translation function
 * @param error - The error object
 * @param t - Translation function from useTranslations('errors')
 * @returns The translated error message
 */
export function getUserFacingErrorMessage(
  error: unknown,
  t: (key: ErrorCode) => string
): string {
  const errorKey = getErrorTranslationKey(error);
  return t(errorKey);
}

/**
 * Creates an AppError with a specific code
 * @param message - The error message (for logging)
 * @param code - The error code for translation
 * @param statusCode - Optional HTTP status code
 * @returns AppError instance
 */
export function createAppError(
  message: string,
  code: ErrorCode,
  statusCode?: number
): AppError {
  const error = new Error(message) as AppError;
  error.code = code;
  error.statusCode = statusCode;
  return error;
}
