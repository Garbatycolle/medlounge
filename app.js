/* ===== MedLounge App ===== */

// ----- Subjects Data -----
const subjects = [
  {
    id: "anatomy",
    name: "Anatomy",
    icon: "🦴",
    category: "preclinical",
    tag: "Preclinical",
    desc: "Gross anatomy, histology, embryology & neuroanatomy",
    overview: "Study of the structure of the human body from macroscopic to microscopic levels, including development.",
    topics: [
      "Upper & Lower Limb",
      "Thorax & Abdomen",
      "Head & Neck",
      "Neuroanatomy",
      "Histology of tissues & organs",
      "Embryology & congenital anomalies"
    ],
    tips: "Use 3D apps + cadaver sessions + active drawing. TeachMeAnatomy is excellent."
  },
  {
    id: "physiology",
    name: "Physiology",
    icon: "💓",
    category: "preclinical",
    tag: "Preclinical",
    desc: "How the body systems function in health",
    overview: "Understanding normal function of organ systems and homeostasis.",
    topics: [
      "Cardiovascular & Respiratory",
      "Renal & Acid-Base",
      "GI & Nutrition",
      "Endocrine & Reproductive",
      "Neurophysiology",
      "Muscle & Nerve"
    ],
    tips: "Link every concept to a clinical scenario. Flow charts help."
  },
  {
    id: "biochemistry",
    name: "Biochemistry",
    icon: "🧪",
    category: "preclinical",
    tag: "Preclinical",
    desc: "Molecular basis of life, metabolism & genetics",
    overview: "Chemical processes within and related to living organisms.",
    topics: [
      "Carbohydrate, Lipid & Protein metabolism",
      "Enzymes & Bioenergetics",
      "Molecular biology & Genetics",
      "Vitamins & Minerals",
      "Clinical biochemistry (LFTs, RFTs etc.)"
    ],
    tips: "Focus on pathways that appear in clinical cases (diabetes, inborn errors)."
  },
  {
    id: "pathology",
    name: "Pathology",
    icon: "🔬",
    category: "preclinical",
    tag: "Preclinical / Bridge",
    desc: "Mechanisms of disease – general & systemic",
    overview: "Study of disease processes: causes, mechanisms, morphology and clinical effects.",
    topics: [
      "Cell injury, Inflammation, Healing",
      "Neoplasia",
      "Haemodynamic disorders",
      "Systemic pathology (CVS, Respiratory, GI, etc.)",
      "Haematology basics"
    ],
    tips: "Robbins is the classic. Correlate with clinical signs and lab findings."
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    icon: "💊",
    category: "preclinical",
    tag: "Preclinical",
    desc: "Drugs – mechanisms, uses, side effects",
    overview: "How drugs work, how the body handles them, and rational prescribing.",
    topics: [
      "Pharmacokinetics & Pharmacodynamics",
      "Autonomic pharmacology",
      "Cardiovascular & Respiratory drugs",
      "Antibiotics & Antimicrobials",
      "CNS drugs",
      "Chemotherapy & Immunosuppressants"
    ],
    tips: "Make drug tables (class – prototype – mechanism – side effects – uses)."
  },
  {
    id: "microbiology",
    name: "Microbiology & Immunology",
    icon: "🦠",
    category: "preclinical",
    tag: "Preclinical",
    desc: "Bacteria, viruses, fungi, parasites & host defence",
    overview: "Infectious agents and the immune system’s response to them.",
    topics: [
      "Bacteriology (Gram +/–)",
      "Virology",
      "Mycology & Parasitology",
      "Innate & Adaptive immunity",
      "Hypersensitivity & Autoimmunity",
      "Vaccines & Antimicrobial resistance"
    ],
    tips: "Sketchy / visual mnemonics help a lot. Focus on high-yield organisms."
  },
  {
    id: "medicine",
    name: "Internal Medicine",
    icon: "🏥",
    category: "clinical",
    tag: "Clinical",
    desc: "Adult medical conditions across systems",
    overview: "Diagnosis and management of non-surgical adult diseases.",
    topics: [
      "Cardiology",
      "Respiratory Medicine",
      "Gastroenterology",
      "Nephrology",
      "Endocrinology",
      "Haematology / Oncology",
      "Infectious Diseases",
      "Rheumatology"
    ],
    tips: "Clerk patients, present cases, practise differentials and management plans."
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: "🔪",
    category: "clinical",
    tag: "Clinical",
    desc: "Surgical principles, acute abdomen, trauma",
    overview: "Principles of surgery, common operations and perioperative care.",
    topics: [
      "Acute abdomen & GI surgery",
      "Trauma & Orthopaedics basics",
      "Vascular surgery",
      "Urology",
      "Pre- and post-operative care",
      "Surgical infections & antibiotics"
    ],
    tips: "Know anatomy + clinical signs. Practise suture techniques and case presentations."
  },
  {
    id: "pediatrics",
    name: "Paediatrics",
    icon: "👶",
    category: "clinical",
    tag: "Clinical",
    desc: "Child health from neonate to adolescent",
    overview: "Growth, development, common paediatric illnesses and emergencies.",
    topics: [
      "Neonatology",
      "Growth & Development",
      "Respiratory & GI infections",
      "Vaccination schedule",
      "Paediatric emergencies",
      "Congenital conditions"
    ],
    tips: "Milestones and vaccination tables are high-yield. Practise communication with parents."
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynaecology",
    icon: "🤰",
    category: "clinical",
    tag: "Clinical",
    desc: "Pregnancy, childbirth & women’s health",
    overview: "Antenatal care, labour, common gynaecological conditions.",
    topics: [
      "Antenatal care & Screening",
      "Labour & Delivery",
      "Obstetric emergencies",
      "Menstrual disorders",
      "Contraception & Infertility",
      "Gynaecological cancers"
    ],
    tips: "Know CTG interpretation and management of common emergencies (PPH, eclampsia)."
  },
  {
    id: "psychiatry",
    name: "Psychiatry",
    icon: "🧠",
    category: "clinical",
    tag: "Clinical",
    desc: "Mental health disorders & treatments",
    overview: "Diagnosis and management of psychiatric conditions across the lifespan.",
    topics: [
      "Mood disorders",
      "Psychosis & Schizophrenia",
      "Anxiety disorders",
      "Substance use",
      "Personality disorders",
      "Child & Adolescent psychiatry"
    ],
    tips: "History-taking skills are crucial. Learn MSE thoroughly."
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "🧬",
    category: "clinical systems",
    tag: "Clinical",
    desc: "Disorders of the nervous system",
    overview: "Clinical approach to neurological symptoms and diseases.",
    topics: [
      "Stroke & TIA",
      "Epilepsy",
      "Headache & Migraine",
      "Parkinson’s & Movement disorders",
      "Multiple sclerosis",
      "Peripheral neuropathies"
    ],
    tips: "Localisation is key. Practise neurological examination repeatedly."
  },
  {
    id: "community",
    name: "Community Medicine / Public Health",
    icon: "🌍",
    category: "preclinical",
    tag: "Preclinical / Longitudinal",
    desc: "Epidemiology, prevention & health systems",
    overview: "Population health, disease prevention and health policy.",
    topics: [
      "Epidemiology & Biostatistics",
      "Screening & Prevention",
      "Health promotion",
      "Communicable disease control",
      "Primary health care",
      "Occupational & Environmental health"
    ],
    tips: "Understand rates, ratios, study designs and levels of prevention."
  },
  {
    id: "emergency",
    name: "Emergency Medicine",
    icon: "🚑",
    category: "clinical",
    tag: "Clinical",
    desc: "Acute care, resuscitation & trauma",
    overview: "Rapid assessment and stabilisation of critically ill patients.",
    topics: [
      "ABCDE approach",
      "Cardiac arrest & ALS",
      "Trauma ATLS principles",
      "Acute medical emergencies",
      "Toxicology basics",
      "Triage"
    ],
    tips: "Simulation practice is invaluable. Know algorithms cold."
  },
  {
    id: "radiology",
    name: "Radiology & Imaging",
    icon: "📷",
    category: "clinical",
    tag: "Clinical Support",
    desc: "Interpretation of common imaging modalities",
    overview: "Chest X-ray, abdominal films, CT, MRI and ultrasound basics.",
    topics: [
      "Chest X-ray systematic approach",
      "Abdominal X-ray",
      "CT head & abdomen basics",
      "Ultrasound principles",
      "Common fractures on X-ray"
    ],
    tips: "Look at hundreds of normal films first. Pattern recognition comes with volume."
  },
  // ===== Physiotherapy Courses =====
  {
    id: "kinesiology",
    name: "Kinesiology & Biomechanics",
    icon: "🏃",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Human movement, joint mechanics & analysis of motion",
    overview: "Study of human movement, forces acting on the body, and mechanical principles applied to physiotherapy assessment and treatment.",
    topics: [
      "Planes & axes of movement",
      "Joint kinematics & kinetics",
      "Muscle leverage & force production",
      "Gait analysis (normal & pathological)",
      "Posture & postural control",
      "Biomechanics of spine, upper & lower limb"
    ],
    tips: "Observe real gait and posture. Video analysis and practical labs are essential."
  },
  {
    id: "exercise-physio",
    name: "Exercise Physiology",
    icon: "💪",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Physiological responses & adaptations to exercise",
    overview: "How the body responds acutely and adapts chronically to different types of exercise — crucial for exercise prescription.",
    topics: [
      "Cardiovascular & respiratory responses to exercise",
      "Energy systems (ATP-PC, glycolytic, aerobic)",
      "Muscle fibre types & training adaptations",
      "VO₂ max, lactate threshold & testing",
      "Exercise in special populations (cardiac, elderly, pregnant)",
      "Overtraining & recovery"
    ],
    tips: "Link every concept to practical exercise prescription. Know contraindications."
  },
  {
    id: "therapeutic-exercise",
    name: "Therapeutic Exercise",
    icon: "🏋️",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Exercise prescription for rehabilitation & prevention",
    overview: "Design and progression of exercise programmes to restore function, improve strength, flexibility, endurance and motor control.",
    topics: [
      "Range of motion & stretching techniques",
      "Strengthening (isometric, isotonic, isokinetic)",
      "Proprioceptive & balance training",
      "Core stability & motor control",
      "Aerobic conditioning in rehab",
      "Progression, regression & clinical reasoning"
    ],
    tips: "Always assess first. Principle of specificity and progressive overload are key."
  },
  {
    id: "manual-therapy",
    name: "Manual Therapy",
    icon: "👐",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Hands-on techniques: mobilisation, manipulation, soft tissue",
    overview: "Skilled passive movement techniques applied to joints and soft tissues to reduce pain and improve mobility.",
    topics: [
      "Joint mobilisation (Maitland, Kaltenborn grades)",
      "Spinal & peripheral manipulation",
      "Soft tissue techniques (massage, myofascial release)",
      "Neural mobilisation",
      "Indications, contraindications & safety",
      "Clinical reasoning in manual therapy"
    ],
    tips: "Practice hands-on skills repeatedly under supervision. Always screen for red flags."
  },
  {
    id: "electrotherapy",
    name: "Electrotherapy & Modalities",
    icon: "⚡",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Physical agents: electrotherapy, ultrasound, heat, cold",
    overview: "Use of physical agents and electrophysical modalities as adjuncts in physiotherapy treatment.",
    topics: [
      "TENS & interferential therapy",
      "Therapeutic ultrasound",
      "Heat & cold therapy (thermotherapy & cryotherapy)",
      "Electrical muscle stimulation (NMES, FES)",
      "Laser & shortwave diathermy basics",
      "Evidence, dosage & safety"
    ],
    tips: "Understand the evidence base — many modalities are adjuncts, not stand-alone treatments."
  },
  {
    id: "ortho-pt",
    name: "Orthopaedic Physiotherapy",
    icon: "🦴",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "MSK conditions, post-op rehab & sports injuries",
    overview: "Assessment and rehabilitation of musculoskeletal disorders, fractures, joint replacements and soft-tissue injuries.",
    topics: [
      "Fracture healing & post-fracture rehab",
      "Joint replacements (hip, knee, shoulder)",
      "Shoulder, knee, ankle & spinal conditions",
      "Sports injuries & return-to-sport criteria",
      "Osteoarthritis & rheumatoid arthritis management",
      "Clinical assessment of MSK system"
    ],
    tips: "Master joint assessment (ROM, strength, special tests). Protocol knowledge + clinical reasoning."
  },
  {
    id: "neuro-pt",
    name: "Neurological Physiotherapy",
    icon: "🧠",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Rehab of stroke, SCI, Parkinson’s, MS & other neurological conditions",
    overview: "Assessment and treatment of patients with disorders of the central and peripheral nervous system.",
    topics: [
      "Stroke rehabilitation & motor relearning",
      "Spinal cord injury management",
      "Parkinson’s disease & movement disorders",
      "Multiple sclerosis & progressive conditions",
      "Balance, gait & transfer training",
      "Bobath, Motor Relearning, task-specific training"
    ],
    tips: "Focus on functional goals. Intensive, repetitive, task-oriented practice drives recovery."
  },
  {
    id: "cardio-pt",
    name: "Cardiopulmonary Physiotherapy",
    icon: "❤️",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Respiratory care, cardiac rehab & ICU physiotherapy",
    overview: "Physiotherapy management of patients with cardiac and respiratory conditions, including critical care.",
    topics: [
      "Respiratory assessment & auscultation",
      "Airway clearance techniques",
      "Breathing exercises & positioning",
      "Cardiac rehabilitation phases",
      "ICU & post-surgical respiratory care",
      "Exercise testing & prescription in cardiopulmonary disease"
    ],
    tips: "Learn chest assessment thoroughly. Safety with monitoring and oxygen is critical."
  },
  {
    id: "paeds-pt",
    name: "Paediatric Physiotherapy",
    icon: "👶",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Developmental delay, cerebral palsy & childhood conditions",
    overview: "Physiotherapy for infants, children and adolescents with developmental, neurological and orthopaedic conditions.",
    topics: [
      "Normal motor development milestones",
      "Cerebral palsy assessment & management",
      "Developmental delay & early intervention",
      "Congenital orthopaedic conditions",
      "Respiratory conditions in children",
      "Family-centred care & play-based therapy"
    ],
    tips: "Know developmental norms cold. Therapy is play-based and family-involved."
  },
  {
    id: "sports-pt",
    name: "Sports Physiotherapy",
    icon: "⚽",
    category: "physiotherapy",
    tag: "Physiotherapy",
    desc: "Injury prevention, acute management & return to sport",
    overview: "Specialised physiotherapy for athletes: prevention, acute care, rehabilitation and performance.",
    topics: [
      "Injury prevention programmes",
      "Acute sports injury management (PRICE / POLICE)",
      "Sport-specific rehabilitation",
      "Return-to-play criteria & testing",
      "Taping & bracing",
      "Load management & periodisation"
    ],
    tips: "Understand the sport. Communication with coaches and graded exposure are key."
  }
];

