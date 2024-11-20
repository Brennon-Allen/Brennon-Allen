function Link({text, link, file, action}) {
  return (
    <>
      <div className="link-box">
        <a href={link} target="_blank" download={file}>
        <button onClick={action}>{text}</button>
        </a>
      </div>
    </>
  );
}

export default Link;
