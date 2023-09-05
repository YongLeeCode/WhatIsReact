/* eslint-disable react/prop-types */
import styles from './Modal.module.css'
function Modal(props){
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClose}/>
      <dialog open={true} className={styles.modal}>
        {props.children}
      </dialog>
    </>
  )
}
export default Modal;