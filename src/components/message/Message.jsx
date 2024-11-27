import css from "./Message.module.css";

const Message = ({ title }) => {
  return <p className={css.message}>{title}</p>;
};

export default Message;
