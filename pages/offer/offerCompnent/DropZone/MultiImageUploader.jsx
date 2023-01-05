import { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import DiloagShow from "../../../../component/dailog/DiloagShow";
import { Box, Typography } from "@mui/material";
import CMP from "./DropZoneStyle";
import { ImUpload2 } from "react-icons/im";

function MultiImageUploader({
  files,
  setFiles,
  maxUpload,
  isMulti,
  noteTitle = "صورة واحدة",
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
      <Box sx={{ display: "flex", gap: 1,flexDirection:"column" }}>
        {/* <ImgTitle title={title} noteTitle={noteTitle} icon={icon} /> */}

        <CMP.ImageContainer>
        <PreviewImage />
      </CMP.ImageContainer>
        <CMP.Dropzone {...getRootProps()}>
          <input type="file" {...getInputProps()} />

          <ImUpload2 color={"white"} size={"1.5rem"} />
          <Typography
            sx={{
              fontFamily: "TB",
              color: "white",
              fontSize:"14px",
            }}
            variant="body2"
          >
            {noteTitle}
          </Typography>
          
        </CMP.Dropzone>
      </Box>
    </>
  );
}

export default MultiImageUploader;

