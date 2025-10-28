export const portfolioConfig = {
  personalInfo: {
    name: "Janith Madushan Jayawardhana",
    title: "Software Engineer",
    email: "madushanjayawardhana856@gmail.com",
    phone: "+94 705176720",
    github: "github.com/Jayawardhana22",
    linkedin: "linkedin.com/in/janith-madushan-jayawardhana-44aa312b0",
    resumeUrl: "/Janith_Madushan_Jayawardhana.pdf", // Place your PDF in public folder
     profilePhoto: "/WhatsApp Image 2025-10-05 at 12.47.37_4abf5cdf.jpg"
  },
  
  profileSummary: "Enthusiastic Software Engineer candidate with a BSc in Information Technology (University of Moratuwa, 2023–2027). Proficient in Java, C#, .NET Core, React, and SQL, with strong interests in networking, AI tools, and full-stack development. Motivated self-starter eager to build innovative digital solutions and grow in software engineering, cybersecurity, and AI-driven technologies.",
  
  projects: [
    {
      id: 1,
      title: "Workforce HR Management System",
      description: ".NET + React full-stack system with employee data management, attendance, and performance tracking.",
      technologies: [".NET Core", "React", "SQL Server", "RESTful APIs"],
      githubUrl: "https://github.com/Software-Project-L2S2",
      liveUrl: "#",
      image: "/HRmangmnet.png" // Add your images to public/images
    },
    {
      id: 2,
      title: "Soil Moisture Sensor",
      description: "IoT-based real-time soil condition monitoring system using microcontroller and sensors.",
      technologies: ["IoT", "Microcontroller", "Sensors"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/soilmisture.jpg"
    },
    {
      id: 3,
      title: "Web Map Application",
      description: "Interactive map visualization using HTML, CSS, JavaScript, and MongoDB.",
      technologies: ["HTML", "CSS", "JavaScript", "MongoDB"],
      githubUrl: "https://github.com/Jayawardhana22/web-map",
      liveUrl: "#",
      image: "/webmap.png"
    },
    {
      id: 4,
      title: "Amazon Clone",
      description: "Amazon UI clone with focus on layout precision and responsive frontend design.",
      technologies: ["React", "CSS", "Responsive Design"],
      githubUrl: "https://github.com/Jayawardhana22/amzonclone",
      liveUrl: "#",
      image: "/amzonclone.png"
    }
  ],
  
  workExperience: [
    {
      id: 1,
      position: "Administrative & Technical Assistant",
      company: "Singer (Dambulla Branch)",
      duration: "March 2022 – February 2023",
      responsibilities: [
        "Managed digital records",
        "Handled cash transactions",
        "Assisted customer service and sales operations"
      ]
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "BSc (Hons) in Information Technology",
      institution: "University of Moratuwa",
      duration: "2023–2027"
    },
    {
      id: 2,
      degree: "G.C.E. A/L - Physical Science Stream",
      institution: "Rangiri Dambulla Central College",
      duration: "2019"
    }
  ],
  
  technicalSkills: {
    languages: ["Java", "C", "Python", "JavaScript", "C#"],
    backend: [".NET Core", "Node.js", "Express.js"],
    frontend: ["React", "HTML", "CSS", "Bootstrap"],
    databases: ["MSSQL", "MySQL", "MongoDB"],
    tools: ["Postman", "Figma", "Canva", "Visual Studio", "VS Code", "GitHub", "JIRA"],
    networking: ["TCP/IP", "DNS", "DHCP", "Wireshark"]
  },
  
  softSkills: ["Teamwork", "Critical Thinking", "Problem Solving", "Adaptability"],
  
  certifications: [
    {
      id: 1,
      name: "Cisco Networking Academy",
      details: "CCNA Certification"
    }
  ]
};