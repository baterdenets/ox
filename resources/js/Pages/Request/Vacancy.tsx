import { PageProps } from "@/types";
import RequestLayout from "@/Layouts/pageLayouts/RequestLayout";

export default function Users({ auth }: PageProps) {
    return (
        <RequestLayout
            auth={auth}
            title="Vacancy"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Vacancy
                    </h2>
                </div>
            }
        >
            <div className="p-4">
                Info section we are create and update info dictionary
            </div>
        </RequestLayout>
    );
}
