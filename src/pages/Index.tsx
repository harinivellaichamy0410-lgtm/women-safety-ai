import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import IncidentForm from "@/components/IncidentForm";
import StatsSection from "@/components/StatsSection";
import ResultsDisplay from "@/components/ResultsDisplay";
import LanguageSelector from "@/components/LanguageSelector";
import {
  IncidentInput,
  InferenceResult,
  analyzeIncident,
} from "@/lib/legalKnowledgeBase";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import { Shield } from "lucide-react";

const Index = () => {
  const { lang } = useLanguage();
  const [result, setResult] = useState<InferenceResult | null>(null);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleGetStarted = () => {
    setShowForm(true);
    setResult(null);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubmit = (input: IncidentInput) => {
    const analysisResult = analyzeIncident(input);
    setResult(analysisResult);
    setShowForm(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setResult(null);
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg">{t("appName", lang)}</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button
              onClick={handleGetStarted}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t("reportIncident", lang)}
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {result ? (
        <ResultsDisplay result={result} onBack={handleBack} />
      ) : (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <StatsSection />
          {showForm && (
            <div ref={formRef}>
              <IncidentForm onSubmit={handleSubmit} />
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 mt-16">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            {t("footerText", lang)}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footerTeam", lang)}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
