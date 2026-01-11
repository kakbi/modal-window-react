import s from './Modal.module.css';

function Modal({ active, setActive, children }) {
    return (
        <div
            // or use clsx / classnames
            className={`${s.modal} ${active ? s.active : ''}`}
            onClick={() => setActive(false)}
        >
            <div
                className={`${s.modal__content} ${active ? s.active : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
