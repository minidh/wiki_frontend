import "./WikiPage.css"
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function WikiPage() {
    const {searchQuery} = useParams();
    const [data,setDate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/restaurant/${searchQuery}`);
                if (response.ok) {
                    const myData = await response.json();
                    setDate(myData);
                } else {
                    const errorMessage = await response.json()
                    setError(errorMessage.message);
                }
            } catch (error) {
                setError("데이터를 가져오는 중 오류가 발생했습니다.")
            }
        };
        fetchData();
    },[searchQuery])
    return(
        <div className="container">
            <h1>{searchQuery}</h1>
            <div className="article-container">
                {error ? (
                    <p>{error}</p>
                ) : data ? (
                    <div>
                        <p>{data.식당이름}</p>
                        <p>별점: {data.별점}</p>
                        <p>평균인당금액: {data.평균인당금액}</p>
                        <p>리뷰: {data.리뷰}</p>
                    </div>
                ) : (
                    <p>데이터를 로드 중입니다.</p>
                )}
            </div>
        </div>
    )
}
export default WikiPage;