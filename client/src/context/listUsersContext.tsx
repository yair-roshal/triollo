import { createContext, useState, useContext } from 'react';
import { ListUsersContextProps, ListUsersProviderProps, UsersDataProps } from '../services/types';

export const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({ children }: ListUsersProviderProps) {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [nameFilter, setNameFilter] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [nationalityFilter, setNationalityFilter] = useState<string>('');

  function getUsersData(params: UsersDataProps[]) {
    setUsersData(params);
  }

  function handleModal(param: boolean) {
    setOpenModal(param);
  }

  function filterByName(name: string) {
    setNameFilter(name);
  }

  function filterByGender(gender: string) {
    setGenderFilter(gender);
  }

  function filterByNationality(nationality: string) {
    setNationalityFilter(nationality);
  }

  return (
    <ListUsersContext.Provider
      value={{
        usersData,
        getUsersData,
        openModal,
        handleModal,
        nameFilter,
        filterByName,
        genderFilter,
        filterByGender,
        nationalityFilter,
        filterByNationality,
      }}
    >
      {children}
    </ListUsersContext.Provider>
  );
}

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
};