// Year levels + high-yield notes (merged into subjects)
const subjectMeta = {
  anatomy: { year: 1, notes: ["Upper limb: brachial plexus roots–terminals is high-yield", "Diaphragm openings: T8 IVC, T10 oesophagus, T12 aorta", "Femoral triangle: NAVEL (lateral to medial)"] },
  physiology: { year: 1, notes: ["Frank-Starling law & cardiac output determinants", "Oxygen-haemoglobin dissociation curve shifts", "RAAS and ADH in volume regulation"] },
  biochemistry: { year: 1, notes: ["Rate-limiting enzymes of major pathways", "Inborn errors: PKU, maple syrup, glycogen storage", "Vitamins as cofactors (B1, B6, B12, biotin)"] },
  pathology: { year: 2, notes: ["Cell injury → reversible vs irreversible", "Inflammation: acute vs chronic mediators", "Neoplasia: benign vs malignant features, staging"] },
  pharmacology: { year: 2, notes: ["PK vs PD; bioavailability & half-life", "Autonomic drug classes & side effects", "Antibiotics: mechanisms & resistance"] },
  microbiology: { year: 2, notes: ["Gram + cocci & rods high-yield organisms", "Hypersensitivity types I–IV", "Vaccines: live vs inactivated"] },
  medicine: { year: 3, notes: ["ABCDE approach to the acutely ill", "Heart failure: 4 pillars of GDMT", "DKA vs HHS management priorities"] },
  surgery: { year: 3, notes: ["Acute abdomen differentials", "Hernia: reducible / irreducible / strangulated", "Pre-op optimisation & post-op complications"] },
  pediatrics: { year: 3, notes: ["Developmental milestones (gross/fine/social/language)", "Vaccination schedule", "Paediatric emergency algorithms"] },
  obgyn: { year: 3, notes: ["Antenatal screening timeline", "Stages of labour", "PPH and eclampsia management"] },
  psychiatry: { year: 3, notes: ["Mental State Examination structure", "Depression & psychosis first-line treatments", "Risk assessment (suicide, harm)"] },
  neurology: { year: 3, notes: ["Localisation of neurological lesions", "Stroke: FAST + time-critical treatment", "Parkinson’s vs essential tremor"] },
  community: { year: 1, notes: ["Incidence vs prevalence", "Levels of prevention", "Screening test sensitivity/specificity"] },
  emergency: { year: 4, notes: ["ALS / ATLS algorithms", "Shock classification", "Common toxicology toxidromes"] },
  radiology: { year: 2, notes: ["Chest X-ray systematic ABCDE approach", "Common fracture patterns", "When to choose CT vs MRI vs US"] },
  kinesiology: { year: 1, notes: ["Planes & axes of motion", "Open vs closed kinetic chain", "Gait cycle phases & common deviations"] },
  "exercise-physio": { year: 1, notes: ["Energy systems & substrate use", "FITT principle", "Exercise contraindications in cardiac disease"] },
  "therapeutic-exercise": { year: 2, notes: ["SAID / specificity principle", "Progression & regression of exercises", "Proprioception after ligament injury"] },
  "manual-therapy": { year: 2, notes: ["Maitland grades of mobilisation", "Red flags before spinal manual therapy", "Contraindications to manipulation"] },
  electrotherapy: { year: 2, notes: ["TENS parameters for pain", "Ultrasound: thermal vs non-thermal", "Evidence hierarchy for modalities"] },
  "ortho-pt": { year: 3, notes: ["Hip replacement precautions (posterior approach)", "Ottawa Ankle & Knee Rules", "Return-to-sport criteria"] },
  "neuro-pt": { year: 3, notes: ["Task-specific intensive practice post-stroke", "Parkinson’s gait & cueing strategies", "Spasticity management principles"] },
  "cardio-pt": { year: 3, notes: ["Active cycle of breathing technique", "Cardiac rehab phases", "Safe mobilisation in ICU"] },
  "paeds-pt": { year: 3, notes: ["Normal motor milestones", "GMFCS levels in cerebral palsy", "Family-centred early intervention"] },
  "sports-pt": { year: 4, notes: ["POLICE principle for acute injury", "Load management & monitoring", "Psychological readiness for return to play"] }
};

