import Typography from "../components/Typography";
import Button from "../components/button";
import AppLayout from "../components/partials/layout/AppLayout";
import CardRestaurant from "../feature/restaurant/components/CardRestaurant";

import { useContext, useState } from "react";
import { FilterDataContext } from "../context/RestaurantContext";

const Home = () => {
    const { restaurants } = useContext(FilterDataContext);
    const [sliceCount, setSliceCount] = useState(10);

    return (
        <AppLayout
            title="Restaurants"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ">
            <Typography variant="subheading" className="font-normal mb-10">
                All Restaurants
            </Typography>
            <section className="w-full flex items-center flex-wrap">
                {
                    restaurants?.length !== 0
                        ?
                        restaurants?.slice(0, sliceCount).map((data, index) => {
                            return (
                                <CardRestaurant data={data} key={index} />
                            )
                        })
                        :
                        <Typography variant="subheading">Maaf, restoran tidak ditemukan</Typography>
                }
            </section>
            {
                sliceCount < restaurants?.length &&
                <Button
                    variant="secondary"
                    className="mx-auto block md:w-[300px] mt-20"
                    onClick={() => {
                        setSliceCount(restaurants.length)
                    }}>
                    Load More
                </Button>
            }
        </AppLayout>
    );
}

export default Home;
