import {
    Box,
    Container,
    Modal,
    TextField,
    Typography,
    Button,
    Radio,
} from "@material-ui/core"
import React, { useState } from "react"
import { useStyles } from "./LoginComponentStyle"
function LoginComponent() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const styles = useStyles()
    const onClose = () => {
        setShowModal(false)
    }
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowModal(true)
    }
    return (
        <Container fixed maxWidth="xl" className={styles.root}>
            <Box>
                <Typography variant="h4">Movies-App Login</Typography>
            </Box>
            <Box className={styles.form}>
                <Box>
                    <TextField
                        id="filled-password-input"
                        label="username"
                        type="username"
                        autoComplete="current-username"
                        variant="filled"
                    />
                </Box>
                <Box style={{ marginTop: "10px" }}>
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                </Box>
                <Button style={{ marginTop: "10px" }}>Login</Button>
            </Box>
            <Box>
                <Radio
                    // checked={selectedValue === 'd'}
                    // onChange={handleChange}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "D" }}
                />
                <Radio
                    // checked={selectedValue === 'd'}
                    // onChange={handleChange}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "D" }}
                />
            </Box>
            {/* <Button onClick={onClick}>Click</Button> */}
            <Modal open={showModal} className={styles.modal} onClose={onClose}>
                <Box className={styles.box}>
                    <Typography>Show List</Typography>
                </Box>
            </Modal>
        </Container>
    )
}

export default LoginComponent
