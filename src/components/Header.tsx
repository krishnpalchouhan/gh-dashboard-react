import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions, RootState} from "../store";

const Header = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const logoutHandler = (event: any) => {
        event.preventDefault();
        dispatch(authActions.logout());
    }
  // return (
  //     <header>
  //
  //         {/*<h1>Redux Graph And Grid</h1>*/}
  //         {/*  {isAuth && <nav className="bg-blue-500 ">*/}
  //         {/*      <ul>*/}
  //         {/*          <li>*/}
  //         {/*              <a href='/'>My Products</a>*/}
  //         {/*          </li>*/}
  //         {/*          <li>*/}
  //         {/*              <a href='/'>My Sales</a>*/}
  //         {/*          </li>*/}
  //         {/*          <li>*/}
  //         {/*              <button onClick={logoutHandler}>Logout</button>*/}
  //         {/*          </li>*/}
  //         {/*      </ul>*/}
  //         {/*  </nav>}*/}
  //     </header>
  // );
    return (
        <nav className="bg-white">
            <div className="mx-auto px-2 sm:px-6 lg:px-8 shadow-lg  ">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <a href="#" className="flex items-center py-4 px-2 ">
                                    <img src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600" alt="logo" className="h-8 w-8 mr-2"/>
                                    <span className="font-semibold text-cyan-600 text-lg">Redux Graph And Grid</span>

                                </a>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="/"
                                   className="py-4 px-2 text-gray-500 border-b-4 border-b-cyan-500  font-semibold hover:text-cyan-500 transition duration-300">Home</a>
                                <a href="/"
                                   className="py-4 px-2 text-gray-500 border-b-4 border-b-transparent font-semibold hover:text-cyan-500 hover:border-b-4 hover:border-b-cyan-500 transition duration-300">About</a>
                                <a href="/"
                                   className="py-4 px-2 text-gray-500 border-b-4 border-b-transparent font-semibold hover:text-cyan-500 hover:border-b-4 hover:border-b-cyan-500 transition duration-300">Services</a>
                                <a href="/"
                                   className="py-4 px-2 text-gray-500 border-b-4 border-b-transparent font-semibold hover:text-cyan-500 hover:border-b-4 hover:border-b-cyan-500 transition duration-300">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
        </nav>
    );

};

export default Header;