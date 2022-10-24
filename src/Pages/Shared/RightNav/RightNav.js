import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { Button, ButtonGroup, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { useLocation, useNavigate } from 'react-router-dom';


const RightNav = () => {

    const { user, providerLogin, logOut } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
                
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleTwitterSignIn = () => {
        providerLogin(twitterProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
            console.error(error)
        })
    }

    const handleSignOut = () => {
        logOut()
            .then(() => {})
            .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <ButtonGroup vertical>
                {
                    !user ?
                        <>
                            <Button onClick={handleGoogleSignIn} className='mb-1' variant="outline-success">Sign In With <FaGoogle></FaGoogle></Button>
                            <Button onClick={handleTwitterSignIn} className='mb-1' variant="outline-primary">Sign In With <FaTwitter></FaTwitter></Button>
                            <Button onClick={handleGithubSignIn} variant="outline-dark">Sign In With <FaGithub></FaGithub></Button>
                        </>
                        :
                        <Button onClick={handleSignOut} variant="outline-danger"><BiLogOut className='me-2'></BiLogOut>Sign Out</Button>
                }
            </ButtonGroup>
            <div className='mt-4'>
                <p>Find Us On</p>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube /> YouTube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaDiscord /> Discord</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightNav;