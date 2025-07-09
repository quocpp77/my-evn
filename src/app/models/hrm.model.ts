export interface HrmDepartment {
    orgCode: string
    deptCode: string
    deptName: string
    address: string
    parentCode: string
    type: number
    phone: string
    email: string
    fax: string
    website: string
    status: string
  }

export interface HrmEmployee {
    orgCode: string
    empCode: string
    empName: string
    gender: string
    birthday: Date
    identityCard: string
    icDate: Date
    icPlace: string
    nativePlace: string
    address: string
    parentCode: string
    type: number
    phone: string
    email: string
    fax: string
    website: string
    career: string
    jobTitle: string
    userName: string
    password: string
    status: string
  }