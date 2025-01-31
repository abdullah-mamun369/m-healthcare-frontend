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
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/actions/auth.services";

interface IPatientData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();

  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
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
          router.push("/");
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <TextField
                    label="Name"
                    type="text"
                    size="small"
                    fullWidth={true}
                    variant="outlined"
                    {...register("patient.name")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Email"
                    type="text"
                    size="small"
                    fullWidth={true}
                    variant="outlined"
                    {...register("patient.email")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Password"
                    type="text"
                    size="small"
                    fullWidth={true}
                    variant="outlined"
                    {...register("password")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Contact Number"
                    type="text"
                    size="small"
                    fullWidth={true}
                    variant="outlined"
                    {...register("patient.contactNumber")}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    label="Address"
                    type="text"
                    size="small"
                    fullWidth={true}
                    variant="outlined"
                    {...register("patient.address")}
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
            </form>

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
