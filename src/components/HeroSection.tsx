import { Shield, Heart, Scale, Phone, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const { lang } = useLanguage();

  const features = [
    { icon: Shield, titleKey: "featKnowTitle" as const, descKey: "featKnowDesc" as const },
    { icon: Scale, titleKey: "featLegalTitle" as const, descKey: "featLegalDesc" as const },
    { icon: Heart, titleKey: "featSafetyTitle" as const, descKey: "featSafetyDesc" as const },
    { icon: Phone, titleKey: "featHelplineTitle" as const, descKey: "featHelplineDesc" as const },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-warm opacity-60" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-gentle" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-gentle" style={{ animationDelay: "1s" }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 animate-pulse-gentle"
            style={{
              width: `${8 + i * 6}px`,
              height: `${8 + i * 6}px`,
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("heroBadge", lang)}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight tracking-tight opacity-0 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            {t("heroTitle1", lang)}
            <span className="text-gradient-hero">{t("heroTitle2", lang)}</span>
            {t("heroTitle3", lang)}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {t("heroSubtitle", lang)}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
            <button
              onClick={onGetStarted}
              className="group px-8 py-4 rounded-lg bg-gradient-hero text-primary-foreground font-semibold text-lg shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {t("ctaReport", lang)}
                <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-secondary hover:scale-105 transition-all duration-300"
            >
              {t("ctaHow", lang)}
            </a>
          </div>
        </div>

        <div
          id="how-it-works"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
        >
          {features.map((feature, i) => (
            <div
              key={feature.titleKey}
              className="p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-soft hover:-translate-y-2 transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.7 + i * 0.12}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">{t(feature.titleKey, lang)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(feature.descKey, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
