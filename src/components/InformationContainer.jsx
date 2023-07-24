import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
    return (
        <section id='information'>
            <div id='cards-Container'>
                <div id="info-card">
                    <a href='https://wa.me/5554984146393'>
                        <AiFillPhone id='ponhe-icon' />
                    </a>
                    <div>
                        <h3>Telefone</h3>
                        <p>(54) 98414-6393</p>
                    </div>
                </div>
                <div id="info-card">
                    <a href="mailto:rafanetmello@gmail.com">
                        <AiOutlineMail id='email-icon' />
                    </a>
                    <div>
                        <h3>E-mail</h3>
                        <p>rafanetmello@gmail.com</p>
                    </div>
                </div>
                <div id="info-card">
                    <AiFillEnvironment id='pin-icon' />
                    <div>
                        <h3>Localiação</h3>
                        <p>Nonoai - RS</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default InformationContainer