import React from 'react';
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { Fade } from 'react-reveal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { useCharacters } from '../../Contexts/CharactersContext';

function Characters() {

    const { characters, loading } = useCharacters()
    const [error, setError] = useState(false);

    console.log(characters.values())

    /*useEffect(() => {
        async function fetchChars() {
            setLoading(true);
            try {
                const res = await axios.request('http://localhost:5000/api/characters')
                setChars(res.data);
                console.log(res);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchChars();
    }, []);*/

    if (loading) return <>
        <Navbar />
        <div id="AboutUs">
            <div className="container-fluid">
                <div className="d-flex aboutUs-behindITTI row justify-center">
                    <div class="loadingring">Loading
                        <span></span>
                    </div>
                </div>;
            </div>;
        </div>;
        <Footer />
    </>
    if (error) return <p>An error occurred: {error.message}</p>;

    else return (
        <>
            <Navbar />
            <div className="aboutUs-banner row">
                <div className="col-12 aboutUs-banner-col d-none d-lg-block">
                    <img className="image-zoom3" src="/Assets/Photos/AboutUs/bannercharacters.png" alt="Banner artisan" />
                </div>
            </div>
            <div className="aboutUs-banner row d-lg-none d-xl-none">
                <div className="col-12 aboutUs-banner-col">
                    <img className="image-zoomsmallxd" src="/Assets/Photos/AboutUs/bannercharacters.png" alt="Banner artisan" />
                    <div id="aboutUs-banner-small">
                    </div>
                </div>
            </div>
            <div className="container d-flex">
                <div className="row py-4">
                    {
                        Array.from(characters.values()).map((char) => (
                            <Link
                                className="d-flex justify-content-center col-md-4 col-sm-2 py-3"
                                to={`/characters/${char._id}`}
                            >
                                <Fade down>
                                    <div className="col d-flex justify-content-center " key={char._id}>
                                        <CharacterCard imageSource={char.image} logo={char.logo} />
                                    </div>
                                </Fade>
                            </Link>
                        ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Characters;