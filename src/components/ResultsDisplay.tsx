import {
  InferenceResult,
  SeverityLevel,
} from "@/lib/legalKnowledgeBase";
import { useLanguage } from "@/lib/LanguageContext";
import { t, incidentTypeLabelKeys, severityLabelKeys } from "@/lib/translations";
import {
  AlertTriangle,
  Shield,
  Scale,
  Phone,
  FileCheck,
  Brain,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

interface ResultsDisplayProps {
  result: InferenceResult;
  onBack: () => void;
}

const severityColors: Record<SeverityLevel, string> = {
  low: "bg-severity-low text-primary-foreground",
  medium: "bg-severity-medium text-foreground",
  high: "bg-severity-high text-primary-foreground",
  very_high: "bg-severity-veryhigh text-primary-foreground",
  critical: "bg-severity-critical text-primary-foreground",
};

const severityBorders: Record<SeverityLevel, string> = {
  low: "border-severity-low/30",
  medium: "border-severity-medium/30",
  high: "border-severity-high/30",
  very_high: "border-severity-veryhigh/30",
  critical: "border-severity-critical/30",
};

const ResultsDisplay = ({ result, onBack }: ResultsDisplayProps) => {
  const { lang } = useLanguage();

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-slide-in-left"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("resBackBtn", lang)}
        </button>

        <div className="text-center space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl font-display">{t("resTitle", lang)}</h2>
          <p className="text-muted-foreground">
            {t("resIncidentType", lang)}:{" "}
            <span className="font-semibold text-foreground">
              {t(incidentTypeLabelKeys[result.incidentType], lang)}
            </span>
          </p>
        </div>

        <div
          className={`rounded-xl border-2 p-6 ${severityBorders[result.severity]} opacity-0 animate-scale-in`}
          style={{ animationDelay: "0.25s" }}
        >
          <div className="flex items-center gap-4">
            <div className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors duration-500 ${severityColors[result.severity]}`}>
              {t(severityLabelKeys[result.severity], lang).toUpperCase()} {t("resSeverity", lang)}
            </div>
            <p className="text-sm text-muted-foreground flex-1">{result.riskAssessment}</p>
          </div>
        </div>

        {/* Reasoning Chain */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-display">{t("resReasoning", lang)}</h3>
          </div>
          <div className="space-y-2">
            {result.reasoning.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 opacity-0 animate-slide-in-left"
                style={{ animationDelay: `${0.4 + i * 0.08}s` }}
              >
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Applicable Laws */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-display">{t("resLaws", lang)}</h3>
          </div>
          <div className="space-y-4">
            {result.applicableLaws.map((law, i) => (
              <div
                key={law.section}
                className="p-4 rounded-lg border border-border bg-background opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.55 + i * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold">
                    {law.section}
                  </span>
                  <h4 className="font-semibold text-sm">{law.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{law.description}</p>
                <p className="text-sm">
                  <span className="font-medium text-destructive">{t("resPunishment", lang)}: </span>
                  {law.punishment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Immediate Steps */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-display">{t("resImmediateSteps", lang)}</h3>
          </div>
          <ul className="space-y-2">
            {result.guidance.immediateSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-0 animate-slide-in-left" style={{ animationDelay: `${0.7 + i * 0.06}s` }}>
                <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Steps */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="flex items-center gap-2 mb-4">
            <FileCheck className="w-5 h-5 text-success" />
            <h3 className="text-xl font-display">{t("resLegalSteps", lang)}</h3>
          </div>
          <ul className="space-y-2">
            {result.guidance.legalSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-0 animate-slide-in-left" style={{ animationDelay: `${0.85 + i * 0.06}s` }}>
                <span className="w-6 h-6 rounded-full bg-success/10 text-success flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence Advice */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-card opacity-0 animate-fade-in-up" style={{ animationDelay: "0.95s" }}>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-info" />
            <h3 className="text-xl font-display">{t("resEvidence", lang)}</h3>
          </div>
          <ul className="space-y-2">
            {result.guidance.evidenceAdvice.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm opacity-0 animate-slide-in-left" style={{ animationDelay: `${1.0 + i * 0.06}s` }}>
                <span className="w-1.5 h-1.5 rounded-full bg-info mt-2 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Helplines */}
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 opacity-0 animate-scale-in" style={{ animationDelay: "1.1s" }}>
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-display">{t("resHelplines", lang)}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.guidance.helplines.map((helpline, i) => (
              <div
                key={helpline.number}
                className="flex items-center justify-between p-3 rounded-lg bg-card border border-border opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${1.15 + i * 0.08}s` }}
              >
                <span className="text-sm font-medium">{helpline.name}</span>
                <a
                  href={`tel:${helpline.number}`}
                  className="px-3 py-1.5 rounded-md bg-gradient-hero text-primary-foreground text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  {helpline.number}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsDisplay;
