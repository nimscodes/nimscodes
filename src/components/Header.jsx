import ModeSwitcher from './ModeSwitcher';

const Header = ({ darkMode, onToggleMode }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-3xl font-pacifico">
        nims<span className="text-gold-metallic">codes</span>
      </h1>
      <ModeSwitcher darkMode={darkMode} onToggleMode={onToggleMode} />
    </div>
  );
};

export default Header;
