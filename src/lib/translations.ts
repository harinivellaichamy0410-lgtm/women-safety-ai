import type { Language } from "./LanguageContext";

const translations = {
  // Navbar
  appName: { en: "SafeHer", ta: "SafeHer", hi: "SafeHer" },
  reportIncident: { en: "Report Incident", ta: "புகார் அளிக்க", hi: "घटना दर्ज करें" },

  // Hero
  heroBadge: { en: "AI-Powered Legal Awareness System", ta: "AI-இயங்கு சட்ட விழிப்புணர்வு அமைப்பு", hi: "AI-संचालित कानूनी जागरूकता प्रणाली" },
  heroTitle1: { en: "Women Safety & ", ta: "பெண்கள் பாதுகாப்பு & ", hi: "महिला सुरक्षा एवं " },
  heroTitle2: { en: "Legal Awareness", ta: "சட்ட விழிப்புணர்வு", hi: "कानूनी जागरूकता" },
  heroTitle3: { en: " Expert System", ta: " நிபுணர் அமைப்பு", hi: " विशेषज्ञ प्रणाली" },
  heroSubtitle: {
    en: "A rule-based expert system providing situation-specific legal guidance for harassment, stalking, domestic violence, cyber abuse, and more. Know your rights. Take action. Stay safe.",
    ta: "தொல்லை, பின்தொடர்தல், குடும்ப வன்முறை, இணைய துன்புறுத்தல் ஆகியவற்றிற்கான சூழ்நிலை சார்ந்த சட்ட வழிகாட்டுதலை வழங்கும் விதி-அடிப்படை நிபுணர் அமைப்பு. உங்கள் உரிமைகளை அறிந்துகொள்ளுங்கள்.",
    hi: "उत्पीड़न, पीछा करना, घरेलू हिंसा, साइबर दुर्व्यवहार आदि के लिए स्थिति-विशिष्ट कानूनी मार्गदर्शन प्रदान करने वाली नियम-आधारित विशेषज्ञ प्रणाली। अपने अधिकार जानें।",
  },
  ctaReport: { en: "Report an Incident", ta: "சம்பவத்தை பதிவு செய்", hi: "घटना की रिपोर्ट करें" },
  ctaHow: { en: "How It Works", ta: "எப்படி செயல்படுகிறது", hi: "यह कैसे काम करता है" },

  // Features
  featKnowTitle: { en: "Know Your Rights", ta: "உங்கள் உரிமைகளை அறியுங்கள்", hi: "अपने अधिकार जानें" },
  featKnowDesc: { en: "Understand the legal protections available to you under Indian law.", ta: "இந்திய சட்டத்தின் கீழ் உங்களுக்கு கிடைக்கும் சட்ட பாதுகாப்புகளை புரிந்துகொள்ளுங்கள்.", hi: "भारतीय कानून के तहत उपलब्ध कानूनी सुरक्षा को समझें।" },
  featLegalTitle: { en: "Legal Guidance", ta: "சட்ட வழிகாட்டுதல்", hi: "कानूनी मार्गदर्शन" },
  featLegalDesc: { en: "Get situation-specific legal advice based on your incident details.", ta: "உங்கள் சம்பவ விவரங்களின் அடிப்படையில் சூழ்நிலை சார்ந்த சட்ட ஆலோசனை பெறுங்கள்.", hi: "अपनी घटना के विवरण के आधार पर स्थिति-विशिष्ट कानूनी सलाह प्राप्त करें।" },
  featSafetyTitle: { en: "Safety First", ta: "பாதுகாப்பு முதலில்", hi: "सुरक्षा पहले" },
  featSafetyDesc: { en: "Receive immediate safety steps and evidence preservation advice.", ta: "உடனடி பாதுகாப்பு நடவடிக்கைகள் மற்றும் ஆதார பாதுகாப்பு ஆலோசனை பெறுங்கள்.", hi: "तत्काल सुरक्षा कदम और साक्ष्य संरक्षण सलाह प्राप्त करें।" },
  featHelplineTitle: { en: "Helpline Access", ta: "உதவி எண் அணுகல்", hi: "हेल्पलाइन एक्सेस" },
  featHelplineDesc: { en: "Connect with government helplines and support services instantly.", ta: "அரசு உதவி எண்கள் மற்றும் ஆதரவு சேவைகளை உடனடியாக அணுகுங்கள்.", hi: "सरकारी हेल्पलाइन और सहायता सेवाओं से तुरंत जुड़ें।" },

  // Form
  formBadge: { en: "Incident Report", ta: "சம்பவ அறிக்கை", hi: "घटना रिपोर्ट" },
  formTitle: { en: "Describe Your Situation", ta: "உங்கள் நிலையை விவரிக்கவும்", hi: "अपनी स्थिति का वर्णन करें" },
  formSubtitle: {
    en: "Provide details about the incident to receive personalized legal guidance. All information is processed locally and never stored.",
    ta: "தனிப்பயனாக்கப்பட்ட சட்ட வழிகாட்டுதலைப் பெற சம்பவம் பற்றிய விவரங்களை வழங்கவும். அனைத்து தகவல்களும் உள்ளூரில் செயலாக்கப்படுகின்றன.",
    hi: "व्यक्तिगत कानूनी मार्गदर्शन प्राप्त करने के लिए घटना का विवरण प्रदान करें। सभी जानकारी स्थानीय रूप से संसाधित होती है।",
  },
  formIncidentType: { en: "Type of Incident", ta: "சம்பவ வகை", hi: "घटना का प्रकार" },
  formAgeGroup: { en: "Age Group of Victim", ta: "பாதிக்கப்பட்டவரின் வயது குழு", hi: "पीड़ित का आयु वर्ग" },
  formLocation: { en: "Location of Incident", ta: "சம்பவ இடம்", hi: "घटना का स्थान" },
  formLocationPlaceholder: { en: "e.g., Home, Workplace, Public place, Online", ta: "எ.கா., வீடு, பணியிடம், பொது இடம், ஆன்லைன்", hi: "जैसे, घर, कार्यस्थल, सार्वजनिक स्थान, ऑनलाइन" },
  formDescription: { en: "Describe the Incident", ta: "சம்பவத்தை விவரிக்கவும்", hi: "घटना का वर्णन करें" },
  formDescPlaceholder: {
    en: "Provide details about what happened. This helps in identifying the correct legal provisions...",
    ta: "என்ன நடந்தது என்பது பற்றிய விவரங்களை வழங்கவும்...",
    hi: "क्या हुआ इसका विवरण दें...",
  },
  formRepeated: { en: "Repeated Offence", ta: "மீண்டும் மீண்டும் நிகழ்ந்த குற்றம்", hi: "बार-बार का अपराध" },
  formRepeatedDesc: { en: "Has this happened before?", ta: "இது முன்பு நடந்ததா?", hi: "क्या यह पहले भी हुआ है?" },
  formPhysicalHarm: { en: "Physical Harm Involved", ta: "உடல் ரீதியான தீங்கு", hi: "शारीरिक नुकसान शामिल" },
  formPhysicalHarmDesc: { en: "Any physical injury sustained?", ta: "ஏதேனும் உடல் காயம் ஏற்பட்டதா?", hi: "क्या कोई शारीरिक चोट लगी?" },
  formSubmit: { en: "Analyze & Get Legal Guidance", ta: "ஆய்வு செய்து சட்ட வழிகாட்டுதல் பெறுங்கள்", hi: "विश्लेषण करें और कानूनी मार्गदर्शन प्राप्त करें" },

  // Age groups
  ageMinor: { en: "Under 18 (Minor)", ta: "18 வயதிற்குக் கீழ் (சிறுவர்)", hi: "18 से कम (नाबालिग)" },
  ageAdult: { en: "18–60 (Adult)", ta: "18–60 (வயது வந்தவர்)", hi: "18–60 (वयस्क)" },
  ageSenior: { en: "Above 60 (Senior Citizen)", ta: "60 வயதிற்கு மேல் (மூத்த குடிமகன்)", hi: "60 से ऊपर (वरिष्ठ नागरिक)" },

  // Incident type labels (with softened terms)
  incHarassment: { en: "Harassment", ta: "தொல்லை", hi: "उत्पीड़न" },
  incStalking: { en: "Stalking", ta: "பின்தொடர்தல்", hi: "पीछा करना" },
  incDomesticViolence: { en: "Domestic Violence", ta: "குடும்ப வன்முறை", hi: "घरेलू हिंसा" },
  incCyberAbuse: { en: "Cyber Abuse", ta: "இணைய துன்புறுத்தல்", hi: "साइबर दुर्व्यवहार" },
  incPhysicalViolation: { en: "Physical Violation", ta: "உடல் ரீதியான மீறல்", hi: "शारीरिक उल्लंघन" },
  incVerbalAbuse: { en: "Verbal Abuse", ta: "வாய்மொழி துன்புறுத்தல்", hi: "मौखिक दुर्व्यवहार" },
  incDowryHarassment: { en: "Dowry Harassment", ta: "வரதட்சணை தொல்லை", hi: "दहेज उत्पीड़न" },
  incWorkplaceHarassment: { en: "Workplace Misconduct", ta: "பணியிட தவறான நடத்தை", hi: "कार्यस्थल दुराचार" },

  // Incident type descriptions (softened)
  incHarassmentDesc: { en: "Unwelcome physical contact, advances, or inappropriate remarks", ta: "விரும்பாத உடல் தொடர்பு, அணுகுமுறைகள் அல்லது பொருத்தமற்ற கருத்துக்கள்", hi: "अनचाहा शारीरिक संपर्क, अग्रिम या अनुचित टिप्पणी" },
  incStalkingDesc: { en: "Being followed, watched, or repeatedly contacted against your will", ta: "உங்கள் விருப்பத்திற்கு எதிராக பின்தொடரப்படுதல் அல்லது தொடர்ந்து தொடர்பு கொள்ளப்படுதல்", hi: "आपकी इच्छा के विरुद्ध पीछा किया जाना या बार-बार संपर्क किया जाना" },
  incDomesticViolenceDesc: { en: "Physical, emotional, or economic abuse within a domestic relationship", ta: "குடும்ப உறவில் உடல், உணர்வு அல்லது பொருளாதார துன்புறுத்தல்", hi: "घरेलू संबंध में शारीरिक, भावनात्मक या आर्थिक दुर्व्यवहार" },
  incCyberAbuseDesc: { en: "Online harassment, morphed images, cyberstalking, or privacy violations", ta: "ஆன்லைன் தொல்லை, மாற்றப்பட்ட படங்கள், இணையவழி பின்தொடர்தல்", hi: "ऑनलाइन उत्पीड़न, मॉर्फ्ड छवियाँ, साइबरस्टॉकिंग" },
  incPhysicalViolationDesc: { en: "Any form of non-consensual physical violation or assault", ta: "எந்தவொரு வகையான சம்மதமில்லாத உடல் மீறல்", hi: "किसी भी प्रकार का गैर-सहमति शारीरिक उल्लंघन" },
  incVerbalAbuseDesc: { en: "Insulting remarks, gestures, or acts intended to demean", ta: "அவமானகரமான கருத்துக்கள், சைகைகள் அல்லது தரக்குறைவான செயல்கள்", hi: "अपमानजनक टिप्पणी, इशारे या कृत्य" },
  incDowryHarassmentDesc: { en: "Harassment or cruelty related to dowry demands", ta: "வரதட்சணை கோரிக்கைகள் தொடர்பான தொல்லை", hi: "दहेज की माँग से संबंधित उत्पीड़न" },
  incWorkplaceHarassmentDesc: { en: "Misconduct or hostile environment at workplace", ta: "பணியிடத்தில் தவறான நடத்தை அல்லது விரோதமான சூழல்", hi: "कार्यस्थल पर दुराचार या शत्रुतापूर्ण वातावरण" },

  // Results
  resBackBtn: { en: "Analyze Another Incident", ta: "மற்றொரு சம்பவத்தை ஆய்வு செய்", hi: "एक और घटना का विश्लेषण करें" },
  resTitle: { en: "Legal Analysis Report", ta: "சட்ட ஆய்வு அறிக்கை", hi: "कानूनी विश्लेषण रिपोर्ट" },
  resIncidentType: { en: "Incident Type", ta: "சம்பவ வகை", hi: "घटना का प्रकार" },
  resSeverity: { en: "SEVERITY", ta: "தீவிரம்", hi: "गंभीरता" },
  resReasoning: { en: "Forward Chaining Reasoning", ta: "முன்னோக்கு சங்கிலி நியாயம்", hi: "फॉरवर्ड चेनिंग रीज़निंग" },
  resLaws: { en: "Applicable Legal Provisions", ta: "பொருந்தக்கூடிய சட்ட விதிகள்", hi: "लागू कानूनी प्रावधान" },
  resPunishment: { en: "Punishment", ta: "தண்டனை", hi: "सज़ा" },
  resImmediateSteps: { en: "Immediate Safety Steps", ta: "உடனடி பாதுகாப்பு நடவடிக்கைகள்", hi: "तत्काल सुरक्षा कदम" },
  resLegalSteps: { en: "Recommended Legal Steps", ta: "பரிந்துரைக்கப்பட்ட சட்ட நடவடிக்கைகள்", hi: "अनुशंसित कानूनी कदम" },
  resEvidence: { en: "Evidence Preservation", ta: "ஆதார பாதுகாப்பு", hi: "साक्ष्य संरक्षण" },
  resHelplines: { en: "Emergency Helplines", ta: "அவசர உதவி எண்கள்", hi: "आपातकालीन हेल्पलाइन" },
  resDisclaimer: {
    en: "Disclaimer: This is an AI-powered expert system for educational and awareness purposes. It does not constitute professional legal advice. Please consult a qualified legal professional for your specific situation.",
    ta: "மறுப்பு: இது கல்வி மற்றும் விழிப்புணர்வு நோக்கங்களுக்கான AI-இயங்கு நிபுணர் அமைப்பு. இது தொழில்முறை சட்ட ஆலோசனையாக அமையாது.",
    hi: "अस्वीकरण: यह शैक्षिक और जागरूकता उद्देश्यों के लिए AI-संचालित विशेषज्ञ प्रणाली है। यह पेशेवर कानूनी सलाह नहीं है।",
  },

  // Footer
  footerText: { en: "Women Safety & Legal Awareness Expert System — Built for awareness and empowerment", ta: "பெண்கள் பாதுகாப்பு & சட்ட விழிப்புணர்வு நிபுணர் அமைப்பு — விழிப்புணர்வு மற்றும் அதிகாரமளிப்பதற்காக", hi: "महिला सुरक्षा और कानूनी जागरूकता विशेषज्ञ प्रणाली — जागरूकता और सशक्तिकरण के लिए" },
  footerTeam: { en: "Meenakshi Sundararajan Engineering College | Team 21", ta: "மீனாட்சி சுந்தரராஜன் பொறியியல் கல்லூரி | குழு 21", hi: "मीनाक्षी सुंदरराजन इंजीनियरिंग कॉलेज | टीम 21" },

  // Severity labels
  sevLow: { en: "Low", ta: "குறைவு", hi: "कम" },
  sevMedium: { en: "Medium", ta: "நடுத்தரம்", hi: "मध्यम" },
  sevHigh: { en: "High", ta: "உயர்வு", hi: "उच्च" },
  sevVeryHigh: { en: "Very High", ta: "மிக உயர்வு", hi: "बहुत उच्च" },
  sevCritical: { en: "Critical", ta: "மிகத்தீவிரம்", hi: "गंभीर" },

  // Stats
  statLaws: { en: "Legal Provisions Covered", ta: "சட்ட விதிகள்", hi: "कानूनी प्रावधान" },
  statHelplines: { en: "Emergency Helplines", ta: "அவசர உதவி எண்கள்", hi: "आपातकालीन हेल्पलाइन" },
  statIncidents: { en: "Incident Categories", ta: "சம்பவ வகைகள்", hi: "घटना श्रेणियाँ" },
  statLanguages: { en: "Languages Supported", ta: "ஆதரிக்கப்படும் மொழிகள்", hi: "समर्थित भाषाएँ" },

  // Language selector
  langLabel: { en: "Language", ta: "மொழி", hi: "भाषा" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Language): string {
  return translations[key]?.[lang] ?? translations[key]?.["en"] ?? key;
}

// Mapping from IncidentType to translation keys
export const incidentTypeLabelKeys: Record<string, TranslationKey> = {
  harassment: "incHarassment",
  stalking: "incStalking",
  domestic_violence: "incDomesticViolence",
  cyber_abuse: "incCyberAbuse",
  sexual_assault: "incPhysicalViolation",
  verbal_abuse: "incVerbalAbuse",
  dowry_harassment: "incDowryHarassment",
  workplace_harassment: "incWorkplaceHarassment",
};

export const incidentTypeDescKeys: Record<string, TranslationKey> = {
  harassment: "incHarassmentDesc",
  stalking: "incStalkingDesc",
  domestic_violence: "incDomesticViolenceDesc",
  cyber_abuse: "incCyberAbuseDesc",
  sexual_assault: "incPhysicalViolationDesc",
  verbal_abuse: "incVerbalAbuseDesc",
  dowry_harassment: "incDowryHarassmentDesc",
  workplace_harassment: "incWorkplaceHarassmentDesc",
};

export const severityLabelKeys: Record<string, TranslationKey> = {
  low: "sevLow",
  medium: "sevMedium",
  high: "sevHigh",
  very_high: "sevVeryHigh",
  critical: "sevCritical",
};
