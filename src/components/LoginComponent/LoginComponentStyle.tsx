import { makeStyles } from "@material-ui/core"
import { ThemeColors } from "../../constants/ThemeColor"

export const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: ThemeColors.white,
        height: "97vh",
    },
})
