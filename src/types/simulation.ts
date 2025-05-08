
export interface SimulationState {
  ebitda: string;
  interestRate: string;
  multiple: string;
  factorScore: number;
  companyName: string;
  description: string;
}

export interface FieldStatus {
  ebitda: 'TBD' | 'OK';
  interestRate: 'TBD' | 'OK';
  multiple: 'TBD' | 'OK';
  factorScore: 'TBD' | 'OK';
  companyName: 'TBD' | 'OK';
  description: 'TBD' | 'OK';
}

export interface TimerState {
  hours: number;
  minutes: number;
  seconds: number;
}

export type Stage = 'ANALYSIS' | 'STRUCTURING' | 'NEGOTIATION' | 'CLOSING';
