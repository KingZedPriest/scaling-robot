//Authentication Types
export type Country = {
    code: string;
    name: string;
}

export type ID = {
  idType : string
}

//General Types


//User Dashboard Types

export type heading = {
  page: string,
  profilePicSrc: string | any
}

export type smallScreenAccount = {
  accountNumber: string | any,
  firstName: string | any,
  lastName: string | any,
}