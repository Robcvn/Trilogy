import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
