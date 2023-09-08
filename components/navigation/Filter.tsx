"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

type CuisineProps = {
  cuisines: string[];
};

const FormSchema = z.object({
  cuisine: z.string({
    required_error: "Please select a Cuisine.",
  }),
});

export function CategoryFilter({ cuisines }: CuisineProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const isLoading = form.formState.isSubmitting;
  const animatedComponents = makeAnimated();

  const options = cuisines.map((cuisine) => ({
    value: cuisine,
    label: cuisine,
  }));

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Controller
          control={form.control}
          name="cuisine"
          render={({ field: { onChange, value } }) => (
            <Select
              name="cuisine"
              className="my-react-select-container"
              classNamePrefix="my-react-select"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              placeholder="Filter by Cuisine"
              options={options}
              isLoading={isLoading}
              value={options.filter((el) => value?.includes(el.value))}
              onChange={(tag: string[] | null) => {
                if (tag === null) {
                  onChange(null);
                  return;
                }
                onChange(tag.map((el) => el));
              }}
            />
          )}
        />
      </form>
    </Form>
  );
}
