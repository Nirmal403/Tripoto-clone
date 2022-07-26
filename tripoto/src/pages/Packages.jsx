import { useDispatch } from 'react-redux/es/exports';
import PackageBottom from "../Components/PackageBottom";
import { useSelector } from 'react-redux/es/exports';
import SearchBar from "../Components/SearhBar";
import { getPackageData } from '../Redux/action';
import { useCallback, useState, useEffect } from 'react';
import CompleteData from '../Components/CompleteData';
import FetchData from '../Components/FetchData';

const Packages = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();
    const packageData = useSelector((state) => state.AppReducer.data);


    useEffect(() => {
        dispatch(getPackageData());
    }, []);

    const handleClick = useCallback((val) => {
        setQuery(val);
    });

    useEffect(() => {
        if (query === "") {
            setSuggestions([]);
        }
        else {
            let newCountriesSuggestion = packageData.filter((item) => {
                return item.descTitle.toLowerCase().indexOf(query) !== -1 ? true : false;
            })
            setSuggestions(newCountriesSuggestion);
        }
    }, [query]);
    console.log(query);
    // console.log(suggestions);

    return (
        <div>
            <SearchBar onChangeInput={handleClick} />
            {suggestions.length !== 0 && suggestions ? <CompleteData suggestions={suggestions} /> : <FetchData />}
            <PackageBottom />
        </div>
    )
}

export default Packages
