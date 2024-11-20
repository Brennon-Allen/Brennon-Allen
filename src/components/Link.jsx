function Link({text, link, file}) {
  return (
    <>
      <div className="link-box">
        <a href={link} target="_blank" download={file}>
        <button>{text}</button>
        </a>
      </div>
    </>
  );
}

export default Link;
