import { PageProps } from "@/types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Users({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Time record
                    </h2>
                </div>
            }
        >
            <Head title={"Time Record"} />
            <div className="p-4">Time record</div>
        </AuthenticatedLayout>
    );
}
