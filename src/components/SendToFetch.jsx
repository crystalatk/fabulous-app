import GetImage from "./GetImage";
import GetQuote from './GetQuote';
import { useParams } from "react-router-dom";



const SendToFetch = (props) => {
    const { name } = useParams();
    return(
        <>
            <GetImage />
            <GetQuote name={name}/>
        </>
    )
}

export default SendToFetch;