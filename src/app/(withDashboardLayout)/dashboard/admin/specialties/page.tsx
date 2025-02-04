import { Box, Button, Stack, TextField } from "@mui/material";
import SpecialtyModal from "./components/SpecialtyModal";

const SpecialtiesPage = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button>Create Specialist</Button>
        <SpecialtyModal />
        <TextField size="small" label="Search" />
      </Stack>
    </Box>
  );
};

export default SpecialtiesPage;
