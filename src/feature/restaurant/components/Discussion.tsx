import { BiFace, BiShare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Typography from "../../../components/Typography";
import Button from "../../../components/button";

interface Props {
    discussion: {
        name?: string
        date?: string
        review?: string
    }
}

const Discussion = ({ discussion }: Props) => {
    return (
        <div className="p-3 flex items-center justify-between border-b pb-5">
            <div>
                <Typography className="font-semibold">{discussion.name}</Typography>
                <Typography variant="body" className="text-gray-500 mt-2">{discussion.review}</Typography>
                <div className="flex space-x-2 mt-2">
                    <Button variant="small" className="p-1 border-none focus:ring-0 text-gray-500 text-[14px]" beginningIcon={<AiOutlineHeart className="mr-2"/>}>Like</Button>
                    <Button variant="small" className="p-1 border-none focus:ring-0 text-gray-500 text-[14px]" beginningIcon={<BiShare className="mr-2"/>}>Share</Button>
                    <Button variant="small" className="p-1 border-none focus:ring-0 text-gray-500 text-[14px]" beginningIcon={<BiFace className="mr-2"/>}>7 likes</Button>
                </div>
            </div>
            <Typography className="mb-4" variant="caption">{discussion.date}</Typography>
        </div>
    );
}

export default Discussion;
