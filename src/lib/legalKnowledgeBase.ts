// Legal Knowledge Base for Women Safety Expert System
// Based on Indian Penal Code (IPC) sections and Women Protection Laws

export type IncidentType =
  | "harassment"
  | "stalking"
  | "domestic_violence"
  | "cyber_abuse"
  | "sexual_assault"
  | "verbal_abuse"
  | "dowry_harassment"
  | "workplace_harassment";

export type AgeGroup = "minor" | "adult" | "senior";
export type SeverityLevel = "low" | "medium" | "high" | "very_high" | "critical";

export interface LegalProvision {
  section: string;
  title: string;
  description: string;
  punishment: string;
}

export interface SafetyGuidance {
  immediateSteps: string[];
  legalSteps: string[];
  helplines: { name: string; number: string }[];
  evidenceAdvice: string[];
}

export interface InferenceResult {
  incidentType: IncidentType;
  severity: SeverityLevel;
  applicableLaws: LegalProvision[];
  guidance: SafetyGuidance;
  riskAssessment: string;
  reasoning: string[];
}

export interface IncidentInput {
  incidentType: IncidentType;
  ageGroup: AgeGroup;
  location: string;
  description: string;
  isRepeated: boolean;
  involvesPhysicalHarm: boolean;
}

const legalDatabase: Record<string, LegalProvision> = {
  "354A": {
    section: "IPC Section 354A",
    title: "Inappropriate Advances",
    description: "Physical contact and advances involving unwelcome and explicit overtures, demand or request for favours, showing obscene material against the will.",
    punishment: "Up to 3 years imprisonment and/or fine.",
  },
  "354B": {
    section: "IPC Section 354B",
    title: "Assault or Use of Criminal Force to Woman with Intent to Disrobe",
    description: "Assault or use of criminal force to any woman or abetting such act with the intention of disrobing.",
    punishment: "3 to 7 years imprisonment and fine.",
  },
  "354C": {
    section: "IPC Section 354C",
    title: "Invasion of Privacy (Voyeurism)",
    description: "Watching or capturing the image of a woman engaging in a private act without consent.",
    punishment: "1 to 3 years imprisonment (first offence), 3 to 7 years (second offence).",
  },
  "354D": {
    section: "IPC Section 354D",
    title: "Stalking",
    description: "Following a woman or contacting her repeatedly despite clear indication of disinterest, monitoring her internet or electronic communication.",
    punishment: "Up to 3 years imprisonment (first offence), up to 5 years (second offence).",
  },
  "376": {
    section: "IPC Section 376",
    title: "Aggravated Physical Violation",
    description: "Non-consensual physical violation against a woman, without her consent, or when she is unable to communicate consent.",
    punishment: "Not less than 10 years, may extend to life imprisonment and fine.",
  },
  "498A": {
    section: "IPC Section 498A",
    title: "Cruelty by Husband or Relatives",
    description: "Husband or relative of husband subjecting a woman to cruelty, including mental and physical harassment for dowry.",
    punishment: "Up to 3 years imprisonment and fine.",
  },
  "509": {
    section: "IPC Section 509",
    title: "Word, Gesture or Act Intended to Insult the Modesty of a Woman",
    description: "Uttering any word, making any gesture, or exhibiting any object intending to insult the modesty of a woman.",
    punishment: "Up to 3 years imprisonment and/or fine.",
  },
  "326": {
    section: "IPC Section 326",
    title: "Voluntarily Causing Grievous Hurt by Dangerous Weapons or Means",
    description: "Causing grievous hurt by means of any instrument of shooting, stabbing, or cutting, or by fire or heated substance, poison, etc.",
    punishment: "Up to 10 years imprisonment and fine.",
  },
  "66E": {
    section: "IT Act Section 66E",
    title: "Violation of Privacy",
    description: "Capturing, publishing or transmitting the image of a private area of any person without consent.",
    punishment: "Up to 3 years imprisonment and/or fine up to ₹2 lakhs.",
  },
  "67": {
    section: "IT Act Section 67",
    title: "Publishing Obscene Material in Electronic Form",
    description: "Publishing or transmitting obscene material in electronic form.",
    punishment: "Up to 5 years imprisonment and fine up to ₹10 lakhs (second offence).",
  },
  "PWDVA": {
    section: "Protection of Women from Domestic Violence Act, 2005",
    title: "Domestic Violence Protection",
    description: "Comprehensive act covering physical, sexual, verbal, emotional, and economic abuse within domestic relationships.",
    punishment: "Protection orders, residence orders, monetary relief, custody orders, compensation.",
  },
  "SHW": {
    section: "Women at Workplace (Prevention) Act, 2013",
    title: "Workplace Misconduct Prevention",
    description: "Prevention, prohibition and redressal of harassment of women at workplace. Mandates Internal Complaints Committee (ICC).",
    punishment: "Employer penalties for non-compliance, disciplinary action against perpetrator.",
  },
  "POCSO": {
    section: "POCSO Act, 2012",
    title: "Protection of Children from Offences",
    description: "Special act for protection of children from physical violations, harassment, and related offences.",
    punishment: "Varies by offence: 3 years to life imprisonment.",
  },
  "304B": {
    section: "IPC Section 304B",
    title: "Dowry Death",
    description: "Where the death of a woman is caused by burns or bodily injury within seven years of marriage, and it's shown she was subjected to cruelty in connection with dowry demand.",
    punishment: "Not less than 7 years, may extend to life imprisonment.",
  },
};

