---
title: "the art of the side hustle"
category: "business"
date: "02-02-2023"
---

**Can an AI tool improve the early detection of Alzheimer’s better than traditional assessments like the MMSE or MoCA?**

Mahmoud Hisham Ahmed Abouelsoud

_Among clinical practices, early detection of Alzheimer's disease (AD) remains one of the greatest challenges. Traditional cognitive screening tools like the Mini-Mental State Examination (MMSE) and Montreal Cognitive Assessment (MoCA) have previously been shown to possess limitations regarding sensitivity and specificity; however, recent advances in artificial intelligence (AI) and machine learning (ML) have emerged as potential solutions for improving diagnostic accuracy. This research aims to compare and contrast the diagnostic precision of AI-powered detection methods with traditional cognitive tests for the early detection of Alzheimer's disease and mild cognitive impairment (MCI). A systematic review of peer-reviewed literature exploring AI methods, including deep learning, ML algorithms, and multimodal systems, with traditional neuropsychological tests in AD diagnosis was conducted. Findings showed that AI-based approaches demonstrated consistently better diagnostic performance, while traditional assessments reported more variable performance. Meta-analyses reported AI methods achieved high pooled sensitivities and specificities for MCI-dementia discrimination, while traditional tools had reduced sensitivity in the early stages. Modern evidence strongly supports the superiority of AI-powered diagnostic tools over traditional cognitive tests for early detection of AD, but integration, rather than substitution, may be of greatest clinical utility._

**Introduction**  
Alzheimer's disease is the most prevalent form of dementia worldwide, affecting an estimated 47 million patients globally, with incidence projected to triple by 2050 (Rutkowski et al., 2018). In order to optimize therapeutic interventions and management modalities available for patients, early detection of AD is of utmost importance due to its progressive neurodegenerative nature (Rudroff et al., 2024). For decades, traditional cognitive screening instruments such as the Mini-Mental State Examination (MMSE) and Montreal Cognitive Assessment (MoCA) have been the primary diagnostic tools in clinical practice (Roalf et al., 2012; Tsoi et al., 2015). However,  
substantial evidence pointing towards notable limitations of conventional assessment methodologies remains; key among those being the sensitivity to early-stage cognitive dysfunction and specificity in differentiating among various neurocognitive disorders (Roalf et al., 2012; Carson et al., 2017). Through the utilization of advanced pattern recognition, multimodal data integration, and automatic analysis of complex biomarker combinations, the introduction of ML and artificial intelligence technologies presents novel possibilities for enhancing diagnostic accuracy and addressing the limitations that arise with conventional technologies (Jo et al., 2019; Bazarbekov et al., 2024; Rudroff et al., 2024).

**Literature Review**

**_Traditional Cognitive Test Performance_**

_MMSE Diagnostic Accuracy_

The Mini-Mental State Examination, which was developed as a brief cognitive screening tool, has undergone rigorous validation across various clinical populations. A meta-analysis of 102 studies comprising 36,080 participants provided a pooled sensitivity of 0.81 and specificity of 0.89 for dementia detection, with an area under the curve (AUC) of 0.92 (Tsoi et al., 2015). Despite these seemingly robust metrics, systematic reviews have identified considerable heterogeneity in performance across different clinical settings and patient populations (Tsoi et al., 2015).  
Subgroup analyses indicated that MMSE performance differed significantly based on educational level, cultural factors, and severity of cognitive impairment (Owen et al., 2018). Network meta-analyses comparing different diagnostic thresholds indicated that MMSE ≤25/30 had optimum specificity (0.84, 95% CrI: 0.79-0.89) while MMSE ≤27/30 had improved sensitivity at the cost of reduced specificity (0.58, 95% CrI: 0.45-0.70) (Owen et al., 2018).

_MoCA Performance Characteristics_

