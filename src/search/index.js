import {useSearchParams} from "react-router-dom";
import {useParams} from "react-router-dom";
const Search = () => {
    {/*
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    */}
    let { query } = useParams();

    console.log(query);

    return (
        <div>
            <h1>{query}</h1>
        </div>
    )
}
export default Search;