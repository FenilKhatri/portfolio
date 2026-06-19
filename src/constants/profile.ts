import { Mail, Phone, Pin, User } from "lucide-react";

export const PROFILE = {
  data: [
    {
      id: 1,
      icon: User,
      title: "Name",
      value: "Fenil Khatri",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      href: "mailto:fenilkhatri931@gmail.com",
      value: "fenilkhatri931@gmail.com",
    },
    {
      id: 3,
      icon: Phone,
      title: "Phone",
      href: "tel:+919313407400",
      value: "+91 9313407400",
    },
    {
      id: 4,
      icon: Pin,
      title: "Location",
      value: "Surat, Gujarat, India",
    },
  ],
  socials: {
    github: "https://github.com/FenilKhatri",
    linkedin: "https://linkedin.com/in/fenilkhatri",
    instagram: "https://instagram.com/fenil_khatri_913",
  },
};