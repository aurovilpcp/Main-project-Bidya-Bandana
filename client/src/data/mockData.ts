import { FileText, Users, BookOpen, Calendar, Award, Star, Phone, Mail, MapPin } from "lucide-react";

export const STUDY_MATERIALS = [
  {
    id: 1,
    title: "Physics: Rotational Motion Mechanics",
    subject: "Physics",
    class: "Class XI",
    category: "Notes",
    date: "2024-10-15",
    downloads: 1240,
    description: "Comprehensive notes covering moment of inertia, torque, and angular momentum with solved examples.",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80", 
  },
  {
    id: 2,
    title: "Chemistry: Organic Reaction Mechanisms",
    subject: "Chemistry",
    class: "Class XII",
    category: "Worksheet",
    date: "2024-10-12",
    downloads: 850,
    description: "Practice worksheet for SN1, SN2, E1, and E2 reactions with detailed answer key.",
    thumbnail: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&q=80",
  },
  {
    id: 3,
    title: "Mathematics: Calculus Integration Tricks",
    subject: "Mathematics",
    class: "JEE Advanced",
    category: "Cheatsheet",
    date: "2024-10-10",
    downloads: 2100,
    description: "Quick reference guide for integration by parts, substitution, and partial fractions.",
    thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&q=80",
  },
  {
    id: 4,
    title: "Biology: Genetics and Evolution",
    subject: "Biology",
    class: "NEET",
    category: "Notes",
    date: "2024-10-08",
    downloads: 1500,
    description: "Detailed notes on Mendelian genetics, DNA structure, and evolutionary theories.",
    thumbnail: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80",
  },
  {
    id: 5,
    title: "Physics: Electrostatics PYQs",
    subject: "Physics",
    class: "Class XII",
    category: "Question Bank",
    date: "2024-10-05",
    downloads: 980,
    description: "Previous year questions from CBSE and JEE Mains for Electrostatics.",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  },
  {
    id: 6,
    title: "English: Flamingo Chapter Summaries",
    subject: "English",
    class: "Class XII",
    category: "Summary",
    date: "2024-10-01",
    downloads: 600,
    description: "Chapter-wise summaries and character sketches for Flamingo textbook.",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
  }
];

export const NOTICES = [
  {
    id: 1,
    title: "Winter Vacation Announcement",
    date: "2024-12-15",
    category: "General",
    description: "The school will remain closed from Dec 24th to Jan 2nd for winter break. Online doubt clearing sessions will continue.",
    file: "winter_holiday.pdf"
  },
  {
    id: 2,
    title: "JEE Main Phase 1 Admit Card Released",
    date: "2024-12-10",
    category: "Exam",
    description: "Students appearing for JEE Main Phase 1 can now download their admit cards from the NTA website.",
    file: "jee_admit.pdf"
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting (Class XI)",
    date: "2024-11-28",
    category: "Meeting",
    description: "PTM for Class XI Science stream is scheduled for Saturday, Dec 5th, from 9 AM to 12 PM.",
    file: "ptm_schedule.pdf"
  },
  {
    id: 4,
    title: "Annual Sports Day Registration",
    date: "2024-11-20",
    category: "Events",
    description: "Registration for Annual Sports Day is open. Interested students should contact Mr. Das by Nov 25th.",
    file: "sports_reg.pdf"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Anjali Mishra",
    role: "Parent",
    content: "Bidya Bandana has transformed my son's approach to studies. The faculty is incredibly supportive and the hostel facilities are safe and comfortable.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Das",
    role: "Alumni (IIT Kharagpur)",
    content: "The rigor and discipline at this institute helped me crack JEE Advanced. Bidya Sagar sir's mathematics classes are legendary.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sahoo",
    role: "Student (Class XII)",
    content: "The study materials are very concise and helpful. The teachers are always available to clear doubts, even late at night.",
    rating: 4
  }
];

export const CATEGORIES = [
  "Notes", "Worksheet", "Question Bank", "Cheatsheet", "Summary", "Mock Test"
];

export const STATS = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Students Mentored", value: "5000+" },
  { label: "Expert Faculty", value: "25+" },
  { label: "Selections (Med/Engg)", value: "1200+" }
];

export const CONTACT_INFO = {
  address: "Khandagiri, Bhubaneswar, Odisha, India",
  phone: "+91 94370 00000", // Placeholder based on typical indian mobile format
  email: "info@bidyaclasses.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.134346063383!2d85.7745!3d20.2546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7a3b969201b%3A0x851356066052760!2sKhandagiri%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1635070041078!5m2!1sen!2sin"
};