// Merge meta into subjects
subjects.forEach(s => {
  const m = subjectMeta[s.id];
  if (m) {
    s.year = m.year;
    s.notes = m.notes;
  } else {
    s.year = 2;
    s.notes = [];
  }
});

// ----- Quiz Questions Bank -----
const quizBank = {
  anatomy: [
    {
      q: "Which nerve is most commonly injured in a midshaft fracture of the humerus?",
      options: ["Median nerve", "Ulnar nerve", "Radial nerve", "Axillary nerve", "Musculocutaneous nerve"],
      answer: 2,
      explanation: "The radial nerve runs in the spiral groove on the posterior aspect of the humerus and is vulnerable in midshaft fractures. Injury causes wrist drop.",
      difficulty: "medium"
    },
    {
      q: "The portal vein is formed by the union of which two veins?",
      options: ["Superior mesenteric + Inferior mesenteric", "Superior mesenteric + Splenic", "Inferior mesenteric + Splenic", "Hepatic + Splenic", "Left gastric + Splenic"],
      answer: 1,
      explanation: "The portal vein is formed behind the neck of the pancreas by the union of the superior mesenteric vein and the splenic vein.",
      difficulty: "medium"
    },
    {
      q: "Which structure passes through the diaphragm at the level of T10?",
      options: ["Aorta", "Inferior vena cava", "Oesophagus", "Thoracic duct", "Azygos vein"],
      answer: 2,
      explanation: "IVC at T8, oesophagus (+ vagus) at T10, aorta (+ thoracic duct + azygos) at T12.",
      difficulty: "easy"
    },
    {
      q: "The femoral triangle is bounded medially by which structure?",
      options: ["Sartorius", "Adductor longus", "Inguinal ligament", "Pectineus", "Gracilis"],
      answer: 1,
      explanation: "Boundaries: superior – inguinal ligament, lateral – medial border of sartorius, medial – medial border of adductor longus.",
      difficulty: "medium"
    },
    {
      q: "Which cranial nerve exits the skull through the jugular foramen?",
      options: ["CN V", "CN VII", "CN IX", "CN XII", "CN III"],
      answer: 2,
      explanation: "CN IX, X and XI exit via the jugular foramen (along with the jugular vein).",
      difficulty: "easy"
    }
  ],
  physiology: [
    {
      q: "Which ion is primarily responsible for the resting membrane potential of most cells?",
      options: ["Sodium", "Calcium", "Potassium", "Chloride", "Magnesium"],
      answer: 2,
      explanation: "The resting membrane potential is largely determined by potassium conductance and the Na/K-ATPase. K+ efflux makes the inside negative.",
      difficulty: "easy"
    },
    {
      q: "In the cardiac cycle, the first heart sound (S1) is produced by:",
      options: ["Opening of AV valves", "Closure of AV valves", "Opening of semilunar valves", "Closure of semilunar valves", "Rapid ventricular filling"],
      answer: 1,
      explanation: "S1 is caused by closure of the mitral and tricuspid (AV) valves at the beginning of systole.",
      difficulty: "easy"
    },
    {
      q: "Which of the following increases the affinity of haemoglobin for oxygen (left shift of ODC)?",
      options: ["Increased 2,3-BPG", "Increased CO2", "Decreased pH", "Decreased temperature", "Increased H+"],
      answer: 3,
      explanation: "Left shift (higher affinity) occurs with decreased temperature, decreased 2,3-BPG, decreased CO2 and increased pH (Bohr effect is opposite).",
      difficulty: "medium"
    },
    {
      q: "ADH (vasopressin) acts primarily on which part of the nephron?",
      options: ["Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct", "Bowman’s capsule"],
      answer: 3,
      explanation: "ADH inserts aquaporin-2 channels into the principal cells of the collecting duct, increasing water reabsorption.",
      difficulty: "medium"
    },
    {
      q: "During exercise, which of the following correctly describes the change in oxygen-haemoglobin dissociation curve?",
      options: ["Shifts to the left", "Shifts to the right", "No change", "Becomes hyperbolic", "Affinity for O2 increases"],
      answer: 1,
      explanation: "Local increase in temperature, CO2 and H+ in exercising muscle shifts the curve to the right, facilitating oxygen unloading.",
      difficulty: "medium"
    }
  ],
  biochemistry: [
    {
      q: "Which enzyme is deficient in Phenylketonuria (PKU)?",
      options: ["Tyrosinase", "Phenylalanine hydroxylase", "Homogentisate oxidase", "Branched-chain ketoacid dehydrogenase", "Cystathionine synthase"],
      answer: 1,
      explanation: "Classic PKU is caused by deficiency of phenylalanine hydroxylase (or its cofactor tetrahydrobiopterin).",
      difficulty: "easy"
    },
    {
      q: "The rate-limiting enzyme of glycolysis is:",
      options: ["Hexokinase", "Phosphofructokinase-1", "Pyruvate kinase", "Glucose-6-phosphatase", "Aldolase"],
      answer: 1,
      explanation: "PFK-1 is the major rate-limiting and committed step of glycolysis, regulated by energy charge and fructose-2,6-bisphosphate.",
      difficulty: "easy"
    },
    {
      q: "Which vitamin is required as a cofactor for carboxylase enzymes?",
      options: ["Thiamine (B1)", "Riboflavin (B2)", "Niacin (B3)", "Biotin (B7)", "Cobalamin (B12)"],
      answer: 3,
      explanation: "Biotin is the cofactor for carboxylase reactions (e.g., pyruvate carboxylase, acetyl-CoA carboxylase).",
      difficulty: "medium"
    },
    {
      q: "In the urea cycle, which amino acid is formed by the combination of ornithine and carbamoyl phosphate?",
      options: ["Citrulline", "Arginine", "Argininosuccinate", "Aspartate", "Fumarate"],
      answer: 0,
      explanation: "Ornithine + carbamoyl phosphate → citrulline (catalysed by ornithine transcarbamoylase in the mitochondria).",
      difficulty: "hard"
    }
  ],
  pathology: [
    {
      q: "Which type of necrosis is typically seen in the brain after an ischaemic infarct?",
      options: ["Coagulative", "Liquefactive", "Caseous", "Fat", "Fibrinoid"],
      answer: 1,
      explanation: "The brain undergoes liquefactive necrosis after ischaemic injury due to high lipid content and enzymatic digestion.",
      difficulty: "easy"
    },
    {
      q: "Reed-Sternberg cells are characteristic of which disease?",
      options: ["Non-Hodgkin lymphoma", "Hodgkin lymphoma", "Multiple myeloma", "Chronic lymphocytic leukaemia", "Acute lymphoblastic leukaemia"],
      answer: 1,
      explanation: "Reed-Sternberg cells (large binucleate cells with prominent nucleoli) are the hallmark of Hodgkin lymphoma.",
      difficulty: "easy"
    },
    {
      q: "Which of the following is an example of a type III hypersensitivity reaction?",
      options: ["Anaphylaxis", "Goodpasture syndrome", "Serum sickness", "Contact dermatitis", "Tuberculin skin test"],
      answer: 2,
      explanation: "Type III is immune-complex mediated (e.g., serum sickness, SLE, Arthus reaction). Goodpasture is type II; contact dermatitis and tuberculin are type IV.",
      difficulty: "medium"
    },
    {
      q: "Virchow’s triad consists of:",
      options: ["Stasis, hypercoagulability, endothelial injury", "Fever, jaundice, right upper quadrant pain", "Hypertension, bradycardia, irregular respiration", "Chest pain, dyspnoea, haemoptysis", "Pallor, jaundice, splenomegaly"],
      answer: 0,
      explanation: "Virchow’s triad describes the three factors that predispose to thrombosis: endothelial injury, stasis/turbulence, and hypercoagulability.",
      difficulty: "easy"
    }
  ],
  pharmacology: [
    {
      q: "Which drug is a selective β1-blocker commonly used in heart failure?",
      options: ["Propranolol", "Atenolol", "Carvedilol", "Bisoprolol", "Labetalol"],
      answer: 3,
      explanation: "Bisoprolol (and metoprolol, nebivolol) are selective β1-blockers with proven mortality benefit in HFrEF. Carvedilol is non-selective + α-blocker.",
      difficulty: "medium"
    },
    {
      q: "The mechanism of action of warfarin is:",
      options: ["Direct thrombin inhibition", "Factor Xa inhibition", "Vitamin K antagonism", "Enhancement of antithrombin III", "Platelet ADP receptor blockade"],
      answer: 2,
      explanation: "Warfarin inhibits vitamin K epoxide reductase, preventing activation of clotting factors II, VII, IX and X.",
      difficulty: "easy"
    },
    {
      q: "Which antibiotic inhibits bacterial cell wall synthesis by binding to PBPs?",
      options: ["Gentamicin", "Ciprofloxacin", "Vancomycin", "Erythromycin", "Metronidazole"],
      answer: 2,
      explanation: "β-lactams and vancomycin inhibit cell wall synthesis. Vancomycin binds D-Ala-D-Ala; β-lactams bind penicillin-binding proteins (PBPs).",
      difficulty: "medium"
    }
  ],
  microbiology: [
    {
      q: "Which organism is the most common cause of community-acquired pneumonia?",
      options: ["Haemophilus influenzae", "Staphylococcus aureus", "Streptococcus pneumoniae", "Klebsiella pneumoniae", "Mycoplasma pneumoniae"],
      answer: 2,
      explanation: "Streptococcus pneumoniae (pneumococcus) remains the leading cause of CAP in most age groups.",
      difficulty: "easy"
    },
    {
      q: "Clostridium difficile colitis is most strongly associated with which antibiotic class?",
      options: ["Macrolides", "Aminoglycosides", "Fluoroquinolones & Clindamycin", "Tetracyclines", "Sulfonamides"],
      answer: 2,
      explanation: "Clindamycin, fluoroquinolones and broad-spectrum cephalosporins/penicillins are the highest risk antibiotics for C. difficile infection.",
      difficulty: "medium"
    },
    {
      q: "Which of the following is an acid-fast bacterium?",
      options: ["Streptococcus pyogenes", "Escherichia coli", "Mycobacterium tuberculosis", "Neisseria meningitidis", "Helicobacter pylori"],
      answer: 2,
      explanation: "Mycobacteria have mycolic acid in their cell walls and stain acid-fast (Ziehl-Neelsen or Auramine).",
      difficulty: "easy"
    }
  ],
  medicine: [
    {
      q: "A 65-year-old man presents with sudden onset severe chest pain radiating to the back. BP is 180/100 in the right arm and 140/80 in the left. What is the most likely diagnosis?",
      options: ["Acute myocardial infarction", "Pulmonary embolism", "Aortic dissection", "Pericarditis", "Oesophageal rupture"],
      answer: 2,
      explanation: "Sudden tearing chest/back pain with pulse or BP discrepancy between arms is classic for aortic dissection.",
      difficulty: "medium"
    },
    {
      q: "First-line pharmacological treatment for acute asthma exacerbation includes:",
      options: ["Oral prednisolone only", "Nebulised salbutamol + ipratropium + steroids", "IV aminophylline as first choice", "Long-acting beta agonist alone", "Antibiotics routinely"],
      answer: 1,
      explanation: "Oxygen, nebulised short-acting β2-agonist (salbutamol) ± ipratropium, and systemic corticosteroids are the cornerstone of acute asthma management.",
      difficulty: "easy"
    },
    {
      q: "In diabetic ketoacidosis, the primary treatment priority after ABC is:",
      options: ["IV insulin infusion", "IV normal saline fluid resuscitation", "IV bicarbonate", "Subcutaneous long-acting insulin", "Oral hypoglycaemics"],
      answer: 1,
      explanation: "Fluid resuscitation with 0.9% saline is the first priority to restore circulating volume; insulin is started shortly after.",
      difficulty: "medium"
    }
  ],
  surgery: [
    {
      q: "Which of the following is a feature of a strangulated hernia?",
      options: ["Reducible", "Painless", "Tender, erythematous, irreducible with systemic signs", "Only present on standing", "Transilluminable"],
      answer: 2,
      explanation: "Strangulation implies compromised blood supply → pain, tenderness, overlying skin changes and possible sepsis. It is a surgical emergency.",
      difficulty: "easy"
    },
    {
      q: "The most common cause of small bowel obstruction in developed countries is:",
      options: ["Hernia", "Adhesions", "Tumour", "Intussusception", "Volvulus"],
      answer: 1,
      explanation: "Post-operative adhesions are the leading cause of small bowel obstruction in the developed world.",
      difficulty: "medium"
    },
    {
      q: "Courvoisier’s law states that in the presence of jaundice:",
      options: ["A palpable gallbladder is unlikely to be due to gallstones", "A palpable gallbladder is always malignant", "Jaundice + pain = stones", "Courvoisier’s sign is pathognomonic of pancreatic cancer", "Gallbladder is never palpable in malignancy"],
      answer: 0,
      explanation: "If the gallbladder is palpable in a jaundiced patient, the cause is unlikely to be gallstones (which usually cause a fibrotic, non-distensible gallbladder). Often implies distal obstruction (e.g., pancreatic head ca).",
      difficulty: "hard"
    }
  ],
  kinesiology: [
    {
      q: "In the sagittal plane, movement around which axis occurs?",
      options: ["Longitudinal (vertical) axis", "Frontal (coronal) axis", "Sagittal axis", "Oblique axis", "Transverse axis only"],
      answer: 1,
      explanation: "Movements in the sagittal plane (flexion/extension) occur around a frontal (mediolateral) axis.",
      difficulty: "easy"
    },
    {
      q: "Which of the following is an example of a second-class lever in the human body?",
      options: ["Biceps brachii flexing the elbow", "Calf raise (plantarflexion)", "Triceps extending the elbow", "Nodding the head", "Jaw opening"],
      answer: 1,
      explanation: "In a calf raise the fulcrum is at the metatarsal heads, load is body weight through the tibia, and effort is from the gastrocnemius/soleus — a second-class lever (load between fulcrum and effort).",
      difficulty: "medium"
    },
    {
      q: "During normal gait, the highest vertical ground reaction force typically occurs at:",
      options: ["Mid-stance only", "Heel strike and push-off (double peaks)", "Toe-off only", "Swing phase", "Initial contact only"],
      answer: 1,
      explanation: "The vertical GRF curve is typically bimodal with peaks at loading response / early stance and at terminal stance (push-off).",
      difficulty: "medium"
    }
  ],
  "therapeutic-exercise": [
    {
      q: "Which principle states that training adaptations are specific to the type of stress applied?",
      options: ["Overload principle", "Specificity principle", "Reversibility principle", "Progression principle", "Individuality principle"],
      answer: 1,
      explanation: "The specificity principle (SAID – Specific Adaptation to Imposed Demands) means exercises should closely match the desired functional outcome.",
      difficulty: "easy"
    },
    {
      q: "Isometric exercise is most appropriately used in the early stages of rehabilitation when:",
      options: ["Full range of motion is available and pain-free", "Joint movement is contraindicated or very painful", "Maximum strength gains are the primary goal", "Cardiovascular endurance is the focus", "Plyometric power is required"],
      answer: 1,
      explanation: "Isometrics allow muscle activation without joint movement, making them useful when ROM is restricted or painful (e.g. post-op, acute inflammation).",
      difficulty: "medium"
    },
    {
      q: "Proprioceptive training is particularly important after which type of injury?",
      options: ["Muscle contusion only", "Ligamentous injury (e.g. ankle sprain, ACL)", "Simple skin laceration", "Uncomplicated fracture with no soft-tissue involvement", "Viral illness"],
      answer: 1,
      explanation: "Ligaments contain proprioceptors. After ligament injury, proprioception is often impaired and must be specifically retrained to reduce re-injury risk.",
      difficulty: "easy"
    }
  ],
  "ortho-pt": [
    {
      q: "After total hip replacement via a posterior approach, which movement is typically restricted in the early post-operative period?",
      options: ["Hip flexion > 90°, adduction and internal rotation", "Hip extension and external rotation only", "Full weight-bearing immediately with no restrictions", "Knee flexion", "Ankle movements"],
      answer: 0,
      explanation: "Posterior approach precautions classically include avoiding flexion > 90°, adduction past midline and internal rotation to reduce dislocation risk.",
      difficulty: "medium"
    },
    {
      q: "The Ottawa Ankle Rules are used to determine the need for X-ray after ankle injury. Pain in which zone plus inability to bear weight indicates imaging?",
      options: ["Only the medial malleolus", "Malleolar zone or midfoot zone with specific bone tenderness + inability to weight-bear", "Any ankle pain", "Only the Achilles tendon", "The calf only"],
      answer: 1,
      explanation: "Ottawa Ankle Rules: X-ray if pain in malleolar or midfoot zone AND bone tenderness at specific sites OR inability to bear weight both immediately and in ED.",
      difficulty: "medium"
    }
  ],
  "neuro-pt": [
    {
      q: "In stroke rehabilitation, which approach emphasises repetitive, task-specific practice of functional activities?",
      options: ["Classic Bobath only", "Motor Relearning / task-oriented approach", "Complete rest until tone normalises", "Only passive movements", "Restriction of the unaffected side permanently"],
      answer: 1,
      explanation: "Modern evidence supports intensive, repetitive, task-specific and goal-oriented practice (Motor Relearning Programme and similar approaches) rather than purely facilitatory techniques.",
      difficulty: "medium"
    },
    {
      q: "A patient with Parkinson’s disease typically shows which gait characteristic?",
      options: ["High-stepping foot drop gait", "Ataxic wide-based gait", "Shuffling, festinating gait with reduced arm swing", "Trendelenburg gait", "Circumduction only"],
      answer: 2,
      explanation: "Parkinsonian gait is typically short-stepped, shuffling, with festination, reduced arm swing, flexed posture and possible freezing.",
      difficulty: "easy"
    }
  ]
};

