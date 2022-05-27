import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Constants/axios'
import { API_BASE_URL, API_KEY, IMAGE_URL } from "../../Constants/constants";
import YouTube from 'react-youtube';


function RowPost(props) {

    const [actionMovies, setActionMovies] = useState([]);
    const [urlId, addUrl] = useState('');

    useEffect(() => {

        axios.get(`${API_BASE_URL}/${props.url}`)
            .then((response) => {

                console.log(response.data);
                // actionMovies = response.data.results;
                setActionMovies(response.data.results);

            })

    }, [])

    function handleMovie(id) {


        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((response) => {

                console.log(response.data);
                if (response.data.results.length !== 0) {

                    addUrl(response.data.results[0].key);

                }

            })

    }


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {

                    actionMovies.map((elements) => {

                        return (<img onClick={() => { handleMovie(elements.id) }} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${IMAGE_URL + elements.backdrop_path}`} />)

                    })

                }
            </div>

            {urlId && <YouTube videoId={urlId} opts={opts} />}

        </div>
    )
}

export default RowPost