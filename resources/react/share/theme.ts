import { indigo, pink } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

/**
 * @see https://material.io/resources/color/
 */
const theme = createMuiTheme({
    palette: {
        primary: {
            main: pink[200]
        },
        secondary: {
            main: indigo[200]
        }
    },
    overrides: {
        MuiButton: {
            outlined: {
                borderWidth: 2
            }
        }
    }
});

export default theme;
