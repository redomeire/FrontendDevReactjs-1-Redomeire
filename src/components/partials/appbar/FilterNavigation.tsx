import Typography from "../../Typography";
import Button from "../../button";
import Input from "../../input";
import { AiOutlineSearch } from "react-icons/ai";

import { FormEvent, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllRestaurants } from "../../../feature/restaurant/services/getAllRestaurants";
import { FilterDataContext } from "../../../context/RestaurantContext";

const FilterNavigation = () => {
    const { setRestaurants } = useContext(FilterDataContext)
    const [value, setValue] = useState('');
    const { data, refetch } = useQuery({
        queryKey: ['restaurants'],
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryFn: async () => {
            return getAllRestaurants(value)
        }
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        refetch()
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }

    useEffect(() => {
        console.log(data?.data.restaurants);
        setRestaurants(data?.data?.restaurants)
    }, [data])

    return (
        <form onSubmit={handleSubmit} className="py-3 px-10 flex md:items-center justify-between border-b flex-col md:flex-row sticky top-0 bg-white">
            <div className="flex items-center md:overflow-visible overflow-scroll">
                <Typography variant="caption" className="mr-5 whitespace-nowrap">Search By :</Typography>
                <div className="flex items-end space-x-3">
                    <Input onChange={e => { setValue(e.target.value) }} beginningIcon={<AiOutlineSearch />} placeholder="title, category, or menus" />
                </div>
            </div>
            <div className="inline-flex space-x-2">
                <Button variant="primary" className="md:mt-0 mt-10 w-fit">Search</Button>
                <Button onClick={handleLogout} variant="secondary" className="md:mt-0 mt-10 w-fit">Logout</Button>
            </div>
        </form>
    );
}

export default FilterNavigation;
