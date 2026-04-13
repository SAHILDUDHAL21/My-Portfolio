import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';
import { ResumeModal } from '../Components/About Page/AboutModal';
const MainPage = () => {
    const navigate = useNavigate();
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closeModal = (modalType) => {
        if (isClosing) return;

        setIsClosing(true);
        setTimeout(() => {
            if (modalType === 'resume') {
                setIsResumeOpen(false);
            }
            setIsClosing(false);
        }, 1500);
    };

    const commands = {
        ls: {
            description: 'List all sections',
            fn: function () {
                return 'about\nacademic\nexperience\nprojects\ntech_skills\nResume';
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
        academic: {
            description: 'View academic background',
            fn: function () {
                return `MSc Computer Science\nMES Abasaheb Garware College, Pune\nExpected June 2027\n \nBSc Computer Science\nR. B. N. B. College, Shrirampur\nCGPA: 8.22 | 2022 - 2025\n \nHSC ( MSBSHSE Board )\nR. B. N. B. College, Shrirampur\nPER: 58.50 | 2022\n \nPrimary and Secondary Education\n( MSBSHSE Board )\nST. XAVIER'S HIGH SCHOOL, Shrirampur\nPER: 80.00 | 2009- 2020`;
            },
        },
        experience: {
            description: 'View work experience',
            fn: function () {
                return `BYTO (Book Your Truck Online)\nJunior Software Developer Intern | June 2025 - Dec 2025\n- Improved application functionality and UI\n- Collaborated to enhance feature performance\n \nFreelance Java Developer\nSoftware Developer | June 2024 - Jan 2026\n- Developed backend systems using Spring Boot and Hibernate\n- Built and tested RESTful APIs\n- Designed database schemas with MySQL`;
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
        tech_skills: {
            description: 'View technical skills',
            fn: function () {
                return `Languages:           Java, JavaScript, Dart, C, Shell\nBackend:             Spring Boot, Hibernate, REST API\nDatabases:           MySQL, PostgreSQL, MongoDB, Hive\nTools:               Git, GitHub, Postman, Jira\nFrameworks & IDEs:   IntelliJ IDEA, Eclipse, Android Studio, Xcode`;
            },
        },
        resume: {
            description: 'Open my full resume',
            fn: function () {
                setTimeout(function () {
                    setIsResumeOpen(true);
                }, 1200);
                return 'Here it comes...';
            }
        },
    };

    return (
        <Layout commands={commands} welcomeMessage="Weelcome! Here in the Matrix if you're stuck, you can always use command 'help'">
            {isResumeOpen && !isClosing && (
                <ResumeModal isOpen={isResumeOpen} onClose={() => closeModal('resume')} />
            )}
        </Layout>
    );
};

export default MainPage;
