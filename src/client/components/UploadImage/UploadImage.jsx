import { useState } from "react";
import Box from "@mui/material/Box";
import "./UploadImage.css";

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  let stockPlaceholderImageURL = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='

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
            <img className="upload-image" src={stockPlaceholderImageURL} alt='placeholder'/>
          </div>
        )}
        <br />
        <input type="file" onChange={handleImageUpload} accept="image/*" />
    </Box>
  );
}