The Montreal Cognitive Assessment was designed to address perceived limitations of the MMSE, specifically regarding the detection of mild cognitive impairment and dementia in its early stages (Roalf et al., 2012). Comparison studies with 587 subjects (321 AD, 126 MCI, 140 healthy controls) revealed that MoCA was more sensitive in differentiating MCI from healthy controls than MMSE (Roalf et al., 2012).  
Systematic reviews and meta-analyses, however, have generated significant concerns regarding false-positive rates with the originally proposed cutoff score of 26/30 (Carson et al., 2017). A comprehensive meta-analysis of nine validation studies revealed that a reduced cutoff score of 23/30 yielded optimal diagnostic accuracy on several parameters, significantly lowering false-positive rates without sacrificing sensitivity (Carson et al., 2017). Network meta-analyses placed MoCA ≥26 at optimal sensitivity (0.97, 95% CrI: 0.94-0.99) while MoCA ≥22 was at optimal specificity (0.77, 95% CrI: 0.67-0.85) (Owen et al., 2018).

_Limitations of Traditional Approaches_

Research inevitably demonstrates that traditional cognitive assessments possess inherent limitations for early AD detection (Roalf et al., 2012; Tsoi et al., 2015). Evidence indicates that the inclusion of informant-based functional assessments in MMSE or MoCA greatly improves diagnostic accuracy, with the suggestion that single-modality cognitive testing lacks the sensitivity for detection at its earliest stage (Roalf et al., 2012). Traditional assessments also lose the capacity to detect subtle changes in cognition that appear prior to the onset of clinical symptoms, limiting their utility for preventive intervention efforts (Cay et al., 2024).

**_Artificial Intelligence-Based Detection Techniques_**

_Deep Learning Techniques_

Systematic reviews of deep learning applications for AD diagnosis have reported remarkable advances in diagnostic accuracy (Jo et al., 2019). A systematic review of 16 studies between 2013-2018 reported that deep learning approaches using neuroimaging data achieved AD classification accuracies of as high as 96.0% and MCI conversion prediction accuracies of 84.2% (Jo et al., 2019). Hybrid approaches combining deep learning feature selection and traditional ML classifiers demonstrated even greater performance, with stacked auto-encoder (SAE) methods yielding up to 98.8% accuracy for AD classification and 83.7% for MCI-to-AD conversion prediction (Jo et al., 2019).  
More recent developments in convolutional neural network (CNN) architectures have produced excellent performances utilizing structural MRI data from the Alzheimer's Disease Neuroimaging Initiative (ADNI) dataset (El-Assy et al., 2024). Novel CNN designs with dual-pathway processing through varying filter sizes achieved 99.43% accuracy for three-class classification, 99.57% for four-class classification, and 99.13% for five-class classification tasks (El-Assy et al., 2024). These represent considerable improvements over traditional ML approaches, which have 76-86% accuracy using traditional algorithms in general (Borchert et al., 2023).

_Multimodal AI Frameworks_

Multimodal AI models that combined different data modalities were demonstrated to be superior over single-modality models (Rudroff et al., 2024; P. Nagarhalli et al., 2024; Xue et al., 2024). One novel multimodal method that combined MRI imaging, cognitive tests, and biomarker data with CNN and Long Short-Term Memory (LSTM) networks achieved a 96.88% classification accuracy for MCI, AD, and controls (Nagarhalli et al., 2024). This multi-pronged approach enables earlier detection time points of AD compared to traditional methods by incorporating biomarkers that can indicate disease years before the onset of clinical symptoms (Nagarhalli et al., 2024).  
Longitudinal multimodal systems using time-series transformers have also been effective for early diagnosis of late-onset Alzheimer's disease (Li et al., 2024). These systems have AUC values \>0.80 for individuals progressing from normal control to early mild cognitive impairment, with greater predictive capability compared to traditional cross-sectional assessments (Li et al., 2024).

_Dedicated AI Applications_

