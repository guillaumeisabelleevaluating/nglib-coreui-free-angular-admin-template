import { Vsign } from "./vsign";

export class Patientdata {
  id: string;
  first: string;
  last: string;
  born: Date;
  vsign: Vsign;
  avg: Vsign;
  mx: Vsign;
  min: Vsign;
  status: number;
}
