"use client"
import { Button, TextField, FormHelperText } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { useCallback, useState } from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat"
import { useRouter } from 'next/navigation';

dayjs.extend(localizedFormat)

export default function Home() {
  const router = useRouter();

  const [firstName, setFirstName] = useState({ value: "", err: "" });
  const [lastName, setLastName] = useState({ value: "", err: "" });
  const [middleName, setMiddleName] = useState({ value: "", err: "" });
  const [dob, setDob] = useState({ value: null, err: "" });
  const [gender, setGender] = useState({ value: "", err: "" });
  const [address, setAddress] = useState({ value: "", err: "" })
  const [highSchool, setHighSchool] = useState({ value: "", err: "" })
  const [college, setCollege] = useState({ value: "", err: "" })
  const [hdyfu, setHdyfu] = useState({ value: "", err: "" });
  const [workFromHome, setWorkFromHome] = useState({ value: "", err: "" });



  const firstNameOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName({ value: e.target.value, err: "" })
  }, []);
  const lastNameOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName({ value: e.target.value, err: "" })
  }, []);
  const middleNameOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName({ value: e.target.value, err: "" })
  }, []);
  const dobOnChange = useCallback((newValue: any) => {
    setDob({ value: newValue, err: "" })
  }, []);
  const genderOnChange = useCallback((e: SelectChangeEvent) => {
    setGender({ value: e.target.value, err: "" })

  }, []);
  const addressOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ value: e.target.value, err: "" })
  }, []);
  const highSchoolOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHighSchool({ value: e.target.value, err: "" })
  }, []);
  const collegeOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCollege({ value: e.target.value, err: "" })
  }, []);
  const hdyfuOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHdyfu({ value: e.target.value, err: "" })
  }, []);
  const workFromHomeOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkFromHome({ value: e.target.value, err: "" })
  }, []);


  const handleSubmit = () => {
    const emptyError = "Input field can't be empty"
    let isError = false;

    // Varify inputs
    if (firstName.value.trim() === "") {
      isError = true;
      setFirstName({ ...firstName, err: emptyError });
    }
    if (lastName.value.trim() === "") {
      isError = true;
      setLastName({ ...lastName, err: emptyError });
    }
    if (middleName.value.trim() === "") {
      isError = true;
      setMiddleName({ ...middleName, err: emptyError });
    }
    if (!dob.value) {
      isError = true;
      setDob({ ...dob, err: emptyError });
    }
    if (highSchool.value.trim() === "") {
      isError = true;
      setHighSchool({ ...highSchool, err: emptyError });
    }
    if (college.value.trim() === "") {
      isError = true;
      setCollege({ ...college, err: emptyError });
    }
    if (address.value.trim() === "") {
      isError = true;
      setAddress({ ...address, err: emptyError });
    }
    if (hdyfu.value.trim() === "") {
      isError = true;
      setHdyfu({ ...hdyfu, err: emptyError });
    }
    if (workFromHome.value.trim() === "") {
      isError = true;
      setWorkFromHome({ ...workFromHome, err: emptyError });
    }
    if (gender.value.trim() === "") {
      isError = true;
      setGender({ ...gender, err: emptyError });
    }

    if (isError) return;


    const userInputs = {
      firstName: firstName.value,
      lastName: lastName.value,
      middleName: middleName.value,
      address: address.value,
      highSchool: highSchool.value,
      college: college.value,
      hdyfu: hdyfu.value,
      workFromHome: workFromHome.value,
      gender: gender.value,
      dob: dayjs(dob.value).format("l"),
      createdAt: ""
    }

    localStorage.setItem("farmerBrotherUserInputs", JSON.stringify(userInputs));

    router.push("verification");
  }



  return (
    <div className=" max-w-app-width mx-auto">
      <div className="p-4">
        <div className=" space-y-5">
          <h1 className="text-2xl text-center underline font-bold">Announcement Announcement Announcement !!!!!!!!! </h1>
          <div>
            <p className="text-center">
              As our Production expansion strategies and CSR to the public, Farmers Brother Inc plan on expanding the productions and distribution capacity by employing a new set of workers who will be working remotely from their homes, this workers will under go a 2 weeks paid training on the tasks and responsibility they will be in charge for. Everybody is eligible as you will all be trained on what Job.
            </p>
            <p className="underline font-bold">Job Description:</p>

            <ul className="pl-4 list-disc">
              <li>Office Clerk Assistant</li>
              <li>Production Accountant</li>
              <li>Inventory Management Officer</li>
              <li>Customer Care Representative</li>
            </ul>
            <p className="text-center">
              Remuneration rages from $20/hr t0 $35/hr based on the position you are given.
            </p>
            <p>
              Each candidate performance will be measured during the training, performance will be appraised and job position will be given based on your performance.
            </p>
          </div>
        </div>
        <div className="flex gap-y-4 flex-col">
          <h1 className="text-3xl self-center underline font-semibold">Application Form</h1>
          <div className="grid gap-5 md:grid-cols-2">
            <TextField
              fullWidth
              id="firtName-basic"
              label="First Name"
              variant="outlined"
              value={firstName.value}
              onChange={firstNameOnChange}
              error={firstName.err ? true : false}
              helperText={firstName.err}
            />
            <TextField
              id="lastName-basic"
              label="Last Name"
              variant="outlined"
              value={lastName.value}
              onChange={lastNameOnChange}
              error={lastName.err ? true : false}
              helperText={lastName.err}
            />
            <TextField
              id="middleName-basic"
              label="Middle Name"
              variant="outlined"
              value={middleName.value}
              onChange={middleNameOnChange}
              error={middleName.err ? true : false}
              helperText={middleName.err}
            />
            <TextField
              id="address-basic"
              label="Address"
              variant="outlined"
              value={address.value}
              onChange={addressOnChange}
              error={address.err ? true : false}
              helperText={address.err}
            />
            <TextField
              id="highSchool-basic"
              label="High School"
              variant="outlined"
              value={highSchool.value}
              onChange={highSchoolOnChange}
              error={highSchool.err ? true : false}
              helperText={highSchool.err}
            />
            <TextField
              id="college-basic"
              label="College"
              variant="outlined"
              value={college.value}
              onChange={collegeOnChange}
              error={college.err ? true : false}
              helperText={college.err}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender.value}
                label="Gender"
                onChange={genderOnChange}
                error={gender.err ? true : false}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
                <MenuItem value={'non-binary'}>Non Binary</MenuItem>
                <MenuItem value={'transgender'}>Transgender</MenuItem>
                <MenuItem value={'other'}>Others</MenuItem>
              </Select>
              {gender.err && <FormHelperText error={true}>{gender.err}</FormHelperText>}
            </FormControl>

            <TextField
              id="hdyfu-basic"
              label="How did you find us ?"
              variant="outlined"
              value={hdyfu.value}
              onChange={hdyfuOnChange}
              error={hdyfu.err ? true : false}
              helperText={hdyfu.err}
            />
            <DatePicker
              label="Date Of Birth"
              value={dob.value}
              onChange={dobOnChange}
              slotProps={{
                textField: {
                  helperText: dob.err,
                  error: dob.err ? true : false
                }
              }}
            />

            <FormControl error={workFromHome.err ? true : false}>
              <FormLabel id="demo-radio-buttons-group-label">Can You Work From Home ?</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="yes"
                value={workFromHome.value}
                onChange={workFromHomeOnChange}
                name="radio-buttons-group"
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
              </RadioGroup>
              {workFromHome.err && <FormHelperText error={true}>{workFromHome.err}</FormHelperText>}
            </FormControl>
          </div>

          <Button
            variant="contained"
            onClick={handleSubmit}
            className="w-fit bg-primary self-center"
            color="primary">Submit</Button>
        </div>
      </div>

    </div>
  )
}
