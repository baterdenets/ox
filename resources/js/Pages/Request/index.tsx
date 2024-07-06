import { PageProps } from "@/types";
import RequestLayout from "@/Layouts/pageLayouts/RequestLayout";

export default function Users({ auth }: PageProps) {
    return (
        <RequestLayout
            auth={auth}
            title="Request"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Request
                    </h2>
                </div>
            }
        >
            <div className="p-4">
                Request section we are create request to company stracture
            </div>
        </RequestLayout>
    );
}
