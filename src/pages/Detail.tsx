import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Restaurant } from "../models/Restaurant";
import { getRestaurantById } from "../feature/restaurant/services/getRestaurantById";

import AppLayout from "../components/partials/layout/AppLayout";
import Typography from "../components/Typography";
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from "../components/button";
import Discussion from "../feature/restaurant/components/Discussion";
import Foods from "../feature/restaurant/components/Foods";

const Detail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery<{ data: { restaurant: Restaurant } }>({
        queryKey: ['restaurant-detail'],
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryFn: async () => {
            return getRestaurantById(id)
        }
    })

    useEffect(() => {
        console.log(data);
    }, [data])

    if(isLoading) return (
        <AppLayout title="Please wait...">

        </AppLayout>
    )

    return (
        <AppLayout
            title="Restaurant Detail">
            <div className="flex items-stretch justify-between mx-auto w-full md:flex-row flex-col">
                <div style={{ backgroundImage: `url(https://restaurant-api.dicoding.dev/images/medium/${data?.data.restaurant.pictureId})` }} className=" min-h-[200px] md:w-[45%] w-full bg-cover bg-center" />
                <div className="md:w-6/12 md:mt-0 mt-10">
                    <Typography variant="heading" className="mb-3">{data?.data.restaurant.name}</Typography>
                    <Typography variant="caption" className="my-2 border-b pb-5">{data?.data.restaurant.description}</Typography>
                    <div className="my-2 pb-5 border-b mt-5 flex">
                        {
                            data?.data.restaurant.categories?.map((category, index) => {
                                return (
                                    <Button disabled key={index} className="mr-2">{category.name}</Button>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center mt-3">
                        {
                            Array.from({ length: parseInt('5' || '0') }, (_, index) => {
                                if (parseInt(data?.data.restaurant.rating!) < index + 1)
                                    return <BsStar className="mx-1" key={index} />
                                return <BsStarFill className="mx-1" key={index} />
                            })
                        }
                        <span className="mt-1 ml-3 text-sm">
                            ({data?.data.restaurant.rating})
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <Typography variant="subheading" className="font-semibold mt-10 border-b pb-9">Dishes</Typography>
                <Foods menus={data?.data.restaurant.menus} />
                <Typography variant="subheading" className="font-semibold mt-10 border-b pb-9">Discussion</Typography>
                {
                    data?.data.restaurant.customerReviews?.map((discussion, index) => {
                        return (
                            <Discussion discussion={discussion} key={index} />
                        )
                    })
                }
            </div>
        </AppLayout>
    );
}

export default Detail;