// ----- Past / Exam-style Questions -----
const pastQuestions = [
  {
    subject: "anatomy",
    year: "Sample",
    q: "A 28-year-old man sustains a stab wound to the left side of the neck in the posterior triangle. On examination he has difficulty elevating his left arm above the head and winging of the scapula. Which nerve is most likely injured?",
    options: ["Long thoracic nerve", "Spinal accessory nerve", "Dorsal scapular nerve", "Suprascapular nerve", "Axillary nerve"],
    answer: "Spinal accessory nerve (CN XI) – supplies trapezius (and sternocleidomastoid). Injury in the posterior triangle causes inability to shrug and difficulty with arm abduction above 90° / winging.",
    explanation: "Long thoracic nerve injury also causes winging but of a different type (serratus anterior) and is usually more lateral on the chest wall."
  },
  {
    subject: "physiology",
    year: "Sample",
    q: "Which of the following changes occurs in the renal handling of sodium during volume depletion?",
    options: [
      "Decreased aldosterone secretion",
      "Increased ANP secretion",
      "Increased fractional excretion of sodium",
      "Increased sodium reabsorption in the proximal tubule and collecting duct",
      "Decreased renin release"
    ],
    answer: "Increased sodium reabsorption in the proximal tubule (angiotensin II) and collecting duct (aldosterone).",
    explanation: "Volume depletion activates RAAS → ↑ aldosterone and angiotensin II → enhanced Na+ reabsorption and reduced FENa."
  },
  {
    subject: "pathology",
    year: "Sample",
    q: "A 55-year-old man who has smoked 40 pack-years presents with haemoptysis and weight loss. CT shows a central lung mass. Biopsy reveals small cells with scant cytoplasm, high nuclear-to-cytoplasmic ratio and nuclear moulding. What is the most likely diagnosis?",
    options: ["Squamous cell carcinoma", "Adenocarcinoma", "Small cell lung carcinoma", "Large cell carcinoma", "Carcinoid tumour"],
    answer: "Small cell lung carcinoma",
    explanation: "Classic histology of small cell lung cancer: small cells, high N/C ratio, nuclear moulding, associated with smoking and central location. Often has neuroendocrine features and early metastasis."
  },
  {
    subject: "medicine",
    year: "Sample",
    q: "A 70-year-old woman presents with progressive dyspnoea and orthopnoea. Examination reveals bilateral basal crackles, elevated JVP and bilateral ankle oedema. BNP is markedly elevated. Echocardiogram shows reduced ejection fraction. What is the most appropriate first-line pharmacological therapy?",
    options: [
      "Digoxin + loop diuretic only",
      "ACE inhibitor / ARNI + beta-blocker + MRA + SGLT2 inhibitor (once euvolemic)",
      "Calcium channel blocker",
      "High-dose aspirin alone",
      "Amiodarone"
    ],
    answer: "ACE inhibitor (or ARNI) + evidence-based beta-blocker + mineralocorticoid receptor antagonist + SGLT2 inhibitor (GDMT for HFrEF).",
    explanation: "Modern guideline-directed medical therapy for heart failure with reduced ejection fraction includes the four pillars once the patient is stable and euvolemic. Diuretics are used for fluid overload."
  },
  {
    subject: "surgery",
    year: "Sample",
    q: "A 45-year-old man presents with severe epigastric pain radiating to the back, nausea and vomiting. He drinks heavily. Serum amylase is 1200 U/L (normal <100). What is the most important initial management step?",
    options: [
      "Immediate laparotomy",
      "Aggressive IV fluid resuscitation and supportive care",
      "IV antibiotics routinely",
      "ERCP within 1 hour in all cases",
      "High-dose opioids only"
    ],
    answer: "Aggressive IV fluid resuscitation and supportive care (oxygen, analgesia, monitoring).",
    explanation: "Acute pancreatitis is managed supportively. Early aggressive fluid resuscitation is critical. Antibiotics are not routine unless infection is confirmed. ERCP is indicated in selected cases of gallstone pancreatitis with cholangitis."
  },
  {
    subject: "anatomy",
    year: "Sample",
    q: "Which structure is found in the free edge of the lesser omentum?",
    options: ["Hepatic artery, portal vein and common bile duct (portal triad)", "Inferior vena cava", "Aorta", "Superior mesenteric artery", "Splenic artery"],
    answer: "Portal triad (proper hepatic artery, portal vein, common bile duct) within the hepatoduodenal ligament (free edge of lesser omentum).",
    explanation: "This is the anatomical basis of the Pringle manoeuvre."
  },
  {
    subject: "physiology",
    year: "Sample",
    q: "Surfactant in the lung is produced by which cells?",
    options: ["Type I pneumocytes", "Type II pneumocytes", "Alveolar macrophages", "Clara (club) cells only", "Goblet cells"],
    answer: "Type II pneumocytes",
    explanation: "Type II pneumocytes synthesise and secrete pulmonary surfactant, which reduces surface tension and prevents alveolar collapse."
  },
  {
    subject: "medicine",
    year: "Sample",
    q: "A 22-year-old woman presents with polyuria, polydipsia and weight loss. Random blood glucose is 18 mmol/L and ketones are positive. What is the most likely diagnosis?",
    options: ["Type 2 diabetes mellitus", "Type 1 diabetes mellitus", "MODY", "Diabetes insipidus", "Stress hyperglycaemia"],
    answer: "Type 1 diabetes mellitus (new presentation with ketosis).",
    explanation: "Young patient with osmotic symptoms + hyperglycaemia + ketones is classic for type 1 diabetes / DKA spectrum."
  }
];

