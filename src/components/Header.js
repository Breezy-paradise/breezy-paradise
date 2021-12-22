import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal';
import axios from 'axios'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveUserData, clearUserData } from '../redux/userReducer';
import './Header.css';
// import logo from '../images/Logo.png';

const Header = (props) => {

    ReactModal.setAppElement('#root');  //sets parent of modal

    //modal states
    const [showSignInModal, setShowSignInModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    //user states
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const modalFadeMilliseconds = 250;

    useEffect(() => {

        const getData = async () => {
            try {
                const { data } = await axios.get('/api/auth/user');  // get current logged in user, if any
                props.saveUserData(data);
            } catch (err) {
                if (err.response.status !== 404) {
                    console.log(err);
                }
            }
        }

        getData();
    }, []);

    const handleOpenSignInModal = () => {
        setShowSignInModal(true);
    }

    const handleCloseSignInModal = () => {
        setUsername('');
        setPassword('');
        setShowSignInModal(false);
    }

    const handleSignIn = async () => {
        try {
            const { data } = await axios.post('/api/auth/login', { username, password });
            props.saveUserData(data);
            handleCloseSignInModal();
        } catch (err) {
            if (err.isAxiosError) {
                alert(err.response.request.responseText);
            } else {
                alert(err);
            }
        }
    }

    const handleOpenRegisterModal = () => {
        setShowRegisterModal(true);
        handleCloseSignInModal();
    }

    const handleCloseRegisterModal = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setShowRegisterModal(false);
    }

    const handleRegister = async () => {
        try {
            const { data } = await axios.post('/api/auth/register', { username, email, password });
            props.saveUserData(data);
            handleCloseRegisterModal();
        } catch (err) {
            if (err.isAxiosError) {
                alert(err.response.request.responseText);
            } else {
                alert(err);
            }
        }
    }

    const handleUsernameChange = (event) => {
        const { value } = event.target;
        setUsername(value);
    }

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    const handleSignOut = async () => {
        try {
            await axios.post('/api/auth/logout');
            props.clearUserData();
        } catch (err) {
            if (err.isAxiosError) {
                alert(err.response.request.responseText);
            } else {
                alert(err);
            }
        }
    }

    return (
        <header>
            <div className="header-flex">
                <Link to='/breezy-paradise' className="logo-link">
                    {/* img src={logo} alt="breezy paradise logo" className="breezy-logo" /> */}
                    <h5>Breezy Paradise</h5>
                </Link>
                <div className="sign-in-flex">
                    <button onClick={handleOpenSignInModal} className={`sign-in  ${props.user.username ? 'sign-in-hidden' : ''}`} >Sign In</button>
                    <p className={`signed-in-user  ${props.user.username ? '' : 'sign-in-hidden'}`}>Welcome: {props.user.username}</p>
                    <button onClick={handleSignOut} className={`sign-in  ${props.user.username ? '' : 'sign-in-hidden'}`}>Sign Out</button>
                </div>
            </div>

            <ReactModal
                isOpen={showSignInModal}
                contentLabel="Sign In Modal"
                onRequestClose={handleCloseSignInModal}
                closeTimeoutMS={modalFadeMilliseconds}
                className="modal"
            >
                <h2>Sign In</h2>
                <label>
                    Username
                    <input type="text" onChange={handleUsernameChange} value={username} />
                </label>
                <label>
                    Password
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </label>
                <button onClick={handleSignIn}>Sign In</button>
                <hr />
                <button onClick={handleOpenRegisterModal}>Register</button>
                <button onClick={handleCloseSignInModal}>Cancel</button>
            </ReactModal>

            <ReactModal
                isOpen={showRegisterModal}
                contentLabel="Register Modal"
                onRequestClose={handleCloseRegisterModal}
                closeTimeoutMS={modalFadeMilliseconds}
                className="modal"
            >
                <h2>Register</h2>
                <label>
                    Username
                    <input type="text" onChange={handleUsernameChange} value={username} />
                </label>
                <label>
                    Email
                    <input type="email" onChange={handleEmailChange} value={email} />
                </label>

                <label>
                    Password
                    <input type="password" onChange={handlePasswordChange} value={password} />
                </label>
                <button onClick={handleRegister}>Register</button>
                <button onClick={handleCloseRegisterModal}>Cancel</button>
            </ReactModal>
        </header>
    )
}

function mapStateToProps(state) {  // redux properties to get from store
    return {
        user: state.user
    }
}

const mapDispatchToProps = {  // redux actions we want to call to set store
    saveUserData,
    clearUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
