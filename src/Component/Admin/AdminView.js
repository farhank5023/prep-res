import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./AdminView.css";
import { Stack } from "@mui/material";
import AdminSidebar from "./AdminSidebar";

export default function AdminView() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 330 },
    { field: "email", headerName: "Email", width: 330 },
    { field: "mobilenumber", headerName: "Mobile Number", width: 230 },
    { field: "bookname", headerName: "Book Name", width: 430 },
  ];

  let [formData, setFormData] = useState([]);
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxzqg8WSparyfQhPi73XgAU_zJLmpGfrnVzguJA61YZfmoWISKPa9e6A0LTCMCSQegUqg/exec"
    )
      .then((response) => response.json())
      .then((actualData) => {
        setFormData(actualData);
      });
  });
  formData = formData.map((item, index) => ({ id: index + 1, ...item }));

  const rows = formData;

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "white",
        }}
        className="pdf-view-outer-div-ui"
      >
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          // localeText={{ noRowsLabel: "Loading..." }}
          components={{
            NoRowsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                {/* Loading... */}
                <div className="spinner"></div>
              </Stack>
            ),
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20, 50, 100]}
          // checkboxSelection
        />
      </div>
    </div>
  );
}
