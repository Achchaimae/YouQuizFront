import { SubjectReq } from "./SubjectReq.modul";

export interface Subject {
    id: number;
    title: string;
    parentSubject: SubjectReq | null;
    childSubject?: Subject[];
  }