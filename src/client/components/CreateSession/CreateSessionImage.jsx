import { useState } from "react";
import Box from "@mui/material/Box";

export default function CreateSessionImage() {
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
    <Box>
      <div>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" style={{resizeMode: 'contain',
          height: 250,
          width: 250,
          objectFit: "scale-down"}} />
        ) : (
          <div>
            <img className="placeholder-image" src={stockPlaceholderImageURL} alt='placeholder' style={{resizeMode: 'contain',
            height: 250,
            width: 250,
            objectFit: "scale-down"}}/>
          </div>
        )}
        <input type="file" onChange={handleImageUpload} accept="image/*" />
      </div>
    </Box>
  );
}
