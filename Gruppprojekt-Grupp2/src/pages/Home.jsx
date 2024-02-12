import Temporary2 from '../assets/Temporary2.webp'
import Temporary1 from '../assets/Temporary1.webp'
import ItemDisplay from "../components/ItemDisplay"
import styled from "styled-components"
import CategoryPicker from "../components/CategoryPicker"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";

const HomePageDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    gap: 1em;
`

const HomePageContent = styled.div`
    margin: 0 0 2rem 0;
    background-color: WHITE;
    width: 70%;
    max-width: 50rem;
    padding: 1rem;
`

const ItemDisplayDiv = styled.div`

`

const TextDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const CategoryPickerDiv = styled.div`
    width: 100%;

`

const NewsLetterDiv = styled.div`
    display: none;
    position: fixed;
    bottom: 15%;
    right: 5%;
    padding: 2rem;
    background-color: #9ac296;
    border-radius: .33rem;
   
    &.isVisible {
        display: flex;
        flex-direction: column;
    }  
`   

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const SubmitButton = styled.button`   
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    border-top-right-radius: .33em;
    border-bottom-right-radius: .33em;
    width: 3em;
    height: 2em;

    &.disabled {
        background-color: #e4e4e4;
        color: #c9c9c9;
        border-color: black;
        pointer-events: none;
    }
    

    &:hover {
        cursor: pointer;
       
    }
  

    
`

const NewsLetterHeader = styled.h2`

`

const NewsLetterInput = styled.input`
    width: 80%;
    height: 2em;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: solid 1px;
    border-right: none;

    &:focus {
        
    }
`

const CloseButton = styled.button`
    display: flex;
    border: solid 1px;
    position: absolute;
    right: 1.5%;
    top: 5%;
    padding: .16em;
    border-radius: 20%;

    &:hover {
        cursor: pointer;
        border-color: #fc5f5f;
        color: #fc5f5f;
    }
    
    &:active {
        border-color: black;
        color: black;
    }

`

const Home = () => {

    const [newsletterIsVisible, setNewsLetterIsVisible] = useState(true);
    
    const [signedUp, setSignedUp] = useState(false);

    const [emailHasBeenTyped, setEmailHasBeenTyped] = useState(false);

    const [inputContent, setInputContent] = useState();

    const [email, setEmail] = useState();

    const sendEmail = async () => {

        try {
            await emailjs.send("service_q0a6e1o","template_qfx5bhe", {recipient: email})
        } catch (error) {
            console.log(error)
        }
    }

    const closeButtonClicked = () => {
        setNewsLetterIsVisible(false);
    }

    const inputChanged = (event) => {
        setEmailHasBeenTyped(true);
        setInputContent(event.target.value);
        
    }


    const submitButtonClicked = (event) => {
        setEmail(inputContent);
        
        setSignedUp(true);

    }

    useEffect(() => {
        if (email != null) {
            sendEmail();
            console.log(email);
        }
        
    }, [email])

    useEffect(() => {
        emailjs.init("tYJIbM0NgL3us-bsI") 
    }, []);

    const renderUserHasSignedUp = () => {
        return (
            <NewsLetterDiv className={newsletterIsVisible? 'isVisible' : ''}>
                <CloseButton onClick={closeButtonClicked}><IoClose /></CloseButton>
                <NewsLetterHeader>Tack för att du är du!</NewsLetterHeader>
            </NewsLetterDiv>
        )
    }

    const renderUserHasNotSignedUp = () => {
        return (
            <NewsLetterDiv className={newsletterIsVisible? 'isVisible' : ''}>
                <CloseButton onClick={closeButtonClicked}><IoClose /></CloseButton>
                <NewsLetterHeader>Prenumerera på vårt nyhetsbrev!</NewsLetterHeader>
                <InputDiv>
                    <NewsLetterInput onChange={inputChanged} name='writtenEmail' placeholder='Email Adress' />
                    <SubmitButton className={emailHasBeenTyped? '': 'disabled'} onClick={submitButtonClicked} ><IoIosSend /></SubmitButton>
                </InputDiv>
            </NewsLetterDiv>
        )
    }



    return (
        <div>

            <HomePageDiv>

                <ItemDisplayDiv>
                    <ItemDisplay text="Spring Sale" filterURL="Products?filters[categories][title][$eq]=Till salu!&filters[categories][title][$eq]=Garn, garn, garn!&populate=*"/>
                </ItemDisplayDiv>

                <CategoryPickerDiv>
                    <CategoryPicker header="Våra Produkter"/>
                </CategoryPickerDiv>

                <HomePageContent>
                    <h2>Super Yarn Store</h2>
                    <p>
                            Välkommen till Super Yarn Store, en passionerad gemenskap av garnälskare som delar kärleken till kreativitet och handarbete. Grundat i år, 2024, har vi förvandlat vår entusiasm för garn till en digital oas där du kan upptäcka en färgrik värld av möjligheter. 
                    </p>
                </HomePageContent>
                {signedUp == true? 
                    renderUserHasSignedUp()
                : 
                    renderUserHasNotSignedUp()}
                    
                    
               
            </HomePageDiv>
            
            
        </div>

    )
}

export default Home