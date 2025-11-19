import { useTranslate } from "../i18n";

const LanguageSelector = () => {
  const { lang, changeLang } = useTranslate();

  return (

    <select
      value={lang}
      onChange={(e) => changeLang(e.target.value)}
      className="language-selector border-none outline-none"
    >
      <option value="en">English</option>
      <option value="mr">मराठी</option>
      <option value="hi">हिन्दी</option>
      <option value="bn">বাংলা</option>
      <option value="ta">தமிழ்</option>
      <option value="gu">ગુજરાતી</option>
      <option value="kn">ಕನ್ನಡ</option>
      {/* <option value="pa">ਪੰਜਾਬੀ</option>
      <option value="te">తెలుగు</option>
      <option value="ml">മലയാളം</option> */}
    </select>
  );
};

export default LanguageSelector;
