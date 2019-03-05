import { Vsign } from "./vsign";

export class Patientdata {
  id: string;
  first: string;
  last: string;
  born: date;
  vsign: Vsign;
  avg: Vsign;
  mx: Vsign;
  min: Vsign;
}
