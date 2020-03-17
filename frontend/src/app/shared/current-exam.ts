export interface CurrentExam {
  institution: string;
  cough: string; // 'no' | 'modest' | 'severe';
  breathShortness: string; // 'no' | 'modest' | 'severe';
  fever: boolean;
  other: string;
  abroad: boolean;
  contactWithFeverPerson: boolean;
  contactWithCovidPerson: boolean;
  date: string;
}
