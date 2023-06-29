import React, { useRef, useState } from "react";
import Switch from "@mui/material/Switch";
import { doc, updateDoc } from "firebase/firestore";
import { firestoreDb } from "@/db/firebase";
import copyTextToClipboard from "@/app/_utils/copyToClipBoard";
import { ToastContainer, toast } from "react-toastify";

interface PropType {
  user: any;
  index: number;
}

function TableItem({ user, index }: PropType) {
  const [isProcessed, setIsProcessed] = useState(user?.processed);

  const userDbRef = useRef(doc(firestoreDb, "users", user.id));

  const toggleProcessedState = async (value: boolean) => {
    try {
      await updateDoc(userDbRef.current, { processed: value });
    } catch (error) {}
  };

  const handleClick = (e: React.MouseEvent) => {
    toast("Copied Successfully");
    copyTextToClipboard(e.currentTarget.innerHTML.toString());
  };

  return (
    <>
      <tr>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.firstName}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.lastName}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.middleName}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.PhoneNumber}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.address}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.city}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.state}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.gender}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.email}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.criminalRecord}
        </td>
        <td
          onClick={handleClick}
          className="border text-left py-4 px-2 cursor-pointer"
        >
          {user?.createdAt}
        </td>
        <td className="border text-left py-4 px-2 cursor-pointer">
          <Switch
            checked={isProcessed}
            onChange={() => {
              setIsProcessed(!user?.processed);
              toggleProcessedState(!user?.processed);
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
        </td>
      </tr>
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  );
}

export default TableItem;
