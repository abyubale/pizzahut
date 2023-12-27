import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import styles from "../AppFooter/AppFooter.module.css";
import { NavLink } from "react-router-dom";
import route from "../../routes/route.json";
function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.white">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}{" "}
        <Link color="inherit" className="text-decoration-none">
          Made by Abhay Ubale
        </Link>{" "}
        <Link color="inherit">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/abyubale?tab=repositories"
          >
            <i className="bi bi-github fs-3 text-white"></i>
          </a>
        </Link>
      </Typography>
    </>
  );
}

const defaultTheme = createTheme();

const AppFooter = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CssBaseline />

        <Box
          component="footer"
          sx={{
            py: 1,
            px: 1,
            mt: "auto",
            color: "white",
          }}
          className={styles.footer}
        >
          <Container maxWidth="sm">
            <div className="d-flex justify-content-between">
              <div>
                <p className="fs-3">Quik links</p>

                <p>
                  {" "}
                  <NavLink to={route.CONSTACT_US}>
                    <a>Contact us</a>
                  </NavLink>{" "}
                </p>
                <p>
                  <NavLink to={route.PRIVACY_POLICY}>Privacy Policy</NavLink>
                </p>
              </div>
              <div>
                <p className="fs-3">Contact us</p>

                <p>Mon-Sun 10 AM to 11 PM</p>
                <p>Pune, India</p>
              </div>
            </div>

            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AppFooter;
