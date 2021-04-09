import { makeStyles } from "@material-ui/core"
import { ThemeColors } from "../../constants/ThemeColor"

export const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: ThemeColors.white,
        height: "97vh",
    },
    modal: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        width: "80%",
        height: "80%",
        backgroundColor: "red",
    },
    form: {
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
    },
})