// ----- Flashcards -----
const flashcards = [
  { front: "Most common cause of community-acquired pneumonia?", back: "Streptococcus pneumoniae" },
  { front: "Virchow’s triad?", back: "Endothelial injury, stasis, hypercoagulability" },
  { front: "Nerve injured in midshaft humerus fracture?", back: "Radial nerve → wrist drop" },
  { front: "Rate-limiting enzyme of glycolysis?", back: "Phosphofructokinase-1 (PFK-1)" },
  { front: "S1 heart sound is caused by?", back: "Closure of mitral & tricuspid valves" },
  { front: "Courvoisier’s law?", back: "Palpable gallbladder + jaundice → unlikely gallstones (often malignancy)" },
  { front: "First-line pillars for HFrEF?", back: "ACEi/ARNI + β-blocker + MRA + SGLT2i" },
  { front: "Where does ADH act in the nephron?", back: "Collecting duct (aquaporin-2)" },
  { front: "Reed-Sternberg cells = ?", back: "Hodgkin lymphoma" },
  { front: "Warfarin mechanism?", back: "Vitamin K epoxide reductase inhibitor" },
  { front: "Ottawa Ankle Rules – when to X-ray?", back: "Pain in malleolar/midfoot zone + bone tenderness or inability to weight-bear" },
  { front: "Posterior hip replacement precautions?", back: "Avoid flexion >90°, adduction, internal rotation" },
  { front: "SAID principle means?", back: "Specific Adaptation to Imposed Demands (specificity of training)" },
  { front: "Energy systems order of recruitment?", back: "ATP-PC → glycolytic → aerobic" },
  { front: "Parkinsonian gait features?", back: "Shuffling, festination, reduced arm swing, flexed posture" },
  { front: "Diaphragm openings levels?", back: "T8 IVC, T10 oesophagus, T12 aorta" },
  { front: "Type of necrosis in brain infarct?", back: "Liquefactive necrosis" },
  { front: "First priority in DKA after ABC?", back: "IV fluid resuscitation (0.9% saline)" }
];