Beyond neuroimaging, AI applications have extended to other diagnostic modalities. AI in speech analysis has demonstrated over 78% accuracy in predicting cognitive impairment progression through the analysis of language structure from cognitive test transcripts (Cay et al., 2024). Digital biomarker extraction from speech data with timing, pitch, and loudness metrics demonstrated precision and balanced accuracy measures of 88.1% and 76.3%, respectively, for the discrimination of cognitively impaired and cognitively normal older adults (Cay et al., 2024).  
Retinal imaging and ML are additional innovative approaches, with proof-of-concept models successfully detecting symptomatic Alzheimer's disease using multimodal retinal imaging data. EEG-based AI pipelines using information geometry ML algorithms have also shown promise in developing digital biomarkers for dementia detection and monitoring (Rutkowski et al., 2018).

**Comparative Performance Analysis**

**_Direct Comparison Studies_**

Meta-analytic evidence directly comparing AI with traditional approaches demonstrates consistent superiority of artificial intelligence methodologies (Borchert et al., 2023; Gardner, 2019). Meta-analysis of 21 studies examining AI and ML algorithms for MCI-dementia discrimination presented a pooled sensitivity of 82% and specificity of 82% with corrected figures of 83% sensitivity and 79% specificity following adjustment for significant correlations (Gardner, 2019). These measures of performance are all greater than those achieved by conventional neuropsychological tests with comparable populations (Gardner, 2019).  
Systematic reviews of 255 studies of AI applications in neuroimaging for dementia diagnosis concluded that discriminative models, and even more so neural networks, worked optimally for differentiating Alzheimer's disease from controls (Borchert et al., 2023). The accuracy of AI algorithms varied by patient cohort, imaging modalities, and stratification strategies, but consistently outperformed traditional assessment methods in diverse clinical populations (Borchert et al., 2023).

**_Biomarker Integration Performance_**

AI approaches demonstrate advantages in integrating complex biomarker sets that are not accommodated by traditional assessments (Tiwari et al., 2024; Abiad et al., 2024). ML models based on cerebrospinal fluid biomarkers (amyloid beta 1-42, T-tau, P-tau) yielded 64% to 69% accuracy and AUC 0.64-0.73, demonstrating modest but consistent performance improvements over traditional cognitive scores alone (Tiwari et al., 2024). The integration of biomarker information and AI algorithms offers promising directions for personalized AD symptom characterization and early detection (Abiad et al., 2024).  
Deep learning with amyloid PET imaging showed a high accuracy of 91.5-97.6% and AUC of 96-99% across different datasets, with robust performance regardless of imaging equipment, reconstruction techniques, or tracers used (Fan et al., 2024). The findings greatly exceed the diagnostic precision achievable through the use of standard cognitive tests in combination with clinical judgment (Fan et al., 2024).

**_Clinical Validation and Real-world Performance_**

Real-world validation studies have shown that AI performs better in clinical environments (Fujita et al., 2022; Xue et al., 2024). One AI-based diagnostic model trained with data from 7,932 patients demonstrated high recall and precision for AD diagnosis, making it possible for non-specialists to diagnose AD with a \>70% probability based on just six to seven clinical parameters (Fujita et al., 2022). This is a significant step up from traditional approaches, which typically require specialized training and large-scale neuropsychological test batteries (Fujita et al., 2022).  
Multimodal ML models integrating demographics, medical history, neuropsychological examinations, functional assessments, and neuroimaging scans have demonstrated greater diagnostic accuracy than clinician-only assessment in comparison studies (Xue et al., 2024). AI-augmented clinician assessments performed better than traditional clinical assessments alone for all except simple cases with pure dementia pathologies (Xue et al., 2024\)

**Methodological Considerations**

**_Data Sources and Validation_**

