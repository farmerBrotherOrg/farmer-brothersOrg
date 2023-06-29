import React, { useState } from "react";
import { Pagination } from "@mui/material";

interface PropType {
  totalUser: number;
  userPerPage: number;
  currentPageCount: number;
  currentPageOnChange: (e: React.ChangeEvent<unknown>, value: number) => void;
}

function TablePagination({
  totalUser,
  userPerPage,
  currentPageCount,
  currentPageOnChange,
}: PropType) {
  const pageCount = Math.ceil(totalUser / userPerPage);

  if (pageCount < 1) return null;

  return (
    <div className="flex justify-center items-center">
      <Pagination
        count={pageCount}
        page={currentPageCount}
        onChange={currentPageOnChange}
      />
    </div>
  );
}

export default TablePagination;
