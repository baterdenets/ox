import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/Components/ui/command";

interface IMenuItem {
    name: string;
    path: string;
    icon: any;
}

interface IGroupItem {
    name: string;
    menuItems: IMenuItem[];
}

export function SubLayout({
    children,
    menuItems,
}: PropsWithChildren<{
    menuItems: IGroupItem[];
}>) {
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-12">
            <div className="col-span-3">
                <div className="py-8">
                    <div className="mx-auto sm:px-3 lg:px-5">
                        <Command className="rounded-lg border shadow-md">
                            <CommandInput placeholder="Type a command or search..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                {menuItems.map((row) => {
                                    return (
                                        <>
                                            <CommandGroup heading={row.name}>
                                                {row.menuItems.map(
                                                    (menuItem) => {
                                                        const active =
                                                            route().current(
                                                                menuItem.path
                                                            );
                                                        return (
                                                            <Link
                                                                key={
                                                                    menuItem.path
                                                                }
                                                                href={route(
                                                                    menuItem.path
                                                                )}
                                                            >
                                                                <CommandItem
                                                                    className={
                                                                        active
                                                                            ? "bg-gray-300"
                                                                            : ""
                                                                    }
                                                                >
                                                                    {menuItem.icon && (
                                                                        <menuItem.icon className="mr-2 h-4 w-4" />
                                                                    )}
                                                                    <span>
                                                                        {
                                                                            menuItem.name
                                                                        }
                                                                    </span>
                                                                </CommandItem>
                                                            </Link>
                                                        );
                                                    }
                                                )}
                                            </CommandGroup>
                                        </>
                                    );
                                })}
                            </CommandList>
                        </Command>
                    </div>
                </div>
            </div>
            <div className="col-span-9">{children}</div>
        </div>
    );
}
