import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useContext, useEffect } from "react";
import {PostContext} from '../../context/postContext/PostContext';
import { deletePost, getPosts } from "../../context/postContext/apiCalls";

export default function ProductList() {
  const {posts, dispatch} = useContext(PostContext)

  useEffect(() => {
    getPosts(dispatch)
  },[dispatch])

  const handleDelete = async (id) => {
    await deletePost(id, dispatch);

    window.location.reload()
  };

  const columns = [
    { field: "Unique_employee_number", headerName: "ID", width: 120 },
    {
      field: "Reviewer",
      headerName: "Reviewer",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.Reviewer}
          </div>
        );
      },
    },
    { field: "Email", headerName: "Email", width: 120 },
    { field: "Review", headerName: "Review", width: 130 },
    { field: "Rating", headerName: "Rating", width: 130 },
    { field: "Employee", headerName: "Employee", width: 140 },
    { field: "Company", headerName: "Company", width: 140 },

    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.Unique_employee_number)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={posts}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
        getRowId={(r) => r.Unique_employee_number}
      />
    </div>
  );
}
