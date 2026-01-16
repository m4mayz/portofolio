import experienceDataAll from "@/data/experience.json";
import personalData from "@/data/personal.json";
import projectDataAll from "@/data/project.json";
import {
    Document,
    Link,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";
import React from "react";

// Define styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        padding: 30,
        fontSize: 9,
        fontFamily: "Helvetica",
        backgroundColor: "#ffffff",
        gap: 20,
    },
    // Left Column (60%)
    leftColumn: {
        width: "70%",
    },
    // Right Column (40%)
    rightColumn: {
        width: "30%",
        marginTop: 10,
    },
    // Header
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#2563eb",
        marginBottom: 3,
        letterSpacing: -0.5,
    },
    subtitle: {
        color: "#64748b",
        marginBottom: 15,
    },
    // Contact Info
    contactSection: {
        marginBottom: 5,
    },
    contactItem: {
        fontSize: 8,
        color: "#475569",
        marginBottom: 1,
        lineHeight: 1.4,
    },
    contactLink: {
        color: "#2563eb",
        textDecoration: "none",
    },
    // Section Titles
    sectionTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#2563eb",
        marginBottom: 10,
        marginTop: 15,
        textTransform: "none",
    },
    // Right column section title
    rightSectionTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#2563eb",
        marginBottom: 10,
        marginTop: 0,
        textTransform: "none",
    },
    firstRightSectionTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#2563eb",
        marginBottom: 10,
        marginTop: 15,
        textTransform: "none",
    },
    // Experience/Project Items
    itemContainer: {
        marginBottom: 12,
    },
    itemHeader: {
        marginBottom: 4,
    },
    itemTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 2,
    },
    itemSubtitle: {
        fontSize: 9,
        color: "#64748b",
        fontStyle: "italic",
        marginBottom: 2,
    },
    itemPeriod: {
        fontSize: 8,
        color: "#94a3b8",
        marginBottom: 4,
    },
    // Description
    descriptionList: {
        marginTop: 4,
    },
    descriptionItem: {
        fontSize: 8,
        color: "#475569",
        marginBottom: 3,
        lineHeight: 1.5,
        flexDirection: "row",
        paddingLeft: 0,
    },
    bullet: {
        width: 12,
        color: "#0f172a",
    },
    descriptionText: {
        flex: 1,
    },
    // Skills
    skillCategory: {
        marginBottom: 10,
    },
    skillCategoryTitle: {
        fontSize: 9,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 3,
    },
    skillItems: {
        fontSize: 8,
        color: "#475569",
        lineHeight: 1.5,
    },
    // Education
    educationItem: {
        marginBottom: 10,
    },
    degree: {
        fontSize: 9,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 2,
    },
    institution: {
        fontSize: 8,
        color: "#64748b",
        marginBottom: 1,
    },
    educationDetails: {
        fontSize: 8,
        color: "#94a3b8",
        marginVertical: 2,
    },
    // Projects section in left column
    projectItem: {
        marginBottom: 10,
    },
    projectTitle: {
        fontSize: 9,
        fontWeight: "bold",
        color: "#0f172a",
        marginBottom: 3,
    },
    projectDescription: {
        fontSize: 8,
        color: "#475569",
        lineHeight: 1.4,
        marginBottom: 2,
    },
    projectTech: {
        fontSize: 7,
        color: "#94a3b8",
        marginTop: 2,
    },
    projectLink: {
        fontSize: 7,
        color: "#2563eb",
        marginTop: 2,
    },
    // Interests
    interestsText: {
        fontSize: 8,
        color: "#475569",
        lineHeight: 1.5,
    },
});

interface CVDocumentProps {
    showProjects?: boolean;
    maxExperiences?: number;
    maxProjects?: number;
    language?: "en" | "id";
    translations?: {
        relevantExperience: string;
        skills: string;
        selectedProjects: string;
        education: string;
        interests: string;
        gpa: string;
    };
}

