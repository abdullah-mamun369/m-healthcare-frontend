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

const RegisterPage = () => {
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
            <Grid container spacing={2} my={1}>
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
                ;
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
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
            <Typography component="p" fontWeight={300}>
              Do you already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
