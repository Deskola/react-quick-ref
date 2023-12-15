import styles from "./Button.module.css";

interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' ,
    onClicked: () => void
}

function Button({ children, color = 'primary', onClicked}: Props) {
  return (
      <button
          type="button"
          className={[styles.btn, styles['btn-'+color]].join(' ')}
          onClick={() => onClicked()}
      >{children}</button>
  )
}

export default Button