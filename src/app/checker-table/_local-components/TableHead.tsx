import React from "react";

function TableHead() {
  return (
    <>
      <thead>
        <tr>
          <th className="border text-left py-4 px-2">First Name</th>
          <th className="border text-left py-4 px-2">Last Name</th>
          <th className="border text-left py-4 px-2">Middle Name</th>
          <th className="border text-left py-4 px-2">Phone Number</th>
          <th className="border text-left py-4 px-2">Address</th>
          <th className="border text-left py-4 px-2">City</th>
          <th className="border text-left py-4 px-2">State</th>
          <th className="border text-left py-4 px-2">Gender</th>
          <th className="border text-left py-4 px-2">Email</th>
          <th className="border text-left py-4 px-2">Criminal</th>
          <th className="border text-left py-4 px-2">Registration Date</th>
          <th className="border text-left py-4 px-2">Processed</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
