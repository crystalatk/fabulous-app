import GetImage from "./GetImage";
import GetQuote from './GetQuote';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const SendToFetch = (props) => {
    const { name, type } = useParams();
    return(
        <>
            <GetImage />
            <GetQuote name={name} type={type}/>
            <Link to='/'>
                <h5>Need more? Click here</h5>
            </Link>
        </>
    )
}

export default SendToFetch;