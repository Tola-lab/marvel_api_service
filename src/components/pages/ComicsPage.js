import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

import React from 'react';

const ComicsPage = () => {
    return (
        <div>
            <>
                <AppBanner/>
                <ComicsList/>
            </>
        </div>
    );
};

export default ComicsPage;