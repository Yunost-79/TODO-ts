// ========================= Types =========================

import { EVariables } from "../variables";

export interface TData {
  count: TCount;
  tasks: TTasks;
}

export type TCount = {
  active: number;
  completed: number;
};

export type TTasks = {
  text: string;
  status: EVariables;
  id: string;
};

export type TFiltersObject = {
  id?: number;
  label?: string;
  value?: string;
};

// ========================= Interfaces =========================

// export interface IRequestHelpers {
//   data?: TData;
// }
