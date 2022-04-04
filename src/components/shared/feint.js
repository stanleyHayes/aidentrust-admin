import {Box} from "@mui/material";
import {green, grey, purple, red} from "@mui/material/colors";

const Feint = ({color, children}) => {
    const renderColor = color => {
        switch (color) {
            case 'red':
                return red[100];
            case 'green':
                return green[100];
            case 'grey':
                return grey[200];
            case 'purple':
                return purple[100];
            default:
                return grey[100];
        }
    }
    return (
        <Box
            sx={{
                backgroundColor: renderColor(color),
                padding: 0.7,
                borderRadius: 0.4
            }}>
            {children}
        </Box>
    )
}
export default Feint;
