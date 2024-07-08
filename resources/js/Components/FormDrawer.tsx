import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";
import { CustomForm } from "./CustomForm";
import { useEffect, useState } from "react";

export function FormDrawer({
    triggerText,
    title,
    mutation,
    formFields,
    value,
    onClose,
}: any) {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        setOpen(!!value);
    }, [value]);
    return (
        <Sheet
            open={open}
            onOpenChange={(openValue) => {
                if (!openValue) {
                    onClose();
                    setOpen(openValue);
                }
            }}
        >
            <SheetTrigger asChild>
                <Button onClick={() => setOpen(!open)}>{triggerText}</Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>
                {open && (
                    <CustomForm
                        value={value}
                        formFields={formFields}
                        onSubmit={(data: any) => {
                            if (value) data.id = value.id;
                            mutation.mutate(data).then(() => setOpen(false));
                        }}
                    />
                )}
            </SheetContent>
        </Sheet>
    );
}
