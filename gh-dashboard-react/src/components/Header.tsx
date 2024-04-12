const Header = () => {
    return (
        <nav className="bg-white">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 shadow-lg  ">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2 ">
                                    <img src="./gh-dashboard-react/logo.png" alt="Warning Dashboard" className="h-12 w-100 mr-2"/>
                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="/"
                                   className="py-4 px-2 text-gray-500 border-b-4 border-b-cyan-500  font-semibold hover:text-cyan-500 transition duration-300">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    );

};

export default Header;