import { useLanguage, Language } from "@/lib/LanguageContext";
import { Globe } from "lucide-react";

const languages: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "ta", label: "தமிழ்" },
  { value: "hi", label: "हिन्दी" },
];

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <div className="flex rounded-lg border border-border overflow-hidden">
        {languages.map((l) => (
          <button
            key={l.value}
            onClick={() => setLang(l.value)}
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${
              lang === l.value
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
