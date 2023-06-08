import { useState } from "react";
import Box from "@mui/material/Box";
import "./UploadImage.css";

export default function UploadImage(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{paddingLeft: 10}}>
        {selectedImage ? (
          <img className="upload-image" src={selectedImage} alt="Selected"/>
        ) : (
          <div>
            <img className="upload-image" src={props.image} alt='placeholder'/>
          </div>
        )}
        <br />
        <input type="file" onChange={handleImageUpload} accept="image/*" />
    </Box>
  );
}