const CVDocument: React.FC<CVDocumentProps> = ({
    showProjects = true,
    maxExperiences,
    maxProjects = 3,
    language = "id",
    translations = {
        relevantExperience: "Pengalaman Relevan",
        skills: "Keahlian",
        selectedProjects: "Proyek Pilihan",
        education: "Pendidikan",
        interests: "Minat",
        gpa: "IPK",
    },
}) => {
    // Select data based on language
    const experienceData =
        language === "en" ? experienceDataAll.en : experienceDataAll.id;
    const projectData =
        language === "en" ? projectDataAll.en : projectDataAll.id;
    const personalDataLang =
        language === "en" ? personalData.en : personalData.id;

    const experiences = maxExperiences
        ? experienceData.slice(0, maxExperiences)
        : experienceData;
    const projects = showProjects ? projectData.slice(0, maxProjects) : [];

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Left Column */}
                <View style={styles.leftColumn}>
                    {/* Header */}
                    <View>
                        <Text style={styles.name}>{personalData.fullName}</Text>
                        <Text style={styles.subtitle}>
                            {personalDataLang.summary}
                        </Text>
                    </View>

                    {/* Experience */}
                    <View>
                        <Text style={styles.sectionTitle}>
                            {translations.relevantExperience}
                        </Text>
                        {experiences.map((exp, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>
                                        {exp.title} · {exp.company}
                                    </Text>
                                </View>
                                <Text style={styles.itemPeriod}>
                                    {exp.period}
                                </Text>
                                <View style={styles.descriptionList}>
                                    {exp.description.map((desc, i) => (
                                        <View
                                            key={i}
                                            style={styles.descriptionItem}
                                        >
                                            <Text style={styles.bullet}>•</Text>
                                            <Text
                                                style={styles.descriptionText}
                                            >
                                                {desc}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Right Column */}
                <View style={styles.rightColumn}>
                    {/* Contact Info */}
                    <View style={styles.contactSection}>
                        <Link
                            src={`mailto:${personalData.email}`}
                            style={styles.contactLink}
                        >
                            <Text style={styles.contactItem}>
                                {personalData.email}
                            </Text>
                        </Link>
                        <Link
                            src={`https://wa.me/${personalData.phone.replace(
                                /[^0-9]/g,
                                ""
                            )}`}
                            style={styles.contactLink}
                        >
                            <Text style={styles.contactItem}>
                                {personalData.phone}
                            </Text>
                        </Link>
                        <Link
                            src={`https://${personalData.github}`}
                            style={styles.contactLink}
                        >
                            <Text style={styles.contactItem}>
                                {personalData.github}
                            </Text>
                        </Link>

                        <Link
                            src={`https://${personalData.website}`}
                            style={styles.contactLink}
                        >
                            <Text style={styles.contactItem}>
                                {personalData.website}
                            </Text>
                        </Link>
                    </View>
                    {/* Skills */}
                    <View>
                        <Text style={styles.firstRightSectionTitle}>
                            {translations.skills}
                        </Text>
                        {personalDataLang.skills.map((skillGroup, index) => (
                            <View key={index} style={styles.skillCategory}>
                                <Text style={styles.skillCategoryTitle}>
                                    {skillGroup.category}
                                </Text>
                                <Text style={styles.skillItems}>
                                    {skillGroup.items.join(", ")}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Selected Projects */}
                    {showProjects && projects.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitle}>
                                {translations.selectedProjects}
                            </Text>
                            {projects.map((project, index) => (
                                <View key={index} style={styles.projectItem}>
                                    {project.projectUrl && (
                                        <Link
                                            src={project.projectUrl}
                                            style={styles.contactLink}
                                        >
                                            <Text style={styles.projectTitle}>
                                                {project.title}
                                            </Text>
                                        </Link>
                                    )}
                                    {!project.projectUrl && (
                                        <Text style={styles.projectTitle}>
                                            {project.title}
                                        </Text>
                                    )}

                                    <Text style={styles.projectDescription}>
                                        {project.description}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Education */}
                    <View>
                        <Text style={styles.sectionTitle}>
                            {translations.education}
                        </Text>
                        {personalDataLang.education.map((edu, index) => (
                            <View key={index} style={styles.educationItem}>
                                <Text style={styles.degree}>
                                    {edu.institution}
                                </Text>
                                {edu.gpa && (
                                    <Text style={styles.educationDetails}>
                                        {translations.gpa}: {edu.gpa}
                                    </Text>
                                )}
                                <Text style={styles.projectDescription}>
                                    {edu.description}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* Interests */}
                    <View>
                        <Text style={styles.sectionTitle}>
                            {translations.interests}
                        </Text>
                        <Text style={styles.interestsText}>
                            {personalDataLang.interests}
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default CVDocument;
