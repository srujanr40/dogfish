import CreateSessionTextFields from "./CreateSessionTextFields";
import UploadImage from "../UploadImage/UploadImage";
import "./CreateSession.css";
import Box from "@mui/material/Box";


import Typography from "@mui/material/Typography";

export default function CreateSessionPopup(props) {
  let stockPlaceholderImageURL = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
  return (
    <div id="create-session-popup">
      <div id="create-session-content">
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              justifyContent: "center",
              fontWeight: "medium",
            }}
          >
            Create a new Session
          </Typography>
          <Box sx={{display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row",}}}>
            <CreateSessionTextFields />
            <Box sx={{paddingLeft: 10}}>
              <UploadImage image={stockPlaceholderImageURL}/>
            </Box>
          </Box>
        </Box>

        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
}
