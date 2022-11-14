import {Navigate, Route, Routes} from "react-router-dom";
import {Search} from "../../views/Search/Search";
import {SearchResult} from "../../views/SearchResult/SearchResult";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path={'*'} element={<Navigate to={'avia'} replace/>}/>
            <Route element={<Search/>} path={'avia'}/>
            <Route element={<SearchResult/>} path={'avia/info'}/>
        </Routes>
    )
}