Most AI studies have heavily relied on the AD Neuroimaging Initiative dataset (ADNI), with 71% of studies using this resource and no other individual dataset being used more than five times (Borchert et al., 2023). Although ADNI provides high-quality standardized data, this concentration raises questions and concerns regarding generalizability to diverse clinical populations and healthcare settings (Borchert et al., 2023). Current recommendations emphasize the need for validation on independent, geographically diverse datasets to establish clinical utility (Borchert et al., 2023; Xue et al., 2024).

**_Algorithmic Approaches and Trends in Performance_**

Systematic reviews consistently demonstrate a temporal trend towards the expanded utilization of complex discriminative models, particularly neural networks, which uphold superior performance to traditional classifiers for AD versus healthy control classification (Borchert et al., 2023). With a weighted average accuracy of 89% compared to 76-86% for traditional ML methods, convolutional neural networks have been found the most effective method for neuroimaging-based classification (Borchert et al., 2023).

**_Challenges to AI Clinical Integration_**

Despite higher diagnostic performance, AI tools have significant challenges to implementation, including requirements for specialized hardware, validation in diverse populations, and integration into currently established clinical workflows (Rudroff et al., 2024). Studies emphasize external validation and determination of generalizability before utilizing it in the clinical setting, particularly with the complexity of real-world clinical presentations (Rudroff et al., 2024; Borchert et al., 2023).

**Discussion**

**_Evidence for AI Superiority_**

Evidence is overwhelmingly supportive of the greater diagnostic precision found with AI-powered detection methods over traditional cognitive examinations in the early diagnosis of AD. Meta-analysis results consistently demonstrate the improved sensitivity, specificity, and overall accuracy of AI methods in several validation studies and diverse clinical populations (Gardner, 2019; Jo et al., 2019; Borchert et al., 2023). The ability of AI systems to integrate multimodal data sources, detect subtle pattern changes, and provide objective, reproducible assessments is representative of significant advances over traditional single-domain cognitive testing (Rudroff et al., 2024; Xue et al., 2024; Nagarhalli et al., 2024).

**_Clinical Implications_**

The more skillful performance of AI instruments has significant clinical implications for screening, personalized treatment planning, disease monitoring, and prognostic assessment (El-Assy et al., 2024). Early detection prospects, such as predicting the development of AD up to seven years prior to symptom onset, have unprecedented potential for preventive intervention and disease modification strategies (Li et al., 2024). The incorporation of AI into existing clinical workflows may optimize diagnostic accuracy without sacrificing viable practicability in diverse healthcare settings (Xue et al., 2024; Fujita et al., 2022).

**_Implementation Considerations_**

While AI demonstrates apparent performance advantages, data standardization issues, model interpretability, generalizability, and ethical issues must be resolved to establish clinical success (Rudroff et al., 2024). The augmentation of AI tools with traditional assessments, rather than outright replacement, offers the potential for maximal clinical utility by combining AI's objectivity and accuracy with the clinical context and interpretive sophistication afforded by traditional neuropsychological assessment (Roalf et al., 2012; Xue et al., 2024).

**_Future Directions_**

Future directions include the development of explainable AI approaches providing insight into disease-relevant features and mechanisms, incorporation of other hybrid data types including omics data, and expansion of longitudinal modelling capabilities to track disease progression (Jo et al., 2019). The continued development of AI techniques, coupled with growing validation in diverse clinical populations, foretells continued improvement in diagnostic performance and clinical utility (Li et al., 2024; Borchert et al., 2023).

**Conclusion**