// OSCE / Practical checklists
const osceData = {
  history: {
    title: "History Taking",
    items: ["Introduce yourself & confirm patient identity", "Gain consent and ensure privacy", "Open question – allow patient to speak", "Presenting complaint – onset, character, time course", "Associated symptoms (systems review)", "Past medical & surgical history", "Drug history & allergies", "Family history", "Social history (occupation, smoking, alcohol, living)", "ICE – Ideas, Concerns, Expectations", "Summarise and check understanding", "Thank patient and explain next steps"]
  },
  cvs: {
    title: "Cardiovascular Examination",
    items: ["Wash hands, introduce, consent, expose appropriately", "General inspection (scars, dyspnoea, pallor)", "Hands – clubbing, capillary refill, splinter haemorrhages", "Pulse – rate, rhythm, character, radio-radial delay", "Blood pressure (both arms if indicated)", "JVP assessment", "Face – corneal arcus, xanthelasma, anaemia", "Inspect precordium (scars, visible pulsations)", "Palpate apex beat and heaves/thrills", "Auscultate 4 valves + carotids + axilla", "Peripheral pulses and oedema", "Thank patient, wash hands, present findings"]
  },
  resp: {
    title: "Respiratory Examination",
    items: ["Wash hands, introduce, consent, expose chest", "General inspection (respiratory rate, effort, cyanosis)", "Hands – clubbing, CO2 flap, tar staining", "Pulse and respiratory rate", "Trachea position and cricosternal distance", "Chest expansion (anterior & posterior)", "Percussion (compare sides)", "Tactile vocal fremitus / vocal resonance", "Auscultation – breath sounds & added sounds", "Lymph nodes if indicated", "Legs – oedema, DVT signs", "Thank patient and summarise"]
  },
  neuro: {
    title: "Neurological Examination (Upper + Lower)",
    items: ["Introduce, consent, screen for pain", "Inspection – wasting, fasciculations, posture", "Tone (upper and lower limbs)", "Power – MRC scale major muscle groups", "Reflexes – biceps, triceps, supinator, knee, ankle, plantars", "Coordination – finger-nose, heel-shin, rapid alternating", "Sensation – light touch, pinprick, proprioception, vibration", "Cranial nerves screen if indicated", "Gait and Romberg", "Thank patient and present"]
  },
  msk: {
    title: "MSK Assessment (Physiotherapy)",
    items: ["Subjective history – pain, function, aggravating/easing", "Red flag screening", "Observation – posture, alignment, swelling, muscle bulk", "Active range of motion (compare sides)", "Passive range of motion + end-feel", "Resisted isometric testing", "Special tests relevant to joint", "Palpation – joint lines, soft tissue, temperature", "Functional tests / gait if lower limb", "Neurological screen if indicated", "Clinical reasoning & hypothesis", "Treatment plan and education"]
  },
  gait: {
    title: "Gait Analysis (Physiotherapy)",
    items: ["Observe overall posture and assistive devices", "Identify gait cycle phases (stance / swing)", "Step length, stride length, cadence, base of support", "Foot clearance and initial contact pattern", "Knee and hip control in stance", "Pelvic and trunk movement", "Arm swing symmetry", "Pathological patterns (Trendelenburg, circumduction, festination…)", "Dual-task / speed variation if appropriate", "Document and plan intervention"]
  },
  transfer: {
    title: "Patient Transfer & Handling",
    items: ["Risk assess patient and environment", "Explain procedure and gain consent", "Prepare equipment (bed height, chair, gait belt)", "Correct therapist body mechanics", "Safe sit-to-stand technique", "Pivot or step transfer as appropriate", "Use of assistance / hoist if required", "Ensure patient safety and comfort throughout", "Reposition and leave call bell accessible", "Document and report any issues"]
  }
};

const PLANNER_DAYS = [
  { id: "mon", label: "Monday" },
  { id: "tue", label: "Tuesday" },
  { id: "wed", label: "Wednesday" },
  { id: "thu", label: "Thursday" },
  { id: "fri", label: "Friday" },
  { id: "sat", label: "Saturday" },
  { id: "sun", label: "Sunday" }
];

// ----- State -----
let currentQuiz = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let timerInterval = null;
let timerSeconds = 25 * 60;
let timerRunning = false;
let fcIndex = 0;
let fcFlipped = false;
let currentCategory = "all";
let currentYear = "all";
let searchQuery = "";

// Favourites helpers
function getFavourites() {
  return JSON.parse(localStorage.getItem("medlounge_favs") || "[]");
}
function saveFavourites(arr) {
  localStorage.setItem("medlounge_favs", JSON.stringify(arr));
}
function toggleFavourite(id, e) {
  if (e) e.stopPropagation();
  let favs = getFavourites();
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }
  saveFavourites(favs);
  applyFilters();
  renderFavouritesSection();
}

// ----- DOM Ready -----
document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
  renderFavouritesSection();
  setupEventListeners();
  loadProgress();
  initTheme();
  loadPastQuestions();
  initPlannerSelect();
  renderPlanner();
  showFlashcard();
});

// ----- Subjects filtering & rendering -----
function applyFilters() {
  let list = [...subjects];

  // Category
  if (currentCategory === "favourites") {
    const favs = getFavourites();
    list = list.filter(s => favs.includes(s.id));
  } else if (currentCategory !== "all") {
    list = list.filter(s => s.category.includes(currentCategory));
  }

  // Year
  if (currentYear !== "all") {
    const y = parseInt(currentYear);
    list = list.filter(s => s.year === y || (currentYear === "4" && s.year >= 4));
  }

  // Search
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    list = list.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.topics.some(t => t.toLowerCase().includes(q)) ||
      (s.notes && s.notes.some(n => n.toLowerCase().includes(q)))
    );
  }

  renderSubjectsList(list, "subjectsGrid");
}

function renderSubjectsList(list, gridId) {
  const grid = document.getElementById(gridId);
  const favs = getFavourites();

  if (!list.length) {
    grid.innerHTML = `<p class="empty-fav">No subjects match your filters.</p>`;
    return;
  }

  grid.innerHTML = list.map(s => {
    const isFav = favs.includes(s.id);
    return `
    <div class="subject-card" data-id="${s.id}">
      <button class="fav-btn ${isFav ? "active" : ""}" data-fav="${s.id}" title="Toggle favourite">${isFav ? "★" : "☆"}</button>
      <div class="icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <span class="year-badge">Year ${s.year}${s.year >= 4 ? "+" : ""}</span>
      <span class="tag">${s.tag}</span>
    </div>`;
  }).join("");

  grid.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("fav-btn")) return;
      openSubjectModal(card.dataset.id);
    });
  });
  grid.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => toggleFavourite(btn.dataset.fav, e));
  });
}

function renderFavouritesSection() {
  const favs = getFavourites();
  const list = subjects.filter(s => favs.includes(s.id));
  const grid = document.getElementById("favouritesGrid");
  if (!list.length) {
    grid.innerHTML = `<p class="empty-fav" id="emptyFavourites">No favourites yet. Go to Subjects and click the ★ on cards you want to save.</p>`;
  } else {
    renderSubjectsList(list, "favouritesGrid");
  }
}

function openSubjectModal(id) {
  const s = subjects.find(x => x.id === id);
  if (!s) return;
  const body = document.getElementById("modalBody");
  const notesHtml = (s.notes && s.notes.length)
    ? `<div class="notes-box"><h4>High-Yield Notes</h4><ul>${s.notes.map(n => `<li>${n}</li>`).join("")}</ul></div>`
    : "";
  body.innerHTML = `
    <h2>${s.icon} ${s.name}</h2>
    <p><strong>Year ${s.year}${s.year >= 4 ? "+" : ""}</strong> · ${s.tag}</p>
    <p>${s.overview}</p>
    <h3>Key Topics</h3>
    <ul>${s.topics.map(t => `<li>${t}</li>`).join("")}</ul>
    ${notesHtml}
    <h3>Study Tip</h3>
    <p>${s.tips}</p>
    <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:1rem">
      <button class="btn btn-primary" onclick="document.getElementById('quizSubject').value='${s.id}'; document.getElementById('subjectModal').classList.remove('open'); document.getElementById('quizzes').scrollIntoView({behavior:'smooth'})">Start Quiz</button>
      <button class="btn btn-secondary" onclick="window.print()">Print Notes</button>
    </div>
  `;
  document.getElementById("subjectModal").classList.add("open");
}

