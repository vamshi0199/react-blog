import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Content } from "./Content";
import styles from '../AppStyles.module.css';
import TopPosts from "./TopPosts";


const CategoryPage = () => {
    const { categoryName } = useParams();

    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" ></i>);

    const { value1, value2, value3, value4, value5 } = useContext(Content);
    const [bollywood] = value1;
    const [hollywood] = value2;
    const [technology] = value3;
    const [fitness] = value4;
    const [food] = value5;

    const handleClick = () => {
        setLoadMore(!loadMore);
        if (loadMoreBtn === 'Load More') {
            setLoadMoreBtn('Load Less');
            setArrow(<i className="fas fa-arrow-up" ></i>);
        }
        else {
            setLoadMoreBtn('Load More');
            setArrow(<i className="fas fa-arrow-down" ></i>);
        }
    }
    return (
        <div className={styles.CategoryPage_Main}>
            <div className={styles.CategoryPage_Left}>
        <div className={styles.CategoryPage_Left_Top}>
       <div className={styles.AllSections_Header}>{categoryName}</div>
      <hr className={styles.AllSections_Header_Line} />
         </div>
         <div className={styles.CategoryPage_Left_Bottom}>
         <div className={styles.CategoryPage_CardContainer}>
                        {  
         bollywood.map((article, index) => {
         if (article.CategoryName === categoryName && !loadMore && index >= bollywood.length - 3) {
              return (
           <div key={index} className={styles.category1_Card}>
         <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
             <div>
          <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
          <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
            <div>
             <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
             <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
              </div>
            </div>
     </div>
          )
         }
         else if (article.CategoryName === categoryName && loadMore && index >= bollywood.length - 5) {
         return (
        <div key={index} className={styles.category1_Card}>
     <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
        <div>
        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
        <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
            <div>
          <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
         <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
             </div>
            </div>
         </div>
         )
        }
         }
         )
         }
         {   
         hollywood.map((article, index) => {
      if (article.CategoryName === categoryName && !loadMore && index>= hollywood.length - 3) {
     return (
    <div key={index} className={styles.category1_Card}>
     <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
          <div>
      <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
     <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
       <div>
         <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
       <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
       </div>
     </div>
     </div>
     )
     }
 else if (article.CategoryName === categoryName && loadMore && index >= hollywood.length - 5) {
     return (
    <div key={index} className={styles.category1_Card}>
    <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
        <div>
<NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
    <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
        <div>
     <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
     <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
         </div>
         </div>
          </div>
            )
         }
      }
     )
     }
     {   
        technology.map((article, index) => {
      if (article.CategoryName === categoryName && !loadMore && index >= technology.length - 3) {
            return (
             <div key={index} className={styles.category1_Card}>
            <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
            <div>
         <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
         <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
            <div>
         <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
         <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
        </div>
         </div>
         </div>
        )
         }
     else if (article.CategoryName === categoryName && loadMore && index >= technology.length - 5) {
         return (
         <div key={index} className={styles.category1_Card}>
     <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
                <div>
        <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
        <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
             <div>
           <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
     <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
      </div>
         </div>
     </div>
     )
      }
    }
    )
      }
         {   
    fitness.map((article, index) => {
     if (article.CategoryName === categoryName && !loadMore && index >= fitness.length - 3) {
            return (
      <div key={index} className={styles.category1_Card}>
      <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
          <div>
         <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
             <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
                 <div>
          <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
           <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
            </div>
             </div>
             </div>
             )
      }
     else if (article.CategoryName === categoryName && loadMore && index >= fitness.length - 5) {
         return (
          <div key={index} className={styles.category1_Card}>
         <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
         <div>
     <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
     <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
     <div>
      <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
     <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
    </div>
         </div>
     </div>
     )
     }
     }
     )
        }
         {   
 food.map((article, index) => {
 if (article.CategoryName === categoryName && !loadMore && index >= food.length - 3) {
 return (
 <div key={index} className={styles.category1_Card}>
 <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
  <div>
  <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
  <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
    <div>
 <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
 <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
        </div>
   </div>
     </div>
    )
    }
 else if (article.CategoryName === categoryName && loadMore && index >= food.length - 5) {
 return (
 <div key={index} className={styles.category1_Card}>
 <div><img className={styles.category1_Image} src={article.ImageAsset} alt="From the Article" /></div>
 <div>
 <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={styles.category1_Title}>{article.Title}</NavLink>
 <div className={styles.category1_BlogContent}>{article.BlogContent}</div>
 <div>
 <span className={styles.category1_CategoryName}>{article.CategoryName}</span>
   <span className={styles.category1_PublishedDate}> / {article.PublishedDate}</span>
       </div>
    </div>
    </div>
    )
     }
    }
   )
    }
 </div>
 <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
   </div>
    </div>
 <div className={styles.CategoryPage_Right}>
 <div className={styles.CategoryPage_Right_Top}><TopPosts /></div>
 <div className={styles.CategoryPage_Right_Bottom}>
  <div className={styles.advertisement}>Advertisement</div>
    </div>
    </div>
    </div>
    )
}

export default CategoryPage;