The available evidence from research provides a strong testament to the superior diagnostic capabilities of AI-based detection methods compared to traditional cognitive testing for the early detection of AD. AI techniques consistently demonstrate higher accuracy, sensitivity, and specificity on multiple validation studies, with deep learning methods exhibiting accuracy exceeding 95% compared to traditional tests showing more variable performance in the range of 70-90% (El-Assy et al., 2024; Jo et al., 2019).  
The ability of AI systems to integrate multimodal sources of data, detect subtle biomarker patterns, and provide early prediction capability is a significant advancement over conventional single-domain cognitive testing (Nagarhalli et al., 2024; Rudroff et al., 2024; Li et al., 2024). Successful clinical implementation, however, will require addressing generalizability, standardization, and integration issues with existing healthcare workflows (Rudroff et al., 2024; Borchert et al., 2023).  
The best strategy for clinical practice could be integration, rather than substitution of conventional evaluations, taking advantage of AI's higher diagnostic precision while preserving the clinical context and interpretive skill afforded by neuropsychological assessment (Roalf et al., 2012; Xue et al., 2024). As AI technologies continue to surface and be tested in heterogeneous clinical populations, they have tremendous promises for revolutionizing early detection of AD and improving patient outcomes through providing opportunities for early intervention strategies (Li et al., 2024; Fujita et al., 2022).

**References**

Abiad, E. E., Al-Kuwari, A., Al-Aani, U., Jaidah, Y. A., & Chaari, A. (2024). Navigating the Alzheimer’s Biomarker Landscape: A Comprehensive Analysis of Fluid-Based Diagnostics. Cells, 13(22), 1901\. https://doi.org/10.3390/cells13221901

Bazarbekov, I., Razaque, A., Ipalakova, M., Yoo, J., Assipova, Z., & Almisreb, A. (2024). A review of artificial intelligence methods for alzheimer’s disease diagnosis: Insights from neuroimaging to Sensor Data Analysis. _Biomedical Signal Processing and Control_, _92_, 106023\. https://doi.org/10.1016/j.bspc.2024.106023

Borchert, R. J., Azevedo, T., Badhwar, A., Bernal, J., Betts, M., Bruffaerts, R., Burkhart, M. C., Dewachter, I., Gellersen, H. M., Low, A., Lourida, I., Machado, L., Madan, C. R., Malpetti, M., Mejia, J., Michopoulou, S., Muñoz‐Neira, C., Pepys, J., Peres, M., … Rittman, T. (2023). Artificial Intelligence for diagnostic and prognostic neuroimaging in dementia: A systematic review. _Alzheimer’s \&amp; Dementia_, _19_(12), 5885–5904. https://doi.org/10.1002/alz.13412

Carson, N., Leach, L., & Murphy, K. J. (2017). A re‐examination of Montreal Cognitive Assessment (MOCA) cutoff scores. _International Journal of Geriatric Psychiatry_, _33_(2), 379–388. https://doi.org/10.1002/gps.4756

Cay, G., Pfeifer, V. A., Lee, M., Rouzi, M. D., Nunes, A. S., El-Refaei, N., Momin, A. S., Atique, M. M. U., Mehl, M. R., Vaziri, A., & Najafi, B. (2024, January 12). Harnessing speech-derived digital biomarkers to detect ... https://karger.com/ger/article/70/4/429/895386/Harnessing-Speech-Derived-Digital-Biomarkers-to

El-Assy, A. M., Amer, H. M., Ibrahim, H. M., & Mohamed, M. A. (2024). A novel CNN Architecture for accurate early detection and classification of alzheimer’s disease using MRI Data. _Scientific Reports_, _14_(1). https://doi.org/10.1038/s41598-024-53733-6

Fan, S., Ponisio, M. R., Xiao, P., Ha, S. M., Chakrabarty, S., Lee, J. J., Flores, S., LaMontagne, P., Gordon, B., Raji, C. A., Marcus, D. S., Nazeri, A., Ances, B. M., Bateman, R. J., Morris, J. C., Benzinger, T. L., & Sotiras, A. (2024). AmyloidPETNet: Classification of amyloid positivity in brain pet imaging using end-to-end deep learning. _Radiology_, _311_(3). https://doi.org/10.1148/radiol.231442

Fujita, K., Katsuki, M., Takasu, A., Kitajima, A., Shimazu, T., & Maruki, Y. (2022). Development of an artificial intelligence‐based diagnostic model for alzheimer’s disease. _AGING MEDICINE_, _5_(3), 167–173. https://doi.org/10.1002/agm2.12224

