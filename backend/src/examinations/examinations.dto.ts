import {Classification} from "../shared/enum/classification";

export interface ExaminationDto {
  id: string;
  patientId: string;
  institutionId: number;
  cough: Classification;
  breathShortness: Classification;
  fever: Classification;
  other: string;
  abroad: boolean;
  illPersonContact: boolean;
  covid19Contact: boolean;
}
