export interface SubjectReq {
    id: number;
    title: string;
    parentSubject_id: number | null; // Allow the property to be nullable
  }