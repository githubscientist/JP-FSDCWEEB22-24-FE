import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex-items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">JP</span>
                        </div>
                    </Link>

                    <div>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-blue-600 font-medium"
                        >Home</Link>

                        <div
                            className="inline-block ml-6"
                        >
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-600 hover:text-blue-600 font-medium mr-4"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="ml-6 text-white bg-blue-600 hover:bg-blue-700 font-medium px-4 py-2 rounded-lg"
                                >
                                    Register
                                </Link>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;