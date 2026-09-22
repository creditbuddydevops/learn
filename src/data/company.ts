export interface CompanyInfo {
  name: string;
  shortName: string;
  legalEntity: string;
  tagline: string;
  slogan: string;
  cin: string;
  gstin: string;
  registeredOffice: {
    plotNo: string;
    landmark: string;
    area: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  email: string;
  supportPhone: string;
  stats: {
    activeCourses: number;
    studentsTrained: string;
    internshipsSecured: string;
    partnerColleges: number;
    averageRating: number;
    hiringPartners: number;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: "CreditBuddy Learning Academy",
  shortName: "CreditBuddy",
  legalEntity: "CreditBuddy Partners Private Limited",
  tagline: "Learn. Build. Get Hired.",
  slogan: "Smart Money, Clear Future!",
  cin: "U62090OD2026PTC053104",
  gstin: "21AANCC6754D1ZS",
  registeredOffice: {
    plotNo: "PLOT NO. 1380/6628",
    landmark: "Near Gram Devi Mandir",
    area: "Matru Vihar",
    locality: "Shanti Nagar, Budharaja",
    city: "Sambalpur",
    state: "Odisha",
    pincode: "768004",
    fullAddress: "PLOT NO. 1380/6628 Near Gram Devi Mandir, Matru Vihar, Shanti Nagar, Budharaja, Sambalpur, Odisha, 768004",
  },
  email: "info@creditbuddy.org.in",
  supportPhone: "+91 663 295 0122",
  stats: {
    activeCourses: 24,
    studentsTrained: "12,000+",
    internshipsSecured: "2,450+",
    partnerColleges: 85,
    averageRating: 4.9,
    hiringPartners: 140,
  },
};
