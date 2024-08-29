export const ANALYSIS_REQUEST = "ANALYSIS_REQUEST";
export const ANALYSIS_SUCCESS = "ANALYSIS_SUCCESS";
export const ANALYSIS_FAILURE = "ANALYSIS_FAILURE";

export interface AnaysisRequestAction {
  type: typeof ANALYSIS_REQUEST;
}

export interface AnalysisSuccessAction {
  type: typeof ANALYSIS_SUCCESS;
}

export interface AnalysisFailureAction {
  type: typeof ANALYSIS_FAILURE;
}

export type AnalysisActionTypes =
  | AnaysisRequestAction
  | AnalysisSuccessAction
  | AnalysisFailureAction;
