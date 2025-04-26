import type { PriorityAdbModuleType } from './core';

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ADB_BIN_PATH?: string;
    /**
     * Configure the ADB module of the machine priority to use this machine is still builtin ADB module
     */
    PRIORITY_ADB_MODULE_TYPE?: PriorityAdbModuleType;
  }
}
