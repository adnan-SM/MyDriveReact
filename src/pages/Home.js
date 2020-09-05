import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";

export default function Home() {
    return(
        <div className="max-w-6xl mx-auto">
            <Header title="My drive" />
            <Search />
        </div>
    )
}
