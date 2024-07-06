import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

interface IMenuItem {
    name: string;
    path: string;
}

export function SubLayout({
    children,
    menuItems,
    topItem,
}: PropsWithChildren<{ menuItems: IMenuItem[]; topItem?: any }>) {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <div className="py-8">
                    <div className="max-w-7xl mx-auto sm:px-3 lg:px-5">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-2">
                            {topItem}
                            {menuItems?.map((menuItem) => {
                                const active = route().current(menuItem.path);
                                return (
                                    <Link
                                        key={menuItem.path}
                                        href={route(menuItem.path)}
                                    >
                                        <div
                                            className={`p-2  rounded-lg hover:bg-gray-100 ${
                                                active
                                                    ? "bg-blue-200 text-blue-500 text-lg font-medium"
                                                    : "bg-transparent text-gray-900"
                                            }`}
                                        >
                                            {menuItem.name}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-9">{children}</div>
        </div>
    );
}
