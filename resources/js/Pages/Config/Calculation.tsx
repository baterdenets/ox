import { PageProps } from "@/types";
import { TableDemo } from "@/Components/Table";
import ConfigLayout from "@/Layouts/pageLayouts/ConfigLayout";
import { useConfigQuery } from "@/lib/api/config";
import { FormDrawer } from "@/Components/FormDrawer";
import { useState } from "react";
import { useMutation } from "@/lib/utils";
import { toast } from "@/Components/ui/use-toast";

const formFields = [
    {
        label: "Code",
        name: "code",
        field: "select",
        options: [
            { label: "startTime", value: "startTime" },
            { label: "endTime", value: "endTime" },
        ],
    },
    {
        label: "value",
        name: "value",
        type: "time",
        field: (data: any) => {
            if (data.code === "") return "datepicker";
            return "input";
        },
    },
];

const columns = [
    { label: "code", field: "code" },
    { label: "value", field: "value" },
];

export default function Calculation({ auth }: PageProps) {
    const query = useConfigQuery();
    const mutaion = useMutation("config.create", {
        onSuccess: () => {
            query.mutate();
            toast({
                title: "Success",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        Config saved
                    </pre>
                ),
            });
        },
    });

    const updateMutation = useMutation("config.update", {
        onSuccess: () => {
            query.mutate();
            toast({
                title: "Success",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        Config updated
                    </pre>
                ),
            });
        },
    });

    const deleteMutation = useMutation("config.delete", {
        onSuccess: () => {
            query.mutate();
            toast({
                title: "Success",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        Config deleted
                    </pre>
                ),
            });
        },
    });

    const [data, setData] = useState();

    const onEdit = (data: any) => {
        setData(data);
    };

    const onDelete = (data: any) => {
        deleteMutation.mutate({ id: data.id });
    };

    const onView = (data: any) => {
        setData(data);
    };

    return (
        <ConfigLayout
            auth={auth}
            title="Calculation"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Calculation
                    </h2>
                    <div className="ml-auto">
                        <FormDrawer
                            triggerText="Add New Config"
                            title={data ? "View Config" : "New Config"}
                            mutation={data ? updateMutation : mutaion}
                            value={data}
                            formFields={formFields}
                            onClose={() => setData(undefined)}
                        />
                    </div>
                </div>
            }
        >
            <TableDemo
                columns={columns}
                data={query.data}
                isLoading={query.isLoading}
                onEdit={onEdit}
                onDelete={onDelete}
                onView={onView}
            />
        </ConfigLayout>
    );
}
