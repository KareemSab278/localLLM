export { Theme, drawerTheme };

const COLOR = "#dfdfdfff";
const BACKGROUND = "#2b2d42ff";


const Theme = `
    html, body, #root {
    min-height: 100vh;
    background: ${BACKGROUND};
    color: ${COLOR};
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    }

`;

const drawerTheme = {
  paper: {
    sx: {
      backgroundColor: BACKGROUND,
      width: 200,
      color: COLOR,
    },
  },
};
