import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { SubLayout } from "@/Layouts/SubLayout";
import { PropsWithChildren } from "react";

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
                    { name: "Info", path: "info" },
                    { name: "Corp", path: "info/corp" },
                    { name: "Office", path: "info/office" },
                    { name: "Division", path: "info/division" },
                    { name: "Position", path: "info/position" },
                    { name: "Role", path: "info/role" },
                    { name: "User", path: "info/user" },
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
