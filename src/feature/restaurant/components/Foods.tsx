import Typography from "../../../components/Typography";
import Button from "../../../components/button";
import { Restaurant } from "../../../models/Restaurant";
import { FaHamburger, FaCoffee } from "react-icons/fa"

interface Props {
    menus: Restaurant["menus"]
}

const Foods = ({ menus }: Props) => {
    return (
        <div className="p-3 border-b pb-5">
            <Typography className="mb-3" variant="body">Foods</Typography>
            <div className="flex items-center flex-wrap">
                {

                    menus?.foods?.map((food, index) => (
                        <Button variant="secondary" beginningIcon={<FaHamburger className="mr-2" />} key={index} className="m-3">{food.name}</Button>
                    ))
                }
            </div>
            <Typography className="mb-3 mt-10" variant="body">Beverages</Typography>
            <div className="flex items-center flex-wrap">
                {
                    menus?.drinks?.map((drink, index) => (
                        <Button variant="secondary" key={index} beginningIcon={<FaCoffee className="mr-2" />} className="m-3">{drink.name}</Button>
                    ))
                }
            </div>
        </div>
    );
}

export default Foods;
