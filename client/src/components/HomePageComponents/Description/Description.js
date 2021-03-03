import React from 'react'
import Carousel from "react-material-ui-carousel"
import {Paper} from "@material-ui/core"
import useStyles from "./styles.js";
import descData from "./descData.js"
const Description = () => {
    const {paper,content,parent} = useStyles();
    

    const Item = (props) => {

        return (
            <div className={parent}>
            <div className={paper} style={{backgroundImage : 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0.5)),url(' + props.item.img + ')'}}>
                <div className={content}>
                <h1>{props.item.heading}</h1> 
                <h3>{props.item.subHeading}</h3>
                <p>{props.item.description}</p>
                </div>
            </div>
            </div>
        );
    }
    return (
        <>
        <Carousel>
            {descData.map((item,index) => <Item key={index} item={item} />)}
        </Carousel>
        </>
    )
}

export default Description;