// ----- Quiz Logic -----
function startQuiz() {
  const subject = document.getElementById("quizSubject").value;
  const difficulty = document.getElementById("quizDifficulty").value;
  if (!subject) {
    alert("Please select a subject first.");
    return;
  }
  let pool = quizBank[subject] || [];
  if (difficulty !== "mixed") {
    pool = pool.filter(q => q.difficulty === difficulty);
  }
  if (pool.length === 0) {
    alert("No questions available for this combination. Try Mixed or another subject.");
    return;
  }
  // Shuffle and take up to 5
  currentQuiz = shuffle([...pool]).slice(0, Math.min(5, pool.length));
  currentIndex = 0;
  score = 0;
  answered = false;

  document.getElementById("quizContainer").classList.remove("hidden");
  document.getElementById("quizResults").classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = currentQuiz[currentIndex];
  document.getElementById("quizProgress").textContent = `Question ${currentIndex + 1} / ${currentQuiz.length}`;
  document.getElementById("quizScore").textContent = `Score: ${score}`;
  document.getElementById("quizQuestion").textContent = q.q;
  
  const opts = document.getElementById("quizOptions");
  opts.innerHTML = q.options.map((opt, i) => 
    `<button class="quiz-option" data-index="${i}">${String.fromCharCode(65 + i)}. ${opt}</button>`
  ).join("");

  opts.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => selectAnswer(parseInt(btn.dataset.index)));
  });

  document.getElementById("quizFeedback").classList.add("hidden");
  document.getElementById("nextQuestionBtn").disabled = true;
  document.getElementById("finishQuizBtn").classList.add("hidden");
  document.getElementById("nextQuestionBtn").classList.remove("hidden");
}

function selectAnswer(selected) {
  if (answered) return;
  answered = true;
  const q = currentQuiz[currentIndex];
  const options = document.querySelectorAll(".quiz-option");
  
  options.forEach((btn, i) => {
    btn.classList.add("disabled");
    if (i === q.answer) btn.classList.add("correct");
    if (i === selected && selected !== q.answer) btn.classList.add("wrong");
  });

  const feedback = document.getElementById("quizFeedback");
  feedback.classList.remove("hidden", "correct", "wrong");
  if (selected === q.answer) {
    score++;
    feedback.classList.add("correct");
    feedback.innerHTML = `<strong>Correct!</strong> ${q.explanation}`;
  } else {
    feedback.classList.add("wrong");
    feedback.innerHTML = `<strong>Incorrect.</strong> The answer is <strong>${q.options[q.answer]}</strong>. ${q.explanation}`;
  }

  document.getElementById("quizScore").textContent = `Score: ${score}`;
  document.getElementById("nextQuestionBtn").disabled = false;

  if (currentIndex === currentQuiz.length - 1) {
    document.getElementById("nextQuestionBtn").classList.add("hidden");
    document.getElementById("finishQuizBtn").classList.remove("hidden");
  }

  // Update progress
  updateProgress(1, selected === q.answer ? 1 : 0);
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuiz.length) {
    showQuestion();
  }
}

function finishQuiz() {
  document.getElementById("quizContainer").classList.add("hidden");
  const results = document.getElementById("quizResults");
  results.classList.remove("hidden");
  const pct = Math.round((score / currentQuiz.length) * 100);
  document.getElementById("finalScore").textContent = `${score} / ${currentQuiz.length} (${pct}%)`;
  let msg = "";
  if (pct >= 80) msg = "Excellent! Strong knowledge in this area.";
  else if (pct >= 60) msg = "Good effort. Review the explanations and try again.";
  else msg = "Keep practising — active recall will improve your score.";
  document.getElementById("resultsMessage").textContent = msg;
  updateProgress(0, 0, 1); // count quiz completed
}

// ----- Past Questions (expandable answers) -----
function loadPastQuestions() {
  const subj = document.getElementById("pastqSubject").value;
  const list = document.getElementById("pastqsList");
  const filtered = subj === "all" ? pastQuestions : pastQuestions.filter(p => p.subject === subj);
  
  if (filtered.length === 0) {
    list.innerHTML = "<p style='text-align:center;color:var(--text-muted)'>No sample questions for this filter yet.</p>";
    return;
  }

  list.innerHTML = filtered.map((p, idx) => `
    <div class="pastq-card" id="pastq-${idx}">
      <div class="meta">${p.subject.toUpperCase()} • ${p.year}</div>
      <div class="question">${p.q}</div>
      <ul class="options">
        ${p.options.map((o, i) => `<li>${String.fromCharCode(65 + i)}. ${o}</li>`).join("")}
      </ul>
      <button class="btn btn-sm btn-secondary show-answer-btn" data-idx="${idx}">Show Answer</button>
      <div class="answer"><strong>Answer:</strong> ${p.answer}<br><em>${p.explanation || ""}</em></div>
    </div>
  `).join("");

  list.querySelectorAll(".show-answer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = document.getElementById("pastq-" + btn.dataset.idx);
      card.classList.add("revealed");
      btn.style.display = "none";
    });
  });
}

// ----- Pomodoro -----
function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60).toString().padStart(2, "0");
  const s = (timerSeconds % 60).toString().padStart(2, "0");
  document.getElementById("timerDisplay").textContent = `${m}:${s}`;
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      timerRunning = false;
      alert("Time’s up! Take a short break.");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  pauseTimer();
  const active = document.querySelector(".mode-btn.active");
  timerSeconds = parseInt(active.dataset.min) * 60;
  updateTimerDisplay();
}

// ----- Spaced-Repetition Flashcards -----
function getSrsData() {
  return JSON.parse(localStorage.getItem("medlounge_srs") || "{}");
}
function saveSrsData(data) {
  localStorage.setItem("medlounge_srs", JSON.stringify(data));
}
function showFlashcard() {
  const card = flashcards[fcIndex];
  document.getElementById("fcFront").textContent = card.front;
  document.getElementById("fcBack").textContent = card.back;
  document.getElementById("flashcard").classList.remove("flipped");
  fcFlipped = false;
  const srs = getSrsData()[fcIndex];
  const hint = document.getElementById("srsHint");
  if (hint) {
    hint.textContent = srs
      ? `Last rating: ${srs.rating} · Next review weight: ${srs.interval || 1}`
      : "Rate after flipping to schedule the next review.";
  }
}
function flipCard() {
  document.getElementById("flashcard").classList.toggle("flipped");
  fcFlipped = !fcFlipped;
}
function rateCard(rating) {
  const data = getSrsData();
  const prev = data[fcIndex] || { interval: 1 };
  let interval = prev.interval || 1;
  if (rating === "again") interval = 1;
  else if (rating === "hard") interval = Math.max(1, Math.round(interval * 1.2));
  else if (rating === "good") interval = Math.round(interval * 2);
  else if (rating === "easy") interval = Math.round(interval * 3);
  data[fcIndex] = { rating, interval, ts: Date.now() };
  saveSrsData(data);
  // Prefer cards due soon (simple weight)
  fcIndex = (fcIndex + Math.max(1, interval > 3 ? 2 : 1)) % flashcards.length;
  showFlashcard();
}

// ----- OSCE -----
function loadOsceChecklist() {
  const key = document.getElementById("osceSelect").value;
  const data = osceData[key];
  const box = document.getElementById("osceChecklist");
  if (!data) return;
  const saved = JSON.parse(localStorage.getItem("medlounge_osce_" + key) || "[]");
  box.innerHTML = `
    <div class="osce-progress" id="osceProgress">0 / ${data.items.length} completed</div>
    <h3 style="margin-bottom:0.8rem">${data.title}</h3>
    ${data.items.map((item, i) => `
      <label class="osce-item ${saved.includes(i) ? "done" : ""}" data-i="${i}">
        <input type="checkbox" ${saved.includes(i) ? "checked" : ""}>
        <span>${item}</span>
      </label>
    `).join("")}
  `;
  const updateProgress = () => {
    const checked = [...box.querySelectorAll("input:checked")].length;
    document.getElementById("osceProgress").textContent = `${checked} / ${data.items.length} completed`;
    const indices = [...box.querySelectorAll("input:checked")].map(inp => +inp.closest(".osce-item").dataset.i);
    localStorage.setItem("medlounge_osce_" + key, JSON.stringify(indices));
  };
  box.querySelectorAll(".osce-item").forEach(lab => {
    lab.addEventListener("change", () => {
      lab.classList.toggle("done", lab.querySelector("input").checked);
      updateProgress();
    });
  });
  updateProgress();
}
function resetOsce() {
  const key = document.getElementById("osceSelect").value;
  localStorage.removeItem("medlounge_osce_" + key);
  loadOsceChecklist();
}

