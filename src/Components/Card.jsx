const Card = ({ style, title, children }) => {
  return (
    <div className={ style?.card }>
      { title && <h2 className={ style?.title }>{ title }</h2> }
      { children }
    </div>
  );
};

export default Card;