import React, { useState } from "react";
import FullPageLoader from "./FullPageLoader.jsx";


const useFullPageLoader = () => {
    const [loading, setLoading] = useState(false);

    return [
        loading ? <FullPageLoader /> : null,
        () => setLoading(true), // Loader show
        () => setLoading(false) // Loader hide
    ];
};

export default useFullPageLoader;