// ----- Planner -----
function getPlanner() {
  return JSON.parse(localStorage.getItem("medlounge_planner") || "{}");
}
function savePlanner(data) {
  localStorage.setItem("medlounge_planner", JSON.stringify(data));
}
function renderPlanner() {
  const data = getPlanner();
  const grid = document.getElementById("plannerGrid");
  if (!grid) return;
  grid.innerHTML = PLANNER_DAYS.map(d => {
    const items = data[d.id] || [];
    return `
      <div class="planner-day" data-day="${d.id}">
        <h4>${d.label}</h4>
        ${items.length ? items.map((it, i) => `
          <div class="plan-item">
            <span>${it.subject}${it.note ? " – " + it.note : ""}</span>
            <button data-day="${d.id}" data-i="${i}" title="Remove">×</button>
          </div>
        `).join("") : "<p style='font-size:0.8rem;color:var(--text-muted)'>Empty</p>"}
      </div>`;
  }).join("");
  grid.querySelectorAll(".plan-item button").forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.day;
      const i = +btn.dataset.i;
      const data = getPlanner();
      data[day].splice(i, 1);
      savePlanner(data);
      renderPlanner();
    });
  });
}
function addPlanItem() {
  const subjSel = document.getElementById("plannerSubject");
  const day = document.getElementById("plannerDay").value;
  const note = document.getElementById("plannerNote").value.trim();
  const subject = subjSel.options[subjSel.selectedIndex].text;
  if (!subject) return;
  const data = getPlanner();
  if (!data[day]) data[day] = [];
  data[day].push({ subject, note });
  savePlanner(data);
  document.getElementById("plannerNote").value = "";
  renderPlanner();
}
function initPlannerSelect() {
  const sel = document.getElementById("plannerSubject");
  if (!sel) return;
  sel.innerHTML = subjects.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
}

// ----- Export / Import -----
function exportData() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    progress: JSON.parse(localStorage.getItem("medlounge_progress") || "{}"),
    favourites: getFavourites(),
    srs: getSrsData(),
    planner: getPlanner(),
    theme: localStorage.getItem("medlounge_theme") || "light"
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `medlounge-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
function importData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (data.progress) localStorage.setItem("medlounge_progress", JSON.stringify(data.progress));
      if (data.favourites) saveFavourites(data.favourites);
      if (data.srs) saveSrsData(data.srs);
      if (data.planner) savePlanner(data.planner);
      if (data.theme) localStorage.setItem("medlounge_theme", data.theme);
      loadProgress();
      applyFilters();
      renderFavouritesSection();
      renderPlanner();
      initTheme();
      alert("Data imported successfully!");
    } catch {
      alert("Invalid backup file.");
    }
  };
  reader.readAsText(file);
}

// ----- Daily Challenge -----
function loadDailyQuestion() {
  const allQ = Object.values(quizBank).flat();
  const q = allQ[Math.floor(Math.random() * allQ.length)];
  const container = document.getElementById("dailyChallenge");
  container.innerHTML = `
    <p style="font-weight:500;margin-bottom:0.8rem">${q.q}</p>
    <div style="display:flex;flex-direction:column;gap:0.4rem;margin-bottom:0.8rem">
      ${q.options.map((o, i) => `<button class="btn btn-sm btn-secondary daily-opt" data-i="${i}">${o}</button>`).join("")}
    </div>
    <div id="dailyFeedback" class="hidden" style="font-size:0.9rem;margin-top:0.5rem"></div>
  `;
  container.querySelectorAll(".daily-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = parseInt(btn.dataset.i);
      const fb = document.getElementById("dailyFeedback");
      fb.classList.remove("hidden");
      if (selected === q.answer) {
        fb.innerHTML = `<span style="color:var(--success)"><strong>Correct!</strong> ${q.explanation}</span>`;
      } else {
        fb.innerHTML = `<span style="color:var(--error)"><strong>Not quite.</strong> Answer: ${q.options[q.answer]}. ${q.explanation}</span>`;
      }
      container.querySelectorAll(".daily-opt").forEach(b => b.disabled = true);
    });
  });
}

// ----- Progress (localStorage) -----
function loadProgress() {
  const data = JSON.parse(localStorage.getItem("medlounge_progress") || '{"quizzes":0,"answered":0,"correct":0}');
  document.getElementById("quizCount").textContent = data.quizzes;
  document.getElementById("qCount").textContent = data.answered;
  const rate = data.answered ? Math.round((data.correct / data.answered) * 100) + "%" : "—";
  document.getElementById("correctRate").textContent = rate;
}

function updateProgress(answeredInc = 0, correctInc = 0, quizInc = 0) {
  const data = JSON.parse(localStorage.getItem("medlounge_progress") || '{"quizzes":0,"answered":0,"correct":0}');
  data.answered += answeredInc;
  data.correct += correctInc;
  data.quizzes += quizInc;
  localStorage.setItem("medlounge_progress", JSON.stringify(data));
  loadProgress();
}

function resetProgress() {
  if (confirm("Reset all progress stats?")) {
    localStorage.removeItem("medlounge_progress");
    loadProgress();
  }
}

// ----- Theme -----
function initTheme() {
  const saved = localStorage.getItem("medlounge_theme") || "light";
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("themeToggle").textContent = "☀️";
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("medlounge_theme", "light");
    document.getElementById("themeToggle").textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("medlounge_theme", "dark");
    document.getElementById("themeToggle").textContent = "☀️";
  }
}

// ----- Helpers -----
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ----- Event Listeners -----
function setupEventListeners() {
  // Nav
  document.getElementById("navToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
  });

  // Theme
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  // Category filters
  document.querySelectorAll("#categoryFilters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#categoryFilters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  // Year filters
  document.querySelectorAll("#yearFilters .year-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#yearFilters .year-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentYear = btn.dataset.year;
      applyFilters();
    });
  });

  // Search
  const searchInput = document.getElementById("subjectSearch");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value;
      applyFilters();
    });
  }

  // Modal close
  document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("subjectModal").classList.remove("open");
  });
  document.getElementById("subjectModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("subjectModal")) {
      document.getElementById("subjectModal").classList.remove("open");
    }
  });

  // Quiz
  document.getElementById("startQuizBtn").addEventListener("click", startQuiz);
  document.getElementById("nextQuestionBtn").addEventListener("click", nextQuestion);
  document.getElementById("finishQuizBtn").addEventListener("click", finishQuiz);
  document.getElementById("retryQuizBtn").addEventListener("click", () => {
    document.getElementById("quizResults").classList.add("hidden");
    document.getElementById("quizContainer").classList.add("hidden");
  });

  // PastQs
  document.getElementById("loadPastQs").addEventListener("click", loadPastQuestions);

  // Timer
  document.getElementById("timerStart").addEventListener("click", startTimer);
  document.getElementById("timerPause").addEventListener("click", pauseTimer);
  document.getElementById("timerReset").addEventListener("click", resetTimer);
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      resetTimer();
    });
  });

  // Flashcards (SRS)
  document.getElementById("fcFlip").addEventListener("click", flipCard);
  const againBtn = document.getElementById("fcAgain");
  if (againBtn) {
    againBtn.addEventListener("click", () => rateCard("again"));
    document.getElementById("fcHard").addEventListener("click", () => rateCard("hard"));
    document.getElementById("fcGood").addEventListener("click", () => rateCard("good"));
    document.getElementById("fcEasy").addEventListener("click", () => rateCard("easy"));
  }

  // Daily
  document.getElementById("loadDaily").addEventListener("click", loadDailyQuestion);

  // Progress + Sync
  document.getElementById("resetProgress").addEventListener("click", resetProgress);
  document.getElementById("exportData").addEventListener("click", exportData);
  document.getElementById("importData").addEventListener("click", () => document.getElementById("importFile").click());
  document.getElementById("importFile").addEventListener("change", (e) => {
    if (e.target.files[0]) importData(e.target.files[0]);
  });

  // OSCE
  document.getElementById("loadOsce").addEventListener("click", loadOsceChecklist);
  document.getElementById("resetOsce").addEventListener("click", resetOsce);

  // Planner
  document.getElementById("addPlanItem").addEventListener("click", addPlanItem);
  document.getElementById("clearPlanner").addEventListener("click", () => {
    if (confirm("Clear the entire week?")) {
      savePlanner({});
      renderPlanner();
    }
  });
}
