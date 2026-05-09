export interface VideoLesson {
    id: string;
    title: string;
    url: string;
    thumbnail: string;
    duration: string;
    description: string;
    topics: { time: string; label: string }[];
}

export const courseData: VideoLesson[] = [
    {
        id: "JxIiE2UjGeA",
        title: "Paradigm Shift in Research Methodology: An Interdisciplinary Approach",
        url: "https://youtu.be/JxIiE2UjGeA",
        thumbnail: "https://i.ytimg.com/vi/JxIiE2UjGeA/maxresdefault.jpg",
        duration: "3:12",
        description: "An introduction to the systematic approach of designing and conducting studies in humanities and social sciences.",
        topics: [
            { time: "00:00:44", label: "Definition of Research Methodology" },
            { time: "00:02:08", label: "Curriculum Overview: Sampling, Hypothesis, and Objectives" }
        ]
    },
    {
        id: "lDeUVBUkRKM",
        title: "Lec 01: Introduction to the Course",
        url: "https://youtu.be/lDeUVBUkRKM",
        thumbnail: "https://i.ytimg.com/vi/lDeUVBUkRKM/sddefault.jpg",
        duration: "25:57",
        description: "Foundational concepts of research, distinguishing between methods and methodology.",
        topics: [
            { time: "00:01:07", label: "Validity and Truthfulness in Research" },
            { time: "00:02:36", label: "Methodology vs. Methods" },
            { time: "00:09:39", label: "Qualitative Research Characteristics" },
            { time: "00:10:05", label: "Quantitative Research Goals" }
        ]
    },
    {
        id: "daIU_gxWgAo",
        title: "Lec 02: Research Philosophy",
        url: "https://youtu.be/daIU_gxWgAo",
        thumbnail: "https://i.ytimg.com/vi/daIU_gxWgAo/sddefault.jpg",
        duration: "19:46",
        description: "Exploring the nature of reality (Ontology) and how we acquire knowledge (Epistemology).",
        topics: [
            { time: "00:00:51", label: "Ontology, Epistemology, and Axiology" },
            { time: "00:03:53", label: "The Research Onion Model" },
            { time: "00:13:32", label: "The FINER Framework for Research Questions" }
        ]
    },
    {
        id: "YPzEOPOwM0M",
        title: "Lec 03: Research Paradigm",
        url: "https://youtu.be/YPzEOPOwM0M",
        thumbnail: "https://i.ytimg.com/vi/YPzEOPOwM0M/sddefault.jpg",
        duration: "37:52",
        description: "A set of assumptions that guide how research is conducted and findings are interpreted.",
        topics: [
            { time: "00:02:12", label: "Positivism vs. Interpretivism" },
            { time: "00:07:01", label: "Ontology: What is Reality?" },
            { time: "00:10:19", label: "Epistemology: The Study of Knowledge" }
        ]
    },
    {
        id: "cgUlQv-L2Mo",
        title: "Lec 04: Different Aspects of Research Paradigm",
        url: "https://youtu.be/cgUlQv-L2Mo",
        thumbnail: "https://i.ytimg.com/vi/cgUlQv-L2Mo/sddefault.jpg",
        duration: "29:57",
        description: "Diving deeper into Constructivism, Pragmatism, and Critical Theory.",
        topics: [
            { time: "00:03:05", label: "Constructivism and Subjective Reality" },
            { time: "00:09:37", label: "Phenomenology in Research" },
            { time: "00:21:35", label: "Axiology: The Philosophical Study of Value" }
        ]
    },
    {
        id: "KIFFwM-UUzM",
        title: "Lec 05: Types of Research",
        url: "https://youtu.be/KIFFwM-UUzM",
        thumbnail: "https://i.ytimg.com/vi/KIFFwM-UUzM/sddefault.jpg",
        duration: "36:35",
        description: "Categorizing research by purpose: Basic, Applied, Correlational, and Ethnographic.",
        topics: [
            { time: "00:02:58", label: "Basic vs. Applied Research" },
            { time: "00:08:47", label: "Descriptive vs. Experimental Research" },
            { time: "00:25:29", label: "Grounded Theory" }
        ]
    },
    {
        id: "eTWRWcWyMnM",
        title: "Lec 06: Epistemological Aspect of Research",
        url: "https://youtu.be/eTWRWcWyMnM",
        thumbnail: "https://i.ytimg.com/vi/eTWRWcWyMnM/sddefault.jpg",
        duration: "37:53",
        description: "Detailed analysis of knowledge sources and objective vs. subjective perspectives.",
        topics: [
            { time: "00:06:02", label: "Sources of Knowledge: Intuitive, Logical, and Empirical" },
            { time: "00:11:03", label: "Objectivism vs. Subjectivism" },
            { time: "00:15:03", label: "Critical Realism" }
        ]
    },
    {
        id: "9iGDDHmpZB4",
        title: "Lec 07: Relevance of Epistemology in Research",
        url: "https://youtu.be/9iGDDHmpZB4",
        thumbnail: "https://i.ytimg.com/vi/9iGDDHmpZB4/sddefault.jpg",
        duration: "28:34",
        description: "Why the philosophical study of knowledge is critical for modern scientific understanding.",
        topics: [
            { time: "00:03:16", label: "Thomas Kuhn and Scientific Revolutions" },
            { time: "00:13:24", label: "Axiology: Ethical Principles in Research" },
            { time: "00:22:15", label: "Feminist Epistemologies" }
        ]
    },
    {
        id: "cCpP-5hh_QY",
        title: "Lec 08: Ontological Aspect of Research",
        url: "https://youtu.be/cCpP-5hh_QY",
        thumbnail: "https://i.ytimg.com/vi/cCpP-5hh_QY/sddefault.jpg",
        duration: "34:25",
        description: "The study of 'being' and how ontological stances impact research design.",
        topics: [
            { time: "00:01:23", label: "Etymology of Ontology" },
            { time: "00:08:04", label: "Realism vs. Constructivism" },
            { time: "00:13:01", label: "Objective vs. Subjective Ontology" }
        ]
    },
    {
        id: "jDav1DxxRDM",
        title: "Lec 09: Relevance of Ontology in Research",
        url: "https://youtu.be/jDav1DxxRDM",
        thumbnail: "https://i.ytimg.com/vi/jDav1DxxRDM/sddefault.jpg",
        duration: "30:00",
        description: "How identifying shared names for phenomena provides the basis for scientific work.",
        topics: [
            { time: "00:01:17", label: "Why Behavioral Ontologies Matter" },
            { time: "00:12:22", label: "Capturing Conceptual Structures of a Domain" }
        ]
    },
    {
        id: "lgUx03M-Qfk",
        title: "Lec 10: Epistemology and Ontology in Research",
        url: "https://youtu.be/lgUx03M-Qfk",
        thumbnail: "https://i.ytimg.com/vi/lgUx03M-Qfk/sddefault.jpg",
        duration: "36:43",
        description: "Integrating the two paradigms to create a cohesive research framework.",
        topics: [
            { time: "00:03:37", label: "The Four Philosophical Elements of a Paradigm" },
            { time: "00:16:33", label: "Plato's Idealism vs. Aristotle's Empiricism" }
        ]
    },
    {
        id: "4kv439c_eTg",
        title: "Lec 11: Phenomenological Aspect of Research",
        url: "https://youtu.be/4kv439c_eTg",
        thumbnail: "https://i.ytimg.com/vi/4kv439c_eTg/sddefault.jpg",
        duration: "38:59",
        description: "Understanding phenomena through the 'lived experience' of the participants.",
        topics: [
            { time: "00:01:21", label: "The First-Person Point of View" },
            { time: "00:23:38", label: "Main Tenets: Audience Interpretation and Bias Removal" }
        ]
    },
    {
        id: "ASXPFks_qZM",
        title: "Lec 12: Relevance of Phenomenology in Research",
        url: "https://youtu.be/ASXPFks_qZM",
        thumbnail: "https://i.ytimg.com/vi/ASXPFks_qZM/sddefault.jpg",
        duration: "24:30",
        description: "The historical development from Edmund Husserl to modern Interpretative Phenomenological Analysis (IPA).",
        topics: [
            { time: "00:04:37", label: "Interpretative Phenomenological Analysis (IPA)" },
            { time: "00:06:13", label: "The Concept of Bracketing" }
        ]
    },
    {
        id: "sTwv6V4OnQg",
        title: "Lec 13: What are Methods in Research?",
        url: "https://youtu.be/sTwv6V4OnQg",
        thumbnail: "https://i.ytimg.com/vi/sTwv6V4OnQg/sddefault.jpg",
        duration: "32:29",
        description: "Practical tools for data collection: surveys, experiments, and case studies.",
        topics: [
            { time: "00:03:22", label: "Research Methods as Instruments" },
            { time: "00:22:02", label: "Controlled vs. Natural Experiments" },
            { time: "00:28:20", label: "Interviews and Focus Groups" }
        ]
    },
    {
        id: "2mMrmyz09uY",
        title: "Lec 14: What is Methodology in Research?",
        url: "https://youtu.be/2mMrmyz09uY",
        thumbnail: "https://i.ytimg.com/vi/2mMrmyz09uY/sddefault.jpg",
        duration: "30:21",
        description: "The overarching strategy and steps involved in conducting a full research project.",
        topics: [
            { time: "00:01:50", label: "The 11 Steps of the Research Process" },
            { time: "00:07:44", label: "Preparing the Research Design" },
            { time: "00:16:40", label: "Defining the Problem Statement" }
        ]
    }
];