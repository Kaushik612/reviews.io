"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { Wand2 } from "lucide-react";

import GooglePlacesAutocompleteComponent from "@/components/google/GooglePlacesAutocompleteComponent";
import CuisineSelectComponent from "@/components/restaurants/CuisineSelectComponent";
import { MdClear } from "react-icons/md";

export interface TagOption {
  readonly value: string;
  readonly label: string;
}

const tagOptions: readonly TagOption[] = [
  { value: "thai", label: "Thai" },
  { value: "asian", label: "Asian" },
  { value: "american", label: "American" },
  { value: "indian", label: "Indian" },
  { value: "korean", label: "Korean" },
  { value: "glutenfriendly", label: "Gluten-Friendly" },
  { value: "vegan", label: "Vegan" },
  { value: "vegetarian", label: "Vegetarian" },
  { value: "italian", label: "Italian" },
  { value: "japanese", label: "Japanese" },
  { value: "vietnamese", label: "Vietnamese" },
  { value: "sportsbar", label: "Sports Bar" },
  { value: "pub", label: "Pub" },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter the restaurnant name." }),
  description: z
    .string()
    .min(1, { message: "Please write a few words about this restaurtant." }),
  tags: z
    .array(z.string())
    .nonempty({ message: "Please select at least one cuisine" }),
  location: z.object({
    label: z.string().nonempty({ message: "Please select a location" }),
    value: z.any(),
  }),
});

const CreateReview = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      location: undefined,
      tags: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/restaurants", values);
      toast({
        description: "Successfully created your restaurant.",
        duration: 3000,
      });

      router.refresh();
      router.push("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.response.data,
        duration: 3000,
      });
    }
  };

  const clearForm = () => {
    form.reset();
  };

  const { toast } = useToast();
  const router = useRouter();

  return (
    <div className="h-full p-4 max-w-4xl mx-auto mt-5">
      <div className="">
        <h1 className="text-2xl md:text-3xl font-bold ">
          Add a New Restaurtant
        </h1>
        <p className="mt-2 mb-5">
          Don&apos;t see a restaurant listed? This is where you can add one.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Hard Rock Cafe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    rows={6}
                    placeholder="Tell us a bit about this restaurtant.."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Controller
            control={form.control}
            name="location"
            rules={{
              required: "This is a required field",
            }}
            render={({ field, fieldState }) => (
              <GooglePlacesAutocompleteComponent
                {...field}
                error={fieldState.error}
              />
            )}
          />
          <Controller
            control={form.control}
            name="tags"
            render={({ field: { onChange, value }, fieldState }) => (
              <CuisineSelectComponent
                onChange={onChange}
                value={value}
                isLoading={isLoading}
                tagOptions={tagOptions}
                error={fieldState.error}
              />
            )}
          />
          <Button
            type="submit"
            size={"lg"}
            disabled={isLoading}
            className="text-md"
          >
            Submit <Wand2 className="w-4 h-4 ml-2" />
          </Button>
          <Button
            type="button"
            onClick={clearForm}
            size={"lg"}
            variant={"outline"}
            className="text-md ml-5"
          >
            Clear <MdClear className="w-6 h-6 ml-2" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateReview;
