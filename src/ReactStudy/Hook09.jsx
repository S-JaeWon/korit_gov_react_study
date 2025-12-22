import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function Hook09() {
    const [userList, setUserList] = useState(null);
    const [user, setUser] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        try {
            setIsloading(true);
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("오류 발생");
            }

            const responseData = await response.json();
            setUserList(responseData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsloading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    if (isloading) {
        return <div>불러오는중...</div>;
    }

    if (error) {
        return <div>에러: {error}</div>;
    }

    return (
        <div>
            <ol>
                {userList.map((user, index) =>
                    user ? (
                        <li key={index}>
                            <p>이름:{user.name}</p>
                            <p>이메일:{user.email}</p>
                            <p>전화번호:{user.phone}</p>
                        </li>
                    ) : (
                        <p>데이터가 없습니다.</p>
                    )
                )}
            </ol>
        </div>
    );
}
export default Hook09;
