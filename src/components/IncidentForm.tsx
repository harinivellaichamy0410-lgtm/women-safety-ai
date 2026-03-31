import { useState } from "react";
import {
  IncidentType,
  AgeGroup,
  IncidentInput,
} from "@/lib/legalKnowledgeBase";
import { useLanguage } from "@/lib/LanguageContext";
import { t, incidentTypeLabelKeys, incidentTypeDescKeys } from "@/lib/translations";
import {
  AlertTriangle,
  User,
  MapPin,
  FileText,
  RotateCcw,
  Zap,
} from "lucide-react";

interface IncidentFormProps {
  onSubmit: (input: IncidentInput) => void;
}

const incidentTypes: IncidentType[] = [
  "harassment",
  "stalking",
  "domestic_violence",
  "cyber_abuse",
  "sexual_assault",
  "verbal_abuse",
  "dowry_harassment",
  "workplace_harassment",
];

const IncidentForm = ({ onSubmit }: IncidentFormProps) => {
  const { lang } = useLanguage();
  const [incidentType, setIncidentType] = useState<IncidentType | "">("");
  const [ageGroup, setAgeGroup] = useState<AgeGroup | "">("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isRepeated, setIsRepeated] = useState(false);
  const [involvesPhysicalHarm, setInvolvesPhysicalHarm] = useState(false);

  const canSubmit = incidentType && ageGroup && location.trim() && description.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit({
      incidentType: incidentType as IncidentType,
      ageGroup: ageGroup as AgeGroup,
      location: location.trim(),
      description: description.trim(),
      isRepeated,
      involvesPhysicalHarm,
    });
  };

  const ageGroups: { value: AgeGroup; labelKey: "ageMinor" | "ageAdult" | "ageSenior" }[] = [
    { value: "minor", labelKey: "ageMinor" },
    { value: "adult", labelKey: "ageAdult" },
    { value: "senior", labelKey: "ageSenior" },
  ];

  return (
    <section className="container mx-auto px-4 py-16" id="report-form">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 mb-4">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("formBadge", lang)}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display mb-3">
            {t("formTitle", lang)}
          </h2>
          <p className="text-muted-foreground">
            {t("formSubtitle", lang)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Incident Type */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold">
              <AlertTriangle className="w-4 h-4 text-primary" />
              {t("formIncidentType", lang)}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {incidentTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setIncidentType(type)}
                  className={`p-3 rounded-lg border text-left transition-all text-sm ${
                    incidentType === type
                      ? "border-primary bg-primary/10 text-foreground shadow-soft"
                      : "border-border bg-card hover:border-primary/40 text-muted-foreground"
                  }`}
                >
                  <div className="font-medium text-foreground">{t(incidentTypeLabelKeys[type], lang)}</div>
                  <div className="text-xs mt-1 line-clamp-2 text-muted-foreground">
                    {t(incidentTypeDescKeys[type], lang)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Age Group */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold">
              <User className="w-4 h-4 text-primary" />
              {t("formAgeGroup", lang)}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {ageGroups.map((ag) => (
                <button
                  key={ag.value}
                  type="button"
                  onClick={() => setAgeGroup(ag.value)}
                  className={`p-3 rounded-lg border text-center transition-all text-sm font-medium ${
                    ageGroup === ag.value
                      ? "border-primary bg-primary/10 text-foreground shadow-soft"
                      : "border-border bg-card hover:border-primary/40 text-muted-foreground"
                  }`}
                >
                  {t(ag.labelKey, lang)}
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold">
              <MapPin className="w-4 h-4 text-primary" />
              {t("formLocation", lang)}
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={t("formLocationPlaceholder", lang)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold">
              <FileText className="w-4 h-4 text-primary" />
              {t("formDescription", lang)}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("formDescPlaceholder", lang)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card cursor-pointer hover:border-primary/40 transition-colors">
              <input
                type="checkbox"
                checked={isRepeated}
                onChange={(e) => setIsRepeated(e.target.checked)}
                className="w-4 h-4 rounded border-input accent-primary"
              />
              <div>
                <div className="text-sm font-medium flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-primary" />
                  {t("formRepeated", lang)}
                </div>
                <div className="text-xs text-muted-foreground">{t("formRepeatedDesc", lang)}</div>
              </div>
            </label>
            <label className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card cursor-pointer hover:border-primary/40 transition-colors">
              <input
                type="checkbox"
                checked={involvesPhysicalHarm}
                onChange={(e) => setInvolvesPhysicalHarm(e.target.checked)}
                className="w-4 h-4 rounded border-input accent-primary"
              />
              <div>
                <div className="text-sm font-medium flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-destructive" />
                  {t("formPhysicalHarm", lang)}
                </div>
                <div className="text-xs text-muted-foreground">{t("formPhysicalHarmDesc", lang)}</div>
              </div>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              canSubmit
                ? "bg-gradient-hero text-primary-foreground shadow-soft hover:opacity-90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            {t("formSubmit", lang)}
          </button>
        </form>
      </div>
    </section>
  );
};

export default IncidentForm;
