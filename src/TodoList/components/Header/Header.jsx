/** @jsxImportSource @emotion/react */
import { LuScanSearch } from "react-icons/lu";
import * as s from "./styles";

function Header() {
    return (
        <>
            <div css={s.container}>
                <input
                    css={s.searchInput}
                    type="text"
                    placeholder="검색어를 입력 해주세요"
                />
                <button css={s.searchButton}>
                    <LuScanSearch />
                </button>
            </div>
            <div css={s.filterContainer}>
                <input type="radio" id="all" name="fliter" />
                <label htmlFor="all">전체</label>
                <input type="radio" id="complete" name="fliter" />
                <label htmlFor="complete">완료</label>
                <input type="radio" id="incomplete" name="fliter" />
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
    );
}
export default Header;
