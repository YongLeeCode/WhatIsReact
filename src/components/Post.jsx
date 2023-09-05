/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from './Post.module.css'
const names = ['Yong', 'Lee'];

function Post(props){
    const name = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <li className={styles.name}>
            <p>{name}</p>
            <p>{props.author}</p>
            <p>{props.text}</p>
        </li>
    )
}
export default Post;