import { PageProps } from "@/types";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { TableDemo } from "@/Components/Table";
import { Button } from "@/Components/ui/button";
import { CreateForm } from "@/Components/CreateForm";
import InfoLayout from "@/Layouts/pageLayouts/InfoLayout";

export default function Corp({ auth }: PageProps) {
    return (
        <InfoLayout
            auth={auth}
            title="Calculation"
            header={
                <div className="flex flex-row">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Calculation
                    </h2>
                    <div className="ml-auto">
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <Button>Create New</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        User form
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <CreateForm />
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Submit
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            }
        >
            <TableDemo />
        </InfoLayout>
    );
}