const commonHelplines = [
  { name: "Women Helpline (All India)", number: "181" },
  { name: "Police Emergency", number: "112" },
  { name: "Women Helpline (Domestic Abuse)", number: "1091" },
  { name: "National Commission for Women", number: "7827-170-170" },
  { name: "Cyber Crime Helpline", number: "1930" },
  { name: "Child Helpline (for minors)", number: "1098" },
];

// Forward chaining rule-based inference engine
export function analyzeIncident(input: IncidentInput): InferenceResult {
  const applicableLaws: LegalProvision[] = [];
  const reasoning: string[] = [];
  let severity: SeverityLevel = "low";

  // Rule 1: Match incident type to primary legal provisions
  switch (input.incidentType) {
    case "harassment":
      applicableLaws.push(legalDatabase["354A"]);
      applicableLaws.push(legalDatabase["509"]);
      reasoning.push("Incident classified as harassment → IPC 354A and IPC 509 apply.");
      severity = "medium";
      break;
    case "stalking":
      applicableLaws.push(legalDatabase["354D"]);
      reasoning.push("Incident classified as stalking → IPC 354D applies.");
      severity = "medium";
      break;
    case "domestic_violence":
      applicableLaws.push(legalDatabase["PWDVA"]);
      applicableLaws.push(legalDatabase["498A"]);
      reasoning.push("Incident classified as domestic violence → PWDVA and IPC 498A apply.");
      severity = "high";
      break;
    case "cyber_abuse":
      applicableLaws.push(legalDatabase["66E"]);
      applicableLaws.push(legalDatabase["67"]);
      applicableLaws.push(legalDatabase["354C"]);
      reasoning.push("Incident classified as cyber abuse → IT Act 66E, 67 and IPC 354C apply.");
      severity = "medium";
      break;
    case "sexual_assault":
      applicableLaws.push(legalDatabase["376"]);
      applicableLaws.push(legalDatabase["354B"]);
      reasoning.push("Incident classified as physical violation → IPC 376 and IPC 354B apply.");
      severity = "critical";
      break;
    case "verbal_abuse":
      applicableLaws.push(legalDatabase["509"]);
      reasoning.push("Incident classified as verbal abuse → IPC 509 applies.");
      severity = "low";
      break;
    case "dowry_harassment":
      applicableLaws.push(legalDatabase["498A"]);
      applicableLaws.push(legalDatabase["304B"]);
      reasoning.push("Incident classified as dowry harassment → IPC 498A and IPC 304B apply.");
      severity = "high";
      break;
    case "workplace_harassment":
      applicableLaws.push(legalDatabase["SHW"]);
      applicableLaws.push(legalDatabase["354A"]);
      reasoning.push("Incident classified as workplace misconduct → Workplace Protection Act 2013 and IPC 354A apply.");
      severity = "medium";
      break;
  }

  // Rule 2: Age-based escalation
  if (input.ageGroup === "minor") {
    applicableLaws.push(legalDatabase["POCSO"]);
    reasoning.push("Victim is a minor → POCSO Act 2012 additionally applies.");
    severity = "critical";
  }

  // Rule 3: Location-based severity adjustment
  const locationLower = input.location.toLowerCase();
  const isPublicOrOnline = ["public", "street", "park", "bus", "train", "metro", "online", "internet", "social media", "பொது", "ஆன்லைன்", "सार्वजनिक", "ऑनलाइन"].some(
    (kw) => locationLower.includes(kw)
  );
  const isHomeOrWorkplace = ["home", "house", "workplace", "office", "வீடு", "பணியிடம்", "घर", "कार्यस्थल"].some(
    (kw) => locationLower.includes(kw)
  );

  if (isPublicOrOnline) {
    reasoning.push("Incident occurred in a public place / online → Higher severity due to public exposure and evidence availability.");
    if (severity === "low") severity = "medium";
    else if (severity === "medium") severity = "high";
  } else if (isHomeOrWorkplace) {
    reasoning.push("Incident occurred at home / workplace → Moderate severity, domestic/workplace protection laws apply.");
    if (severity === "low") severity = "medium";
  }

  // Rule 4: Physical harm escalation → Very High severity
  if (input.involvesPhysicalHarm) {
    if (!applicableLaws.find(l => l.section === legalDatabase["326"].section)) {
      applicableLaws.push(legalDatabase["326"]);
    }
    reasoning.push("Physical harm reported → IPC 326 applies, severity escalated to VERY HIGH.");
    severity = "very_high";
  }

  // Rule 5: Repeated offence escalation
  if (input.isRepeated) {
    reasoning.push("Repeated offence reported → Severity escalated, stronger legal action recommended.");
    if (severity === "low") severity = "medium";
    else if (severity === "medium") severity = "high";
    else if (severity === "high") severity = "very_high";
  }

  // Generate guidance
  const guidance = generateGuidance(input, severity);

  const riskAssessment = generateRiskAssessment(severity, input);

  return {
    incidentType: input.incidentType,
    severity,
    applicableLaws,
    guidance,
    riskAssessment,
    reasoning,
  };
}

