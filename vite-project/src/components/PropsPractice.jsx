import PropTypes from "prop-types";

export function Propsfn(props) {
  return (
    <>
      <ul>
        {props.data.map(({ id, title, url, thumbnaiUrl }) => {
          return (
            <li key={id}>
              <h1> Назва: {title}</h1>
              <a href={url}>Клікни</a>
              <img src={thumbnaiUrl} alt="Тут мала буду картинка але її нема" />
            </li>
          );
        })}
      </ul>
    </>
  );
}

Propsfn.PropTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      thumbnaiUrl: PropTypes.string.isRequired,
    })
  ),
};
