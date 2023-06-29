"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestoreDb } from "@/db/firebase";
import TableItem from "./_local-components/TableItem";
import TableHead from "./_local-components/TableHead";
import TablePagination from "./_local-components/TablePagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ToastContainer } from "react-toastify";

function CheckerTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPageCount, setCurrentPageCount] = useState(1);
  const [filterBy, setFilterBy] = useState("all");
  const userPerPage = 10;

  const dbUserRef = useRef(collection(firestoreDb, "users"));

  const paginationUserList = useMemo(() => {
    const sliceStart = userPerPage * (currentPageCount - 1);
    const sliceEnd = userPerPage * currentPageCount;

    const slicedUsers = users.slice(sliceStart, sliceEnd);

    return slicedUsers;
  }, [currentPageCount, users]);

  useEffect(() => {
    const getAllRegisteredUsers = async () => {
      const userList: any[] = [];

      try {
        // Query Database base on user filter input
        let q = query(dbUserRef.current);

        if (filterBy === "unprocessed") {
          q = query(dbUserRef.current, where("processed", "==", false));
        } else if (filterBy === "processed") {
          q = query(dbUserRef.current, where("processed", "==", true));
        }
        const docSnap = await getDocs(q);

        docSnap.forEach((doc) => {
          const data = doc.data();
          data.createdAt = data.createdAt.toDate().toString();
          data.id = doc.id;
          userList.push(data);
        });

        setUsers(userList);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRegisteredUsers();
  }, [filterBy]);

  const filterByOnChange = (event: SelectChangeEvent) => {
    setFilterBy(event.target.value);
  };

  const handleCurrentPageChange = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPageCount(value);
  };
  return (
    <div className="p-4">
      <FormControl sx={{ my: "20px" }} fullWidth>
        <InputLabel id="demo-simple-select-label">Filter User</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterBy}
          label="Filter User"
          onChange={filterByOnChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"processed"}>Processed</MenuItem>
          <MenuItem value={"unprocessed"}>Unprocessed</MenuItem>
        </Select>
      </FormControl>
      <div className=" overflow-x-auto">
        <table className="w-[1600px] border-collapse border">
          <TableHead />
          <tbody>
            {paginationUserList?.map((user, index) => (
              <TableItem
                key={`${index}-${user.id}`}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        totalUser={users.length}
        userPerPage={userPerPage}
        currentPageCount={currentPageCount}
        currentPageOnChange={handleCurrentPageChange}
      />
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}

export default CheckerTable;
