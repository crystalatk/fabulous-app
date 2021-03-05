import GetImage from "./GetImage";
import GetQuote from './GetQuote';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LinkHome from "./LinkHome";



const SendToFetch = (props) => {
    const { name, type } = useParams();
    return(
        <>
            <GetImage />
            <GetQuote name={name} type={type}/>
            <Link to='/'>
                <LinkHome className="link">Need Another Message? Click here</LinkHome>
            </Link>
        </>
    )
}

export default SendToFetch;