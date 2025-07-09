export interface SysFunc {
    funcId: number
    funcName: string
    icon?: string
    route?: string
    param?: string
    parentId?: number
    appCode: string
    checked: boolean
    sysFunc?: SysFunc[];
  }
  
  export interface SysRole {
    empCode: string
    funcId: number
    status: string
    createdDate?: Date
    createdEmp: string
  }
  