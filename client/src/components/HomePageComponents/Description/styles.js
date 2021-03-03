import {makeStyles} from "@material-ui/core"

const styles = makeStyles(() => ({
    paper : {
       
       border : "5px solid #000WWW",
       backgroundSize : "cover",
       height : "400px",
       backgroundPosition : "center",
       backgroundRepeat : "no-repeat",
       position :"relative",
       marginLeft :"0px",
       marginRight :"0px",
        overflow :  "none",
        width :"100%"
            },
    content : {
        textAlign : "center",
        zIndex :"12",
        fontSize :"20px",
        fontWeight : "400",
        fontFamily :"'Pacifico',cursive",
        position : "absolute",
        top :"50%",
        left : "50%",
        transform : "translate(-50%,-50%)",
        color : "white"
    },
    parent : {
       width :"100%",
       backgroundColor :"green"
    }
}));

export default styles;