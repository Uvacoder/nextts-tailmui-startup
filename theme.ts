import { createTheme } from "@mui/material/styles";
const radius = 5
// Create a theme instance.
const theme = createTheme({
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                inputRoot: {
                    paddingTop: 5
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid  #d5d5d5'
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: 'none'
                }
            }
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    borderRadius: radius,
                    border: '1px solid #d3d3d3'
                },

            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: 'white',
                    borderRadius: radius,
                },
                multiline: {
                    height: '100%',
                },

            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        }
    },

    palette: {
        primary: {
            main: '#473BF0',
        },
        secondary: {
            main: '#12141D',
        },
        success: {
            main: '#34D399'
        }
    },

});

export default theme;