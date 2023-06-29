"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "@/db/firebase";
import TableItem from "./_local-components/TableItem";
import TableHead from "./_local-components/TableHead";
import TablePagination from "./_local-components/TablePagination";

function CheckerTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPageCount, setCurrentPageCount] = useState(1);
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
        const docSnap = await getDocs(dbUserRef.current);
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
  }, []);

  const handleCurrentPageChange = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPageCount(value);
  };
  return (
    <div className="p-4">
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
    </div>
  );
}

export default CheckerTable;
