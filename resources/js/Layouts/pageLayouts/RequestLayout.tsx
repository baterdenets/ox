import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { SubLayout } from "@/Layouts/SubLayout";
import { PropsWithChildren } from "react";
import { Input } from "@/Components/ui/input";

export default function ConfigLayout({
    auth,
    header,
    title,
    children,
}: PropsWithChildren<{ header: any; title: string; auth: any }>) {
    return (
        <AuthenticatedLayout user={auth.user} header={header}>
            <Head title={title} />

            <SubLayout
                topItem={<Input placeholder="Search" />}
                menuItems={[
                    { name: "Request", path: "request" },
                    { name: "vacancy", path: "request/vacancy" },
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