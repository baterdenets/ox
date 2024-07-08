import { PageProps } from "@/types";
import { TableDemo } from "@/Components/Table";
import InfoLayout from "@/Layouts/pageLayouts/InfoLayout";
import { FormDrawer } from "@/Components/FormDrawer";
import { useState } from "react";
import { useMutation, useQuery } from "@/lib/utils";
import { toast } from "@/Components/ui/use-toast";

const formFields = [
    {
        label: "Corp name",
        name: "corp_name",
        field: "input",
    },
];

const columns = [{ label: "Corp name", field: "corp_name" }];

export default function Corp({ auth }: PageProps) {
    const query = useQuery("corp.get");
    const mutaion = useMutation("corp.create", {
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

    const updateMutation = useMutation("corp.update", {
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

    const deleteMutation = useMutation("corp.delete", {
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
        <InfoLayout
            auth={auth}
            title="Corp"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Corp
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
        </InfoLayout>
    );
}
