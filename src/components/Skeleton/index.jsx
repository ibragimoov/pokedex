import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={380}
        height={380}
        viewBox="0 0 400 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="12" y="14" rx="20" ry="20" width="350" height="330" />
    </ContentLoader>
);

export default Skeleton;
