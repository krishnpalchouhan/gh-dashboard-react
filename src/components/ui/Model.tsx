import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// @ts-ignore
export const Model = ({ children, isfullScreen, onChange}) => {
    const el = <div
        className="modal pointer-events-none fixed w-full h-full top-0 left-0  flex items-center justify-center opacity-90 bg-gray-950 backdrop-blur-3xl z-40"


    >
        <div className="modal-overlay absolute w-full h-full bg-white opacity-95"></div>

        <div className="modal-container fixed w-full h-full z-50 overflow-y-auto z-50 ">

            <div onClick={onChange}
                className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50">
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                     viewBox="0 0 18 18">
                    <path
                        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
                (Esc)
            </div>

            {/* Add margin if you want to see grey behind the modal*/}
            <div className="modal-content container mx-auto h-auto text-left p-4 mt-14">

                {/*Title*/}
                {/*<div className="flex justify-between items-center pb-2">*/}
                {/*    <p className="text-2xl font-bold">Full Screen Modal!</p>*/}
                {/*</div>*/}

                {/*Body*/}
                <div className="my-5 bg-accent">
                    {children}
                </div>

                {/*Footer*/}
                {/*<div className="flex justify-end pt-2 ">*/}
                {/*    <button*/}
                {/*        className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">Action*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">Close*/}
                {/*    </button>*/}
                {/*</div>*/}

            </div>
        </div>
    </div>
    //return full scree
console.log(isfullScreen)

    return isfullScreen ? (
            el
    ) : (<>
        {children}
    </>)
}
//opacity-0 pointer-events-none


