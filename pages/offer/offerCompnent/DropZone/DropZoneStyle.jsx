import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Dropzone = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: ${({theme})=>theme.shadow2};
  background-color:${({theme})=>theme.appleBackgroud};;
  /* width: 100%; */
  /* height:100%; */
  max-height: 45px;
  padding:1rem;
  border-radius: 14px;
  cursor: pointer;
`;

const Text = styled.p`
  border: dotted #555 2px;
  border-radius: 4px;
  /* width: 100%; */
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
  width: 180px;
  /* height: 100%; */
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 5px;
  position: relative;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const RemoveImage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  outline: none;
  border: 0;
  padding: 0;
  margin: 0;
  color: red;
  background-color: rgba(255, 255, 255, 0.9);
&:hover{
  background-color: red;
  color: white;

}
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
