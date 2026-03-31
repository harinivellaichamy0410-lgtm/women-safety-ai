import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import { Shield, Users, Scale, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const useCountUp = (end: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
};

const StatsSection = () => {
  const { lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const laws = useCountUp(25, 2000, visible);
  const helplines = useCountUp(8, 1500, visible);
  const incidents = useCountUp(8, 1800, visible);
  const languages = useCountUp(3, 1000, visible);

  const stats = [
    { icon: Scale, value: `${laws}+`, label: t("statLaws", lang), color: "text-primary" },
    { icon: Phone, value: `${helplines}+`, label: t("statHelplines", lang), color: "text-accent" },
    { icon: Shield, value: `${incidents}`, label: t("statIncidents", lang), color: "text-success" },
    { icon: Users, value: `${languages}`, label: t("statLanguages", lang), color: "text-info" },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-warm relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/5 animate-pulse-gentle" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent/5 animate-pulse-gentle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-success/5 animate-pulse-gentle" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center space-y-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-card border border-border shadow-card flex items-center justify-center mx-auto ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
