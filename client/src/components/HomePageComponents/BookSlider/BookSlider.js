import React,{useEffect} from 'react';
import CarouselSlider from "react-carousel-slider"
import Book from '../../AllBooksComponents/Book/Book'
import {useSelector,useDispatch} from 'react-redux'
import {getBooks} from '../../../actions/books'

                        // {
                        //    "autoSliding": {
                        //         "items": [
                        //             {
                        //                 "imgSrc": "https: ..."
                        //             },
                        //             {
                        //                 "imgSrc": "https: ..."
                        //             },
                        //             {
                        //                 "imgSrc": "https: ..."
                        //             },
                        //             {
                        //                 "imgSrc": "https: ..."
                        //             }
                        //         ]
                        //     }
                        // }
const BookSlider = () =>{
           
            const dispatch = useDispatch();
            useEffect(()=>{
                    console.log("Getting Books")
                    //accepts an action call as an argument -> goes to actions folder
                    dispatch(getBooks())
            },[dispatch]);
            const books = useSelector(state=>state.books)    
            const data = books.map((book) =>  <Book key={book.id}  book={book}/>); 
            console.log(data);
            let manner = {
                 autoSliding: {interval: "3s"},
                            duration: "2s"
                    };
                            
                let accEleSetting;

                let mobileRegx = /Mobi|Tablet|iPad|iPhone/;
                if (mobileRegx.test(navigator.userAgent)) {
                        accEleSetting.button = false;
                        }

                let buttonSetting = {
                placeOn: "middle-inside",
                hoverEvent: true,
                        style: {
                            left: {
                                height: "50px",
                                width: "50px",
                                color: "#929393",
                                background: "rgba(225, 228, 232, 0.8)",
                                borderRadius: "50%"
                                },
                            right: {
                                height: "50px",
                                width: "50px",
                                color: "#929393",
                                background: "rgba(225, 228, 232, 0.8)",
                                borderRadius: "50%"
                                }
                                }
                            };
        
                            return (
                            <CarouselSlider 
                            
                                slideItems = {data}  
                                manner = {manner} 
                                buttonSetting = {buttonSetting} />
                            )
  
                        }
                            
export default BookSlider;