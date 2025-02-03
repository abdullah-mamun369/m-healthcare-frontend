"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/actions/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const PatientValidationSchema = z.object({
  patient: z.object({
    name: z.string({
      required_error: "Name is required!",
      invalid_type_error: "Name must be a string!",
    }),
    email: z
      .string({ required_error: "Email is required!" })
      .email("Please enter a valid email address!"),
    contactNumber: z.string().regex(/^\d{11}$/, "Invalid contact number!"),
    address: z.string({
      message: "Address is required!",
    }),
  }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(5, "Password must be at least 5 characters!"),
});

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);

    try {
      const res = await registerPatient(data);

      if (res?.data?.id) {
        toast.success(res?.message);

        const result = await userLogin({
          email: values.patient.email,
          password: values.password,
        });

        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(PatientValidationSchema)}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput name="patient.name" label="Name" fullWidth={true} />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.email"
                    label="Email"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="password" label="Password" fullWidth={true} />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.contactNumber"
                    label="Contact Number"
                    fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    name="patient.address"
                    label="Address"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: "10px 0px",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>
            </PHForm>

            <Typography component="p" fontWeight={300}>
              Do you already have an account?{" "}
              <Typography color="primary" component="span">
                <Link href="/login">Login</Link>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
