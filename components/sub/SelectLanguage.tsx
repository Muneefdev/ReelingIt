
export default function SelectLanguage() {

  return (
    <select defaultValue={"en"}  className="text-white rounded-md px-1 py-[3px] text-sm bg-[#333] outline-none">
      <option value="en">🇺🇸 English</option>
      <option value="es">🇪🇸  Spanish</option>
      <option value="fr">🇫🇷 French</option>
      <option value="de">🇩🇪 German</option>
    </select>
  )
}
