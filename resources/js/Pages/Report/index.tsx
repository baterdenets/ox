import { PageProps } from "@/types";
import ReportLayout from "@/Layouts/pageLayouts/ReportLayout";

export default function Users({ auth }: PageProps) {
    return (
        <ReportLayout
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
                Report section we are get report data and export
            </div>
        </ReportLayout>
    );
}
