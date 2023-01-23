import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
      dark: true;
      outlineDark: true;
      withoutTransform: true;
    }
}


const CustomTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'dark'},
                    style: {
                        fontWeight: 'bold',
                        textTransform: 'none',
                        backgroundColor: '#3A4451',
                        '&:hover': {
                        backgroundColor: '#4B5576'
                        },
                        color: '#fff',
                        borderRadius: '8px'
                    }
                },
                {
                    props: { variant: 'outlineDark'},
                    style: {
                        background: 'transparent',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderColor: '#091625',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        color: '#091625',
                        borderRadius: '8px'
                    }
                }
                ,
                {
                    props: { variant: 'withoutTransform'},
                    style: {
                        textTransform: 'none',
                    }
                }
            ]
        }
    }
})

export {CustomTheme};