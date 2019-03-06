import { Vsign } from "./vsign";
import { Patientdata } from "./patientdata";

export const PATIENTS: Patientdata[] = [
  {
    id: "cfa6d0694bac447f8845c195af8971d2",
    first: "Marie",
    last: "Drainville",
    born: new Date(1975, 9, 10),
    vsign: { hb: 77, o2: 99, temp: 36.3 },
    avg: { hb: 77, o2: 99, temp: 36.3 },
    mx: { hb: 112, o2: 99, temp: 36.4 },
    min: { hb: 63, o2: 97, temp: 36.2 },
    status:1
  },
  {
    id: "cab0b36aaeb34a09a5821cc59a04960b",
    first: "Tyu",
    last: "Yi",
    born: new Date(1982, 4, 12),
    vsign: { hb: 66, o2: 99, temp: 36.3 },
    avg: { hb: 77, o2: 99, temp: 36.3 },
    mx: { hb: 112, o2: 99, temp: 36.4 },
    min: { hb: 63, o2: 97, temp: 36.2 },
    status:1
  },
  {
    id: "c999111974264b65860b1a2e417116c4",
    first: "Paul",
    last: "Latour",
    born: new Date(1971, 1, 10),
    vsign: { hb: 57, o2: 100, temp: 36.3 },
    avg: { hb: 62, o2: 99, temp: 36.3 },
    mx: { hb: 112, o2: 99, temp: 36.4 },
    min: { hb: 656, o2: 97, temp: 36.2 },
    status:1
  },
  {
    id: "6e2b6ec9323e4b0fb4b183589583e551",
    first: "Pierre",
    last: "Drainville",
    born: new Date(1964, 9, 12),
    vsign: { hb: 73, o2: 93, temp: 36.8 },
    avg: { hb: 75, o2: 98, temp: 36.5 },
    mx: { hb: 144, o2: 99, temp: 36.8 },
    min: { hb: 62, o2: 91, temp: 36.1 },
    status:2
  }
];
