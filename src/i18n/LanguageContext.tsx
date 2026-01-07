"use client";

import React, {
    createContext,
    useCallback,
    useContext,
    useState,
    useSyncExternalStore,
} from "react";
import en from "./languages/en.json";
import id from "./languages/id.json";

type Language = "en" | "id";

type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    isHydrated: boolean;
}

const translations: Record<Language, Translations> = { en, id };

// Default language for SSR consistency
const DEFAULT_LANGUAGE: Language = "id";

// Function to get initial language from localStorage (only runs on client)
const getInitialLanguage = (): Language => {
    if (typeof window !== "undefined") {
        const stored = localStorage.getItem("language") as Language | null;
        if (stored && (stored === "en" || stored === "id")) {
            return stored;
        }
    }
    return DEFAULT_LANGUAGE;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // Use lazy initialization - the function runs once during initial render
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    // Track hydration without causing cascading renders
    // On the server, this is false. On the client after hydration, this is true.
    const isHydrated = useSyncExternalStore(
        () => () => {}, // subscribe - no-op, never changes
        () => true, // getSnapshot (client) - always true after hydration
        () => false // getServerSnapshot - false during SSR
    );

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
        }
    }, []);

    const t = useCallback(
        (key: string): string => {
            const keys = key.split(".");
            let value: unknown = translations[language];

            for (const k of keys) {
                if (value && typeof value === "object" && k in value) {
                    value = (value as Record<string, unknown>)[k];
                } else {
                    return key;
                }
            }

            return typeof value === "string" ? value : key;
        },
        [language]
    );

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, t, isHydrated }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
