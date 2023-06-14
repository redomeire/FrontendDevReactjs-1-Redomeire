interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    return ( 
        <>
            <main className="flex items-center justify-center min-h-screen">
                {children}
            </main>
        </>
    );
}
 
export default AuthLayout;
