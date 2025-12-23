import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
    const [todoList, setTodoList] = useState(() => {
        const localStorageTodlList = localStorage.getItem("TodoList");
        return localStorageTodlList ? JSON.parse(localStorageTodlList) : [];
    });

    const [searchKeyword, setSearchKeyword] = useState("");
    const [filterMode, setFilterMode] = useState("all");

    useEffect(() => {
        localStorage.setItem("TodoList", JSON.stringify(todoList));
    }, [todoList]);

    const filterTodoList = todoList
        .filter((todo) => {
            if (filterMode === "all") {
                return true;
            } else if (filterMode === "complete") {
                return todo.isComplete;
            } else if (filterMode === "incomplete") {
                return !todo.isComplete;
            }
        })
        .filter((todo) => {
            if (searchKeyword.trim().length === 0) {
                return true;
            }
            return todo.content.includes(searchKeyword);
        });

    return (
        <Layout
            filterMode={filterMode}
            setFilterMode={setFilterMode}
            setSearchKeyword={setSearchKeyword}>
            <Main todoList={filterTodoList} setTodoList={setTodoList} />
        </Layout>
    );
}
export default Index;
