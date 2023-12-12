import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/elements/Card';
import Text from '../components/elements/Text';
import Button from '../components/elements/Button';
import Time from '../components/widgets/Time';
import Settings from '../components/widgets/Settings';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../store/features/userSlice';
import { notesFetch } from '../store/features/noteSlice';
import { newsFetch } from '../store/features/newsSlice';
import { useNavigate } from 'react-router-dom';

// import { getAllUserNotes } from '../store/features/noteSlice';

const Home = () => {

    const user = useSelector((state) => state.user.value);
    const news = useSelector((state) => state.news);
    const { value, status } = useSelector((state) => state.note);
    
    const dispatch = useDispatch();

    const navigate = useNavigate();
console.log(news,'hyyyyyyyyy')

    useEffect(() => {      

        const intervalID = setInterval(() => {
            // console.log("yes")
        }, 1000)

        return () => clearInterval(intervalID);
    }, [])

    useEffect(() => {
        dispatch(getCurrentUser());
      
    }, [dispatch])
    // console.log("user here: ", user.uid);

    useEffect(() => {
        dispatch(notesFetch(user.uid))
        dispatch(newsFetch());
    }, [dispatch, user.uid])


    return (
        <section className="text-white pt-10 pb-24 px-3  md:pt-10 md:pb-20">

            <section className="grid grid-cols-1 space-y-6 md:space-y-0 md:gap-4">


                {/* notes */}
                <Card className="py-4 col-span-2">
                   

                    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
    {news.news.slice(4, 16).map((note) => (
        <div className='relative rounded-lg shadow-md overflow-hidden' key={note.id} onClick={()=>navigate(`/news-detail/${note.source.name}`)}>
            {/* Display image if urlToImage is available */}
            {note.urlToImage && (
                <img
                    src={note.urlToImage}
                    alt="News Image"
                    className="w-full h-40 object-cover object-center rounded-t-lg"
                />
            )}

            <div className='p-4'>
                <Text style={{ fontSize: "10px" }} className='text-right block text-gray-500'>
                    {note.publishedAt}
                </Text>
                <div className='border-b border-sidebar my-2'></div>

                {/* Display truncated title */}
                <div className='text-sm mb-2'>
                    {note.title.length >= 150 ? (
                        <p className='text-gray-800'>
                            {note.title.substring(0, 150) + " . . ."}
                        </p>
                    ) : (
                        <p className='text-gray-800'>{note.title}</p>
                    )}
                </div>
            </div>
        </div>
    ))}
</div>

                </Card>
            </section>

        </section>
    )
}

export default Home


