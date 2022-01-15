import React, { createContext, useState } from "react";

export const Content = createContext();

export const BlogProvider = (props) => {
    const [bollywood, setBollywood] = useState([
        {
            "Title" : "Alia bhatt",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "sep 04 2021",
            "ImageAsset"    : "https://www.pinkvilla.com/files/styles/gallery-section/public/alia_bhatt_41.jpg?itok=Pdt-tgqq",
            "BlogContent"   : "Alia Bhatt shared that she adored and had a crush on her Shaandaar co-star Shahid Kapoor.",
            "Likes"         : "5k"
        },
        {
            "Title" : "Yami Gautam",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www1.filmibeat.com/img/560x80x292/popcorn/list_items/yami-gautam-20211130172803-114.jpg",
            "BlogContent"   :"Yami Gautam tied the knot with filmmaker Aditya Dhar in an intimate wedding ceremony in June, this year.",
            "Likes"         : "8k"
        },
        {
            "Title" : "Sarileru Neekevvaru ",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/sarileruneekevvaru-20200114103624-17091.jpg",
            "BlogContent"   : "Sarileru Neekevvaru is a romantic action entertainer movie directed by Anil Ravipudi and produced by Dil Raju, Anil Sunkara and Mahesh Babu. ",
            "Likes"         : "502"
        },
        {
            "Title" : "Samantha",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://c4.wallpaperflare.com/wallpaper/361/887/810/abhimanyudu-samantha-2018-telugu-wallpaper-preview.jpg",
            "BlogContent"   : " Samantha is an Indian actress. who mainly appears in South Indian movies.Samantha is one of the most popular and highest-paid Telugu and Tamil film actresses.",
            "Likes"         : "6k"
        },
        {
            "Title" : "Anupama",
            "CategoryName"  : "Bollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://www.kerala9.com/wp-content/uploads/2018/12/Anupama-Parameshwaran.jpg",
            "BlogContent"   : "Anupama Parameswaran is an Indian film actress who predominantly appears in Telugu, Malayalam, Tamil, Kannada films. ",
            "Likes"         : "4k"
        }
    ]);

    const [technology, setTechnology] = useState([
        {
            "Title" : "Antena",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "50k"
        },
        {
            "Title" : "Microscope",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "501"
        },
        {
            "Title" : "Blub",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2019/09/29/22/06/light-bulb-4514505_1280.jpg",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "502"
        },
        {
            "Title" : "Robot",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984_1280.jpg",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "503"
        },
        {
            "Title" : "Robo",
            "CategoryName"  : "Technology",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg",
            "BlogContent"   : "A robot is a machine especially one programmable by a computer capable of carrying out a complex series of actions automatically.",
            "Likes"         : "504"
        }
    ]);
    
    const [hollywood, setHollywood] = useState([
        {
            "Title" : "Tokyo",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1631372833883-9aef0a5ce0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "BlogContent"   : "Friends: The Reunion is equal doses of sentiment and saccharine, hitting all the required marks of a television reunion.",
            "Likes"         : "5k"
        },
        {
            "Title" : "Friends",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://c.files.bbci.co.uk/22AC/production/_118667880_ka_05_friendsreunion.jpg",
            "BlogContent"   : "Friends: The Reunion is equal doses of sentiment and saccharine, hitting all the required marks of a television reunion.",
            "Likes"         : "50k"
        },
        {
            "Title" : "Money Heist",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1573997960962-858fb33936bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            "BlogContent"   : "Friends: The Reunion is equal doses of sentiment and saccharine, hitting all the required marks of a television reunion.",
            "Likes"         : "8k"
        },
        {
            "Title" : "Side-View",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "BlogContent"   : "Friends: The Reunion is equal doses of sentiment and saccharine, hitting all the required marks of a television reunion.",
            "Likes"         : "12k"
        },
        {
            "Title" : "Nature",
            "CategoryName"  : "Hollywood",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/935984/pexels-photo-935984.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            "BlogContent"   : "Friends: The Reunion is equal doses of sentiment and saccharine, hitting all the required marks of a television reunion.",
            "Likes"         : "6k"
        }
    ]);

    const [fitness, setFitness] = useState([
        {
            "Title" : "Gym",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            "BlogContent"   : "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "Likes"         : "2k"
        },
        {
            "Title" : "Walking",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "BlogContent"   : "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "Likes"         : "3k"
        },
        {
            "Title" : "Workout",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "BlogContent"   : "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "Likes"         : "4k"
        },
        {
            "Title" :"Yoga",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80",
            "BlogContent"   : "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "Likes"         : "5k"
        },
        {
            "Title" : "Healthy Food",
            "CategoryName"  : "Fitness",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "BlogContent"   : "Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities.",
            "Likes"         : "6k"
        }
    ]);

    const [food, setFood] = useState([
        {
            "Title" : "Half-Boil",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "BlogContent"   : "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
            "Likes"         : "1k"
        },
        {
            "Title" : "Pizza",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "BlogContent"   : "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
            "Likes"         : "2k"
        },
        {
            "Title" : "Burger",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "BlogContent"   : "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
            "Likes"         : "3k"
        },
        {
            "Title" : "Grapes",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "BlogContent"   : "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.",
            "Likes"         : "4k"
        },
        {
            "Title" : "Pasta",
            "CategoryName"  : "Food",
            "PublishedDate" : "Aug 21 2021",
            "ImageAsset"    : "https://images.pexels.com/photos/6287348/pexels-photo-6287348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "BlogContent"   : "Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal",
            "Likes"         : "5k"
        }
    ]);

    return(
        <Content.Provider   value={ { value1 : [bollywood, setBollywood],
                                          value2 : [hollywood,setHollywood],
                                          value3 : [technology, setTechnology],
                                          value4 : [fitness, setFitness],
                                          value5 : [food, setFood] } }>
            {props.children}
        </Content.Provider>
    )
}