Gardner, J. (2019). Artificial Intelligence and machine learning algorithms for informing the diagnostic process of mild cognitive impairment and dementia. _Archives of Clinical Neuropsychology_, _34_(6), 838–838. https://doi.org/10.1093/arclin/acz035.06

Jo, T., Nho, K., & Saykin, A. J. (2019). Deep learning in alzheimer’s disease: Diagnostic classification and prognostic prediction using Neuroimaging Data. _Frontiers in Aging Neuroscience_, _11_. https://doi.org/10.3389/fnagi.2019.00220

Li, V. O., Lam, J. C., & Han, Y. (2024, January 1). _LMP-TX: An AI-driven integrated longitudinal multi-modal platform for early prognosis of late onset alzheimer’s disease_. medRxiv. https://www.medrxiv.org/content/10.1101/2024.10.02.24314019v1.full

Nagarhalli, T. P., Patil, S., Pande, V., Aswalekar, U., & Patil, P. (2024). A novel multimodal framework for early detection of Alzheimer’s disease using deep learning. International Journal of Electronics and Communication Engineering, 11(11), 12–25. https://doi.org/10.14445/23488549/ijece-v11i11p102

Owen, R. K., Cooper, N. J., Quinn, T. J., Lees, R., & Sutton, A. J. (2018). Network meta-analysis of Diagnostic Test Accuracy Studies identifies and ranks the optimal diagnostic tests and thresholds for health care policy and decision-making. _Journal of Clinical Epidemiology_, _99_, 64–74. https://doi.org/10.1016/j.jclinepi.2018.03.005

Roalf, D. R., Moberg, P. J., Xie, S. X., Wolk, D. A., Moelter, S. T., & Arnold, S. E. (2012). Comparative accuracies of two common screening instruments for classification of alzheimer’s disease, mild cognitive impairment, and healthy aging. _Alzheimer’s & Dementia_, _9_(5), 529–537. https://doi.org/10.1016/j.jalz.2012.10.001

Rudroff, T., Rainio, O., & Kl\&eacute;n, R. (2024, June 13). _AI for the prediction of early stages of alzheimer’s disease from neuroimaging biomarkers – a narrative review of a growing field \- neurological sciences_. SpringerLink. https://link.springer.com/article/10.1007/s10072-024-07649-8

Rutkowski, T. M., Zhao, Q., Abe, M. S., & Otake, M. (2018, November 30). _Ai neurotechnology for Aging Societies \-- task-load and dementia EEG digital biomarker development using Information Geometry Machine Learning Methods_. arXiv.org. https://arxiv.org/abs/1811.12642

Tiwari, V. K., Indic, P., & Tabassum, S. (2024). _A study on machine learning models in detecting cognitive impairments in alzheimer’s patients using cerebrospinal fluid biomarkers_. American journal of Alzheimer’s disease and other dementias. https://pmc.ncbi.nlm.nih.gov/articles/PMC11632866/

Tsoi, K. K. F., Chan, J. Y. C., Hirai, H. W., Wong, S. Y. S., & Kwok, T. C. Y. (2015, June 8). Cognitive tests to detect dementia: A systematic review and meta-analysis | dementia and cognitive impairment | jama internal medicine | jama network. https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2301149

Xue, C., Kowshik, S. S., Lteif, D., Puducheri, S., Jasodanand, V. H., Zhou, O. T., Walia, A. S., Guney, O. B., Zhang, J. D., Poésy, S., Kaliaev, A., Andreu-Arasa, V. C., Dwyer, B. C., Farris, C. W., Hao, H., Kedar, S., Mian, A. Z., Murman, D. L., O’Shea, S. A., … Kolachalama, V. B. (2024). AI-based differential diagnosis of dementia etiologies on Multimodal Data. _Nature Medicine_, _30_(10), 2977–2989. https://doi.org/10.1038/s41591-024-03118-z
