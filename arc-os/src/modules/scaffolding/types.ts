export type MultiplierProfile = {
  reuse: number;
  speed: number;
  safety: number;
  knowledge: number;
  scale: number;
  expectedFutureScore: number;
  evidenceRequired: string[];
  reviewDate?: string;
};

export type CreateModuleInput = {
  name: string;
  multiplier?: Partial<MultiplierProfile>;
};

export type CreateModuleResult = {
  name: string;
  modulePath: string;
  createdFolders: string[];
  createdFiles: string[];
  multiplierScore: number;
};