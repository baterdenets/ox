import { PageProps } from "@/types";
import { TableDemo } from "@/Components/Table";
import InfoLayout from "@/Layouts/pageLayouts/InfoLayout";
import { FormDrawer } from "@/Components/FormDrawer";
import { useState } from "react";
import { useMutation, useQuery } from "@/lib/utils";
import { toast } from "@/Components/ui/use-toast";

const formFields = [
    {
        label: "Corp",
        name: "corp_id",
        field: "input",
    },
    {
        label: "name",
        name: "name",
        field: "input",
    },
    {
        label: "Office name",
        name: "office_name",
        field: "input",
    },
];

const columns = [
    {
        label: "Corp",
        field: "corp_id",
    },
    {
        label: "name",
        field: "name",
    },
    {
        label: "Office name",
        field: "office_name",
    },
];

export default function Office({ auth }: PageProps) {
    const query = useQuery("office.get");
    const mutaion = useMutation("office.create", {
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

    const updateMutation = useMutation("office.update", {
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

    const deleteMutation = useMutation("office.delete", {
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
            title="Office"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Office
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
