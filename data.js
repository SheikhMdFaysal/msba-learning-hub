/* MSBA Learning Hub — curated knowledge base
   Built from your MSU MSBA course folders + standard analytics fundamentals.
   Each course block: summary, key takeaways, concepts, formulas, interview Q&A, resources.
*/
window.MSBA_DATA = {
  user: {
    name: "Sheikh Md Faysal",
    program: "MSBA — Montclair State University",
    tagline: "Job-prep cockpit · Fundamentals, fast"
  },
  about: {
    fullName: "Sheikh Md Faysal",
    role: "Master of Science in Business Analytics",
    school: "Montclair State University · Feliciano School of Business",
    yearCompleted: "2026",
    initials: "SF",
    photo: "profile.jpg", // drop a profile.jpg into this folder and it will auto-load
    bio: "Data-driven problem solver with an MSBA from MSU. Built this platform as a personal study cockpit to compress 10 courses of MSBA material into something I can revise in an evening and walk into any analytics interview confident.",
    capstone: "Enterprise AI Security — LLM Red-Teaming Platform",
    skills: ["Python · pandas · scikit-learn", "SQL & Data Warehousing", "Statistics & Hypothesis Testing", "Machine Learning & Deep Learning", "Optimization (LP / MIP)", "Process Mining", "AI Security · LLM Red-Teaming"],
    social: [
      {label:"LinkedIn", icon:"💼", url:"https://www.linkedin.com/"},
      {label:"GitHub",  icon:"💻", url:"https://github.com/"},
      {label:"Email",   icon:"✉️", url:"mailto:you@example.com"}
    ]
  },
  roadmap: [
    {step:"01", title:"Foundations", desc:"Math, stats basics, programming literacy.", icon:"🧱", color:"from-sky-500 to-cyan-400", courses:["stats-foundation","python"]},
    {step:"02", title:"Data Wrangling", desc:"SQL, pandas, joins, cleaning, profiling.", icon:"🧹", color:"from-cyan-500 to-teal-500", courses:["info574","python"]},
    {step:"03", title:"Applied Statistics", desc:"Hypothesis testing, ANOVA, regression.", icon:"📈", color:"from-indigo-500 to-blue-500", courses:["applied-stats"]},
    {step:"04", title:"Data Mining & ML", desc:"Classification, clustering, ensembles.", icon:"⛏", color:"from-emerald-500 to-teal-500", courses:["data-mining","adv-dm"]},
    {step:"05", title:"Deep Learning & AI", desc:"Neural nets, CNN/RNN, GenAI patterns.", icon:"🧬", color:"from-fuchsia-500 to-pink-500", courses:["deep-learning","ai-business"]},
    {step:"06", title:"Decision Science", desc:"Optimization, process mining, dashboards.", icon:"⚙", color:"from-violet-500 to-indigo-500", courses:["optimization","process-mining"]},
    {step:"07", title:"Visualize & Communicate", desc:"Charts, dashboards, storytelling with data.", icon:"🎨", color:"from-pink-500 to-orange-400", courses:["info584","ai-business","info588"]},
    {step:"08", title:"Portfolio & Capstone", desc:"End-to-end project, GitHub, case write-ups.", icon:"📁", color:"from-rose-500 to-red-500", courses:["capstone","info588"]},
    {step:"09", title:"Data / Business Analyst", desc:"Interview, land the role, keep learning.", icon:"🎯", color:"from-emerald-500 to-green-400", courses:[]}
  ],
  howToUse: [
    {icon:"📚", title:"Browse Courses", body:"12 course cards with Quick Read, Concepts, Formulas, Interview Q&A, and links to your original folders.", route:"library"},
    {icon:"🎤", title:"Interview Mode", body:"Flip-card flashcards with filters by course and difficulty. Drill 60+ curated questions until it's reflex.", route:"interview"},
    {icon:"🧪", title:"Test Your Knowledge", body:"Take a quiz: instant feedback, score, and explanations for every answer. Pick a course or take the mixed challenge.", route:"quiz"},
    {icon:"🌐", title:"Mind Map", body:"See the whole MSBA toolkit as one picture. Click a node to dive into that course.", route:"mindmap"},
    {icon:"📖", title:"Glossary", body:"30+ analytics terms defined in plain English — searchable.", route:"glossary"},
    {icon:"👤", title:"About the Builder", body:"Meet the person behind this platform and the capstone project.", route:"about"}
  ],
  basePath: "..", // folder one level up = "MSBA at MSU"
  courses: [
    {
      id: "stats-foundation",
      code: "Foundation",
      name: "Basic Statistics Foundation",
      icon: "Σ",
      color: "from-sky-500 to-cyan-400",
      folder: "Basic Statistics Foundation Module",
      summary: "Descriptive + inferential statistics that every business analyst must own. Sampling, distributions, CLT, confidence intervals, hypothesis testing.",
      keyTakeaways: [
        "Mean is sensitive to outliers; median is robust. Always inspect both with a histogram before reporting.",
        "Standard deviation has the same unit as the data; variance is squared units.",
        "Central Limit Theorem: sample means are approximately normal for n ≥ 30, regardless of population shape.",
        "A 95% confidence interval means: if we repeated sampling many times, ~95% of such intervals would contain the true parameter — NOT a 95% probability the parameter is in this interval.",
        "p-value is the probability of seeing data this extreme (or more) IF the null hypothesis were true. It is not the probability the null is true.",
        "Effect size matters as much as significance — a tiny effect can be 'significant' with enough data."
      ],
      concepts: [
        {title:"Levels of measurement", body:"Nominal, Ordinal, Interval, Ratio — determines which stats and charts are valid (you can't average a zip code)."},
        {title:"Distribution shapes", body:"Symmetric, skewed (left/right), bimodal. Skew drives mean vs median gap. Kurtosis = tail heaviness."},
        {title:"Sampling methods", body:"Simple random, stratified, cluster, systematic. Stratified protects against under-represented segments."},
        {title:"Standard error", body:"SE = σ / √n. Drives CI width. Halving SE requires 4× the sample."},
        {title:"Type I / II errors", body:"α = false positive rate, β = false negative rate. Power = 1 − β. Increase n to raise power without inflating α."}
      ],
      formulas: [
        {name:"Sample mean", expr:"x̄ = (Σ xᵢ) / n", when:"Center of a numeric variable."},
        {name:"Sample variance", expr:"s² = Σ(xᵢ − x̄)² / (n − 1)", when:"Spread; n−1 corrects bias."},
        {name:"Z-score", expr:"z = (x − μ) / σ", when:"Standardize / detect outliers (|z|>3)."},
        {name:"Confidence interval (mean, σ known)", expr:"x̄ ± z* · (σ / √n)", when:"Estimate a population mean."},
        {name:"t-statistic", expr:"t = (x̄ − μ₀) / (s / √n)", when:"One-sample t-test when σ unknown."}
      ],
      interview: [
        {q:"Explain the Central Limit Theorem in business terms.", a:"With a large enough sample (n≥30), the average of any business metric (revenue per customer, support handle time) is approximately normal — so we can build confidence intervals and run tests even when the underlying data is skewed.", level:"Basic"},
        {q:"What's the difference between standard deviation and standard error?", a:"Standard deviation describes spread of individual observations. Standard error describes spread of the sample-mean estimate; it shrinks as n grows.", level:"Basic"},
        {q:"You see p = 0.03. Does that mean the result is important?", a:"No — p<0.05 only means it's unlikely under the null. Always report effect size and confidence interval; with very large n, trivial differences become 'significant'.", level:"Intermediate"},
        {q:"When would you use median instead of mean?", a:"When the distribution is skewed or has outliers — e.g., income, deal size, customer LTV. The mean gets pulled by the long tail.", level:"Basic"}
      ]
    },

    {
      id: "applied-stats",
      code: "INFO589",
      name: "Applied Statistics for Business Analytics",
      icon: "📊",
      color: "from-indigo-500 to-blue-500",
      folder: "Info 589_Applied Statistics for Business Analytics",
      summary: "Hypothesis testing, ANOVA, regression, chi-square — the inferential toolkit applied to real business decisions.",
      keyTakeaways: [
        "Always state H₀ and H₁ in business language BEFORE looking at the data.",
        "One-tail vs two-tail: use one-tail only when the direction is justified a priori (e.g., 'new design ≥ old').",
        "ANOVA tests whether at least one group mean differs — follow with Tukey HSD to find which.",
        "Chi-square independence: are two categorical variables related? Expected counts must be ≥5 per cell.",
        "Regression coefficients = expected change in Y for a 1-unit change in X, holding others constant.",
        "Check residuals: linearity, homoscedasticity, normality, independence. If they fail, your inference is broken."
      ],
      concepts: [
        {title:"Five-step hypothesis testing", body:"State hypotheses → choose α → compute test statistic → find p-value or critical value → decide and translate back to business."},
        {title:"t-tests", body:"One-sample, independent two-sample, paired. Paired is more powerful when units are matched (before/after)."},
        {title:"ANOVA (one-way)", body:"F = MS_between / MS_within. Compares ≥3 group means simultaneously while controlling family-wise error."},
        {title:"Chi-square", body:"Goodness-of-fit vs Independence. Tests categorical relationships using observed vs expected counts."},
        {title:"Linear regression assumptions", body:"LINE: Linearity, Independence, Normality of residuals, Equal variance."},
        {title:"Multicollinearity", body:"VIF > 5 (strict) or 10 (lenient) suggests predictor redundancy — coefficients become unstable."}
      ],
      formulas: [
        {name:"Two-sample t (equal var)", expr:"t = (x̄₁ − x̄₂) / sp√(1/n₁ + 1/n₂)", when:"Compare two group means."},
        {name:"F-statistic (ANOVA)", expr:"F = MSB / MSW", when:"Compare ≥3 group means."},
        {name:"Chi-square", expr:"χ² = Σ (O − E)² / E", when:"Independence or goodness-of-fit for categories."},
        {name:"OLS estimator", expr:"β̂ = (XᵀX)⁻¹ XᵀY", when:"Closed-form regression solution."},
        {name:"R²", expr:"1 − SSres / SStot", when:"Proportion of variance explained."}
      ],
      interview: [
        {q:"How do you choose between a t-test and a z-test?", a:"Use z if the population σ is known (rare in business). Use t when σ is estimated from the sample — which is almost always.", level:"Basic"},
        {q:"What does R² actually tell you, and what does it NOT tell you?", a:"It tells you the fraction of Y's variance explained by the model. It does NOT prove causation, it does NOT mean the model predicts well out-of-sample, and it can be inflated by adding noisy predictors (use adjusted R²).", level:"Intermediate"},
        {q:"Your A/B test shows a 0.2% lift, p = 0.001, n = 5M. Do you ship it?", a:"Significance ≠ value. Compare lift to deployment cost and minimum detectable effect agreed upfront. With huge n, tiny lifts are 'significant' — decide on business ROI, not stars.", level:"Advanced"},
        {q:"How do you detect and fix heteroscedasticity?", a:"Plot residuals vs fitted — funnel shape signals it. Fix with log-transform of Y, weighted least squares, or robust (heteroscedasticity-consistent) standard errors.", level:"Advanced"}
      ]
    },

    {
      id: "data-mining",
      code: "INFO583",
      name: "Data Mining",
      icon: "⛏",
      color: "from-emerald-500 to-teal-500",
      folder: "Data Mining Course",
      summary: "End-to-end DM lifecycle: preprocessing, EDA, clustering, classification (logistic, naive Bayes, decision trees), and predictive modeling.",
      keyTakeaways: [
        "CRISP-DM: Business Understanding → Data Understanding → Prep → Modeling → Evaluation → Deployment. Most projects fail at step 1, not step 4.",
        "Garbage in, garbage out: ~70-80% of effort is data cleaning and feature engineering.",
        "Always split BEFORE preprocessing fitted parameters (scalers, encoders) to avoid data leakage.",
        "Accuracy is misleading on imbalanced data — use precision, recall, F1, ROC-AUC, PR-AUC.",
        "Choose the model that matches the decision cost: false positives vs false negatives have different business costs.",
        "Interpretability vs accuracy is a real tradeoff — regulators often demand the former."
      ],
      concepts: [
        {title:"EDA checklist", body:"Shape, dtypes, missing %, distributions, outliers, target balance, pairwise correlations, leakage screen."},
        {title:"Missing data", body:"MCAR / MAR / MNAR. Strategies: drop, mean/median impute, KNN impute, model-based, indicator-flag-then-impute."},
        {title:"K-Means", body:"Minimizes within-cluster SSE. Sensitive to scale and initialization. Choose k via elbow + silhouette."},
        {title:"Logistic regression", body:"Log-odds linear in X. Output is probability. Coefficients = log-odds ratios. Highly interpretable."},
        {title:"Naive Bayes", body:"Assumes feature independence given class. Surprisingly strong baseline for text/spam."},
        {title:"Decision trees", body:"Split by information gain or Gini. Prone to overfitting — control depth, min_samples_leaf, or use ensembles."},
        {title:"Class imbalance", body:"SMOTE, class weights, threshold tuning, or use AUC-PR. Don't blindly resample — it can leak."}
      ],
      formulas: [
        {name:"Gini impurity", expr:"G = 1 − Σ pᵢ²", when:"Split quality in a tree node."},
        {name:"Information gain", expr:"IG = H(parent) − Σ (nₖ/n)·H(childₖ)", when:"Pick the best split."},
        {name:"Logistic sigmoid", expr:"P(y=1|x) = 1 / (1 + e^−(β₀+βᵀx))", when:"Map linear score to probability."},
        {name:"F1", expr:"2·P·R / (P + R)", when:"Balance precision & recall, esp. imbalanced data."},
        {name:"Silhouette", expr:"s = (b − a) / max(a, b)", when:"Evaluate clustering quality, k selection."}
      ],
      interview: [
        {q:"Walk me through CRISP-DM with a real example.", a:"E.g., churn: define what 'churn' means to the business (Business Understanding), pull subscription + usage tables (Data Understanding), build features like 30-day login count, handle missings (Prep), train logistic + GBM (Modeling), compare on AUC-PR + lift at top decile (Evaluation), wrap in a scoring job + monitor drift (Deployment).", level:"Basic"},
        {q:"Your model gets 95% accuracy on fraud detection. Are you happy?", a:"Probably not — if 5% is the fraud rate, predicting 'not fraud' for everyone gives 95%. Look at recall on the positive class, precision-recall AUC, and the cost of a missed fraud vs a false alarm.", level:"Intermediate"},
        {q:"How do you avoid data leakage?", a:"Split first, then fit scalers/encoders/imputers on train only. Never use future information in features. For time series, use temporal splits, not random. Audit each feature: 'could this be known at prediction time?'", level:"Intermediate"},
        {q:"Logistic vs decision tree — when and why?", a:"Logistic when relationships are roughly linear, you need calibrated probabilities, and interpretability (coefficients) matters. Tree when interactions and nonlinearities dominate, and you can tolerate less calibration.", level:"Basic"}
      ]
    },

    {
      id: "adv-dm",
      code: "INFO585",
      name: "Advanced Data Mining for Business",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      folder: "Avance Data Mining",
      summary: "Ensembles, regularization, dimensionality reduction, association rules, text mining, model selection — the practitioner toolkit.",
      keyTakeaways: [
        "Ensembles (Random Forest, Gradient Boosting, XGBoost, LightGBM) usually beat single models — at the cost of interpretability.",
        "Regularization (L1/L2) controls overfitting; L1 (Lasso) does feature selection by zeroing coefficients.",
        "Cross-validation > a single hold-out. Use stratified k-fold for classification, time-series CV for temporal data.",
        "Bias–variance: simple models underfit, complex models overfit. Tune complexity via validation.",
        "PCA = unsupervised, captures variance, components are uninterpretable linear combinations.",
        "Association rules: Support (frequency), Confidence (P(B|A)), Lift (independence ratio > 1 means real association)."
      ],
      concepts: [
        {title:"Bagging vs Boosting", body:"Bagging trains independent models on bootstrap samples in parallel (RF). Boosting trains sequentially, each model correcting prior errors (GBM, XGBoost)."},
        {title:"Random Forest", body:"Many decorrelated trees + feature subsampling. Robust, low tuning, gives feature importance (impurity or permutation)."},
        {title:"Gradient Boosting", body:"Fits residuals stage-by-stage via gradient descent in function space. XGBoost/LightGBM add regularization, smart split-finding, and speed."},
        {title:"Regularization", body:"L2 (Ridge) shrinks coefficients smoothly. L1 (Lasso) shrinks and selects. Elastic Net mixes both."},
        {title:"PCA", body:"Project onto orthogonal axes of max variance. Standardize first. Keep enough components for ~80–95% variance."},
        {title:"Association rules", body:"Apriori / FP-Growth. Use Lift to filter trivial rules (lift>1 = positive association)."},
        {title:"Text mining basics", body:"Tokenize → lowercase → stopword removal → stem/lemmatize → vectorize (BoW, TF-IDF, embeddings)."}
      ],
      formulas: [
        {name:"L2 (Ridge)", expr:"min ‖y − Xβ‖² + λ‖β‖²", when:"Shrink coefficients; handle collinearity."},
        {name:"L1 (Lasso)", expr:"min ‖y − Xβ‖² + λ‖β‖₁", when:"Sparse models / feature selection."},
        {name:"Lift", expr:"Lift(A→B) = P(B|A) / P(B)", when:"Filter market-basket rules. >1 means real association."},
        {name:"Boosting update", expr:"Fₘ(x) = Fₘ₋₁(x) + ν · hₘ(x)", when:"Learning rate ν trades speed for generalization."},
        {name:"TF-IDF", expr:"tf(t,d) · log(N / df(t))", when:"Down-weight common words in text features."}
      ],
      interview: [
        {q:"When would you use Random Forest vs XGBoost?", a:"RF for a strong, low-tuning baseline with robust feature importance. XGBoost when you need top accuracy and have time to tune learning rate, depth, regularization, and subsampling. RF parallelizes cleanly; boosting is sequential.", level:"Intermediate"},
        {q:"Explain the bias-variance tradeoff to a PM.", a:"Bias = systematic error from too simple a model (misses patterns). Variance = sensitivity to the training sample (memorizes noise). You want the sweet spot — measured by validation error, not training error.", level:"Basic"},
        {q:"Why standardize before PCA?", a:"PCA maximizes variance; without scaling, a feature in dollars dominates one in percentages just because of unit size, not signal.", level:"Intermediate"},
        {q:"You have 5000 features and 200 rows. What do you do?", a:"Regularize aggressively (Lasso/Elastic Net), reduce dim (PCA/feature selection), or use models that handle high-d (gradient boosting with strict reg), and never trust a single split — use CV with care for leakage.", level:"Advanced"}
      ]
    },

    {
      id: "deep-learning",
      code: "DL",
      name: "Deep Learning",
      icon: "🧬",
      color: "from-fuchsia-500 to-rose-500",
      folder: "Deep Learning",
      summary: "Neural networks from dense layers to CNNs, RNNs/LSTMs, and GANs. Training mechanics: backprop, optimizers, regularization, transfer learning.",
      keyTakeaways: [
        "A neural net is just chained affine transforms + nonlinearities, trained by backprop = chain rule + gradient descent.",
        "Use ReLU as default activation; sigmoid/softmax only at outputs.",
        "Adam is the default optimizer (lr ≈ 1e-3). Use lr scheduling and early stopping.",
        "Dropout, batch norm, weight decay, data augmentation = your regularization toolkit.",
        "CNNs share weights across spatial locations — that's why they work for images.",
        "RNN/LSTM/GRU for sequences; transformers have replaced them for most NLP.",
        "Transfer learning >>> training from scratch on small data."
      ],
      concepts: [
        {title:"Forward & back propagation", body:"Forward: compute predictions and loss. Backward: derive ∂L/∂w via chain rule, update w ← w − η·∇L."},
        {title:"Activations", body:"ReLU (default), Leaky ReLU (dying-ReLU fix), Sigmoid (binary out), Softmax (multiclass out), Tanh (rare)."},
        {title:"Loss functions", body:"MSE for regression, Binary/Categorical Cross-Entropy for classification, Huber for robust regression."},
        {title:"CNN building blocks", body:"Conv (local features) → ReLU → Pool (downsample) → repeat → Flatten → Dense → Softmax."},
        {title:"Common CNN architectures", body:"LeNet, AlexNet, VGG, ResNet (residual connections solve vanishing gradients), Inception, EfficientNet."},
        {title:"RNN/LSTM/GRU", body:"Process sequences; LSTM gates fix long-range dependency problems of vanilla RNNs."},
        {title:"GANs", body:"Generator vs Discriminator adversarial training. Hard to train (mode collapse). Used for synthetic data."},
        {title:"Regularization", body:"Dropout (random unit masking), BatchNorm (stabilize), L2 weight decay, data augmentation, early stopping."}
      ],
      formulas: [
        {name:"SGD update", expr:"w ← w − η · ∇L(w)", when:"Vanilla gradient descent."},
        {name:"Adam (essence)", expr:"adaptive lr from 1st & 2nd moment estimates of gradient", when:"Default optimizer."},
        {name:"Cross-entropy", expr:"L = −Σ yᵢ log ŷᵢ", when:"Classification loss."},
        {name:"Convolution", expr:"(I * K)(x,y) = ΣΣ I(x+i, y+j)·K(i,j)", when:"Feature detection across an image."}
      ],
      interview: [
        {q:"What is the vanishing gradient problem, and how do modern nets fix it?", a:"Gradients shrink as they propagate back through many layers, especially with sigmoid/tanh. Fixes: ReLU activations, batch normalization, residual (skip) connections (ResNet), careful init (He/Xavier).", level:"Advanced"},
        {q:"Why use convolutions instead of dense layers for images?", a:"Weight sharing + locality. A dense layer would have millions of parameters per image and no translation invariance; convolutions reuse a small filter across the image, drastically reducing params and adding inductive bias.", level:"Intermediate"},
        {q:"Your training loss keeps dropping but validation loss rises. What's happening?", a:"Overfitting. Mitigate with more data, augmentation, dropout, weight decay, early stopping, or a smaller model.", level:"Basic"},
        {q:"When would you use transfer learning?", a:"When labeled data is scarce, computation is limited, or your domain shares low-level features with ImageNet/large text corpora. Freeze early layers, fine-tune later ones.", level:"Intermediate"}
      ]
    },

    {
      id: "ai-business",
      code: "AI-Biz",
      name: "AI in Business",
      icon: "🤖",
      color: "from-amber-500 to-orange-500",
      folder: "AI in Business",
      summary: "Applying AI/ML to business problems: opportunity framing, model lifecycle, MLOps basics, responsible AI, generative AI use cases.",
      keyTakeaways: [
        "Start with the decision, not the model. If a result doesn't change a decision, don't build it.",
        "Frame AI projects with: problem → data available → metric → baseline → constraints (latency, privacy, fairness).",
        "Most ML production failures are data/pipeline issues, not algorithmic ones.",
        "Generative AI is most valuable as a co-pilot — drafting, summarizing, retrieving — not autonomous action.",
        "RAG (Retrieval-Augmented Generation) anchors LLMs in your own data and reduces hallucinations.",
        "Responsible AI pillars: Fairness, Accountability, Transparency, Privacy, Safety, Robustness."
      ],
      concepts: [
        {title:"AI opportunity framing", body:"Volume × stakes × repeatability × data availability = candidacy. High-volume repeatable decisions with feedback loops win."},
        {title:"Build vs buy vs API", body:"For commodity capability (OCR, translation, embeddings) — buy. For proprietary edge (your customer behavior model) — build."},
        {title:"MLOps lifecycle", body:"Data ingest → versioning → training → registry → deploy → monitor (drift, performance) → retrain trigger."},
        {title:"LLM patterns", body:"Prompt engineering → few-shot → RAG → fine-tuning → agents. Move down the list only when the prior layer is insufficient."},
        {title:"Hallucination mitigation", body:"Ground with retrieval, restrict via tools/schemas, require citations, evaluate with golden Q&A sets, add human review for high-stakes outputs."},
        {title:"Responsible AI", body:"Bias audits, explainability (SHAP, LIME), data privacy (PII redaction, DP), human-in-the-loop, model cards."}
      ],
      formulas: [
        {name:"Business value of a model", expr:"Value = Σ (decisions affected) × (uplift per decision) − cost(build + run)", when:"Justifying an AI initiative."},
        {name:"Expected value with threshold", expr:"EV = P·V_TP − (1−P)·C_FP for action class", when:"Pick a probability threshold by cost matrix."}
      ],
      interview: [
        {q:"How do you decide if a problem is suitable for ML?", a:"Three checks: (1) Is there a pattern? (2) Is it hard to define by rules? (3) Is there data? If yes to all and the decision matters, ML can help. Else use heuristics.", level:"Basic"},
        {q:"What is RAG and when do you use it?", a:"Retrieval-Augmented Generation: at query time, retrieve relevant documents from your knowledge base and stuff them into the LLM prompt. Use it when answers must be grounded in proprietary or fresh data, not training data.", level:"Intermediate"},
        {q:"How do you measure success of an AI project beyond accuracy?", a:"Tie to business KPIs: revenue lift, time saved, ticket deflection, NPS, error reduction. Add operational metrics: latency, cost per inference, drift, fairness across segments.", level:"Intermediate"}
      ]
    },

    {
      id: "process-mining",
      code: "INFO581",
      name: "Business Process Analytics",
      icon: "🔄",
      color: "from-lime-500 to-green-500",
      folder: "INFO581",
      summary: "Process mining: discover, conform, and enhance business processes from event logs.",
      keyTakeaways: [
        "Event log = (Case ID, Activity, Timestamp) at minimum. Everything starts here.",
        "Three pillars: Discovery (build process model from logs), Conformance (compare model vs reality), Enhancement (improve the model).",
        "Conformance gaps reveal where reality deviates from policy — often where waste and risk live.",
        "Bottlenecks show up in waiting time, not service time. Always separate the two.",
        "Variants explosion (many unique paths) is a red flag for ad-hoc behavior."
      ],
      concepts: [
        {title:"Event log structure", body:"Mandatory: Case ID, Activity, Timestamp. Often: Resource, Cost, Attributes."},
        {title:"Discovery algorithms", body:"Alpha miner, Heuristic miner, Inductive miner, Fuzzy miner. Inductive miner is the modern default — sound models."},
        {title:"Conformance checking", body:"Token-based replay (count missing/remaining tokens) and alignment-based (cheaper deviations). Yields fitness, precision, generalization, simplicity."},
        {title:"Variants & frequency", body:"Top-N variants usually cover 80% of cases. Long tail = exceptions worth investigating."},
        {title:"Performance analysis", body:"Throughput, waiting, service, cycle times per activity and per case. Heatmaps over the process model."}
      ],
      formulas: [
        {name:"Fitness (token replay)", expr:"f = ½(1 − m/c) + ½(1 − r/p)", when:"Missing(m), consumed(c), remaining(r), produced(p) tokens."},
        {name:"Cycle time", expr:"CT = Σ (service + wait + transport + inspection)", when:"Lean process diagnosis."}
      ],
      interview: [
        {q:"What is process mining and how does it differ from BPM?", a:"BPM is policy-driven (how processes SHOULD work). Process mining is data-driven — it discovers how processes ACTUALLY run from event logs, and quantifies the gap.", level:"Basic"},
        {q:"What's the minimum data you need to start process mining?", a:"An event log with three columns: Case ID, Activity name, Timestamp. Anything else (resource, cost, attributes) is bonus and enables richer analyses.", level:"Basic"},
        {q:"Fitness vs Precision in conformance checking?", a:"Fitness: how well the model replays the observed cases (recall-like). Precision: how strictly the model avoids behavior never seen in logs (specificity-like). High fitness + low precision = the model is too generic.", level:"Advanced"}
      ]
    },

    {
      id: "optimization",
      code: "INFO582",
      name: "Optimization Methods",
      icon: "⚙",
      color: "from-blue-500 to-violet-500",
      folder: "INFO582",
      summary: "Linear, integer, and nonlinear programming applied to business decisions: routing, scheduling, blending, allocation.",
      keyTakeaways: [
        "Every LP has an objective + decision variables + constraints. Write them down BEFORE coding.",
        "LPs are solved by Simplex or interior-point methods — both polynomial-ish in practice.",
        "Integer programs (MIP) are NP-hard; modern solvers (Gurobi, CPLEX, HiGHS) handle huge models with branch-and-bound + cuts.",
        "Duality gives you shadow prices — the marginal value of relaxing each constraint by one unit.",
        "Sensitivity analysis is the manager's question: 'if my supply changes, how does the optimum move?'",
        "Heuristics/metaheuristics (genetic, simulated annealing, tabu) when the problem is too big or non-convex."
      ],
      concepts: [
        {title:"LP standard form", body:"min cᵀx s.t. Ax ≤ b, x ≥ 0. Maximization is just min of −c."},
        {title:"Simplex method", body:"Walk corner to corner of feasible polytope, always improving the objective. Stops at an optimum vertex."},
        {title:"Duality", body:"Each primal constraint has a dual variable (shadow price). Strong duality: optimal primal = optimal dual for LPs."},
        {title:"Branch & Bound (MIP)", body:"Solve LP relaxation, branch on a fractional integer var, prune subtrees by bounds."},
        {title:"Modeling tricks", body:"Binary indicators, Big-M, piecewise linearization, lazy constraints. Avoid Big-M when SOS or indicator constraints are available."},
        {title:"Common business LPs", body:"Product mix, transportation, assignment, blending, cutting stock, scheduling."}
      ],
      formulas: [
        {name:"LP primal", expr:"min cᵀx  s.t. Ax ≤ b, x ≥ 0", when:"Standard linear program."},
        {name:"LP dual", expr:"max bᵀy  s.t. Aᵀy ≤ c, y ≥ 0", when:"Shadow prices, bounds."},
        {name:"KKT (NLP)", expr:"∇f + Σλᵢ∇gᵢ = 0, λᵢgᵢ = 0, λᵢ ≥ 0", when:"Necessary conditions for nonlinear optima."}
      ],
      interview: [
        {q:"Explain what a shadow price means to a business owner.", a:"It's how much your profit would increase if you had one more unit of a binding resource (machine-hour, material). Anything you pay below the shadow price for that resource is a profitable purchase.", level:"Intermediate"},
        {q:"When would you use a heuristic instead of an exact solver?", a:"When the problem is too large (millions of binaries), non-convex, has noisy or black-box objectives, or you need a 'good enough' answer fast. Trade optimality for tractability.", level:"Advanced"},
        {q:"How would you formulate a workforce scheduling LP?", a:"Decision vars: xᵢⱼ = 1 if employee i works shift j. Objective: min total cost (or max preference). Constraints: coverage per shift, max hours per employee, off-day rules, skill requirements.", level:"Intermediate"}
      ]
    },

    {
      id: "info574",
      code: "INFO574",
      name: "Database Systems",
      icon: "🗄",
      color: "from-slate-500 to-zinc-500",
      folder: "Info 574_Database System",
      summary: "Relational database fundamentals: ER modeling, normalization, SQL, transactions/ACID, indexing — the data layer every analyst depends on.",
      keyTakeaways: [
        "The relational model = data as tables, queries via relational algebra/SQL. It's the lingua franca of data work.",
        "ER (Entity-Relationship) modeling comes before SQL. Get entities, relationships, and cardinalities right — bad models haunt you forever.",
        "Normalize to 3NF/BCNF for OLTP (no redundancy, no anomalies); denormalize for analytics (star schema).",
        "ACID = Atomicity, Consistency, Isolation, Durability. The transactional contract that makes databases safe under concurrency.",
        "Indexes speed reads but slow writes. Index columns used in WHERE/JOIN/ORDER BY — but every index has a cost.",
        "SQL is non-negotiable. Master joins, subqueries, GROUP BY/HAVING, window functions, and CTEs.",
        "NoSQL (document, key-value, columnar, graph) trades ACID for scale or flexibility — use the right tool for the workload."
      ],
      concepts: [
        {title:"Relational model", body:"Tables (relations) of tuples (rows). Primary key uniquely identifies a row; foreign keys link tables."},
        {title:"ER diagrams", body:"Entities (rectangles), attributes (ovals), relationships (diamonds). Cardinality: 1:1, 1:N, M:N. Resolve M:N with a junction table."},
        {title:"Normalization", body:"1NF (atomic values), 2NF (no partial dependency on composite PK), 3NF (no transitive dependency), BCNF (every determinant is a candidate key). Prevents update/insert/delete anomalies."},
        {title:"SQL essentials", body:"DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT/REVOKE), TCL (COMMIT/ROLLBACK). Master joins: INNER, LEFT, RIGHT, FULL, CROSS."},
        {title:"Joins & set ops", body:"JOIN combines rows by key; UNION/INTERSECT/EXCEPT combine result sets. Watch out for join fan-out when keys aren't unique."},
        {title:"Window functions", body:"ROW_NUMBER, RANK, LAG, LEAD, SUM() OVER (PARTITION BY...). Compute per-group metrics without collapsing rows."},
        {title:"Indexes", body:"B-tree (default, range queries), Hash (equality lookups). Composite indexes follow left-prefix rule. Don't over-index — writes degrade."},
        {title:"Transactions & ACID", body:"BEGIN ... COMMIT/ROLLBACK. Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable — higher = safer but slower."},
        {title:"Star schema (OLAP)", body:"For analytical workloads: one fact table + denormalized dimension tables. Faster reads, simpler queries than 3NF."},
        {title:"NoSQL families", body:"Document (MongoDB), Key-Value (Redis), Wide-column (Cassandra), Graph (Neo4j). Choose by access pattern, not hype."}
      ],
      formulas: [
        {name:"Cardinality of join", expr:"|A ⋈ B| ≤ |A| · |B|", when:"Spot fan-out: many-to-many joins explode row counts."},
        {name:"3NF rule", expr:"X → A : X is a superkey OR A is part of a candidate key", when:"Functional-dependency check for 3rd normal form."}
      ],
      interview: [
        {q:"Walk me through normalizing a database to 3NF.", a:"Start with 1NF (each cell atomic, no repeating groups). Move to 2NF by removing partial dependencies on a composite primary key. Reach 3NF by eliminating transitive dependencies (non-key → non-key). Each step splits a wide table into smaller related tables linked by foreign keys.", level:"Intermediate"},
        {q:"INNER vs LEFT vs FULL OUTER join — when do you use each?", a:"INNER = only matching rows from both sides. LEFT = all rows from left, NULLs where right has no match (e.g., 'customers with or without orders'). FULL OUTER = all rows from both (less common, for full reconciliation).", level:"Basic"},
        {q:"What is ACID and which isolation level would you pick for a banking transfer?", a:"ACID = Atomicity, Consistency, Isolation, Durability. For money movement, use Serializable (or at least Repeatable Read with explicit locks) to prevent dirty reads, non-repeatable reads, and phantoms.", level:"Advanced"},
        {q:"When would an index hurt instead of help?", a:"On write-heavy tables (every INSERT/UPDATE has to update the index), on very low-cardinality columns (e.g., a 'gender' flag — the optimizer scans anyway), or when too many indexes exist (planner picks the wrong one).", level:"Intermediate"},
        {q:"Write SQL to find the 2nd highest salary per department.", a:"WITH ranked AS (SELECT *, DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) rk FROM employees) SELECT * FROM ranked WHERE rk = 2;", level:"Intermediate"},
        {q:"When would you pick NoSQL over a relational DB?", a:"When the schema evolves rapidly (document store), when access is mostly key-lookup at massive scale (KV/wide-column), when relationships are the data (graph), or when you need horizontal scale-out across regions. Cost: weaker consistency or ad-hoc query power.", level:"Advanced"}
      ]
    },

    {
      id: "info584",
      code: "INFO584",
      name: "Data Visualization",
      icon: "🎨",
      color: "from-pink-500 to-orange-400",
      folder: "Info 584_Data Visualization",
      summary: "Turning data into decisions through clear, honest visuals. Encoding principles, chart selection, dashboard design, color & accessibility, and storytelling with data.",
      keyTakeaways: [
        "Start with the question, not the chart. The 'right' chart is the one that makes the answer obvious.",
        "Pre-attentive attributes (position, length, color, size) are processed in <250ms — use them deliberately, not decoratively.",
        "Length & position are the most accurate visual encodings; color hue and area are the least. Bars beat pies for that reason.",
        "Tufte's data-ink ratio: maximize ink that conveys data, erase everything that doesn't. Less chartjunk, more signal.",
        "Pick color with intent: categorical (qualitative), sequential (ordered), diverging (centered). Always test for color-blindness (use ColorBrewer or Viridis).",
        "Dashboards have a job: monitor (KPI), analyze (drill), explain (narrative). Mixing them creates clutter.",
        "Annotations beat explanation. A small label on the outlier saves a paragraph of caption.",
        "Show uncertainty. A point estimate without a confidence band is a lie of omission."
      ],
      concepts: [
        {title:"Visual encoding ladder", body:"Cleveland & McGill ranking: Position > Length > Angle/Slope > Area > Volume > Color hue. Use higher-ranked encodings for primary comparisons."},
        {title:"Chart selection by task", body:"Compare → bar. Trend → line. Composition → stacked bar or treemap (NOT pie unless ≤3 slices). Distribution → histogram, box, violin. Relationship → scatter, heatmap. Geographic → choropleth or symbol map."},
        {title:"Gestalt principles", body:"Proximity, similarity, enclosure, continuity, closure — our eyes group automatically. Layout your dashboard with these in mind."},
        {title:"Color theory for data", body:"Categorical (≤7 hues), Sequential (single hue gradient for ordered data), Diverging (two hues meeting at neutral midpoint for +/- values). Avoid rainbow scales — they imply false ordering."},
        {title:"Dashboard design", body:"F-pattern reading. Top-left = most important KPI. Filters at top or left. Group related metrics. Keep one accent color; let the data carry the rest."},
        {title:"Storytelling with data (Knaflic)", body:"Context → Choose visual → Eliminate clutter → Focus attention → Think like a designer → Tell a story. The 'so what' beats the chart."},
        {title:"Tufte principles", body:"Above all show the data. Maximize data-ink, minimize chartjunk. Small multiples beat one busy chart. Reveal data at several levels of detail."},
        {title:"Tools landscape", body:"Tableau (drag-and-drop power), Power BI (M$ ecosystem), Looker (LookML semantic layer), Plotly/Bokeh/Altair (Python), D3 (custom web). Pick by audience and freedom needed."},
        {title:"Accessibility (a11y)", body:"Contrast ≥ 4.5:1 for text. Don't rely on color alone — add shape/pattern. Screen-reader-friendly titles and alt text. Color-blindness safe palettes."},
        {title:"Common pitfalls", body:"Truncated y-axis exaggerating change · 3D charts (distortion) · Dual axes (false correlation) · Pie with 10 slices · Default Excel colors."}
      ],
      formulas: [
        {name:"Data-ink ratio", expr:"DIR = data-ink / total ink used", when:"Maximize. Erase grid lines, borders, redundant labels that don't carry information."},
        {name:"Lie factor (Tufte)", expr:"Lie Factor = (effect shown in graphic) / (effect in data)", when:"Honest charts → ~1.0. Anything >1.05 distorts the story."},
        {name:"Bin width (Sturges)", expr:"k = ⌈log₂(n) + 1⌉", when:"Quick rule for number of histogram bins."}
      ],
      interview: [
        {q:"How do you choose the right chart for a given dataset?", a:"Start with the question: am I comparing categories (bar), showing change over time (line), distribution (histogram/box), composition (stacked bar / treemap), or relationship (scatter)? Then check the audience's familiarity and accessibility needs. Default to bars and lines unless there's a strong reason otherwise.", level:"Basic"},
        {q:"Why are pie charts often a bad choice?", a:"Humans judge angles and areas poorly — bars (length/position) are far more accurate. Pies fail with >3-4 slices and can't show trend or precise comparison. A horizontal bar chart almost always communicates the same data better.", level:"Basic"},
        {q:"How would you visualize uncertainty in a forecast?", a:"Show the point estimate as a line and the prediction interval as a translucent band (e.g., 80% inner, 95% outer). For categorical estimates, use error bars or violin plots. Never present a forecast as a single number without its band — it overstates confidence.", level:"Intermediate"},
        {q:"What's the difference between a sequential and a diverging color scale?", a:"Sequential: single-hue gradient for ordered data with a natural zero (e.g., revenue 0→100M). Diverging: two contrasting hues meeting at a meaningful midpoint, for data with positive and negative deviations (e.g., variance vs target).", level:"Intermediate"},
        {q:"Walk me through how you'd design an executive dashboard.", a:"1) Define the decisions the exec will make. 2) Pick 4-6 KPIs that map to those decisions. 3) Place them top-left → bottom-right by importance. 4) Use a single accent color for the focal metric. 5) Add YoY/QoQ context, not just current values. 6) Drill-downs hidden behind hover/click — keep the top view scannable in 5 seconds.", level:"Advanced"},
        {q:"Give an example of a misleading chart and how you'd fix it.", a:"Classic case: a bar chart whose y-axis starts at 95% to make a 1-point difference look huge. Fix: start the axis at zero, or switch to a slope/dot chart that focuses on the delta with honest scale.", level:"Intermediate"},
        {q:"How do you make a chart accessible?", a:"Ensure 4.5:1 contrast for text and ≥3:1 for graphical elements. Don't rely on color alone — encode with shape or pattern too. Use a color-blind-safe palette (Viridis, Tableau-10). Provide a clear title, axis labels, and (for the web) alt text or a data table fallback.", level:"Intermediate"}
      ]
    },

    {
      id: "info588",
      code: "INFO588",
      name: "Analytics Capstone Frameworks (aCAP)",
      icon: "🎯",
      color: "from-rose-500 to-red-500",
      folder: "INFO588",
      summary: "INFORMS aCAP body of knowledge: 7-domain framework from business problem framing through deployment and lifecycle management.",
      keyTakeaways: [
        "The 7 aCAP domains: Business Problem Framing, Analytics Problem Framing, Data, Methodology, Model Building, Deployment, Model Lifecycle.",
        "More than half of project value comes from properly framing the business and analytics problem.",
        "Define success metrics with the business sponsor BEFORE touching data.",
        "Document assumptions, data lineage, and decisions — they will be audited.",
        "Lifecycle management = monitoring drift, retraining, governance, sunsetting.",
        "Communicate to executives in business terms with confidence intervals, not p-values."
      ],
      concepts: [
        {title:"Business problem framing", body:"Stakeholders, decision context, constraints, success criteria, risks. Output: a one-page business problem statement."},
        {title:"Analytics problem framing", body:"Translate business problem to analytics terms: target variable, features, unit of analysis, evaluation metric, hypotheses."},
        {title:"Data domain", body:"Acquisition, integration, quality, governance, ethics, privacy."},
        {title:"Methodology", body:"Algorithm selection driven by data shape, interpretability needs, deployment constraints, and risk."},
        {title:"Deployment", body:"Integration, change management, training end users, monitoring."},
        {title:"Lifecycle", body:"Drift detection, retraining cadence, version control, decommissioning."}
      ],
      interview: [
        {q:"How do you frame an analytics problem from a vague business ask like 'reduce churn'?", a:"Clarify: churn of which segment, over what period? Define churn precisely (e.g., no transaction in 60 days). Confirm decision: who acts on the model? Set target metric (lift at top decile, dollar savings). Then translate to a supervised binary classification problem.", level:"Intermediate"},
        {q:"What does lifecycle management include?", a:"Performance monitoring, data and concept drift detection, retraining schedule, version control, governance approvals, and clear sunset criteria for retiring the model.", level:"Intermediate"}
      ]
    },

    {
      id: "python",
      code: "PY",
      name: "Python for Analytics",
      icon: "🐍",
      color: "from-yellow-400 to-amber-500",
      folder: "Python",
      summary: "Hands-on toolkit: NumPy, pandas, matplotlib/seaborn, scikit-learn — plus environments and reproducibility basics.",
      keyTakeaways: [
        "pandas is your daily driver: read_*, .info(), .describe(), .groupby(), .merge(), .pivot_table(), .apply().",
        "Vectorize — for-loops on DataFrames are slow. Use .apply sparingly; prefer vector ops.",
        "Use virtual environments (venv/conda) per project. Pin versions in requirements.txt.",
        "scikit-learn API: fit → transform → predict. Pipelines + ColumnTransformer keep preprocessing leak-free.",
        "Notebook for exploration; .py modules for anything that runs more than once."
      ],
      concepts: [
        {title:"pandas essentials", body:"Indexing (loc/iloc), groupby-agg, merge/join, melt/pivot, missing-data handling, time series resample."},
        {title:"NumPy", body:"ndarray, broadcasting, vectorized math, axis semantics, random."},
        {title:"sklearn pipelines", body:"Pipeline([('scaler', StandardScaler()), ('clf', LogisticRegression())]) — preprocessing is part of the model."},
        {title:"Visualization", body:"matplotlib for full control, seaborn for stats charts, plotly for interactive."},
        {title:"Reproducibility", body:"Set random_state, log versions, store data snapshots, use Git."}
      ],
      formulas: [
        {name:"Train-test split", expr:"X_tr, X_te, y_tr, y_te = train_test_split(X, y, stratify=y, random_state=42)", when:"Always stratify classification."}
      ],
      interview: [
        {q:"How would you compute customer LTV in pandas?", a:"df.groupby('customer_id').agg(orders=('order_id','count'), revenue=('amount','sum'), tenure_days=('order_date', lambda s: (s.max()-s.min()).days)) — then derive avg_order_value and frequency.", level:"Basic"},
        {q:"Pipeline vs raw preprocessing — why prefer Pipeline?", a:"Pipelines fit preprocessing on train only inside cross-validation, eliminating leakage and making the entire model serializable as one object for deployment.", level:"Intermediate"}
      ]
    },

    {
      id: "capstone",
      code: "Capstone",
      name: "Capstone — Enterprise AI Security (LLM Red Teaming)",
      icon: "🛡",
      color: "from-red-500 to-orange-500",
      folder: "Capstone Project",
      summary: "Applied capstone: an Enterprise AI Security platform for red-teaming LLMs. Project charter, methodology, analytics models, business value quantification, final report.",
      keyTakeaways: [
        "Red-teaming = systematic adversarial testing to surface model weaknesses before attackers do.",
        "Top LLM risks (OWASP LLM Top 10): prompt injection, insecure output handling, training data poisoning, model DoS, supply chain, sensitive info disclosure, insecure plugin design, excessive agency, overreliance, model theft.",
        "Threat modeling for LLMs: STRIDE adapted — Spoofing prompts, Tampering with context, Repudiation gaps, Information disclosure via leaks, DoS via token floods, Elevation through tool misuse.",
        "Defense in depth: input filters, output guards, retrieval source allowlists, tool sandboxing, rate limits, human review for high-stakes outputs.",
        "Quantify business value: cost of a breach × probability × residual reduction = value of the control.",
        "Document everything: charter, sprint reports, methodology, model cards, run logs."
      ],
      concepts: [
        {title:"Project charter", body:"Problem, scope, stakeholders, deliverables, success metrics, timeline, risks."},
        {title:"Red-team techniques", body:"Direct prompt injection, indirect injection (poisoned docs), jailbreaks, data exfiltration prompts, tool abuse, role-play attacks."},
        {title:"Evaluation harness", body:"Curated attack prompts → run against model → score outcomes (refused/leaked/exploited) → track over versions."},
        {title:"Mitigation patterns", body:"System prompt hardening, content moderation classifiers, retrieval scoping, function-call schemas, output validators, allow/deny lists, audit logging."},
        {title:"Analytics models in capstone", body:"Risk-scoring of test cases, time-series of vulnerability rates per release, clustering attack types."}
      ],
      interview: [
        {q:"Walk me through your capstone in 90 seconds.", a:"We built an enterprise AI security platform to red-team LLM deployments. Defined the threat landscape using OWASP LLM Top 10, designed an evaluation harness of adversarial prompts, scored model responses, and dashboards-tracked vulnerability trends per release. The business value was quantified as expected breach-cost avoidance and time saved versus manual review.", level:"Intermediate"},
        {q:"How do you prevent prompt injection in a RAG system?", a:"Treat retrieved content as untrusted: strip instructions, separate roles, scope tools, require structured outputs, monitor for anomalous instructions, and never let retrieved text execute privileged actions without policy checks.", level:"Advanced"},
        {q:"How did you measure capstone success?", a:"Coverage (attack types tested), detection rate (% adversarial cases caught), false-positive rate on benign prompts, dollar value of risk reduction estimated from incident frequency × impact.", level:"Intermediate"}
      ]
    }
  ],

  glossaryCategories: [
    {id:"stats", label:"Statistics & Probability", icon:"📊", color:"from-sky-500 to-cyan-400"},
    {id:"ml",    label:"Machine Learning & Data Mining", icon:"⛏", color:"from-emerald-500 to-teal-500"},
    {id:"dl",    label:"Deep Learning & AI", icon:"🧬", color:"from-fuchsia-500 to-pink-500"},
    {id:"opt",   label:"Optimization", icon:"⚙", color:"from-violet-500 to-indigo-500"},
    {id:"proc",  label:"Process Mining", icon:"🔄", color:"from-lime-500 to-green-500"},
    {id:"data",  label:"Data Management & SQL", icon:"🗄", color:"from-slate-500 to-zinc-500"},
    {id:"biz",   label:"Business & MLOps", icon:"🏢", color:"from-amber-500 to-orange-500"},
    {id:"sec",   label:"AI Security & LLM", icon:"🛡", color:"from-red-500 to-rose-500"},
    {id:"tool",  label:"Python & Tools", icon:"🐍", color:"from-yellow-500 to-amber-500"}
  ],
  glossary: [
    // Statistics
    {term:"A/B Test", def:"Randomized experiment comparing two variants on a primary metric.", cat:"stats"},
    {term:"ANOVA", def:"Analysis of Variance — tests whether ≥3 group means differ.", cat:"stats"},
    {term:"Bootstrapping", def:"Resampling with replacement to estimate the sampling distribution.", cat:"stats"},
    {term:"CLT (Central Limit Theorem)", def:"As n grows, the distribution of sample means becomes approximately normal regardless of the population shape.", cat:"stats"},
    {term:"Confidence Interval", def:"Range that would contain the true parameter ~X% of the time across repeated samples.", cat:"stats"},
    {term:"Chi-Square Test", def:"Tests independence between categorical variables using observed vs expected counts.", cat:"stats"},
    {term:"Effect Size", def:"Magnitude of a difference, independent of sample size (e.g., Cohen's d).", cat:"stats"},
    {term:"Hypothesis (H₀ / H₁)", def:"Null vs alternative claims tested against the data.", cat:"stats"},
    {term:"Heteroscedasticity", def:"Non-constant variance of residuals — breaks OLS inference.", cat:"stats"},
    {term:"p-value", def:"Probability of seeing data this extreme under the null hypothesis (NOT the prob that H₀ is true).", cat:"stats"},
    {term:"Power", def:"1 − β. Probability of correctly rejecting a false null.", cat:"stats"},
    {term:"Standard Error", def:"Standard deviation of a sample statistic (e.g., σ/√n for the mean).", cat:"stats"},
    {term:"Skewness", def:"Asymmetry of a distribution; right-skewed has a long right tail.", cat:"stats"},
    {term:"Type I / II Error", def:"False positive / false negative under hypothesis testing.", cat:"stats"},
    {term:"VIF", def:"Variance Inflation Factor — diagnostic for multicollinearity (>5 worrying, >10 severe).", cat:"stats"},
    {term:"z-score", def:"(x − μ) / σ — number of standard deviations from the mean.", cat:"stats"},

    // ML / Data Mining
    {term:"AUC-ROC", def:"Area under ROC curve; threshold-free ranking quality of a classifier.", cat:"ml"},
    {term:"AUC-PR", def:"Area under Precision-Recall curve; preferred under class imbalance.", cat:"ml"},
    {term:"Bagging", def:"Bootstrap Aggregating — train models on bootstrap samples and average.", cat:"ml"},
    {term:"Bias–Variance Tradeoff", def:"Simple models underfit (high bias); complex models overfit (high variance).", cat:"ml"},
    {term:"Boosting", def:"Sequential ensemble where each model corrects its predecessor's errors.", cat:"ml"},
    {term:"CRISP-DM", def:"Standard data mining lifecycle: Business → Data → Prep → Model → Eval → Deploy.", cat:"ml"},
    {term:"Confusion Matrix", def:"Table of TP / FP / FN / TN counts for a classifier.", cat:"ml"},
    {term:"Cross-Validation", def:"Repeatedly split data into folds to estimate generalization error.", cat:"ml"},
    {term:"Data Leakage", def:"Information from outside the training set leaks in, inflating performance.", cat:"ml"},
    {term:"Decision Tree", def:"Recursive split model using Gini or information gain at each node.", cat:"ml"},
    {term:"F1", def:"Harmonic mean of precision and recall: 2·P·R/(P+R).", cat:"ml"},
    {term:"Feature Engineering", def:"Crafting input variables that expose signal to the model.", cat:"ml"},
    {term:"Gini Impurity", def:"1 − Σpᵢ². Split criterion in decision trees.", cat:"ml"},
    {term:"Hyperparameter", def:"Knob set BEFORE training (learning rate, depth, λ).", cat:"ml"},
    {term:"Imputation", def:"Strategy for filling missing values (mean, median, KNN, model-based).", cat:"ml"},
    {term:"K-Means", def:"Distance-based clustering that minimizes within-cluster SSE.", cat:"ml"},
    {term:"Lasso (L1)", def:"L1 penalty that zeroes coefficients — implicit feature selection.", cat:"ml"},
    {term:"Lift", def:"Performance vs random baseline (also association-rule strength).", cat:"ml"},
    {term:"Logistic Regression", def:"Linear model in log-odds space — interpretable binary classifier.", cat:"ml"},
    {term:"Naive Bayes", def:"Probabilistic classifier assuming feature independence given class.", cat:"ml"},
    {term:"Overfitting", def:"Memorizing noise in the training data, hurting unseen performance.", cat:"ml"},
    {term:"PCA", def:"Principal Component Analysis — orthogonal linear dimensionality reduction.", cat:"ml"},
    {term:"Precision", def:"TP / (TP+FP) — of predicted positives, how many are real.", cat:"ml"},
    {term:"Random Forest", def:"Bagged decision trees with random feature subsetting at each split.", cat:"ml"},
    {term:"Recall", def:"TP / (TP+FN) — of real positives, how many we caught.", cat:"ml"},
    {term:"Regularization", def:"Penalize complexity (L1 / L2 / Elastic Net) to control variance.", cat:"ml"},
    {term:"Ridge (L2)", def:"L2 penalty that shrinks coefficients smoothly toward zero.", cat:"ml"},
    {term:"RMSE", def:"Square root of mean squared error — regression metric in target units.", cat:"ml"},
    {term:"SHAP", def:"Shapley values — game-theoretic per-feature attribution for any model.", cat:"ml"},
    {term:"SMOTE", def:"Synthetic Minority Oversampling — generates synthetic positives for imbalance.", cat:"ml"},
    {term:"TF-IDF", def:"Term frequency × inverse document frequency — down-weights common words.", cat:"ml"},
    {term:"XGBoost", def:"Optimized gradient boosting library — competition workhorse.", cat:"ml"},

    // Deep Learning
    {term:"Adam", def:"Adaptive moment-estimation optimizer — modern default for neural nets.", cat:"dl"},
    {term:"Backpropagation", def:"Chain-rule algorithm for computing gradients through a neural network.", cat:"dl"},
    {term:"Batch Normalization", def:"Normalize activations per mini-batch — stabilizes & accelerates training.", cat:"dl"},
    {term:"CNN", def:"Convolutional Neural Network — weight-sharing filters for images.", cat:"dl"},
    {term:"Cross-Entropy Loss", def:"Standard classification loss matched to softmax outputs.", cat:"dl"},
    {term:"Dropout", def:"Randomly zero activations during training — implicit ensemble / regularizer.", cat:"dl"},
    {term:"Embedding", def:"Dense vector representation of a discrete entity (word, item, user).", cat:"dl"},
    {term:"Fine-Tuning", def:"Continue training a pretrained model on your domain data.", cat:"dl"},
    {term:"GAN", def:"Generative Adversarial Network — generator vs discriminator training.", cat:"dl"},
    {term:"LSTM", def:"Long Short-Term Memory — gated RNN solving vanishing-gradient on sequences.", cat:"dl"},
    {term:"ReLU", def:"max(0,x). Default hidden-layer activation.", cat:"dl"},
    {term:"Residual Connection", def:"Skip connection that lets gradients flow — basis of ResNet.", cat:"dl"},
    {term:"Softmax", def:"Squashes scores to a probability distribution for multi-class outputs.", cat:"dl"},
    {term:"Transfer Learning", def:"Reuse features learned on a large dataset for a small target task.", cat:"dl"},
    {term:"Vanishing Gradient", def:"Gradients shrink in deep nets — fixed by ReLU, BN, residuals, better init.", cat:"dl"},

    // Optimization
    {term:"Branch & Bound", def:"Algorithm for MIPs — solves LP relaxations and prunes by bounds.", cat:"opt"},
    {term:"Constraint", def:"Restriction (≤, =, ≥) on decision variables in an optimization problem.", cat:"opt"},
    {term:"Decision Variable", def:"The unknowns the optimizer chooses to maximize/minimize the objective.", cat:"opt"},
    {term:"Duality", def:"Each LP has a dual; primal & dual optima coincide (strong duality).", cat:"opt"},
    {term:"Feasible Region", def:"Set of solutions satisfying all constraints.", cat:"opt"},
    {term:"KKT Conditions", def:"Necessary optimality conditions for constrained nonlinear programs.", cat:"opt"},
    {term:"LP / MIP / NLP", def:"Linear / Mixed-Integer / Nonlinear Programs — solver classes.", cat:"opt"},
    {term:"Objective Function", def:"What we maximize or minimize (e.g., cost, profit).", cat:"opt"},
    {term:"Shadow Price", def:"Dual value — marginal change in objective per unit relaxed constraint.", cat:"opt"},
    {term:"Simplex Method", def:"Walks vertices of the feasible polytope to find the LP optimum.", cat:"opt"},

    // Process Mining
    {term:"Conformance Checking", def:"Compares the actual log against a model — fitness, precision, etc.", cat:"proc"},
    {term:"Event Log", def:"Records of (Case ID, Activity, Timestamp) — the input to process mining.", cat:"proc"},
    {term:"Fitness", def:"How well a model can replay observed traces (recall-like).", cat:"proc"},
    {term:"Inductive Miner", def:"Modern discovery algorithm guaranteeing sound process models.", cat:"proc"},
    {term:"Process Discovery", def:"Automatically construct a process model from an event log.", cat:"proc"},
    {term:"Variant", def:"A unique sequence of activities executed by some cases.", cat:"proc"},

    // Data Management
    {term:"DDL / DML", def:"Data Definition (CREATE/ALTER) vs Data Manipulation (SELECT/INSERT/UPDATE).", cat:"data"},
    {term:"Data Lake", def:"Raw files in cloud storage (Parquet, JSON, CSV).", cat:"data"},
    {term:"Data Lakehouse", def:"Warehouse-style reliability on top of a lake (Delta, Iceberg, Hudi).", cat:"data"},
    {term:"ETL / ELT", def:"Extract-Transform-Load vs Extract-Load-Transform pipelines.", cat:"data"},
    {term:"Fact Table", def:"Central table of measurements in a star schema.", cat:"data"},
    {term:"Normalization (3NF)", def:"Schema design removing partial/transitive dependencies — OLTP standard.", cat:"data"},
    {term:"OLAP / OLTP", def:"Analytical vs transactional workloads — different schema choices.", cat:"data"},
    {term:"SCD Type 2", def:"Slowly Changing Dimension preserving history via valid_from / valid_to rows.", cat:"data"},
    {term:"Star Schema", def:"One fact + many denormalized dims — fast for analytics.", cat:"data"},
    {term:"Window Function", def:"SQL function (ROW_NUMBER, LAG, SUM OVER) for partitioned/ordered computations.", cat:"data"},

    // Business / MLOps
    {term:"Concept Drift", def:"Relationship X→y changes after deployment, degrading model performance.", cat:"biz"},
    {term:"Covariate Drift", def:"Distribution of inputs X changes post-deployment.", cat:"biz"},
    {term:"CRISP-DM", def:"Industry-standard data-mining lifecycle framework.", cat:"biz"},
    {term:"Feature Store", def:"Centralized, versioned, point-in-time-correct feature repository.", cat:"biz"},
    {term:"KPI", def:"Key Performance Indicator — the metric tied to a business outcome.", cat:"biz"},
    {term:"Model Card", def:"Standardized documentation: purpose, data, metrics, limits, ethics.", cat:"biz"},
    {term:"MLOps", def:"Operational practices around the ML lifecycle: build → deploy → monitor.", cat:"biz"},
    {term:"Responsible AI", def:"Fairness, accountability, transparency, privacy, safety, robustness.", cat:"biz"},
    {term:"Stakeholder Map", def:"Who is affected by / decides on this model — used for framing.", cat:"biz"},

    // AI Security / LLM
    {term:"Hallucination", def:"LLM output that sounds confident but is factually wrong.", cat:"sec"},
    {term:"Jailbreak", def:"Prompt that bypasses safety guardrails of an LLM.", cat:"sec"},
    {term:"LLM", def:"Large Language Model — transformer-based text generator.", cat:"sec"},
    {term:"OWASP LLM Top 10", def:"Standard list of top LLM security risks (prompt injection, etc.).", cat:"sec"},
    {term:"Prompt Injection", def:"Adversarial text that hijacks the model's instructions.", cat:"sec"},
    {term:"RAG", def:"Retrieval-Augmented Generation — ground LLM answers in external documents.", cat:"sec"},
    {term:"Red Teaming", def:"Systematic adversarial testing to surface model weaknesses.", cat:"sec"},
    {term:"System Prompt", def:"Privileged instructions seen by the model but not the user.", cat:"sec"},

    // Python & Tools
    {term:"DataFrame", def:"Tabular pandas object: rows × labeled columns.", cat:"tool"},
    {term:"Jupyter", def:"Interactive notebook environment for code + viz + narrative.", cat:"tool"},
    {term:"NumPy", def:"Vectorized n-dimensional array math library.", cat:"tool"},
    {term:"pandas", def:"Tabular data manipulation library — daily driver for analytics.", cat:"tool"},
    {term:"Pipeline (sklearn)", def:"Chained transformers + estimator; prevents leakage and serializes the model.", cat:"tool"},
    {term:"scikit-learn", def:"Classical ML library with a uniform fit/predict API.", cat:"tool"},
    {term:"venv / conda", def:"Per-project Python environments for reproducibility.", cat:"tool"}
  ],

  quizzes: [
    // Stats Foundation
    {courseId:"stats-foundation", q:"What does the Central Limit Theorem say about sample means?", options:["They are always normally distributed regardless of n","They become approximately normal as sample size grows large","They equal the population mean exactly","They follow a chi-square distribution"], correct:1, explain:"CLT: as n→large (~30+), the sampling distribution of the mean is approximately normal, regardless of the population's shape."},
    {courseId:"stats-foundation", q:"A 95% confidence interval means:", options:["95% chance the parameter is in this interval","If we resampled many times, ~95% of such intervals would contain the true parameter","The sample mean is 95% accurate","The p-value is 0.05"], correct:1, explain:"The 95% refers to the long-run reliability of the procedure, not the probability the parameter is in this specific interval."},
    {courseId:"stats-foundation", q:"Which is robust to outliers?", options:["Mean","Variance","Median","Standard deviation"], correct:2, explain:"Median is unaffected by extreme values, mean is pulled by them."},
    {courseId:"stats-foundation", q:"Standard error of the mean is:", options:["σ","σ²","σ / √n","σ · √n"], correct:2, explain:"SE shrinks as √n grows — halving SE requires 4× the data."},
    {courseId:"stats-foundation", q:"p = 0.03 means:", options:["97% probability the alternative is true","Probability of seeing data this extreme if H₀ is true","The effect is large","The null is definitely false"], correct:1, explain:"A p-value is conditional probability under the null, not a probability about hypotheses."},
    {courseId:"stats-foundation", q:"A Type I error is:", options:["Accepting a false null","Rejecting a true null","Sample size too small","Using the wrong test"], correct:1, explain:"Type I = false positive = rejecting H₀ when it's actually true (rate = α)."},

    // Applied Stats
    {courseId:"applied-stats", q:"When should you use a paired t-test?", options:["Two independent groups","Three or more groups","Matched pairs (before/after on same subject)","Categorical outcomes"], correct:2, explain:"Paired t leverages matching to remove between-subject variance, gaining power."},
    {courseId:"applied-stats", q:"ANOVA tells you that…", options:["Group A is bigger than group B","At least one group mean differs from the others","All means are equal","Variance equals the mean"], correct:1, explain:"ANOVA's F-test is an omnibus test. Follow with Tukey HSD to find WHICH groups differ."},
    {courseId:"applied-stats", q:"Which assumption violation breaks OLS inference?", options:["Predictors are continuous","Errors are normally distributed and homoscedastic","Sample is large","R² is high"], correct:1, explain:"OLS p-values rely on normal, equal-variance residuals (LINE)."},
    {courseId:"applied-stats", q:"VIF > 10 indicates:", options:["Strong predictive power","Severe multicollinearity","High R²","Heteroscedasticity"], correct:1, explain:"VIF measures how much a coefficient's variance is inflated by collinearity with other predictors."},
    {courseId:"applied-stats", q:"A χ² independence test requires:", options:["Continuous variables","Expected counts ≥ 5 per cell","Normality","Equal variances"], correct:1, explain:"With sparse cells, χ² approximation breaks; combine categories or use Fisher's exact."},
    {courseId:"applied-stats", q:"Coefficient β₁ = 2.5 in y = β₀ + β₁x means:", options:["x explains 2.5% of y","y doubles for any x","y rises by 2.5 for each 1-unit rise in x, holding others fixed","Correlation is 2.5"], correct:2, explain:"Regression coefficient = expected change in y per unit x, controlling for the rest."},

    // Data Mining
    {courseId:"data-mining", q:"The CRISP-DM phase MOST projects underestimate is:", options:["Modeling","Business Understanding","Deployment","Evaluation"], correct:1, explain:"Skipping problem framing leads to building the wrong model perfectly. Most failures trace back here."},
    {courseId:"data-mining", q:"Accuracy is misleading when:", options:["Classes are balanced","Classes are imbalanced","Data is numeric","Sample is large"], correct:1, explain:"With 99% negatives, predicting 'negative' always gives 99% accuracy yet catches zero positives. Use precision/recall/F1/AUC-PR."},
    {courseId:"data-mining", q:"To avoid data leakage during scaling:", options:["Scale the whole dataset, then split","Split first, fit the scaler on TRAIN only, then apply to test","Don't scale","Use min-max on test"], correct:1, explain:"Fitting on the full dataset leaks test statistics into training."},
    {courseId:"data-mining", q:"K-Means is sensitive to:", options:["Feature scale and initialization","Categorical features","Sample size only","The presence of column headers"], correct:0, explain:"Distance-based; large-scale features dominate. Use k-means++ init and standardize first."},
    {courseId:"data-mining", q:"Naive Bayes assumes:", options:["Features are independent given the class","Features are normally distributed","Linear decision boundary","No missing values"], correct:0, explain:"The 'naive' part is conditional independence — often violated yet works well in practice (esp. text)."},
    {courseId:"data-mining", q:"F1 score is:", options:["(P + R) / 2","Arithmetic mean of P and R","Harmonic mean of precision and recall","Geometric mean of TP and TN"], correct:2, explain:"F1 = 2·P·R/(P+R). Penalizes imbalance between precision and recall."},

    // Advanced DM
    {courseId:"adv-dm", q:"Random Forest reduces variance primarily via:", options:["Boosting on residuals","Bagging + feature subsampling at each split","Backpropagation","L2 regularization"], correct:1, explain:"Bootstrap aggregation + random feature subsets decorrelates the trees."},
    {courseId:"adv-dm", q:"L1 (Lasso) differs from L2 (Ridge) because L1:", options:["Always gives higher R²","Drives some coefficients exactly to zero (feature selection)","Requires standardization, Ridge doesn't","Works only for classification"], correct:1, explain:"L1's geometry produces sparse solutions — a built-in feature selector."},
    {courseId:"adv-dm", q:"Boosting trains models:", options:["In parallel on bootstrap samples","Sequentially, each focused on prior errors","Once, then averages","Only on outliers"], correct:1, explain:"Each new weak learner reduces the residual error of the prior ensemble (gradient boosting in function space)."},
    {courseId:"adv-dm", q:"You must standardize features before:", options:["Decision trees","Random Forests","PCA","XGBoost"], correct:2, explain:"PCA maximizes variance, so a feature with bigger units would dominate by scale alone."},
    {courseId:"adv-dm", q:"In association-rule mining, Lift > 1 means:", options:["No relationship","A → B is more likely than chance","Strong causation","B implies A"], correct:1, explain:"Lift = P(B|A)/P(B). 1 = independent; >1 = positive association; <1 = negative."},
    {courseId:"adv-dm", q:"TF-IDF down-weights:", options:["Rare words","Common words appearing in many documents","Numeric features","All stopwords automatically"], correct:1, explain:"IDF (inverse document frequency) shrinks the weight of terms found in many docs."},

    // Deep Learning
    {courseId:"deep-learning", q:"The default activation in modern hidden layers is:", options:["Sigmoid","Tanh","ReLU","Softmax"], correct:2, explain:"ReLU avoids saturation in positive range and is computationally cheap."},
    {courseId:"deep-learning", q:"Residual (skip) connections in ResNet help by:", options:["Adding more parameters","Letting gradients flow through identity paths, easing very deep training","Replacing batch norm","Avoiding the need for activations"], correct:1, explain:"They counteract vanishing gradients in deep networks."},
    {courseId:"deep-learning", q:"Dropout is a regularizer that:", options:["Removes outliers","Randomly zeroes activations during training","Adds Gaussian noise to inputs","Reduces learning rate"], correct:1, explain:"Random masking prevents co-adaptation and acts like an implicit ensemble."},
    {courseId:"deep-learning", q:"For an image classification task with 1000 labeled images, you should usually:", options:["Train a ResNet50 from scratch","Use transfer learning from a pretrained model","Use a single dense layer","Avoid CNNs"], correct:1, explain:"Pretrained features generalize; only the head needs retraining on small data."},
    {courseId:"deep-learning", q:"LSTM gates exist to:", options:["Speed up matrix multiplications","Solve vanishing-gradient issues in sequences and control long-term memory","Replace convolutions","Add classes"], correct:1, explain:"Input, forget, and output gates allow gradients (and memory) to persist over time."},
    {courseId:"deep-learning", q:"Cross-entropy loss is used for:", options:["Regression","Classification (matches softmax probabilities)","Clustering","PCA"], correct:1, explain:"It's the negative log likelihood under a categorical distribution."},

    // AI in Business
    {courseId:"ai-business", q:"Which is NOT a good ML candidate problem?", options:["Pattern exists, hard to specify by rules, data available","High volume, repeatable decision with feedback loop","Strict legal rules with zero tolerance for error","Customer churn forecasting"], correct:2, explain:"Where rules are explicit and errors unacceptable (e.g., legal compliance), deterministic logic beats ML."},
    {courseId:"ai-business", q:"RAG (Retrieval-Augmented Generation) is mainly used to:", options:["Fine-tune the model weights","Ground LLM answers in your own / fresh data","Reduce GPU cost","Replace embeddings"], correct:1, explain:"Retrieved snippets are inserted in the prompt at query time, so the model can cite proprietary or up-to-date content."},
    {courseId:"ai-business", q:"In MLOps, drift means:", options:["A bug in training code","Statistical change in inputs or in input-target relationship after deployment","Loss of internet connectivity","Slow inference"], correct:1, explain:"Covariate drift = inputs change; concept drift = the mapping X→y changes."},
    {courseId:"ai-business", q:"Most ML production failures stem from:", options:["Wrong algorithm","Data and pipeline issues","Insufficient GPUs","Lack of dropout"], correct:1, explain:"Stale features, broken joins, silent schema changes — operational problems, not algorithmic ones."},
    {courseId:"ai-business", q:"Responsible AI pillars include:", options:["Speed, profit, scale","Fairness, accountability, transparency, privacy, safety, robustness","Only privacy","Open source only"], correct:1, explain:"Standard FATPSR (or similar) framework for trustworthy AI."},

    // Process Mining
    {courseId:"process-mining", q:"The MINIMUM columns needed in an event log are:", options:["Case ID, Activity, Timestamp","Case ID, Resource, Cost","Activity, Duration, Outcome","Only Timestamp"], correct:0, explain:"Discovery and conformance can run on just these three; everything else is enrichment."},
    {courseId:"process-mining", q:"Conformance checking compares:", options:["Two designs","The discovered/normative model vs the actual event log","Cost vs revenue","KPIs across teams"], correct:1, explain:"It quantifies how much reality deviates from the intended process."},
    {courseId:"process-mining", q:"High fitness + low precision means the model is:", options:["Perfect","Too restrictive","Too generic — it allows behavior never observed","Broken"], correct:2, explain:"It replays everything (fitness) but also allows extra paths (low precision)."},
    {courseId:"process-mining", q:"Bottlenecks are best diagnosed by analyzing:", options:["Service time only","Waiting time per activity","Number of resources","Number of variants"], correct:1, explain:"Long waits between activities — not the work itself — reveal queuing and handoff bottlenecks."},

    // Optimization
    {courseId:"optimization", q:"A shadow price is the:", options:["Cost of a binary variable","Marginal value of relaxing a binding constraint by one unit","Discount from the supplier","Difference between primal and dual objective"], correct:1, explain:"It tells the business how much more profit a unit of resource is worth at the optimum."},
    {courseId:"optimization", q:"Branch and bound solves:", options:["LP only","Integer / mixed-integer programs","Nonlinear programs only","Linear regression"], correct:1, explain:"Solves LP relaxation, branches on fractional integers, prunes by bounds — backbone of modern MIP solvers."},
    {courseId:"optimization", q:"You'd use a heuristic (e.g., genetic algorithm) when:", options:["Problem is small and convex","Problem is huge, non-convex, or evaluation is black-box","You want guaranteed optimum quickly","Constraints are linear"], correct:1, explain:"Exact methods become impractical; heuristics trade optimality for tractability."},
    {courseId:"optimization", q:"In LP, strong duality means:", options:["Primal optimum equals dual optimum","No feasible solutions exist","Big-M is needed","Variables must be binary"], correct:0, explain:"Holds for LPs (under mild conditions) — gives sensitivity / shadow-price interpretation."},

    // INFO574 — Database Systems
    {courseId:"info574", q:"Which normal form removes transitive dependencies?", options:["1NF","2NF","3NF","BCNF only"], correct:2, explain:"3NF: no non-key attribute depends on another non-key. 1NF = atomic; 2NF = no partial dep on composite PK."},
    {courseId:"info574", q:"The 'I' in ACID stands for:", options:["Indexing","Isolation","Integrity","Idempotency"], correct:1, explain:"Isolation: concurrent transactions don't see each other's intermediate state. Levels: Read Uncommitted → Serializable."},
    {courseId:"info574", q:"A LEFT JOIN returns:", options:["Only matched rows","All rows from the left table, NULLs where the right has no match","All rows from both, with NULLs","Only unmatched rows"], correct:1, explain:"Use it for 'all X, with their Y if any' (e.g., all customers and their orders if any)."},
    {courseId:"info574", q:"Adding many indexes typically:", options:["Always speeds the database","Speeds reads, slows writes (each INSERT/UPDATE must update each index)","Has no cost","Removes the need for a primary key"], correct:1, explain:"Index every write target and your INSERT/UPDATE throughput plummets."},
    {courseId:"info574", q:"A junction (associative) table is needed to model:", options:["A 1:1 relationship","A 1:N relationship","A M:N relationship","Only NoSQL data"], correct:2, explain:"Many-to-many can't be represented with a single foreign key — you need a third table linking both."},
    {courseId:"info574", q:"Which SQL feature ranks rows WITHOUT collapsing them?", options:["GROUP BY","HAVING","Window function (e.g., RANK() OVER ...)","DISTINCT"], correct:2, explain:"Window functions compute per-row metrics across an OVER() partition while keeping each row in the output."},
    {courseId:"info574", q:"You'd pick a graph database when:", options:["You need ACID at scale","Relationships ARE the queries (friends-of-friends, paths)","You want simple key-value lookups","Schema is fixed and tabular"], correct:1, explain:"Graph DBs (Neo4j) traverse relationships natively; SQL self-joins become slow as paths deepen."},

    // INFO584 — Data Visualization
    {courseId:"info584", q:"According to Cleveland & McGill, which encoding is MOST accurately perceived?", options:["Color hue","Area","Position on a common scale","Volume"], correct:2, explain:"Position > Length > Angle > Area > Volume > Color hue. Bars (length on common axis) beat pies (angle/area) for comparison."},
    {courseId:"info584", q:"Which is the WORST default chart for comparing 8 categories?", options:["Horizontal bar","Pie","Dot plot","Lollipop"], correct:1, explain:"Pies fail with many slices — humans judge angles poorly. A horizontal bar (sorted) is almost always better."},
    {courseId:"info584", q:"A diverging color scale is best when:", options:["Values are unordered categories","Values are strictly positive and ordered","Values deviate from a meaningful midpoint (e.g., budget variance)","You have only 2 categories"], correct:2, explain:"Two hues meet at the midpoint to highlight + vs − deviation. Use sequential for single-direction ordered data."},
    {courseId:"info584", q:"Tufte's data-ink ratio principle says you should:", options:["Add more colors","Maximize ink that conveys data, minimize chartjunk","Use 3D when possible","Add gridlines everywhere"], correct:1, explain:"Erase borders, redundant labels, and decorative shading. Let the data speak."},
    {courseId:"info584", q:"Truncating the y-axis to start above zero on a bar chart:", options:["Is always fine","Can mislead by exaggerating differences (high Lie Factor)","Makes the chart accessible","Is required by Tufte"], correct:1, explain:"Bars rely on length — truncating distorts proportions. Use a dot/slope chart if you need to highlight a small delta."},
    {courseId:"info584", q:"To make a chart accessible to color-blind viewers, you should:", options:["Use red & green only","Encode with shape/pattern as well as color and pick a color-blind-safe palette","Use rainbow palettes","Avoid all color"], correct:1, explain:"Don't rely on color alone. Palettes like Viridis or Tableau-10 are tested across common color-blindness types."},
    {courseId:"info584", q:"For an executive dashboard, the focal KPI should sit:", options:["Bottom-right","Top-left (F-pattern reading)","Center-bottom","Anywhere"], correct:1, explain:"Western eyes start top-left. Place the most important number where attention lands first."},
    {courseId:"info584", q:"Showing a forecast as a single line, no band, is:", options:["Best practice","A lie of omission — overstates confidence","Required by Tableau","Equivalent to showing uncertainty"], correct:1, explain:"Always include a prediction interval or error band so the audience reads the uncertainty correctly."},

    // INFO588 aCAP
    {courseId:"info588", q:"How many domains in the INFORMS aCAP body of knowledge?", options:["3","5","7","10"], correct:2, explain:"Business Problem Framing → Analytics Problem Framing → Data → Methodology → Model Building → Deployment → Lifecycle."},
    {courseId:"info588", q:"Which domain do practitioners most often skip but matters most?", options:["Modeling","Business Problem Framing","Data Cleansing","Deployment"], correct:1, explain:"Without crisp framing, even excellent models solve the wrong problem."},
    {courseId:"info588", q:"Lifecycle management primarily covers:", options:["Initial model training","Drift monitoring, retraining cadence, governance, sunset","Hyperparameter search","Notebook formatting"], correct:1, explain:"Models decay; lifecycle treats them as products requiring maintenance and retirement criteria."},

    // Python
    {courseId:"python", q:"Why prefer sklearn Pipeline over manual preprocessing?", options:["It runs faster","It prevents data leakage and serializes preprocessing + model together","It removes the need for cross-validation","It writes SQL"], correct:1, explain:"Pipelines fit transformers on train folds only inside CV and ship as one object."},
    {courseId:"python", q:"In pandas, a vectorized operation is preferred because:", options:["It looks shorter","It runs in C under the hood — much faster than Python loops","It saves disk","It's required for plotting"], correct:1, explain:"Iterating row by row in Python is orders of magnitude slower than vectorized NumPy/pandas ops."},
    {courseId:"python", q:"Stratified splits are essential when:", options:["Data is balanced","Target classes are imbalanced","All features are numeric","Cross-validation isn't used"], correct:1, explain:"Without stratification, rare classes may be missing entirely in a fold/test set."},

    // Capstone
    {courseId:"capstone", q:"OWASP LLM Top 10 includes which threat?", options:["SQL injection only","Prompt injection","Buffer overflow","SSL stripping"], correct:1, explain:"Prompt injection (direct or indirect via retrieved content) tops the list."},
    {courseId:"capstone", q:"Indirect prompt injection happens when:", options:["The user types a malicious instruction directly","Malicious instructions are hidden in a document the LLM retrieves and processes","The model trains on bad data","The server crashes"], correct:1, explain:"Untrusted retrieved content is treated as instructions — fix with role separation, input sanitization, allowlists."},
    {courseId:"capstone", q:"A red-team evaluation harness primarily produces:", options:["Marketing material","Curated attack prompts, measured outcomes, and trend dashboards","Synthetic users","A vulnerability scanner for browsers"], correct:1, explain:"It systematically tests against known attack classes and tracks pass/fail over model versions."},
    {courseId:"capstone", q:"Business value of a security control can be estimated as:", options:["Lines of code","Probability of incident × cost of incident × residual reduction by the control","Number of alerts per day","Time to first response"], correct:1, explain:"Risk-reduction value framing: how much expected loss does the control remove?"}
  ],

  mindMap: {
    name: "MSBA Toolkit",
    children: [
      { name: "Statistics", children: [
        { name: "Descriptive" }, { name: "Inference" }, { name: "Regression" }, { name: "ANOVA" }, { name: "Chi-square" }
      ]},
      { name: "Data Mining", children: [
        { name: "EDA / Prep" }, { name: "Clustering" }, { name: "Classification" }, { name: "Ensembles" }, { name: "Association Rules" }
      ]},
      { name: "Deep Learning", children: [
        { name: "Dense NN" }, { name: "CNN" }, { name: "RNN / LSTM" }, { name: "GAN" }, { name: "Transfer Learning" }
      ]},
      { name: "Optimization", children: [
        { name: "LP" }, { name: "MIP" }, { name: "Duality" }, { name: "Heuristics" }
      ]},
      { name: "Database Systems", children: [
        { name: "ER Modeling" }, { name: "Normalization" }, { name: "SQL & Joins" }, { name: "ACID" }, { name: "NoSQL" }
      ]},
      { name: "Process Mining", children: [
        { name: "Event Logs" }, { name: "Discovery" }, { name: "Conformance" }, { name: "Performance" }
      ]},
      { name: "Data Visualization", children: [
        { name: "Visual Encoding" }, { name: "Chart Selection" }, { name: "Dashboard Design" }, { name: "Color & A11y" }, { name: "Storytelling" }
      ]},
      { name: "AI in Business", children: [
        { name: "Framing" }, { name: "MLOps" }, { name: "GenAI / RAG" }, { name: "Responsible AI" }
      ]},
      { name: "Capstone / Security", children: [
        { name: "OWASP LLM Top 10" }, { name: "Red Teaming" }, { name: "Eval Harness" }, { name: "Mitigations" }
      ]}
    ]
  }
};
