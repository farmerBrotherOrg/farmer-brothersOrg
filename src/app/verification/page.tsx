'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, TextField } from "@mui/material";
import { ReCaptcha } from "next-recaptcha-v3";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { firestoreDb } from '@/db/firebase';
import illustration from "@/app/assets/verification-illus.svg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ColorRing } from 'react-loader-spinner';

function VerificationPage() {
    const router = useRouter();

    const dbUserRef = useRef(collection(firestoreDb, "users"));
    const [phone, setPhone] = useState({ value: "", err: "" });
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const phoneOnChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D+/, ""); // remove spaces and non-digits
        const isComplete = /\d{11}/.test(value);

        if (!isComplete) {
            setPhone({ value: value, err: "" })
        }

    }, [])

    const handleSubmit = async () => {
        if (phone.value.length !== 10) return setPhone({ ...phone, err: "Invalid Phone Number" });
        setIsLoading(true);

        const userData = JSON.parse(localStorage.getItem("farmerBrotherUserInputs")!);

        userData.PhoneNumber = phone.value;
        userData.createdAt = serverTimestamp();

        try {
            const res = await addDoc(dbUserRef.current, userData);

            localStorage.removeItem("farmerBrotherUserInputs");
            setIsLoading(false);
            router.push("/application-complete");
        } catch (err) {
            setIsLoading(false);
            console.log(err)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("farmerBrotherUserInputs")) {
            router.push("/");
        }
    }, [router])
    return (
        <div className="max-w-app-width mx-auto p-4 h-full flex justify-center items-center">
            <div className="flex flex-col gap-10 md:w-1/2">
                <Image
                    src={illustration}
                    alt='illus'
                    width={200}
                    height={200}
                    className='self-center'
                />
                <h1 className='text-center text-3xl font-bold'>Please Verify Your Identity and confirm you are a citizen of USA by verifying with your Phone number</h1>
                <p className='text-red-500 text-center font-bold'>Note: That your information is well protected as this information will not be shared with any third party</p>
                <TextField
                    fullWidth
                    id="phone-basic"
                    label="Phone Number"
                    variant="outlined"
                    type='tel'
                    value={phone.value}
                    onChange={phoneOnChange}
                    error={phone.err ? true : false}
                    helperText={phone.err}
                />
                <ReCaptcha onValidate={setRecaptchaToken} action="page_view" />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    className="w-fit bg-primary self-center"
                    color="primary">Submit</Button>
                {
                    isLoading &&
                    <div className='self-center'>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#4A453F', '#444240', '#444240a8', '#FDB836', '#aaa']}
                        />
                    </div>
                }

            </div>

        </div>
    )
}

export default VerificationPage;