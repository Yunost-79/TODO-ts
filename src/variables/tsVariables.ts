export const fitersItems = [
  { id: 1, label: 'All', value: 'all' },
  { id: 2, label: 'Active', value: 'active' },
  { id: 3, label: 'Completed', value: 'completed' },
];

export type TFiltersObject = {
  id: number;
  label: string;
  value: string;
};

export type TData = {
  count: {
    active: number;
    completed: number;
  };
  tasks: {
    text: string;
    status: string;
    id: string;
  };
};

export interface IRequestHelpers {
  data?: TData;
  ids: string;
  status: string;
}

export enum EVariables {
  active = 'active',
  completed = 'completed',
}
