import Typography from "../../Typography";

interface Props {
    title?: string,
    description?: string
}

const AppBar = ({ title, description }: Props) => {
    return ( 
        <div className="p-5 px-10 border-b">
            <Typography variant="heading" className="font-normal">
                {title}
            </Typography>
            <Typography variant="body" className="md:w-2/5 w-full leading-7 mt-5 font-light text-gray-700">
                {description}
            </Typography>
        </div>
    );
}
 
export default AppBar;
