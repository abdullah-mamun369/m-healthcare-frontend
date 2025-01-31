import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TPHInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
};

const PHInput = ({
  name,
  label,
  type = "text",
  size = "small",
  fullWidth,
}: TPHInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          size={size}
          fullWidth={fullWidth}
          variant="outlined"
        />
      )}
    />
  );
};

export default PHInput;
