import React, { createContext, useState } from "react";

export const Content = createContext();
export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : "Bollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1589498199300-f1534ccd00e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1897&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Bollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1575996530844-723fc9c726c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Bollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2019/11/29/14/38/boxing-4661441_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1m"
        },
        {
            "Title" : "Bollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2015/05/31/11/34/woman-791227_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Bollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2019/12/17/02/32/sunset-in-the-phone-4700581_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : "Technology",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "2k"
        },
        {
            "Title" : "Technology",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://media.istockphoto.com/photos/technical-support-concept-maintenance-sign-wrench-and-srewdriver-picture-id1199145131?s=612x612",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Technology",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Technology",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2020/08/14/17/13/light-bulbs-5488573_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Technology",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "2.4k"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : "Hollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2014/10/24/03/22/rodeo-500716_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1.3k"
        },
        {
            "Title" : "Hollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2021/11/15/20/26/microphone-6799311_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1.2k"
        },
        {
            "Title" : "Hollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2015/02/25/19/30/oscar-649298_1280.png",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1.1k"
        },
        {
            "Title" : "Hollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2019/01/17/08/18/autumn-3937289_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1.8k"
        },
        {
            "Title" : "Hollywood",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2016/09/16/00/19/fall-1673041_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1.6k"
        }
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : "Fitness",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "2k"
        },
        {
            "Title" : "Fitness",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "3k"
        },
        {
            "Title" : "Fitness",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://image.shutterstock.com/image-photo/sportsman-boxer-fighting-on-black-600w-1918708907.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "8k"
        },
        {
            "Title" : "Fitness",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://image.shutterstock.com/image-photo/men-battle-rope-functional-training-600w-363373637.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "9k"
        },
        {
            "Title" : "Fitness",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "10k"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : "Food",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?k=20&m=639389404&s=612x612&w=0&h=RdDqIJ4QEAbbSANWp4PwJSyAwNFEcjsB_CWtd-i4cI4=",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "5k"
        },
        {
            "Title" : "Food",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://media.gettyimages.com/photos/real-people-from-rural-india-senior-woman-cooking-traditional-food-picture-id166110147?s=2048x2048",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1.1k"
        },
        {
            "Title" : "Food",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Food",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "600"
        },
        {
            "Title" : "Food",
            "CategoryName"  : "Author",
            "PublishedDate" : "Mar 1 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg",
            "BlogContent"   : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.",
            "Likes"         : "2k"
        }
    ]);

    return(
        <Content.Provider   value={ { value1 :     [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </Content.Provider>
    )
}