import {makeStyles} from "@material-ui/core"
const styles = makeStyles((theme) => ({
    navBar : {
        paddingRight : "0px",
        paddingLeft:"0px",
        "@media (max-width : 900px)"  : {
            paddingLeft: 0,
        },
        background: "#400CCC",  
    },
    appBar: {
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    appBarSpacer : theme.mixins.toolbar,
    logo :{
        fontWeight : 600,
        textAlign : "left",
    },
    menuButton : {
        fontWeight : 400,
        size : "18px",
        marginLeft : "38px",
        color :"white !important",
        border : "1px solid white",
    },
    toolbar : {
        display : "flex",
        justifyContent : "space-between",
        marginRight : "5px",
   },
    drawerContainer :{
        padding : "20px 30px",
        background : "#343BBB"
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
}));

export default styles;

