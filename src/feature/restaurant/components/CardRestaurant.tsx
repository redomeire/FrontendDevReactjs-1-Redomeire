import Typography from "../../../components/Typography";
import { BiDollar } from "react-icons/bi";
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from "../../../components/button";
import { Restaurant } from "../../../models/Restaurant";

interface Props {
    data: Restaurant
}

const CardRestaurant = ({ data }: Props) => {
    return (
        <div className="sm:w-[23%] w-full min-w-[270px] m-[10px]">
            <div style={{ backgroundImage: `url(https://restaurant-api.dicoding.dev/images/medium/${data.pictureId})` }} className="w-full h-[200px] bg-center bg-cover" />
            <Typography className="leading-7 mt-2 text-lg font-medium">
                {data.name}
            </Typography>
            <div className="w-[100px] h-[20px] rounded-lg my-2 flex">
                {
                    Array.from({ length: parseInt('5' || '0') }, (_, index) => {
                        if (parseInt(data.rating!) < index + 1)
                            return <BsStar className="mx-1" key={index} />
                        return <BsStarFill className="mx-1" key={index} />
                    })
                }
            </div>
            <div>
                <Typography variant="caption" className="text-gray-600 flex items-center">
                    {data.city} &#x2022;
                    <span className="flex items-center ml-1">
                        {
                            Array.from({ length: parseInt(data.rating || '0') }, (_, index) => (
                                <BiDollar key={index} />
                            ))
                        }
                    </span>
                </Typography>
            </div>
            <a href={`/detail/${data.id}`}>
                <Button className="w-full p-2 mt-3 rounded-none uppercase text-sm">
                    learn more
                </Button>
            </a>
        </div>
    );
}

export default CardRestaurant;
