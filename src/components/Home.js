import React from "react";
import styles from '../AppStyles.module.css';
import ArticleComponents from "./ArticleComponents";
import LatestArticles from "./LatestArticles";
import LatestArticle1 from "./LatestArticle1";
import LatestStories from "./LatestStories";


const Home = () => {
    return(
        <div className={styles.commonStyle}>
            <ArticleComponents/>
            <LatestArticles/>
            <LatestArticle1/>
            <LatestStories/>
        </div>
    )
}

export default Home;