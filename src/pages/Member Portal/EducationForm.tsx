import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../constant";

export interface Education {
  MembersId: string;
  Qulification: string;
  Department: string;
  OtherEducation: boolean;
}

interface EducationFormProps {
  onBack: () => void;
  onNext: (data: Education) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ onBack, onNext }) => {
  const userId = sessionStorage.getItem("user_id");
  const [educationData, setEducationData] = useState<Education>({
    MembersId: userId ?? "",
    Qulification: "",
    Department: "",
    OtherEducation: false,
  });
  const [educatiomId, setEducationId] = useState("");
  useEffect(() => {
    axios.get(baseUrl + "/education/member/" + userId).then((response) => {
      console.log("response", response);
      if (response.data !== "") {
        setEducationData({
          ...educationData,
          ["Qulification"]: response.data.qulification,
          ["Department"]: response.data.department,
        });
        setEducationId(response.data.id);
      }
    });
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducationData({
      ...educationData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setEducationData((prevState) => ({
      ...prevState,
      OtherEducation: checked,
    }));
  };
  const handleNext = () => {
    if (educatiomId === "") {
      axios.post(baseUrl + "/education", educationData).then((response) => {
        console.log(response.data.id);
      });
      onNext(educationData);
    } else {
      axios
        .patch(baseUrl + "/education/" + educatiomId, educationData)
        .then((response) => {
          console.log(response);
        });
      onNext(educationData);
    }
    onNext(educationData);
  };
  return (
    <form
      style={{
        width: "100%",
        padding: "20px",
        paddingLeft: "60px",
        paddingRight: "30px",
      }}
    >
      <Grid
        container
        sx={{
          bgcolor: "#fff",
          boxShadow: "2px 3px 3px 1px #ccc",
          borderRadius: "5px",
          padding: "25px",
        }}
        spacing={5}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <h2>Education Qualification</h2>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <TextField
            name="Qulification"
            label="Qulification"
            value={educationData.Qulification}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            name="Department"
            label="Department"
            value={educationData.Department}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                name="otherEducation"
                checked={educationData.OtherEducation}
                onChange={handleCheckboxChange}
              />
            }
            label="Other Education"
          />
          <br />
          {educationData.OtherEducation && (
            <FormControl fullWidth>
              <InputLabel>Other Education Details</InputLabel>
              <TextField
                name="otherDetails"
                onChange={handleChange}
                margin="normal"
              />
            </FormControl>
          )}

          <Stack direction="row" spacing={1}>
            <Button variant="contained" color="info" onClick={onBack}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
            <Button variant="contained" color="success">
              save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default EducationForm;
