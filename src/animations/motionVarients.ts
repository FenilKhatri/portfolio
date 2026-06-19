import { Variants } from "framer-motion";

// Fade Up
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

// Slide Up
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

// Slide from Left
export const slideLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

// Slide from Right
export const slideRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

// Scale In
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.50 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

// Stagger (Parent)
export const stagger: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export const viewAnimation = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.1 },
};

export const loadAnimation = {
    initial: "hidden",
    animate: "show",
};