import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../AppStyles.module.css';
import { Content } from "./Content";
import TopPosts from "./TopPosts";


const LatestArticle1 = () => {
    const [loadMore, setLoadMore] = useState(false);
    const [loadMoreBtn, setLoadMoreBtn] = useState('Load More');
    const [arrow, setArrow] = useState(<i className="fas fa-arrow-down" ></i>);

    const {value1, value2} = useContext(Content);

    const [bollywood] = value1;
    const [hollywood] = value2;

    const handleClick = () => {
        setLoadMore(!loadMore);
        if (loadMoreBtn === 'Load More') {
            setLoadMoreBtn('Load Less');
            setArrow(<i className="fas fa-arrow-up" ></i>);
        }
        else {
            setLoadMoreBtn('Load More');
            setArrow(<i className="fas fa-arrow-down"></i>);
        }
    }


    return(
        <div className={styles.AllSections_Main}>
            <div className={styles.category1_Top}>
     <div className={styles.AllSections_Header}>Latest Articles</div>
      <hr className={styles.AllSections_Header_Line}/>
         </div>
      <div className={styles.category1_Bottom}>
    <div className={styles.category1_Bottom_Left}>
     <div className={ styles.category1_Bottom_Left1 }>
    {   
    bollywood.map((article, index) => {
     if(!loadMore && index>=bollywood.length-3){
      return(
     <div key={index} className={ styles.category1_Card }>
  <div><img className={ styles.category1_Image } src={ article.ImageAsset } alt="From the Article"/></div>
     <div>
  <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category1_Title }>{ article.Title }</NavLink>
 <div className={ styles.category1_BlogContent }>{ article.BlogContent }</div>
     <div>
      <span className={ styles.category1_CategoryName }>{ article.CategoryName }</span>
  <span className={ styles.category1_PublishedDate }> / { article.PublishedDate }</span>
     </div>
     </div>
      </div>
      )
      }
      else if (loadMore && index>=bollywood.length-5) {
     return(
  <div key={index} className={ styles.category1_Card }>
  <div><img className={ styles.category1_Image } src={ article.ImageAsset } alt="From the Article"/></div>
  <div>
    <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category1_Title }>{ article.Title }</NavLink>
     <div className={ styles.category1_BlogContent }>{ article.BlogContent }</div>
     <div>
       <span className={ styles.category1_CategoryName }>{ article.CategoryName }</span>
     <span className={ styles.category1_PublishedDate }> / { article.PublishedDate }</span>
         </div>
         </div>
        </div>
         )
     }
     })
     }
   </div>
  <div><button className={ styles.loadMore_Btn } onClick={handleClick}>{arrow}{loadMoreBtn}</button></div>
              <div>
    {   
         hollywood.map(  (article, index) => {
      if(index>=hollywood.length-1) {
     return(
  <div className={ styles.category2_Card } key={index}  style={   {backgroundImage: `url(${article.ImageAsset})`,  backgroundPosition: 'center',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }  }>
     <div className={ styles.category2_Child}>
  <NavLink to={`/article/${article.Title}/${article.CategoryName}`} className={ styles.category2_Title}>{ article.Title }</NavLink>
  <div className={ styles.category2_NameAndDate}>{ article.CategoryName } / { article.PublishedDate }</div>
      </div>
    </div>
 )
 }
 })
  }
   </div>
 </div>
<div className={styles.category1_Bottom_Right}>
 <div className={ styles.category1_Bottom_Right1}>
  <div className={ styles.advertisement }>Advertisement</div>
     </div>
<div className={ styles.category1_Bottom_Right2}><TopPosts/></div>
 </div>
     </div>
        </div>
    )
}

export default LatestArticle1;