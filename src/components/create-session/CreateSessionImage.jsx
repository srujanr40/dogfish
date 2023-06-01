import { useState } from "react";
import Box from "@mui/material/Box";

export default function CreateSessionImage() {
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
    <Box>
      <div>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" />
        ) : (
          <div className="placeholder-image">Placeholder Image</div>
        )}
        <input type="file" onChange={handleImageUpload} accept="image/*" />
      </div>
    </Box>
  );
}
