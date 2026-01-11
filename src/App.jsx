import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
    const [modalActive, setModalActive] = useState(true);

    return (
        <div className="app-container">
            <h1 className="main-title">Modal window</h1>
            <Button onClick={() => setModalActive(true)}>
                Open modal window
            </Button>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quisquam nostrum veniam nulla totam? Aliquam, voluptate
                    reiciendis quas laborum corrupti explicabo dolores nobis
                    accusamus mollitia sunt.
                </p>
            </Modal>
        </div>
    );
}

export default App;
