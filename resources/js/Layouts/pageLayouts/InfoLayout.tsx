import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { SubLayout } from "@/Layouts/SubLayout";
import { PropsWithChildren } from "react";
import { FileArchive, House, User, UserCheck, UserCog } from "lucide-react";
export default function InfoLayout({
    auth,
    header,
    title,
    children,
}: PropsWithChildren<{ header: any; title: string; auth: any }>) {
    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title={title} />

            <SubLayout
                menuItems={[
                    {
                        name: "Main ingo",
                        menuItems: [
                            {
                                name: "System Info",
                                path: "info",
                                icon: FileArchive,
                            },
                        ],
                    },
                    {
                        name: "Info",
                        menuItems: [
                            { name: "Corp", path: "info/corp", icon: House },
                            {
                                name: "Office",
                                path: "info/office",
                                icon: House,
                            },
                            {
                                name: "Division",
                                path: "info/division",
                                icon: House,
                            },
                            {
                                name: "Position",
                                path: "info/position",
                                icon: UserCheck,
                            },
                            { name: "Role", path: "info/role", icon: UserCog },
                        ],
                    },
                    {
                        name: "Main Info",
                        menuItems: [
                            { name: "User", path: "info/user", icon: User },
                        ],
                    },
                ]}
            >
                <div className="py-8">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                            {children}
                        </div>
                    </div>
                </div>
            </SubLayout>
        </AuthenticatedLayout>
    );
}
