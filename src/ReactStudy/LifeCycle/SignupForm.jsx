import { useEffect, useState } from "react";

function SignupForm() {
    const [formValues, setFormvalues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({});
    const [isDisabled, setIsdisabled] = useState(true);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        setFormvalues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    useEffect(() => {
        setIsdisabled(true);

        const newErros = {};
        
        if (!formValues.email.includes("@") && formValues.email.length > 0) {
            newErros.email = "이메일 형식이 아닙니다.";
        }
        if (formValues.password.length < 8 && formValues.password.length > 0) {
            newErros.password = "비밀번호는 8자리 이상이어야 합니다.";
        }
        setError(newErros);

        if (
            Object.keys(newErros).length === 0 &&
            formValues.email &&
            formValues.password
        ) {
            setIsdisabled(false);
        }
    }, [formValues]);

    const signupClickHandler = () => {
        alert("가입 되었습니다.");
    };

    return (
        <div>
            <div>
                <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    placeholder="이메일"
                    onChange={onChangeHandler}
                />
                {error.email && <p>{error.email}</p>}
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    value={formValues.password}
                    placeholder="비밀번호"
                    onChange={onChangeHandler}
                />
                {error.password && <p>{error.password}</p>}
            </div>
            <button disabled={isDisabled} onClick={signupClickHandler}>
                가입하기
            </button>
        </div>
    );
}
export default SignupForm;
