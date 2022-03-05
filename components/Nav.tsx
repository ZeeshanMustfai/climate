function Nav() {
  const handleLanguage = (
    e: React.DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
  ): void => {
    console.log("value", e.target.value);
  };
  return (
    <div className="navMain">
      <div className="title">Climate</div>
      <div>
        <select onChange={handleLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>
  );
}
export default Nav;