function generateGuidance(input: IncidentInput, severity: SeverityLevel): SafetyGuidance {
  const immediateSteps: string[] = [];
  const legalSteps: string[] = [];
  const evidenceAdvice: string[] = [];

  // Universal immediate steps
  if (severity === "critical" || severity === "very_high" || severity === "high") {
    immediateSteps.push("Move to a safe location immediately.");
    immediateSteps.push("Call emergency services (112) if in immediate danger.");
    immediateSteps.push("Reach out to a trusted person nearby.");
  }
  immediateSteps.push("Document the incident with date, time, and details.");
  immediateSteps.push("Preserve all evidence (messages, photos, recordings).");

  // Legal steps based on incident
  legalSteps.push("File a First Information Report (FIR) at the nearest police station.");
  legalSteps.push("The police are obligated to register your FIR — refusal is a punishable offence.");
  
  if (input.incidentType === "domestic_violence") {
    legalSteps.push("Apply for a Protection Order under the Domestic Violence Act.");
    legalSteps.push("Contact a Protection Officer in your district.");
  }
  if (input.incidentType === "workplace_harassment") {
    legalSteps.push("File a written complaint with the Internal Complaints Committee (ICC).");
    legalSteps.push("If no ICC exists, file with the Local Complaints Committee (LCC).");
  }
  if (input.incidentType === "cyber_abuse") {
    legalSteps.push("Report the incident on the National Cyber Crime Reporting Portal (cybercrime.gov.in).");
    legalSteps.push("Take screenshots and preserve URLs as evidence.");
  }
  legalSteps.push("Seek legal counsel from a women's rights lawyer or legal aid service.");

  // Evidence advice
  evidenceAdvice.push("Save all text messages, emails, and social media interactions.");
  evidenceAdvice.push("Note down names of witnesses, if any.");
  evidenceAdvice.push("Keep medical reports if there is physical injury.");
  if (input.incidentType === "cyber_abuse") {
    evidenceAdvice.push("Take screenshots with timestamps of online abuse.");
    evidenceAdvice.push("Do not delete any digital communication.");
  }

  // Select relevant helplines
  const helplines = [...commonHelplines];
  if (input.ageGroup === "minor") {
    // Child helpline already in the list
  }

  return { immediateSteps, legalSteps, helplines, evidenceAdvice };
}

function generateRiskAssessment(severity: SeverityLevel, input: IncidentInput): string {
  const assessments: Record<SeverityLevel, string> = {
    low: "The situation involves a legal violation but may not pose immediate physical danger. However, it is important to document and report the incident to prevent escalation.",
    medium: "The situation involves a moderate level of threat. Timely legal action and reporting is strongly recommended to ensure safety and prevent recurrence.",
    high: "The situation poses a significant threat to safety. Immediate legal intervention, police reporting, and access to protection services is strongly advised.",
    very_high: "The situation involves physical harm and is extremely dangerous. Emergency medical attention and immediate police intervention are required. All available legal protections must be activated.",
    critical: "The situation is extremely serious and may involve immediate physical danger. Emergency services should be contacted immediately. Full legal protection mechanisms should be activated.",
  };
  
  let assessment = assessments[severity];
  if (input.isRepeated) {
    assessment += " The repeated nature of the offence indicates a pattern that strengthens the legal case.";
  }
  return assessment;
}

export const incidentTypeLabels: Record<IncidentType, string> = {
  harassment: "Harassment",
  stalking: "Stalking",
  domestic_violence: "Domestic Violence",
  cyber_abuse: "Cyber Abuse",
  sexual_assault: "Physical Violation",
  verbal_abuse: "Verbal Abuse",
  dowry_harassment: "Dowry Harassment",
  workplace_harassment: "Workplace Misconduct",
};

export const incidentTypeDescriptions: Record<IncidentType, string> = {
  harassment: "Unwelcome physical contact, advances, or inappropriate remarks",
  stalking: "Being followed, watched, or repeatedly contacted against your will",
  domestic_violence: "Physical, emotional, or economic abuse within a domestic relationship",
  cyber_abuse: "Online harassment, morphed images, cyberstalking, or privacy violations",
  sexual_assault: "Any form of non-consensual physical violation or assault",
  verbal_abuse: "Insulting remarks, gestures, or acts intended to demean",
  dowry_harassment: "Harassment or cruelty related to dowry demands",
  workplace_harassment: "Misconduct or hostile environment at workplace",
};

export const severityLabels: Record<SeverityLevel, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  very_high: "Very High",
  critical: "Critical",
};
