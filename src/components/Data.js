import React, { useEffect, useState } from "react";
import "./Data.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterListIcon from "@mui/icons-material/FilterList";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ImportExportIcon from "@mui/icons-material/ImportExport";
// import LongMenu from "./MoreButton";
// import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { db } from "../firebase";


const ITEM_HEIGHT = 48;

const Data = () => {
  const [files, setFiles] = useState([]);

  const [fileUrl, setFileUrl] = useState(''); 

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [selected, setSelected] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

 
  const handleMenuItemClick = (option, file) => {
    if (option === "Download") {
      downloadFile(file.data.fileURL, file.data.filename);
    } else if (option === "Trash") {
      deleteFile(file);
    }
    handleClose();
  };

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };


  const deleteFile = async (file) => {
    try {
      await db.collection("myfiles").doc(file.id).delete();
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    db.collection("myfiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <div className="data">
      <div className="data__header">
        <div className="data_headerLeft">
          <p>My Drive</p>
          <ArrowDropDownIcon />
        </div>
        <div className="data_headerRight">
          <FilterListIcon />
          <InfoOutlinedIcon />
        </div>
      </div>

      <div className="data__content">
        <div className="data_grid">
          {files.map((file) => {
            return (
              <div key={file.data.fileURL} className="data___file">
                {/* <InsertDriveFileIcon /> */}
                <img src={file.data.fileURL} />
                <a href={file.data.fileURL}>
                  <p>{file.data.filename}</p>
                </a>
              </div>
            );
          })}
        </div>
        <div className="data_list">
          <div className="detailsRow">
            <p>
              <b>
                Name <ImportExportIcon />{" "}
              </b>
            </p>
            <p>
              <b>Owner</b>
            </p>
            <p>
              <b>Last Modified</b>
            </p>
            <p>
              <b>File Size</b>
            </p>
          </div>
          {files.map((file) => {
            return (
              <div key={file.id} className="detailsRow">
                <a href={file.data.fileURL} target="_blank">
                  <p>
                    <InsertDriveFileIcon /> {file.data.filename}
                  </p>
                </a>
                <p>Me</p>
                <p>
                  {new Date(file.data.timestamp?.seconds * 1000).toUTCString()}
                </p>
                <p>{formatBytes(file.data.size)}</p>
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 2.5,
                        width: "40ch",
                        position:  "relative",
                        left : '-50%'
                      },
                    }}
                  >
                    
                    <MenuItem onClick={() => handleMenuItemClick("Download", file)}>Download</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick("Trash", file)}>Trash</MenuItem>
                  </Menu>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Data;
