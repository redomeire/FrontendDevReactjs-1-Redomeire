import AppBar from "../appbar";
import FilterNavigation from "../appbar/FilterNavigation";

interface Props {
    children: React.ReactNode,
    title?: string,
    description?: string,
}

const AppLayout = ({ children, title, description }: Props) => {
    return ( 
        <>
            <AppBar title={title} description={description} />
            { window.location.pathname === '/' && <FilterNavigation />}
            <main className="p-10 min-h-screen">
                {children}
            </main>
        </>
     );
}
 
export default AppLayout;
