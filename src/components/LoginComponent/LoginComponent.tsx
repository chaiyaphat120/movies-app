import React, { useState } from "react"
import { Container, Typography, Button, Modal, Box } from "@material-ui/core"
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
            <Typography variant="h4">Movies-App</Typography>
            <Button onClick={onClick}>Click</Button>
            <Modal open={showModal} className={styles.modal} onClose={onClose}>
                <Box className={styles.box}>
                    <Typography>Show List</Typography>
                </Box>
            </Modal>
        </Container>
    )
}

export default LoginComponent
