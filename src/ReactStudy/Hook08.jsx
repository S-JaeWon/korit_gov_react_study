import { useEffect, useRef } from "react";
/**
 * useRef -> 돔 객체에 접근할 때 사용 = Document.quaryselcet()
 * 값을 저장하되, 그 값이 바뀌어도 재렌더링 발생시키지 않는 상태값 (대신 렌더링이 일어나지 않아 화면이 바뀌는거 x )
 */
function Hook08() {
    const inputRef = useRef();
    const intervalValueRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();

        // intervalValueRef.current = setInterval(() => {
        //     console.log("아무거나");
        // }, 1000);
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}
export default Hook08;
