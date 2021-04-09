import React from 'react'
import {Container ,Typography} from '@material-ui/core';
import { useStyles } from './LoginComponentStyle'
function LoginComponent() {
    const styles = useStyles()
    return (
        <Container fixed maxWidth="xl" className={styles.root}>
            <Typography variant="h4">
                Movies-App
            </Typography>
        </Container>
    )
}

export default LoginComponent
