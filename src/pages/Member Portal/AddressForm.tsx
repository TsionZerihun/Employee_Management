import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { baseUrl } from "../../constant";
export interface Address {
  MembersId: string;
  CountryName: string;
  RegionName: string;
  ZoneName: string;
  WoredaName: string;
  KebeleName: string;
}
interface AddressFormProps {
  onBack: () => void;
  onNext: (data: Address) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ onBack, onNext }) => {
  const userId = sessionStorage.getItem("user_id");

  const [formData, setFormData] = useState<Address>({
    MembersId: userId ?? "",
    CountryName: "",
    RegionName: "",
    ZoneName: "",
    WoredaName: "",
    KebeleName: "",
  });
  const [addressId, setAddresssId] = useState("");
  useEffect(() => {
    axios.get(baseUrl + "/address/memeber/" + userId).then((response) => {
      console.log("response", response);
      if (response.data !== "") {
        setFormData({
          ...formData,
          ["CountryName"]: response.data.countryName,
          ["RegionName"]: response.data.regionName,
          ["ZoneName"]: response.data.zoneName,
          ["WoredaName"]: response.data.woredaName,
          ["KebeleName"]: response.data.kebeleName,
        });
        setAddresssId(response.data.id);
      }
    });
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleNext = () => {
    let hasError = false;

    if (!formData.CountryName) {
      setFormData((prevState) => ({
        ...prevState,
        CountryError: "the information is requried",
      }));
      hasError = true;
    } else {
      setFormData((prevState) => ({
        ...prevState,
      }));
    }

    if (!hasError) {
      console.log("formData");
      if (addressId === "") {
        console.log("formData", formData);
        axios.post(baseUrl + "/address", formData).then((response) => {
          console.log(response.data.id);
        });
        onNext(formData);
      } else {
        console.log("llllll", formData, userId);

        axios
          .patch(baseUrl + "/address/" + addressId, formData)
          .then((response) => {
            console.log(response);
          });
        onNext(formData);
      }
    }
  };

  return (
    <form
      style={{
        width: "100%",
        padding: "20px",
        paddingLeft: "60px",
        paddingRight: "30px",
        paddingBottom: "60px",
      }}
    >
      <Grid
        container
        className="content"
        sx={{
          bgcolor: "#fff",
          boxShadow: "2px 3px 3px 1px #ccc",
          borderRadius: "5px",
          padding: "20px",
        }}
        spacing={5}
        rowSpacing={2}
      >
        <Grid item xs={12} md={12}>
          <h2>Address</h2>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextField
            name="CountryName"
            label="Country"
            value={formData.CountryName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            name="RegionName"
            label="Region"
            value={formData.RegionName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            name="ZoneName"
            label="Zone"
            value={formData.ZoneName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            name="WoredaName"
            label="Woreda"
            value={formData.WoredaName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <TextField
            name="KebeleName"
            label="Kebele"
            value={formData.KebeleName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />

          <Stack direction="row" paddingLeft={1} spacing={1}>
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

export default AddressForm;
