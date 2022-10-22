import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {

    const categoryNews = useLoaderData();
    
    return (
        <div>
            {categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}/>)}
        </div>
    );
};

export default Category;