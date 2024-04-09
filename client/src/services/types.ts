import { ReactNode } from 'react';

export type UsersDataProps = {
  name: {
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };
  email: string;
  gender: string;
  login: {
    username: string;
  };
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  nat: string;
  picture: {
    large: string;
  };
};

export type ListUsersContextProps = {
  usersData: UsersDataProps[];
  getUsersData: (params: UsersDataProps[]) => void;
  openModal: boolean;
  handleModal: (param: boolean) => void;
  nameFilter: string;
  filterByName: (name: string) => void;
  genderFilter: string;
  filterByGender: (gender: string) => void;
  nationalityFilter: string;
  filterByNationality: (nationality: string) => void;
};

export type ListUsersProviderProps = {
  children: ReactNode;
};