import React from 'react'
import { Commet } from 'react-loading-indicators'
import { useSelector } from 'react-redux';
const Loading = () => {

    const mode = useSelector((state) => state.Mode.mode);
    const isDarkMode = mode === "dark";
    return (
        <Commet color={isDarkMode ? "#ffffff" : "#292929"} size="large" text="loading" textColor="" />
    )
}

export default Loading
