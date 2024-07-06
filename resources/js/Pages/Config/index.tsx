import { PageProps } from "@/types";
import ConfigLayout from "@/Layouts/pageLayouts/ConfigLayout";

export default function Dashboard({ auth }: PageProps) {
    return (
        <ConfigLayout
            auth={auth}
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Config
                    </h2>
                </div>
            }
            title="Config"
        >
            <div className="p-4">
                in this section you need to configure system calculation or must
                use configs
            </div>
        </ConfigLayout>
    );
}
