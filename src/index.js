// @flow

export const APPLE_SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_AUTHORIZED = 3;
export const APPLE_SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_DENIED = 1;
export const APPLE_SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_NOT_DETERMINED = 0;
export const APPLE_SF_SPEECH_RECOGNIZER_AUTHORIZATION_STATUS_RESTRICTED = 0;

export type AppleSFSpeechRecognizerAuthorizationStatusAuthorized = 3;
export type AppleSFSpeechRecognizerAuthorizationStatusDenied = 1;
export type AppleSFSpeechRecognizerAuthorizationStatusNotDetermined = 0;
export type AppleSFSpeechRecognizerAuthorizationStatusRestricted = 0;

export type AppleSFSpeechRecognizerAuthorizationStatus = (
  | AppleSFSpeechRecognizerAuthorizationStatusAuthorized
  | AppleSFSpeechRecognizerAuthorizationStatusDenied
  | AppleSFSpeechRecognizerAuthorizationStatusNotDetermined
  | AppleSFSpeechRecognizerAuthorizationStatusRestricted
);
