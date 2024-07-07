"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";

import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { toast } from "@/Components/ui/use-toast";
import { Button } from "@/Components/ui/button";
import { useMemo } from "react";

const FormSchema = z.object({
    code: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    value: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

function useField(field: string): any {
    const component = useMemo(() => {
        let result = (p: any) => <Input {...p} />;
        switch (field) {
            case "select":
                result = (p: any) => (
                    <Select
                        onValueChange={p.onChange}
                        defaultValue={p.value}
                        disabled={p.disabled}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder={p.placeholder} />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {p.options?.map((row: any) => (
                                <SelectItem key={row.value} value={row.value}>
                                    {row.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                );
                break;

            default:
                break;
        }
        return result;
    }, [field]);

    return component;
}

function generateFormItem({
    form,
    label,
    description,
    placeholder,
    value,
    data,
    format,
    field,
    options,
    name,
}: {
    form: any;
    label: string;
    description: string;
    placeholder: string;
    value: any;
    data: any;
    format: any;
    field: string;
    options: any[];
    name: string;
}) {
    const FieldComponent = useField(field);
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <FieldComponent
                            disabled={value?.isView}
                            label={label}
                            field={field}
                            options={options}
                            {...field}
                        />
                    </FormControl>
                    <FormDescription>{description}</FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export function CustomForm({
    formFields,
    onSubmit,
    value,
}: {
    formFields: any[];
    onSubmit: any;
    value: any;
}) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            code: "",
            value: "",
            ...value,
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
            >
                {formFields.map((row: any) =>
                    generateFormItem({ ...row, form, value })
                )}
                {!value?.isView && <Button type="submit">Submit</Button>}
            </form>
        </Form>
    );
}
