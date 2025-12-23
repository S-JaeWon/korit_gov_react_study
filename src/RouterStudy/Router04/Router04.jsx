import { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

//? param -> /~~?[name1]=[param1]&[name2]=[param2]

function Component1() {
    const { name } = useParams();
    return <h1>path parameter는 {decodeURI(name)} 입니다.</h1>;
}

function Component2() {
    //? useSearchParams 현재 search Params, params를 변경하는 함수 형태의 배열을 반환
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        console.log(searchParams.get("name"));
        console.log(searchParams.get("age"));
        console.log(searchParams.getAll("info")); //? 해당 이름으로 되어있는 param 값 배열로 가져옴
    }, [searchParams]);

    const onClickHandler = () => {
        setSearchParams((prev) => { //? 있는 키면 해당 param 값 수정, 없다면 키와 param 값 추가
            prev.set("info", "busan");
            prev.set("name", "민지");
            return prev;
        });
    };

    return (
        <>
            <div>
                <button onClick={onClickHandler}>
                    URI에 'address=busan' 추가/변경
                </button>
            </div>
        </>
    );
}

function Router04() {
    return (
        <div>
            <Routes>
                <Route path="/param1/:name" element={<Component1 />} />
                <Route path="/param2" element={<Component2 />} />
            </Routes>
        </div>
    );
}
export default Router04;
