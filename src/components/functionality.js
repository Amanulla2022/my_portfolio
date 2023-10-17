import ResumePDF from "../assets/pdf/ResumE.pdf";
function scrollToContactPage() {
  document.getElementById("contactPage").scrollIntoView({ behavior: "smooth" });
}

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = ResumePDF;
  link.download = "ResumE.pdf";
  link.click();
};

const openSocialMedia = (profile) => {
  const profileUrls = {
    linkedin: "https://www.linkedin.com/in/amanulla-mulla-000678232/",
    github: "https://github.com/Amanulla2022",
    facebook: "https://www.facebook.com/aman.mulla.90281/://web.whatsapp.com/",
    instagram: "https://www.instagram.com/amanulla313/",
    youtube: "https://www.youtube.com/channel/UCEIJvxHuFMR4dbK_nZix1AQ",
    whatsapp: "https://web.whatsapp.com/",
    twitter: "https://twitter.com/Amanulla1999",
    sapient: "https://www.publicissapient.com/",
  };

  if (profileUrls[profile]) {
    window.open(profileUrls[profile], "_blank");
  }
};

const scrollToContactInfo = () => {
  const contactInfoSection = document.getElementById("contact");
  if (contactInfoSection) {
    contactInfoSection.scrollIntoView({ behavior: "smooth" });
  }
};
export {
  scrollToContactPage,
  handleDownload,
  openSocialMedia,
  scrollToContactInfo,
};
