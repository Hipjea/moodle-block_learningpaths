export type DataProps =
  | {
      id: number;
      name: string;
      description: string;
      years: Array<YearData>;
    };

export type YearData = 
  | {
      name: string;
      ue: Array<UeData>
    };

export type UeData =
  | {
      name: string;
      resources: Array<ResourceData>
    };

export type ResourceData =
  | {
      [key: string]: string | number;
      [index: number]: string;
      name: string;
      type: string;
      volume: string;
      url: string;
    };
