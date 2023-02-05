const Header = ({ handletoggledarkmode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handletoggledarkmode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
