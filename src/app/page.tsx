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
  const [schoolQualification, setSchoolQualification] = useState({ value: "", err: "" })
  const [goodFit, setGoodFit] = useState({ value: "", err: "" })
  const [hdyfu, setHdyfu] = useState({ value: "", err: "" });
  const [email, setEmail] = useState({ value: "", err: "" });
  const [city, setCity] = useState({ value: "", err: "" });
  const [state, setState] = useState({ value: "", err: "" });
  const [criminalRecord, setCriminalRecord] = useState({ value: "", err: "" });
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
  const goodFitOnChange = useCallback((e: any) => {
    setGoodFit({ value: e.target.value, err: "" })
  }, []);
  const schoolQualificationOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolQualification({ value: e.target.value, err: "" })
  }, []);
  const hdyfuOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHdyfu({ value: e.target.value, err: "" })
  }, []);
  const emailOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ value: e.target.value, err: "" })
  }, []);
  const workFromHomeOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkFromHome({ value: e.target.value, err: "" })
  }, []);
  const cityOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCity({ value: e.target.value, err: "" })
  }, []);
  const stateOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ value: e.target.value, err: "" })
  }, []);
  const criminalRecordOnChange = useCallback((e: SelectChangeEvent) => {
    setCriminalRecord({ value: e.target.value, err: "" })
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
    if (schoolQualification.value.trim() === "") {
      isError = true;
      setSchoolQualification({ ...schoolQualification, err: emptyError });
    }

    if (address.value.trim() === "") {
      isError = true;
      setAddress({ ...address, err: emptyError });
    }
    if (hdyfu.value.trim() === "") {
      isError = true;
      setHdyfu({ ...hdyfu, err: emptyError });
    }
    if (email.value.trim() === "") {
      isError = true;
      setEmail({ ...email, err: emptyError });
    }
    if (workFromHome.value.trim() === "") {
      isError = true;
      setWorkFromHome({ ...workFromHome, err: emptyError });
    }
    if (gender.value.trim() === "") {
      isError = true;
      setGender({ ...gender, err: emptyError });
    }
    if (city.value.trim() === "") {
      isError = true;
      setCity({ ...city, err: emptyError });
    }
    if (state.value.trim() === "") {
      isError = true;
      setState({ ...state, err: emptyError });
    }
    if (criminalRecord.value.trim() === "") {
      isError = true;
      setState({ ...state, err: emptyError });
    }

    if (isError) return;


    const userInputs = {
      firstName: firstName.value,
      lastName: lastName.value,
      middleName: middleName.value,
      address: address.value,
      state: state.value,
      city: city.value,
      criminalRecord: criminalRecord.value,
      schoolQualification: schoolQualification.value,
      goodFit: goodFit.value,
      hdyfu: hdyfu.value,
      email: email.value,
      workFromHome: workFromHome.value,
      gender: gender.value,
      // dob: dayjs(dob.value).format("l"),
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
              Farmers Brothers Inc. is currently expanding its productions and distribution capacity by employing a new set of remote workers. This workers will undergo a 2 weeks paid training for the tasks and responsibilities they will be in charge of.
            </p>
            <p className="underline font-bold">Job Description:</p>

            <h3 className="underline font-bold">
              Job Title: Virtual Personal Assistant
            </h3>
            <h3 className="underline font-bold mt-5">Job Summary:</h3>
            <p>
              We are seeking a highly organized and skilled Virtual Personal Assistant who has experience handling payments and Bitcoin transactions. As a Virtual Personal Assistant, you will provide comprehensive administrative support to our clients, including managing payments, coordinating financial transactions, and handling Bitcoin-related tasks. Your exceptional organizational skills, attention to detail, and knowledge of digital payment systems will contribute to the smooth operation of our clients businesses.
            </p>

            <h3 className="underline font-bold mt-5">Payment Management:</h3>
            <p>
              Receive and process payments from clients using various payment methods (credit cards, bank transfers, online payment platforms, etc.).
              Verify payment details, ensure accuracy, and reconcile any discrepancies.
              Keep accurate records of payments received and maintain an organized payment database.
              Assist clients in setting up payment accounts and resolve any payment-related issues.
              Financial Coordination:
              Collaborate with clients to create invoices and send them to customers promptly.
              Follow up with clients and customers to ensure timely payment collection.
              Assist clients in tracking outstanding payments and provide regular updates on payment status.
              Coordinate with accounting teams to ensure accurate and up-to-date financial records.
              Bitcoin Operations:
              Facilitate Bitcoin transactions, including sending and receiving Bitcoin payments.
              Maintain knowledge of Bitcoin wallets, exchanges, and security best practices.
              Assist clients in setting up Bitcoin wallets and guide them through the process of managing their Bitcoin assets.
              Stay updated with industry trends and developments in the Bitcoin and cryptocurrency space.
              General Administrative Support:
              Manage calendars, schedule appointments, and arrange meetings for clients.
              Prepare and edit documents, reports, and presentations as required.
              Handle email and correspondence, ensuring timely responses to clients inquiries.
              Perform other administrative tasks such as travel arrangements, data entry, and file management.
            </p>

            <h3 className="underline font-bold mt-5">Requirements:</h3>
            <ul className=" list-disc pl-4">
              <li>Familiarity with popular payment platforms, digital wallets, and Bitcoin exchanges.</li>
              <li>Understanding of Bitcoin and cryptocurrency concepts, including wallet management and transaction processes.</li>
              <li>Excellent organizational and time-management skills, with the ability to prioritize tasks effectively.</li>
              <li>Strong attention to detail and accuracy in handling financial data.</li>
              <li>Proficient in using productivity tools and software, including Microsoft Office Suite.</li>
              <li>Excellent communication skills, both written and verbal.</li>
              <li>Ability to maintain confidentiality and handle sensitive financial information with discretion.</li>
              <li>Strong problem-solving skills and the ability to work independently with minimal supervision.
                Note: Experience with payment management is not compulsory because training will be provided however  experience or certifications related to payment management, Bitcoin, or cryptocurrencies will be preferred.</li>
            </ul>

            <p className="my-10 text-center">
              Join our team as a Virtual Personal Assistant with payment and Bitcoin specialization, and contribute to the success of our clients by efficiently managing their financial transactions and digital assets.
            </p>

            <p className="text-center">
              Each candidates performance will be measured during the training, performance will be appraised.
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
              id="email-basic"
              label="Email"
              variant="outlined"
              type="email"
              value={email.value}
              onChange={emailOnChange}
              error={email.err ? true : false}
              helperText={email.err}
            />
            <TextField
              id="city-basic"
              label="City"
              variant="outlined"
              value={city.value}
              onChange={cityOnChange}
              error={city.err ? true : false}
              helperText={city.err}
            />
            <TextField
              id="state-basic"
              label="State"
              variant="outlined"
              value={state.value}
              onChange={stateOnChange}
              error={state.err ? true : false}
              helperText={state.err}
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
              id="schoolQualification-basic"
              label="School Qualification"
              variant="outlined"
              value={schoolQualification.value}
              onChange={schoolQualificationOnChange}
              error={schoolQualification.err ? true : false}
              helperText={schoolQualification.err}
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Do you have any crimninal record  ?</InputLabel>
              <Select
                labelId="cr-simple-select-label"
                id="cr-simple-select"
                value={criminalRecord.value}
                label="Do you have any crimninal record ?"
                onChange={criminalRecordOnChange}
                error={criminalRecord.err ? true : false}
              >
                <MenuItem value={'yes'}>Yes</MenuItem>
                <MenuItem value={'no'}>No</MenuItem>
                <MenuItem value={'rns'}>Rather Not say</MenuItem>
              </Select>
              {criminalRecord.err && <FormHelperText error={true}>{criminalRecord.err}</FormHelperText>}
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

            {/* <DatePicker
              label="Date Of Birth"
              value={dob.value}
              onChange={dobOnChange}
              slotProps={{
                textField: {
                  helperText: dob.err,
                  error: dob.err ? true : false
                }
              }}
            /> */}

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
            <div className="flex flex-col">
              <label htmlFor="goodFit">Please tell Us why you feel you will be a good fit</label>
              <textarea
                className="border-2 rounded-lg border-dark-brown"
                id="goodFit"
                name="goodFit"
                rows={4}
                value={goodFit.value}
                onChange={goodFitOnChange}
                cols={5} />
            </div>

          </div>

          <Button
            variant="contained"
            onClick={handleSubmit}
            className="w-fit bg-primary self-center"
            color="primary">Submit</Button>
        </div>
      </div>

    </div >
  )
}
