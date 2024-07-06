import { PageProps } from "@/types";
import InfoLayout from "@/Layouts/pageLayouts/InfoLayout";

export default function Users({ auth }: PageProps) {
    return (
        <InfoLayout
            auth={auth}
            title="Calculation"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Calculation
                    </h2>
                </div>
            }
        >
            <div className="p-4">
                Info section we are create and update info dictionary
            </div>
        </InfoLayout>
    );
}
