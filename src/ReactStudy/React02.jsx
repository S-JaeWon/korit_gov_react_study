import React from 'react';
// rfc
export default function React02() {
    const student = {
        name: '철수',
        age: 27,
        hobby: ['잠자기', '일어나기', '밥먹기'],
    };

    return (
        <div>
            <div>이름: {student.name}</div>
            <div>
                나이: {student.age} ({student.age > 19 ? '성인' : '미성년자'})
            </div>
            <div>
                <p>취미</p>
                <ul>
                    {student.hobby.map((h, index) => (
                        <li key={index}>{h}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
