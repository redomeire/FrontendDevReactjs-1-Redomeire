import { SetStateAction, createContext, useState } from "react";
import { Restaurant } from "../models/Restaurant";

let initialRestaurants: Restaurant[] = []

type Filter = {
    restaurants: Restaurant[]
    setRestaurants: React.Dispatch<SetStateAction<Restaurant[]>>
}

export const FilterDataContext = createContext<Filter>({
    restaurants: [],
    setRestaurants: () => {}
})

interface Props {
    children: React.ReactNode
}

const FilterDataWrapper = ({ children }: Props) => {
    const [restaurants, setRestaurants] = useState(initialRestaurants)

    return ( 
        <FilterDataContext.Provider value={{ restaurants, setRestaurants }}>
            {children}
        </FilterDataContext.Provider>
    );
}
 
export default FilterDataWrapper;
