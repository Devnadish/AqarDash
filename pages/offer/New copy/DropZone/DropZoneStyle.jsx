import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Dropzone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(203, 203, 203);
  width: 100%;
  height: 70px;
  border-radius: 4px;
`;

const Text = styled.p`
  border: dotted #555 2px;
  border-radius: 4px;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
`;

const ImageWreaper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
  position: relative;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const RemoveImage = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  outline: none;
  border: 0;
  background-color: rgba(255, 255, 255, 0.4);
`;

export default {
  RemoveImage,
  ImagePreview,
  ImageWreaper,
  ImageContainer,
  Text,
  Dropzone,
  Image,
};
