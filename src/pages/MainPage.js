import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';
const MainPage = () => {
    const navigate = useNavigate();
    const commands = {
        ls: {
            description: 'List all pages',
            fn: function () {
                return 'about projects';
            },
        },
        about: {
            description: 'Go to About page',
            fn: function () {
                setTimeout(function () {
                    navigate('/about');
                }, 1200);
                return 'Redirecting...';
            },
        },
        projects: {
            description: 'Go to Projects page',
            fn: function () {
                setTimeout(function () {
                    navigate('/projects');
                }, 1200);
                return 'Redirecting...';
            },
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Weelcome! Here in the Matrix if you're stuck, you can always use command 'help'">
        </Layout>
    );
};

export default MainPage;
