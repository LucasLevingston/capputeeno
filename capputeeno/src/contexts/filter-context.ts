// import { ReactNode, createContext, useState } from "react";
// import { FilterType } from "../types/filter-types";

// export const FilterContext = createContext({
//    search: '',
//    page: 0,
//    type: FilterType.ALL,
//    setSearch: (value: string) => { },
//    setPage: (value: number) => { },
//    setType: (value: typeof FilterType) => { }
// })

// interface ProviderProps {
//    children: ReactNode
// }

// export function filterContextProvider({ children }: ProviderProps) {
//    const [search, setSearch] = useState('')
//    const [page, setPage] = useState(0)
//    const [type, setType] = useState(FilterType.ALL)

//    return (
//       <FilterContext.Provider value= {{ search, page, type, setSearch, setPage, setType }
// }>
//    { children }
//    < /FilterContext.Provider>
//    )
// }
