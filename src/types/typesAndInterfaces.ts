// ========================= Types =========================

export type TData = {
  count?: TCount;
  tasks?: TTasks;
  ids?: string[]
};

export type TCount = {
  active?: number;
  completed?: number;
};

export type TTasks = {
  text?: string;
  status?: string;
  id?: string;
};

export type TFiltersObject = {
  id?: number;
  label?: string;
  value?: string;
};

// ========================= Interfaces =========================

export interface IRequestHelpers {
  data?: TData;

}
