import Header from "./Header"
import { Outlet } from "react-router-dom"


function AppContent(){
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AppContent