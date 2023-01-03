import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import DiloagShow from "../../../../component/dailog/DiloagShow";
import { Box, Typography } from "@mui/material";
import CMP from "./DropZoneStyle";

function MultiImageUploader({
  files,
  setFiles,
  maxUpload,
  isMulti,
  title = "",
  noteTitle = "",
}) {
  const [open, setOpen] = useState(false);
  const [bigImage, setBigImage] = useState("");
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: maxUpload,
    multiple: isMulti,

    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
/* function to preview and delete image  */
  const PreviewImage = () => {
    const handleClike = (I) => {
      setBigImage((pre) => I);
      setOpen(true);
    };

    const removeFile = (I, e) => {
      e.preventDefault();
      e.stopPropagation();
      const newFiles = [...files];
      newFiles.splice(newFiles.indexOf(I), 1);
      setFiles(newFiles);
    };

    return (
      <>
        {files.map((file) => (
          <React.Fragment key={file.name}>
            <CMP.ImageWreaper>
              <CMP.ImagePreview
                src={file.preview}
                alt="image"
                onClick={() => handleClike(file.preview)}
              />
              <CMP.RemoveImage onClick={(e) => removeFile(file.preview, e)}>
                X
              </CMP.RemoveImage>
            </CMP.ImageWreaper>

            {open ? (
              <DiloagShow open={open} toggle={setOpen}>
                <CMP.Image src={bigImage} />
              </DiloagShow>
            ) : null}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      <CMP.Dropzone {...getRootProps()}>
        <input type="file" {...getInputProps()} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            borderRadius: "115px solid",
            // backgroundColor:"red",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "CB",
                color: "white",
                backgroundColor: "primary.light",
                width: "fit-content",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderRadius: 1,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "TR",
                fontSize: ".8rem",
                color: "white",
                backgroundColor: "error.light",
                width: "fit-content",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderRadius: 1,
              }}
            >
              {noteTitle}
            </Typography>
          </Box>
          <CMP.Text className="text">اضغط هنا او اسحب الصور</CMP.Text>
        </Box>
      </CMP.Dropzone>
      <CMP.ImageContainer>
        <PreviewImage />
      </CMP.ImageContainer>
    </>
  );
}

export default MultiImageUploader;
