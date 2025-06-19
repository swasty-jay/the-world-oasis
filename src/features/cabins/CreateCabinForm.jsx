import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { createEditCabin } from "../../services/ApiCabins";
import FormRow from "../../ui/FormRow";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditsession = Boolean(editId);

  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditsession ? editValues : {},
  });

  const { errors } = formState;

  const { mutate: createcabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("cabin successfully created");
      //validating to automatically update after creation//
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  /////////Editting mutation fn////

  const { mutate: editcabin, isLoading: isEditting } = useMutation({
    mutationFn: ({ newCabidata, id }) => createEditCabin(newCabidata, id),
    onSuccess: () => {
      toast.success("cabin successfully edited");
      //validating to automatically update after creation//
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditting;

  function onSubmitForm(data) {
    ////accounting for the image status

    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditsession)
      editcabin({ newCabidata: { ...data, image }, id: editId });
    else createcabin({ ...data, image: image });
  }

  // function onError(errors) {
  //   // console.log(errors);
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "this field is required",
            min: {
              value: 1,
              message: "Capacity should be at leat 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "this field is required",
            min: {
              value: 1,
              message: "regular price should bet at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="Description for website" error={errors?.name?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: "this field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditsession ? false : "this field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {" "}
          {isEditsession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
